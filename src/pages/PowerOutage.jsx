import { Zap, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Section, Callout } from '../components/Section'

export default function PowerOutage() {
  return (
    <div>
      <section className="py-12 px-4 sm:px-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-white/70 text-sm mb-3">
            <Link to="/" className="text-white/70 hover:text-white no-underline transition">Home</Link>
            <span>/</span>
            <span className="text-white">Power Outage Guide</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <Zap size={28} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">What Happens When the Power Goes Out</h1>
          <p className="text-white/80 text-lg">Your alerts shouldn't stop just because the power does. Here's what keeps working, what doesn't, and how to protect yourself at every level.</p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">

          <Callout type="critical" title="The most important thing to know">
            Your phone and smartwatch are your always-on safety net. iPhone Sound Recognition and Android Sound Notifications run entirely on your phone — no WiFi, no internet, no smart home system needed. As long as your phone has battery, it's listening.
          </Callout>

          <Section title="What Works and What Doesn't">
            <div className="space-y-2 mb-6">
              {[
                { device: 'Phone + Sound Recognition', power: true, ups: true, note: 'Runs on battery. No WiFi needed.' },
                { device: 'Smartwatch', power: true, ups: true, note: 'Runs on battery. Gets alerts via Bluetooth.' },
                { device: 'Echo Dots', power: false, ups: false, note: 'No battery. Not recommended on UPS.' },
                { device: 'Hue lights', power: false, ups: false, note: 'No power to bulbs — they stay dark.' },
                { device: 'Hue Bridge', power: false, ups: true, note: 'Low power draw. Worth putting on UPS.' },
                { device: 'Home Assistant Green', power: false, ups: true, note: 'Put on UPS — keeps automations running.' },
                { device: 'WiFi router', power: false, ups: true, note: 'Critical. Without WiFi, nothing smart communicates.' },
                { device: 'Bed shaker (smart plug)', power: false, ups: true, note: 'Smart plug + shaker can be on UPS.' },
                { device: 'Zigbee sensors', power: true, ups: true, note: 'Battery-powered. Need HA + router for actions.' },
              ].map((row, i) => (
                <div key={i} className="p-3 sm:p-4 rounded-xl border border-gray-200 bg-white">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-medium text-gray-900 text-sm">{row.device}</p>
                    <div className="flex gap-3 shrink-0">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${row.power ? 'bg-green-100 text-green-700' : 'bg-red-50 text-red-500'}`}>
                        {row.power ? '✓' : '✗'} Power out
                      </span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${row.ups ? 'bg-green-100 text-green-700' : 'bg-red-50 text-red-500'}`}>
                        {row.ups ? '✓' : '✗'} + UPS
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">{row.note}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="By Level: What Keeps Working">
            <div className="space-y-6">
              <div className="p-5 rounded-xl border-2 border-green-200 bg-green-50">
                <h3 className="font-bold text-green-900 mb-2">Quick Start</h3>
                <p className="text-green-800 text-sm">Your phone keeps listening. Your watch keeps vibrating. Sound Recognition runs locally on your phone's processor — no WiFi, no internet, no cloud. This is your always-on safety net, and it's why the Quick Start level matters even after you've built up to Advanced.</p>
              </div>
              <div className="p-5 rounded-xl border-2 border-amber-200 bg-amber-50">
                <h3 className="font-bold text-amber-900 mb-2">Intermediate</h3>
                <p className="text-amber-800 text-sm">Echo Dots, Hue lights, and smart plugs lose power. Alexa Routines stop running. Your phone and watch are your fallback — make sure the Quick Start setup is always enabled underneath.</p>
              </div>
              <div className="p-5 rounded-xl border-2 border-purple-200 bg-purple-50">
                <h3 className="font-bold text-purple-900 mb-2">Advanced (with UPS)</h3>
                <p className="text-purple-800 text-sm">With a UPS powering your router, HA Green, and Hue Bridge: Home Assistant keeps running, Zigbee sensors keep triggering, your Companion App still gets notifications, and your bed shaker still works. Lights in lamps won't work (no power to outlets), but phone notifications and bed shaker alerts continue. A 600VA UPS lasts 1–2+ hours — enough for most outages.</p>
              </div>
            </div>
          </Section>

          <Section title="UPS Setup (Advanced Level)">
            <p className="text-gray-600 mb-4">A UPS (uninterruptible power supply) is a battery backup that kicks in instantly when the power goes out. It keeps your critical devices running.</p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">What to plug into the UPS:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
              <li><strong>WiFi router</strong> — without this, nothing can communicate</li>
              <li><strong>Modem</strong> (if separate from router) — needed for internet-dependent notifications</li>
              <li><strong>Home Assistant Green</strong> — your automation brain</li>
              <li><strong>Hue Bridge</strong> — keeps lights responsive when power returns</li>
              <li><strong>Smart plug + bed shaker</strong> — critical tactile alerts continue</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">What NOT to plug into the UPS:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
              <li>Echo Dots — not critical when HA is running</li>
              <li>Lamps and overhead lights — draw too much power, drain the battery fast</li>
              <li>TVs, monitors — not needed for alerts</li>
            </ul>

            <Callout type="tip" title="How long will it last?">
              A 600VA UPS running a router + modem + HA Green + Hue Bridge draws roughly 30–50 watts total. That gives you 1–2+ hours on battery — enough for most outages. The UPS will beep when power goes out (an audio alert in itself!) and HA can send you a notification that power was lost.
            </Callout>

            <p className="text-gray-600 mb-4">For UPS recommendations, see <a href="https://www.nytimes.com/wirecutter/reviews/best-uninterruptible-power-supply-ups/" target="_blank" rel="noopener noreferrer" className="text-brand-purple font-medium">Wirecutter's UPS guide <ExternalLink size={14} className="inline" /></a>.</p>
          </Section>

          <Section title="Home Assistant Power Outage Automation">
            <p className="text-gray-600 mb-4">If you're at the Advanced level, Home Assistant can detect when the power goes out (the UPS keeps it running) and send you a notification immediately.</p>
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-500 mb-1">automations/power_outage_alert.yaml</p>
              <pre className="bg-gray-900 text-gray-100 rounded-xl p-4 overflow-x-auto text-sm leading-relaxed">
                <code>{`automation:
  - alias: "Hear at Home - Power Outage Alert"
    trigger:
      - platform: numeric_state
        entity_id: sensor.ups_battery_charge
        below: 100
    action:
      - service: notify.mobile_app_YOUR_PHONE
        data:
          title: "POWER OUTAGE"
          message: "Power is out. UPS battery at
            {{ states('sensor.ups_battery_charge') }}%.
            Your alerts are still running."
          data:
            importance: high
            persistent: true`}</code>
              </pre>
            </div>
            <p className="text-gray-500 text-sm">This automation is included in the <Link to="/download" className="text-brand-purple font-medium">GitHub repo download</Link>.</p>
          </Section>

          <Section title="The Layered Safety Net">
            <p className="text-gray-600 mb-4">This is why Hear at Home is built in layers. Each level adds capability, but nothing replaces the layer underneath:</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-bold shrink-0">1</span>
                <div>
                  <p className="font-medium text-gray-900">Phone + Watch (always works)</p>
                  <p className="text-sm text-gray-500">Battery-powered. No WiFi needed. Your last line of defense.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 text-teal-700 text-sm font-bold shrink-0">2</span>
                <div>
                  <p className="font-medium text-gray-900">Echo Dots + Hue (needs power)</p>
                  <p className="text-sm text-gray-500">Adds multi-room listening and visible light alerts. Falls back to Layer 1 during outages.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-700 text-sm font-bold shrink-0">3</span>
                <div>
                  <p className="font-medium text-gray-900">Home Assistant + UPS (survives outages)</p>
                  <p className="text-sm text-gray-500">Full automation with battery backup. Bed shaker, phone notifications, and door sensors keep working through outages.</p>
                </div>
              </div>
            </div>
          </Section>

        </div>
      </section>
    </div>
  )
}
