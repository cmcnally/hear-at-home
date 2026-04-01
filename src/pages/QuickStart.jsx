import { useState } from 'react'
import { Smartphone } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import GuideLayout from '../components/GuideLayout'
import { Section, Step, Callout, TabGroup } from '../components/Section'

export default function QuickStart() {
  const [searchParams] = useSearchParams()
  const phoneFromQuiz = searchParams.get('phone')
  const [phoneTabs, setPhoneTabs] = useState(phoneFromQuiz === 'android' ? 'android' : 'iphone')

  return (
    <GuideLayout
      level="Quick Start"
      color="bg-brand-green"
      colorBg="bg-gradient-to-r from-brand-green to-emerald-600"
      icon={Smartphone}
      title="Your phone becomes your ears"
      tagline="Turn on built-in sound detection, set up your smartwatch, and make alerts impossible to miss — all in about 15 minutes. And meet the AI assistant that'll help you at every level."
      time="15–20 minutes"
      cost="Free"
      what="Your phone"
      nextLevel={{ link: '/intermediate', label: 'Next: Intermediate Guide' }}
    >
      <Section title="What You'll Set Up Today">
        <ol className="space-y-2 text-gray-600">
          <li><strong>Turn on sound detection</strong> — your phone listens for smoke alarms, doorbells, dog barking, and more</li>
          <li><strong>Make alerts impossible to miss</strong> — LED flash, vibration, persistent notifications</li>
          <li><strong>Break through Do Not Disturb</strong> — critical alerts get through even at 3 AM</li>
          <li><strong>Add your smartwatch</strong> — feel alerts on your wrist even when your phone is across the room</li>
          <li><strong>Place your phone like a pro</strong> — where you put it matters for detection range</li>
          <li><strong>Print your alert card</strong> — a fridge-ready reference for your whole household</li>
        </ol>
      </Section>

      <Section title="Pick Your Phone">
        <TabGroup
          tabs={[
            { id: 'iphone', label: 'iPhone' },
            { id: 'android', label: 'Android' },
          ]}
          activeTab={phoneTabs}
          onTabChange={setPhoneTabs}
        />

        {phoneTabs === 'iphone' ? (
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">iPhone Sound Recognition</h3>
            <p className="text-gray-600 mb-6">Your iPhone has a built-in feature called Sound Recognition. It listens through your phone's microphone and sends you a notification when it hears certain sounds. Everything stays on your phone — nothing is sent to Apple or anyone else.</p>

            <Step number="1" title="Turn on Sound Recognition">
              <p>Open <strong>Settings</strong> → <strong>Accessibility</strong> → scroll to <strong>Hearing</strong> → tap <strong>Sound Recognition</strong> → tap the switch to turn it on (it turns green).</p>
            </Step>

            <Step number="2" title="Choose your sounds">
              <p>Tap <strong>Sounds</strong> and turn on the ones that matter to you:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Smoke Alarm</strong> — turn this on first. Most important.</li>
                <li><strong>Doorbell</strong> and <strong>Door Knock</strong> — know when someone's at your door</li>
                <li><strong>Dog Barking</strong> — for your pup (or the neighbor's!)</li>
                <li><strong>Water Running</strong> — catch a forgotten faucet</li>
                <li><strong>Appliances</strong> — washer, dryer, microwave finished</li>
                <li><strong>Baby Crying</strong> — if you have a baby at home</li>
              </ul>
            </Step>

            <Step number="3" title="Make alerts impossible to miss">
              <p><strong>LED Flash:</strong> Settings → Accessibility → Audio/Visual → turn on <strong>LED Flash for Alerts</strong> and <strong>Flash in Silent Mode</strong>.</p>
              <p><strong>Persistent banners:</strong> Settings → Notifications → Sound Recognition → set Banner Style to <strong>Persistent</strong> so notifications stay on screen.</p>
              <p><strong>Haptics:</strong> Settings → Sounds & Haptics → set Haptics to <strong>Always Play</strong>.</p>
            </Step>

            <Step number="4" title="Break through Do Not Disturb">
              <p>Go to <strong>Settings → Focus → Do Not Disturb</strong> (or your Sleep focus) → tap <strong>Apps</strong> → <strong>Add App</strong> → add <strong>Sound Recognition</strong>.</p>
              <p>Also check Settings → Notifications → Sound Recognition for <strong>Critical Alerts</strong> — if available, turn it on. Critical Alerts bypass ALL silent settings.</p>
            </Step>

            <Step number="5" title="Add your Apple Watch">
              <p>If your Apple Watch is paired and Sound Recognition notifications are enabled, alerts automatically appear on your watch and tap your wrist.</p>
              <p><strong>Make it stronger:</strong> On your watch, Settings → Sounds & Haptics → turn on <strong>Prominent Haptic</strong> for an extra vibration before each alert.</p>
            </Step>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Android Sound Notifications</h3>
            <p className="text-gray-600 mb-6">Android has a feature called Sound Notifications that works the same way — it listens through your phone's microphone and alerts you. Everything stays on your phone, completely private.</p>

            <Step number="1" title="Turn on Sound Notifications">
              <p>Open <strong>Settings</strong> → <strong>Accessibility</strong> → <strong>Sound Notifications</strong> → tap <strong>Turn on</strong>.</p>
              <p>Can't find it? Search for <strong>"Sound Notifications by Google"</strong> in the Play Store — it's a free download.</p>
            </Step>

            <Step number="2" title="Choose your sounds">
              <p>Tap <strong>Sound types</strong> and turn on:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Smoke and fire alarms</strong> — most important</li>
                <li><strong>Door knocking</strong> and <strong>Doorbell</strong></li>
                <li><strong>Dog barking</strong></li>
                <li><strong>Water running</strong></li>
                <li><strong>Appliances beeping</strong></li>
                <li><strong>Baby sounds</strong></li>
                <li><strong>Glass breaking</strong></li>
              </ul>
            </Step>

            <Step number="3" title="Turn on ALL alert methods">
              <p>Tap <strong>Ways to be notified</strong> and turn on everything:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Phone vibrates</strong></li>
                <li><strong>Flash notification</strong> (camera LED blinks)</li>
                <li><strong>Screen flash</strong> (entire screen lights up)</li>
              </ul>
              <p>The combination of all three makes it very hard to miss.</p>
            </Step>

            <Step number="4" title="Break through Do Not Disturb">
              <p>Settings → Notifications → Sound Notifications → set importance to <strong>Urgent</strong> → turn on <strong>Override Do Not Disturb</strong>.</p>
            </Step>

            <Step number="5" title="Add your smartwatch">
              <p>If you have a Galaxy Watch, Pixel Watch, or any Wear OS watch, Sound Notifications can vibrate your wrist and show alerts on the watch face.</p>
              <p>On your watch: Settings → Notifications → make sure Sound Notifications is enabled. Set vibration intensity to <strong>Strong</strong>.</p>
            </Step>
          </div>
        )}
      </Section>

      <Section title="Where to Put Your Phone">
        <p className="text-gray-600 mb-4">Your phone's microphone needs to hear the sounds. Placement matters more than most people realize.</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
          <li><strong>Kitchen counter</strong> — the #1 recommended spot. Smoke alarms, water, appliances, and the front door are all nearby.</li>
          <li>Keep it on a <strong>hard surface</strong> (not under pillows or cushions)</li>
          <li><strong>Plugged in and charging</strong> — Sound Recognition uses battery</li>
          <li><strong>Face up</strong> so you can see the screen flash</li>
        </ul>

        <Callout type="tip" title="Old phone trick">
          Got an old phone in a drawer? Set up Sound Recognition on it and leave it plugged in on the kitchen counter 24/7 as a dedicated listener. It doesn't need cell service — just WiFi. Use your everyday phone normally.
        </Callout>

        <p className="text-gray-600 text-sm">
          <strong>Detection range:</strong> Same room = very reliable. Next room with door open = usually works. Through a closed door = unreliable. Different floor = probably won't work. This is why the <Link to="/intermediate" className="text-brand-teal font-medium">Intermediate</Link> level (Echo Dots in multiple rooms) exists.
        </p>
      </Section>

      <Section title="Your AI Assistant: Meet Claude">
        <p className="text-gray-600 mb-4">This is the beginning of a journey — and you don't have to figure it out alone. <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-green-700 font-medium">Claude AI</a> is a free AI assistant that can answer any question about your setup in plain English. Start using it now and you'll be ready for the Intermediate and Advanced levels, where Claude actually builds automations for you.</p>
        <div className="space-y-2 mb-4">
          <div className="bg-green-50 rounded-lg p-3 border border-green-100">
            <p className="text-sm text-gray-500 mb-1">You:</p>
            <p className="text-sm text-gray-800 italic">"I just turned on Sound Recognition on my iPhone. Which sounds should I enable? I live alone with a dog."</p>
          </div>
          <div className="bg-green-50 rounded-lg p-3 border border-green-100">
            <p className="text-sm text-gray-500 mb-1">You:</p>
            <p className="text-sm text-gray-800 italic">"How do I make sure my iPhone alerts me for a smoke alarm even when Do Not Disturb is on?"</p>
          </div>
          <div className="bg-green-50 rounded-lg p-3 border border-green-100">
            <p className="text-sm text-gray-500 mb-1">You:</p>
            <p className="text-sm text-gray-800 italic">"I want to set up my Apple Watch to vibrate when my phone detects sounds. Walk me through it."</p>
          </div>
        </div>
        <p className="text-gray-500 text-sm">Notice how natural these questions are — just describe your situation and ask for help. This is the exact same skill that powers the entire Hear at Home project. By the time you reach Advanced, you'll be telling Claude to write your entire smart home configuration.</p>
      </Section>

      <Section title="Print Your Alert Card">
        <p className="text-gray-600 mb-4">Stick this on your fridge so everyone in your home knows what each alert means.</p>
        <Link to="/alert-codes" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-brand-green text-white font-semibold no-underline hover:opacity-90 transition">
          View & Print Alert Card →
        </Link>
      </Section>

      <Section title="Optional: Add Smart Lights">
        <Callout type="info" title="Honest note">
          At this level, Hue lights won't flash automatically when a sound is detected — that needs the <Link to="/intermediate" className="text-blue-700 font-medium">Intermediate</Link> guide (Alexa connects sounds to lights). But Hue lights are still useful right now for other things.
        </Callout>
        <p className="text-gray-600 mb-4">If you have or want Hue lights, useful automations you can set up now in the Hue app:</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li><strong>Lights on when you get home</strong> — uses your phone's location</li>
          <li><strong>Lights off when you leave</strong> — saves energy and gives peace of mind</li>
          <li><strong>Gentle wake-up light</strong> — lights gradually brighten at your alarm time</li>
          <li><strong>Bedtime wind-down</strong> — lights dim and shift warm at bedtime</li>
        </ul>
        <p className="text-gray-600 mt-4 text-sm">These same lights work with Alexa in the Intermediate level and Home Assistant in the Advanced level — every step forward builds on what you already have.</p>
      </Section>

      <Section title="What Happens During a Power Outage">
        <Callout type="critical" title="Your phone and watch are your safety net">
          When the power goes out, smart lights, Echo Dots, and smart plugs all lose power. But your phone and smartwatch keep running on battery. Sound Recognition works with no WiFi and no internet — just your phone's microphone.
        </Callout>
        <p className="text-gray-600 mb-4">This is why a smartwatch is one of the most important things you can own for accessibility. It's the alert device that works when everything else is down.</p>
        <Link to="/power-outage" className="text-brand-green font-medium">Read the full Power Outage Guide →</Link>
      </Section>

      <Section title="What You Built Today">
        <p className="text-gray-600 mb-4">In 15–20 minutes, you set up:</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Sound detection for smoke alarms, doorbells, dog barking, and more</li>
          <li>Alerts that vibrate your phone, flash your LED, and light up your screen</li>
          <li>Do Not Disturb exceptions so alerts get through at 3 AM</li>
          <li>Smartwatch vibrations so you feel alerts on your wrist</li>
          <li>Optimal phone placement for the best detection range</li>
        </ul>
        <p className="text-gray-700 font-medium mt-4">That's a real difference. A smoke alarm at 3 AM is no longer something you might sleep through.</p>
        <p className="text-gray-600 mt-4">And this is just the beginning. When you're ready, the <Link to="/intermediate" className="text-brand-teal font-medium">Intermediate guide</Link> adds smart lights that change color for different alerts, and the <Link to="/advanced" className="text-brand-purple font-medium">Advanced guide</Link> gives you full control — bed shakers, custom flash patterns, door sensors, and AI that builds it all for you in plain English.</p>
      </Section>
    </GuideLayout>
  )
}
