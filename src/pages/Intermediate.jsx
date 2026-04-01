import { Speaker } from 'lucide-react'
import { Link } from 'react-router-dom'
import GuideLayout from '../components/GuideLayout'
import { Section, Step, Callout } from '../components/Section'

export default function Intermediate() {
  return (
    <GuideLayout
      level="Intermediate"
      color="bg-brand-teal"
      colorBg="bg-gradient-to-r from-brand-teal to-cyan-600"
      icon={Speaker}
      title="Your home starts listening"
      tagline="Place Echo Dots in key rooms, connect them to smart lights and smart plugs through Alexa Routines, and make your whole home respond to sounds. Use Claude to troubleshoot, plan your setup, and get ready for Advanced."
      time="30–60 minutes"
      cost="$100–$250"
      what="Echo Dot + smart lights"
      prevLevel={{ link: '/quick-start', label: 'Quick Start' }}
      nextLevel={{ link: '/advanced', label: 'Next: Advanced Guide' }}
    >
      <Section title="What You'll Build">
        <p className="text-gray-600 mb-4">At the Quick Start level, your phone was doing all the listening by itself. Now you're going to place Echo Dots around your home to listen in multiple rooms, and connect them to smart color lights and smart plugs so that when a sound is detected, things actually happen. And this is the level where Claude becomes your active partner — troubleshooting problems, planning what goes where, and preparing you for the Advanced level where AI does the building for you.</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li><strong>Echo Dots listening</strong> in key rooms for dog barking, smoke alarms, baby crying, and water running</li>
          <li><strong>Alexa Routines</strong> that connect sounds to actions — lights change color, smart plugs turn on, your phone gets a notification</li>
          <li><strong>A connected system</strong> where multiple devices talk to each other</li>
        </ul>
      </Section>

      <Section title="Place Your Echo Dots">
        <p className="text-gray-600 mb-4">Where you put your Echo Dots matters — they need to be close enough to hear the sounds you care about.</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
          <li><strong>Kitchen</strong> — most important room. Smoke alarms, water, timers, appliances.</li>
          <li><strong>Living room</strong> — dog barking, doorbell, general activity.</li>
          <li><strong>Bedroom</strong> — if you want sound detection while you sleep.</li>
        </ul>
        <Callout type="tip" title="Placement tips">
          Put the Dot on a flat surface, not inside a cabinet. Keep it away from speakers and TVs (these cause false detections). You don't need one in every room — start with 1–2 and add more later.
        </Callout>
      </Section>

      <Section title="Connect Your Devices to Alexa">
        <Step number="1" title="Connect your smart lights">
          <p>Open the <strong>Alexa app</strong> → <strong>Devices</strong> → <strong>+</strong> → <strong>Add Device</strong> → <strong>Light</strong> → select your brand → <strong>Discover Devices</strong>. You need color-capable smart lights with a bridge or hub. Philips Hue, LIFX, and other Alexa-compatible color lights all work — pick whichever fits your budget.</p>
        </Step>
        <Step number="2" title="Connect your smart plug">
          <p>Plug in your Amazon Smart Plug → <strong>Alexa app</strong> → <strong>Devices</strong> → <strong>+</strong> → <strong>Add Device</strong> → <strong>Plug</strong>. Name it something clear like <strong>"Bed Shaker"</strong>.</p>
          <Callout type="info" title="Important">
            Plug your bed shaker into the smart plug and set the shaker to "ON". The smart plug controls the power — when Alexa turns the plug on, the shaker activates.
          </Callout>
        </Step>
      </Section>

      <Section title="Build Your Alexa Routines">
        <p className="text-gray-600 mb-6">A Routine follows one pattern: <strong>When [sound happens] → Do [these actions].</strong></p>

        <Step number="1" title="Dog Barking → Lights Turn Yellow">
          <p><strong>Alexa app</strong> → More → Routines → <strong>+</strong></p>
          <p><strong>When this happens:</strong> Sound Detection → Dog Barking → choose your Living Room Echo Dot</p>
          <p><strong>Add action:</strong> Smart Home → your smart light → Yellow, 100% brightness</p>
          <p>Add more lights to the same routine so multiple rooms alert you.</p>
        </Step>

        <Step number="2" title="Smoke Alarm → Red Lights + Bed Shaker + Notification">
          <p>This is your most important routine — three actions, same pattern as every alert.</p>
          <p><strong>When this happens:</strong> Sound Detection → Smoke Alarm → Kitchen Echo Dot</p>
          <p><strong>Add actions:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Smart Home → Bed Shaker plug → <strong>Power On</strong></li>
            <li>Smart Home → ALL your smart lights → <strong>Red, 100%</strong></li>
            <li>Notification → <strong>"SMOKE ALARM DETECTED"</strong></li>
          </ul>
        </Step>

        <Step number="3" title="Water Running → Lights Turn Aqua">
          <p><strong>When this happens:</strong> Sound Detection → Water Running → Kitchen Echo Dot</p>
          <p><strong>Add action:</strong> Smart Home → kitchen light → Aqua, 100%</p>
          <p><strong>Add action:</strong> Notification → "Water has been running"</p>
        </Step>

        <Step number="4" title="Baby Crying → Lights Turn Orange">
          <p><strong>When this happens:</strong> Sound Detection → Baby Crying → baby's room Echo Dot</p>
          <p><strong>Add action:</strong> Smart Home → bedroom light → Orange, 100%</p>
        </Step>

        <Step number="5" title="Doorbell → Lights Turn Blue">
          <p>If you have a Ring or Alexa-compatible doorbell:</p>
          <p><strong>When this happens:</strong> Smart Home → your doorbell → Doorbell Press</p>
          <p><strong>Add action:</strong> Smart Home → multiple lights → Blue, 100%</p>
        </Step>
      </Section>

      <Section title="Alexa Emergency Assist (Optional — $5.99/month)">
        <p className="text-gray-600 mb-4">A paid add-on that gives your Echo Dots extra detection for emergencies.</p>

        <div className="not-prose space-y-2 mb-6">
          {[
            { feature: 'Dog barking', free: true, paid: true },
            { feature: 'Baby crying', free: true, paid: true },
            { feature: 'Water running', free: true, paid: true },
            { feature: 'Smoke alarm', free: false, paid: true },
            { feature: 'CO alarm', free: false, paid: true },
            { feature: 'Glass breaking', free: false, paid: true },
          ].map((row, i) => (
            <div key={i} className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0">
              <span className={`text-sm ${!row.free ? 'font-medium text-gray-900' : 'text-gray-600'}`}>{row.feature}</span>
              <div className="flex gap-4 text-sm shrink-0">
                <span className={row.free ? 'text-green-600 font-medium' : 'text-gray-300'}>
                  {row.free ? '✓ Free' : '—'}
                </span>
                <span className="text-brand-teal font-medium">
                  ✓ Assist
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-600 text-sm">Emergency Assist is specifically trained to recognize the T3 smoke alarm pattern and T4 CO pattern — more reliable than generic sound detection. For most Hear at Home users, it's worth considering for the safety alerts alone.</p>
      </Section>

      <Section title="Your AI Assistant: Claude">
        <p className="text-gray-600 mb-4">This is where you really start using AI. <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-brand-teal font-medium">Claude AI</a> becomes your smart home troubleshooter and planner — you describe your situation in plain English, and Claude tells you exactly what to do. Think of this level as your AI training ground: the more you use Claude now, the more naturally you'll work with it at the Advanced level, where Claude writes your entire smart home configuration for you.</p>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Troubleshooting</h3>
        <div className="space-y-2 mb-6">
          <div className="bg-teal-50 rounded-lg p-3 border border-teal-100">
            <p className="text-sm text-gray-500 mb-1">You:</p>
            <p className="text-sm text-gray-800 italic">"I set up an Alexa Routine for smoke detection but my Hue lights aren't changing color. The routine shows as enabled. What should I check?"</p>
          </div>
          <div className="bg-teal-50 rounded-lg p-3 border border-teal-100">
            <p className="text-sm text-gray-500 mb-1">You:</p>
            <p className="text-sm text-gray-800 italic">"My Echo Dot keeps detecting 'dog barking' when it's actually the TV. How do I reduce false detections?"</p>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Planning your setup</h3>
        <div className="space-y-2 mb-6">
          <div className="bg-teal-50 rounded-lg p-3 border border-teal-100">
            <p className="text-sm text-gray-500 mb-1">You:</p>
            <p className="text-sm text-gray-800 italic">"I have a two-bedroom apartment with a dog. I bought 2 Echo Dots and 3 Hue bulbs. Help me plan where to put everything and what routines to create."</p>
          </div>
          <div className="bg-teal-50 rounded-lg p-3 border border-teal-100">
            <p className="text-sm text-gray-500 mb-1">You:</p>
            <p className="text-sm text-gray-800 italic">"Should I pay for Alexa Emergency Assist? I live alone and I'm deaf. Is the smoke/CO detection worth $5.99/month?"</p>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-3">Getting ready for Advanced</h3>
        <div className="space-y-2 mb-4">
          <div className="bg-teal-50 rounded-lg p-3 border border-teal-100">
            <p className="text-sm text-gray-500 mb-1">You:</p>
            <p className="text-sm text-gray-800 italic">"I have the Intermediate Hear at Home setup working. What would I gain by moving to the Advanced level with Home Assistant? Is it worth the jump?"</p>
          </div>
          <div className="bg-teal-50 rounded-lg p-3 border border-teal-100">
            <p className="text-sm text-gray-500 mb-1">You:</p>
            <p className="text-sm text-gray-800 italic">"I want my lights to flash 3 times for the doorbell and 5 times for smoke, and I want a bed shaker for severe weather at night. Can Alexa do this or do I need Home Assistant?"</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm">Notice how natural these conversations are — you're just describing your situation and asking for help. That's the exact same skill you'll use at the Advanced level, except Claude will be writing automations for you instead of just explaining them.</p>
      </Section>

      <Section title="Your Alert Color Reference">
        <div className="not-prose space-y-2">
          {[
            { alert: 'Dog barking', colorClass: 'bg-alert-yellow', color: 'Yellow' },
            { alert: 'Doorbell', colorClass: 'bg-alert-blue', color: 'Blue' },
            { alert: 'Baby crying', colorClass: 'bg-alert-orange', color: 'Orange' },
            { alert: 'Water running', colorClass: 'bg-alert-cyan', color: 'Aqua' },
            { alert: 'Smoke alarm', colorClass: 'bg-alert-red', color: 'Red', critical: true },
            { alert: 'CO alarm', colorClass: 'bg-alert-red', color: 'Red', critical: true },
            { alert: 'Appliance beeping', colorClass: 'bg-gray-300', color: 'White' },
          ].map((row, i) => (
            <div key={i} className={`flex items-center gap-3 py-2.5 border-b border-gray-100 last:border-0`}>
              <span className={`w-6 h-6 rounded-full ${row.colorClass} shrink-0`}></span>
              <span className={`text-sm ${row.critical ? 'font-medium text-gray-900' : 'text-gray-600'}`}>{row.alert}</span>
              <span className="text-sm text-gray-400 ml-auto">{row.color}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-sm mt-3">
          <Link to="/alert-codes" className="text-brand-teal font-medium">View the full printable alert card →</Link>
        </p>
      </Section>

      <Section title="What You Can't Do at This Level">
        <p className="text-gray-600 mb-4">Being honest about limitations. Most people are very happy at the Intermediate level — but if you want more, the Advanced guide is waiting.</p>
        <div className="not-prose space-y-2">
          {[
            "Can't flash lights in counted patterns (3 flashes, 5 flashes)",
            "Lights don't restore to previous state after alert",
            "Can't tell front door from back door by color",
            "No different behavior at night vs. day",
            "No severe weather alerts",
            "No \"water running too long\" delay check",
            "Bed shaker stays on until manually turned off",
          ].map((limitation, i) => (
            <div key={i} className="flex items-start justify-between gap-3 py-3 border-b border-gray-100 last:border-0">
              <span className="text-sm text-gray-600">{limitation}</span>
              <Link to="/advanced" className="text-sm text-brand-purple font-medium whitespace-nowrap shrink-0">Advanced →</Link>
            </div>
          ))}
        </div>
      </Section>

      <Section title="What Happens During a Power Outage">
        <p className="text-gray-600 mb-4">When the power goes out, your Echo Dots, smart lights, and smart plugs all lose power. Your Alexa Routines stop running.</p>
        <Callout type="critical" title="Your phone and watch still work">
          The Sound Recognition you set up in the Quick Start guide runs entirely on your phone — no WiFi, no Alexa needed. Your phone and watch are your always-on safety net underneath everything else.
        </Callout>
        <Link to="/power-outage" className="text-brand-teal font-medium">Read the full Power Outage Guide →</Link>
      </Section>

      <Section title="Ready to Level Up?">
        <p className="text-gray-600 mb-4">By now you understand how sounds connect to actions, how routines work, and how devices talk to each other. More importantly, you've been using Claude to troubleshoot and plan — and that's the real skill that unlocks the Advanced level.</p>
        <p className="text-gray-600 mb-4">Here's what makes the Advanced level different from anything you've done before: you tell Claude what you want in plain English — "flash my bedroom light red when the smoke alarm goes off, turn on the bed shaker, and send a notification to my Apple Watch" — and Claude writes the entire automation. No code. No documentation. Just a conversation. That's what using AI to build an accessible home looks like.</p>
        <p className="text-gray-600"><Link to="/advanced" className="text-brand-purple font-medium">Start the Advanced Guide →</Link></p>
      </Section>
    </GuideLayout>
  )
}
