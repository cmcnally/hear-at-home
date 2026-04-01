import { Server } from 'lucide-react'
import { Link } from 'react-router-dom'
import GuideLayout from '../components/GuideLayout'
import { Section, Step, Callout } from '../components/Section'

function CodeBlock({ title, children }) {
  return (
    <div className="mb-6">
      {title && <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>}
      <pre className="bg-gray-900 text-gray-100 rounded-xl p-4 overflow-x-auto text-sm leading-relaxed">
        <code>{children}</code>
      </pre>
    </div>
  )
}

export default function Advanced() {
  return (
    <GuideLayout
      level="Advanced"
      color="bg-brand-purple"
      colorBg="bg-gradient-to-r from-brand-purple to-violet-600"
      icon={Server}
      title="You control everything"
      tagline="This is where your home becomes fully yours. Bed shakers, weather alerts, door sensors, custom light patterns — and AI assistants that build it all for you in plain English."
      time="2–4 hours"
      cost="$250–$550"
      what="Home Assistant hub"
      prevLevel={{ link: '/intermediate', label: 'Intermediate' }}
    >
      <Callout type="tip" title="You don't need to be technical">
        Everything in this guide can be downloaded as a ready-to-go starter package from the <Link to="/download" className="text-purple-700 font-medium">Hear at Home GitHub repo</Link>. And if you want to customize it, AI assistants like Claude can write and modify automations for you — just describe what you want in your own words.
      </Callout>

      <Section title="What You'll Need">
        <div className="not-prose space-y-2 mb-4">
          {[
            { name: 'Home Assistant Green', purpose: 'Runs Home Assistant — plug in and go', cost: '~$99' },
            { name: 'SONOFF Zigbee 3.0 Dongle', purpose: 'Connects Zigbee smart devices', cost: '~$25–30' },
            { name: 'Smart color lights', purpose: 'Visual alerts via flash patterns and colors', cost: '~$15–50 ea' },
            { name: 'Smart plug (Zigbee)', purpose: 'Powers bed shaker on/off', cost: '~$10–15' },
            { name: 'Bed shaker', purpose: 'Tactile alert for weather, fire, doors at night', cost: '~$15–40' },
            { name: 'UPS', purpose: 'Keeps hub + router running during outages', cost: '~$50–100' },
          ].map((item, i) => (
            <div key={i} className="p-3 sm:p-4 rounded-xl border border-gray-200 bg-white">
              <div className="flex items-start justify-between gap-3 mb-1">
                <p className="font-medium text-gray-900 text-sm">{item.name}</p>
                <span className="text-sm font-semibold text-gray-700 whitespace-nowrap shrink-0">{item.cost}</span>
              </div>
              <p className="text-xs text-gray-500">{item.purpose}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-sm">
          <Link to="/shopping" className="text-brand-purple font-medium">See the full shopping list with specific product links →</Link>
        </p>
      </Section>

      <Section title="Step 1: Install Home Assistant">
        <Step number="1" title="Home Assistant Green (recommended)">
          <p>Connect the HA Green to your router with the included ethernet cable. Plug in the power cable. Wait about 5 minutes, then visit <code className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded text-sm">http://homeassistant.local:8123</code> in your browser.</p>
        </Step>
        <Step number="2" title="Add your Zigbee coordinator">
          <p>Plug your Zigbee USB dongle into the HA Green. Go to <strong>Settings → Devices & Services → Add Integration → ZHA</strong>. Follow the prompts.</p>
        </Step>
        <Step number="3" title="Pair your devices">
          <p>Put each light/plug into pairing mode and add through ZHA. Name them descriptively: <code className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded text-sm">light.bedroom_alert</code>, <code className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded text-sm">switch.bed_shaker_plug</code></p>
        </Step>
      </Section>

      <Section title="Step 2: Set Up NWS Weather Alerts">
        <p className="text-gray-600 mb-4">Install the NWS Alerts custom integration through HACS for real-time weather warnings. When the National Weather Service issues a severe warning for your area, your bed shaker activates and your lights flash purple.</p>
        <Step number="1" title="Install HACS and NWS Alerts">
          <p>Install <a href="https://hacs.xyz/" target="_blank" rel="noopener noreferrer" className="text-brand-purple font-medium">HACS</a> → go to HACS → Integrations → search <strong>NWS Alerts</strong> → download → restart.</p>
        </Step>
        <Step number="2" title="Configure your zone">
          <p>Settings → Devices & Services → Add Integration → NWS Alerts → enter your NWS Zone ID (find yours at <a href="https://alerts.weather.gov/" target="_blank" rel="noopener noreferrer" className="text-brand-purple font-medium">alerts.weather.gov</a>).</p>
        </Step>
      </Section>

      <Section title="Step 3: Create Your Automations">
        <p className="text-gray-600 mb-6">Here are the key automations. All of these are in the GitHub repo ready to download — you just change the entity names to match your devices.</p>

        <p className="text-gray-600 mb-6">Every automation follows the same three-action pattern: <strong>turn on bed shaker → flash bedroom lights → send a notification to your iPhone/Apple Watch</strong> with a specific message so you know exactly what triggered it. (Dog barking is the exception — notification and lights only, no shaker.)</p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Smoke/CO Alert — Bed Shaker + Red Flash + Notification</h3>
        <CodeBlock title="automations/smoke_co_alert.yaml">{`automation:
  - alias: "Hear at Home - CRITICAL Smoke/CO Alert"
    trigger:
      - platform: state
        entity_id: binary_sensor.smoke_detector
        to: "on"
    action:
      # ACTION 1: Turn on bed shaker
      - service: switch.turn_on
        target:
          entity_id: switch.bed_shaker_plug
      # ACTION 2: Flash bedroom lights red
      - repeat:
          until:
            - condition: state
              entity_id: binary_sensor.smoke_detector
              state: "off"
          sequence:
            - service: light.turn_on
              target:
                entity_id: light.bedroom_alert
              data:
                color_name: "red"
                brightness_pct: 100
            - delay: { milliseconds: 300 }
            - service: light.turn_off
              target:
                entity_id: light.bedroom_alert
            - delay: { milliseconds: 300 }
      # ACTION 3: Notification
      - service: notify.mobile_app_YOUR_PHONE
        data:
          title: "SMOKE ALARM DETECTED"
          message: "Smoke alarm detected. Get out
            and call 911."
          data:
            interruption-level: critical`}</CodeBlock>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Severe Weather — Bed Shaker + Purple Flash + Notification</h3>
        <CodeBlock title="automations/severe_weather_alert.yaml">{`automation:
  - alias: "Hear at Home - Severe Weather Alert"
    trigger:
      - platform: state
        entity_id: sensor.nws_alerts
    action:
      # ACTION 1: Turn on bed shaker
      - service: switch.turn_on
        target:
          entity_id: switch.bed_shaker_plug
      # ACTION 2: Flash bedroom lights purple
      - repeat:
          count: 30
          sequence:
            - service: light.turn_on
              target:
                entity_id: light.bedroom_alert
              data:
                color_name: "purple"
                brightness_pct: 100
            - delay: { milliseconds: 500 }
            - service: light.turn_off
              target:
                entity_id: light.bedroom_alert
            - delay: { milliseconds: 500 }
      # ACTION 3: Notification
      - service: notify.mobile_app_YOUR_PHONE
        data:
          title: "SEVERE WEATHER ALERT"
          message: "Tornado warning for your area.
            Take shelter now."
          data:
            interruption-level: critical`}</CodeBlock>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Dog Barking — Yellow Flash + Notification (No Bed Shaker)</h3>
        <CodeBlock title="automations/dog_bark_alert.yaml">{`automation:
  - alias: "Hear at Home - Dog Bark Alert"
    trigger:
      - platform: state
        entity_id: binary_sensor.dog_bark_detected
        to: "on"
    action:
      # NO BED SHAKER — informational only
      # ACTION 1: Flash bedroom lights yellow
      - repeat:
          count: 3
          sequence:
            - service: light.turn_on
              target:
                entity_id: light.bedroom_alert
              data:
                color_name: "yellow"
                brightness_pct: 100
            - delay: { milliseconds: 500 }
            - service: light.turn_off
              target:
                entity_id: light.bedroom_alert
            - delay: { milliseconds: 500 }
      # ACTION 2: Notification
      - service: notify.mobile_app_YOUR_PHONE
        data:
          title: "Birdie is barking"
          message: "Birdie is barking at front door."
          data:
            interruption-level: active`}</CodeBlock>

        <Callout type="info" title="More automations in the repo">
          The GitHub repo includes automations for: glass breaking (orange), doorbell (blue), front &amp; back door (cyan/teal), water running too long (aqua), baby crying (orange), and stove fan reminder. Every one follows the same three-action pattern. <Link to="/download" className="text-blue-700 font-medium">Download them all →</Link>
        </Callout>
      </Section>

      <Section title="Your Alert Color Code">
        <div className="not-prose space-y-2">
          {[
            { alert: 'Smoke / CO', colorClass: 'bg-alert-red', color: 'Red', flashes: 'Continuous', shaker: 'Yes', critical: true },
            { alert: 'Severe weather', colorClass: 'bg-alert-purple', color: 'Purple', flashes: '30', shaker: 'Yes', critical: true },
            { alert: 'Glass breaking', colorClass: 'bg-alert-orange', color: 'Orange', flashes: '10', shaker: 'Yes', critical: true },
            { alert: 'Doorbell', colorClass: 'bg-alert-blue', color: 'Blue', flashes: '5', shaker: 'Yes', critical: false },
            { alert: 'Front door', colorClass: 'bg-alert-cyan', color: 'Cyan', flashes: '4', shaker: 'Yes', critical: false },
            { alert: 'Back door', colorClass: 'bg-teal-400', color: 'Teal', flashes: '4', shaker: 'Yes', critical: false },
            { alert: 'Dog barking', colorClass: 'bg-alert-yellow', color: 'Yellow', flashes: '3', shaker: 'No', critical: false },
            { alert: 'Water running', colorClass: 'bg-alert-cyan', color: 'Aqua', flashes: '8', shaker: 'No', critical: false },
            { alert: 'Baby crying', colorClass: 'bg-alert-orange', color: 'Orange', flashes: '4', shaker: 'No', critical: false },
            { alert: 'Stove fan left on', colorClass: 'bg-gray-300', color: '—', flashes: '—', shaker: 'No', critical: false },
          ].map((row, i) => (
            <div key={i} className={`flex items-center gap-3 p-3 rounded-xl border ${row.critical ? 'border-red-200 bg-red-50' : 'border-gray-200 bg-white'}`}>
              <span className={`w-8 h-8 rounded-full ${row.colorClass} shrink-0`}></span>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium ${row.critical ? 'text-red-900' : 'text-gray-900'}`}>{row.alert}</p>
                <p className="text-xs text-gray-500">{row.color} · {row.flashes} flashes · Shaker: {row.shaker}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-sm mt-3"><Link to="/alert-codes" className="text-brand-purple font-medium">View the full printable alert card →</Link></p>
      </Section>

      <Section title="Power Outage Resilience: UPS Setup">
        <p className="text-gray-600 mb-4">A UPS keeps your critical devices running when the power goes out.</p>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">What to plug into the UPS:</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
          <li><strong>WiFi router</strong> — without this, nothing can communicate</li>
          <li><strong>Home Assistant Green</strong> — your automation brain</li>
          <li><strong>Light bridge</strong> — keeps smart lights responsive</li>
          <li><strong>Modem</strong> (if separate) — needed for Companion App notifications</li>
        </ul>
        <p className="text-gray-600 mb-4">A 600VA UPS running these devices lasts roughly 1–2+ hours on battery. Enough for most outages.</p>
        <Link to="/power-outage" className="text-brand-purple font-medium">Read the full Power Outage Guide →</Link>
      </Section>

      <Section title="Customizing with AI">
        <p className="text-gray-600 mb-4">This is where it all comes together. You don't need to learn YAML. You don't need to read documentation. <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-brand-purple font-medium">Claude AI</a> can read your configuration, understand your devices, and write or modify automations for you — all in plain English.</p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Customize the starter package</h3>
        <p className="text-gray-600 mb-4">Download the Hear at Home automations, paste one into Claude, and tell it about your setup:</p>
        <div className="space-y-2 mb-6">
          <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
            <p className="text-sm text-gray-500 mb-1">You:</p>
            <p className="text-sm text-gray-800 italic">"Here's a Hear at Home automation for smoke/CO alerts. My bedroom light is called light.master_bedroom, my bed shaker plug is switch.smart_plug_3, and my phone is mobile_app_catharines_iphone. Update the entity names for me."</p>
          </div>
        </div>
        <p className="text-gray-600 mb-6">Claude returns the complete automation with your device names — ready to paste into Home Assistant.</p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Build new automations from scratch</h3>
        <p className="text-gray-600 mb-4">Describe what you want in your own words. Claude writes the YAML:</p>
        <div className="space-y-2 mb-6">
          <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
            <p className="text-sm text-gray-500 mb-1">You:</p>
            <p className="text-sm text-gray-800 italic">"I want a new automation: when my washing machine finishes (the power draw on switch.laundry_plug drops below 5 watts), flash my office light green 3 times and send me a notification that says 'Laundry is done.'"</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
            <p className="text-sm text-gray-500 mb-1">You:</p>
            <p className="text-sm text-gray-800 italic">"Add a guest mode: when I turn on input_boolean.guest_mode, disable the dog barking alert and change the bed shaker to only activate for smoke and severe weather."</p>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Troubleshoot and debug</h3>
        <div className="space-y-2 mb-6">
          <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
            <p className="text-sm text-gray-500 mb-1">You:</p>
            <p className="text-sm text-gray-800 italic">"My severe weather automation isn't triggering. Here's my YAML and here's what I see in the HA logs. What's wrong?"</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
            <p className="text-sm text-gray-500 mb-1">You:</p>
            <p className="text-sm text-gray-800 italic">"My lights flash but don't restore to their previous state after an alert. How do I fix that?"</p>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Go further: Claude inside Home Assistant</h3>
        <p className="text-gray-600 mb-4">Instead of copying YAML back and forth, you can put Claude directly inside Home Assistant and talk to it from within your setup:</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
          <li><a href="https://www.home-assistant.io/integrations/anthropic/" target="_blank" rel="noopener noreferrer" className="text-brand-purple font-medium">Official Anthropic integration</a> — adds Claude as a conversation agent in Home Assistant with access to the Assist API, so you can talk to Claude right from your HA dashboard</li>
          <li><a href="https://github.com/danbuhler/claude-code-ha" target="_blank" rel="noopener noreferrer" className="text-brand-purple font-medium">Claude Code for Home Assistant</a> — a toolkit that lets Claude Code manage your HA config directly — entity lookups, service calls, dashboard syncing, and automation writing</li>
          <li><a href="https://community.home-assistant.io/t/using-claude-code-to-manage-your-home-assistant-config-is-pretty-amazing/971269" target="_blank" rel="noopener noreferrer" className="text-brand-purple font-medium">Managing HA config with Claude Code</a> — a community walkthrough showing how Claude can discover devices, write automations, and build dashboards</li>
        </ul>
        <p className="text-gray-600">This is the vision for Hear at Home: download the starter package, point Claude at your config, and describe what you want in your own words. Your home, your rules, your language.</p>
      </Section>

      <Section title="Go Beyond: Ideas to Build On">
        <p className="text-gray-600 mb-4">Everything above is your starting point. Ideas the community has built:</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li><strong>Washer/dryer finished</strong> — smart plug with energy monitoring detects when power draw drops</li>
          <li><strong>Driveway motion</strong> — flash lights when someone pulls in, before they knock</li>
          <li><strong>Package delivered</strong> — porch motion sensor or doorbell camera integration</li>
          <li><strong>Guest mode</strong> — simplified alerts when visitors are over</li>
          <li><strong>Travel mode</strong> — phone-only alerts when you're away</li>
          <li><strong>Multi-room zones</strong> — flash bedroom lights at night, office lights during work hours</li>
        </ul>
        <p className="text-gray-600 mt-4">The blueprints and scripts in the <Link to="/download" className="text-brand-purple font-medium">GitHub repo</Link> are designed to be remixed. Build something cool? <a href="https://github.com/hearathomeproject/hear-at-home" target="_blank" rel="noopener noreferrer" className="text-brand-purple font-medium">Submit a PR</a> so others can benefit.</p>
      </Section>
    </GuideLayout>
  )
}
