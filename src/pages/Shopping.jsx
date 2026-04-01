import { useState } from 'react'
import { ShoppingCart, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { TabGroup } from '../components/Section'

function ProductTable({ items }) {
  return (
    <div className="space-y-3 mb-6">
      {items.map((item, i) => (
        <div key={i} className="p-4 rounded-xl border border-gray-200 bg-white">
          <div className="flex items-start justify-between gap-3 mb-1">
            <p className="font-medium text-gray-900 text-sm">{item.name}</p>
            <span className="text-sm font-semibold text-gray-700 whitespace-nowrap shrink-0">{item.price}</span>
          </div>
          <p className="text-sm text-gray-500">{item.purpose}</p>
        </div>
      ))}
    </div>
  )
}

const quickStartItems = [
  { name: 'Philips Hue Starter Kit (2–3 bulbs + Bridge)', purpose: 'Color-changing lights and Bridge for visual alerts', price: '~$100–$130' },
  { name: 'Philips Hue White & Color bulb (additional)', purpose: 'Add one to each room where you spend time', price: '~$30–$50 ea' },
]

const intermediateItems = [
  { name: 'Amazon Echo Dot (5th Gen) × 2–3', purpose: 'Listen for sounds in each main room and trigger Alexa Routines', price: '~$25–$50 ea' },
  { name: 'Amazon Smart Plug', purpose: 'Control a bed shaker or lamp on/off through Alexa', price: '~$25' },
  { name: 'Philips Hue Bridge (if needed)', purpose: 'Required to connect Hue lights to Alexa', price: '~$50–$60' },
  { name: 'Philips Hue White & Color bulbs (if needed)', purpose: 'Visual flash alerts controlled by Alexa Routines', price: '~$30–$50 ea' },
]

const intermediateOptional = [
  { name: 'Sonic Alert Sonic Bomb bed shaker', purpose: 'Strong vibration to wake you for important alerts', price: '~$30–$40' },
  { name: 'Fire Tablet (for Alexa dashboard)', purpose: 'Wall-mount visual alert display', price: '~$50–$80' },
]

const advancedBrain = [
  { name: 'Home Assistant Green (recommended)', purpose: 'Purpose-built for HA — plug in and go', price: '~$99' },
  { name: 'Ethernet cable (longer if needed)', purpose: 'Connect HA Green to your router', price: '~$5–$10' },
]

const advancedAlternatives = [
  { name: 'Home Assistant Yellow (Kit)', purpose: 'More powerful, built-in Zigbee radio', price: '~$125–$150' },
  { name: 'Raspberry Pi 4 (4GB) + SD + power', purpose: 'Budget option if you want to tinker', price: '~$75–$115' },
]

const advancedPower = [
  { name: 'UPS (600VA minimum)', purpose: 'Keeps HA Green, router, and hubs running during outages', price: '~$50–$100' },
]

const advancedWireless = [
  { name: 'SONOFF Zigbee 3.0 USB Dongle Plus', purpose: 'Lets HA talk directly to Zigbee devices', price: '~$25–$30' },
  { name: 'ConBee II USB Gateway (alternative)', purpose: 'Alternative Zigbee coordinator', price: '~$30–$40' },
]

const advancedAlert = [
  { name: 'Smart plug (Zigbee) — SONOFF S31 Lite or ThirdReality', purpose: 'Controls bed shaker on/off via HA', price: '~$10–$15' },
  { name: 'Bed shaker — Sonic Alert Super Shaker 12V', purpose: 'Vibrates under pillow for critical alerts', price: '~$15–$40' },
  { name: 'Smart color bulbs (Zigbee)', purpose: 'Color-coded visual alerts in every room', price: '~$15–$50 ea' },
]

const advancedSensors = [
  { name: 'Abode security system (or similar)', purpose: 'Door/window sensors that trigger alerts', price: '~$200+' },
  { name: 'Zigbee door/window sensor (budget alt)', purpose: 'One sensor per door — cheaper option', price: '~$10–$15 ea' },
  { name: 'Zigbee motion sensor', purpose: 'Detect movement in rooms, porches, driveways', price: '~$15–$20 ea' },
]

export default function Shopping() {
  const [activeTab, setActiveTab] = useState('quick-start')

  return (
    <div>
      <section className="py-12 px-4 sm:px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-white/70 text-sm mb-3">
            <Link to="/" className="text-white/70 hover:text-white no-underline transition">Home</Link>
            <span>/</span>
            <span className="text-white">Shopping List</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <ShoppingCart size={28} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Shopping Lists</h1>
          <p className="text-gray-300 text-lg">Everything you need for each level — tested and recommended by the community. Only buy what you need for the level you're starting at.</p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <TabGroup
            tabs={[
              { id: 'quick-start', label: 'Quick Start' },
              { id: 'intermediate', label: 'Intermediate' },
              { id: 'advanced', label: 'Advanced' },
            ]}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          {activeTab === 'quick-start' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Quick Start</h2>
                <span className="text-sm font-medium bg-green-100 text-green-800 px-3 py-1 rounded-full">Free – $200</span>
              </div>
              <p className="text-gray-600 mb-6">Good news: you probably already have everything. The Quick Start uses your phone's built-in sound recognition — completely free. If you want to add visual light alerts now, here's what to grab:</p>
              <ProductTable items={quickStartItems} />
              <div className="bg-green-50 border-2 border-green-200 rounded-xl px-5 py-4 mb-6">
                <p className="font-semibold text-green-900 mb-1">Don't want to spend anything?</p>
                <p className="text-sm text-green-800">The phone-only setup is completely free and still very useful. Start there and add lights later when you're ready.</p>
              </div>
              <Link to="/quick-start" className="text-brand-green font-medium">Read the Quick Start Guide →</Link>
            </div>
          )}

          {activeTab === 'intermediate' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Intermediate</h2>
                <span className="text-sm font-medium bg-teal-100 text-teal-800 px-3 py-1 rounded-full">$100 – $250</span>
              </div>
              <p className="text-gray-600 mb-2">Everything from Quick Start, plus:</p>
              <ProductTable items={intermediateItems} />

              <h3 className="text-lg font-semibold text-gray-900 mb-3">Optional but Recommended</h3>
              <ProductTable items={intermediateOptional} />
              <Link to="/intermediate" className="text-brand-teal font-medium">Read the Intermediate Guide →</Link>
            </div>
          )}

          {activeTab === 'advanced' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Advanced</h2>
                <span className="text-sm font-medium bg-purple-100 text-purple-800 px-3 py-1 rounded-full">$250 – $550+</span>
              </div>
              <p className="text-gray-600 mb-6">Everything from Quick Start and Intermediate (your Echo Dots and Hue lights integrate into Home Assistant), plus:</p>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Brain (Required)</h3>
              <ProductTable items={advancedBrain} />

              <h4 className="text-md font-medium text-gray-700 mb-2">Alternatives</h4>
              <ProductTable items={advancedAlternatives} />

              <h3 className="text-lg font-semibold text-gray-900 mb-3">Power Protection (Required)</h3>
              <ProductTable items={advancedPower} />
              <p className="text-gray-500 text-sm mb-6">Plug your router, modem, HA Green, and Hue Bridge into the UPS battery-backed outlets. A 600VA UPS running these devices lasts 1–2+ hours on battery. <Link to="/power-outage" className="text-brand-purple font-medium">Read the Power Outage Guide →</Link></p>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">Wireless Communication (Pick One)</h3>
              <ProductTable items={advancedWireless} />

              <h3 className="text-lg font-semibold text-gray-900 mb-3">Alert Devices</h3>
              <ProductTable items={advancedAlert} />

              <h3 className="text-lg font-semibold text-gray-900 mb-3">Security & Sensors (Recommended)</h3>
              <ProductTable items={advancedSensors} />

              <Link to="/advanced" className="text-brand-purple font-medium">Read the Advanced Guide →</Link>
            </div>
          )}

          {/* Deal tips */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Tips for Getting the Best Deals</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li><strong>Echo Dots</strong> go on sale regularly during Prime Day (July), Black Friday, and holiday sales — often 50% off.</li>
              <li><strong>Hue starter kits</strong> are cheaper than buying bulbs + bridge separately.</li>
              <li><strong>Home Assistant Green</strong> is available directly from the <a href="https://www.home-assistant.io/green" target="_blank" rel="noopener noreferrer" className="text-brand-purple font-medium">Home Assistant store</a> — no stock issues.</li>
              <li><strong>Zigbee sensors</strong> from Aqara and ThirdReality are excellent quality at budget prices.</li>
              <li><strong>Buy one room at a time</strong> — you don't need to outfit your whole house on day one.</li>
            </ul>
          </div>

          {/* Affiliate disclosure */}
          <div className="mt-10 p-5 bg-gray-50 rounded-xl text-sm text-gray-500">
            <p className="font-medium text-gray-700 mb-1">Affiliate Disclosure</p>
            <p>Some links on this page are Amazon affiliate links. When you buy through these links, a small percentage goes to support the Hear at Home project at no extra cost to you. We only recommend products we've personally tested or that are widely recommended by the D/deaf and Hard of Hearing smart home community. We are never paid to recommend a product.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
