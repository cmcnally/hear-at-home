import { Code, Download as DownloadIcon, FileCode, Copy, Check, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Callout } from '../components/Section'

function CopyBlock({ text }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="relative">
      <pre className="bg-gray-900 text-gray-100 rounded-xl p-4 pr-12 overflow-x-auto text-sm leading-relaxed">
        <code>{text}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-300 transition cursor-pointer"
        aria-label="Copy to clipboard"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
    </div>
  )
}

const files = [
  { name: 'automations/dog_bark_alert.yaml', desc: 'Dog barking → 3 yellow flashes + notification' },
  { name: 'automations/doorbell_alert.yaml', desc: 'Doorbell → 5 blue flashes + notification' },
  { name: 'automations/front_door_alert.yaml', desc: 'Front door → 4 cyan flashes + bed shaker + notification' },
  { name: 'automations/back_door_alert.yaml', desc: 'Back door → 4 teal flashes + bed shaker + notification' },
  { name: 'automations/smoke_co_alert.yaml', desc: 'Smoke/CO → continuous red flash + bed shaker + critical notification' },
  { name: 'automations/severe_weather_alert.yaml', desc: 'Severe weather → purple flash + bed shaker (NWS Alerts)' },
  { name: 'automations/baby_crying_alert.yaml', desc: 'Baby crying → 4 orange flashes + notification' },
  { name: 'automations/water_running_alert.yaml', desc: 'Water running 5+ min → aqua flash + re-alert at 10 min' },
  { name: 'automations/stove_fan_reminder.yaml', desc: 'Stove fan left on → notification at 15 & 30 min' },
  { name: 'automations/power_outage_alert.yaml', desc: 'Power outage detected → notification with UPS battery level' },
  { name: 'scripts/flash_lights_alert.yaml', desc: 'Reusable light flash script — saves/restores light state' },
  { name: 'scripts/bed_shaker_pulse.yaml', desc: 'Bed shaker pulse script — on for N seconds then off' },
  { name: 'blueprints/sound_alert_flash.yaml', desc: 'Universal blueprint — create new alerts without writing YAML' },
]

export default function Download() {
  return (
    <div>
      <section className="py-12 px-4 sm:px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-white/70 text-sm mb-3">
            <Link to="/" className="text-white/70 hover:text-white no-underline transition">Home</Link>
            <span>/</span>
            <span className="text-white">Download</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <Code size={28} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Download the Starter Package</h1>
          <p className="text-gray-300 text-lg">All the Home Assistant automations, scripts, and blueprints from the Advanced guide — ready to download, customize, and use.</p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="https://github.com/hearathomeproject/hear-at-home"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-800 transition no-underline"
            >
              <ExternalLink size={20} /> View on GitHub
            </a>
            <a
              href="https://github.com/hearathomeproject/hear-at-home/archive/refs/heads/main.zip"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-brand-purple text-white font-semibold hover:opacity-90 transition no-underline"
            >
              <DownloadIcon size={20} /> Download ZIP
            </a>
          </div>

          <Callout type="info" title="Who is this for?">
            The GitHub repo is for Advanced level users running Home Assistant. If you're at the Quick Start or Intermediate level, you don't need any of this — follow the <Link to="/quick-start" className="text-blue-700 font-medium">Quick Start</Link> or <Link to="/intermediate" className="text-blue-700 font-medium">Intermediate</Link> guide instead.
          </Callout>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Quick Install</h2>
          <p className="text-gray-600 mb-4">Clone the repo and copy the files into your Home Assistant config directory:</p>
          <div className="space-y-4 mb-10">
            <CopyBlock text="git clone https://github.com/hearathomeproject/hear-at-home.git" />
            <CopyBlock text={`cp -r hear-at-home/automations/ ~/homeassistant/config/\ncp -r hear-at-home/scripts/ ~/homeassistant/config/\ncp -r hear-at-home/blueprints/ ~/homeassistant/config/blueprints/automation/hear-at-home/`} />
          </div>
          <p className="text-gray-600 mb-4">Then replace the placeholder entity names (<code className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded text-sm">light.living_room_main</code>, <code className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded text-sm">switch.bed_shaker_plug</code>, etc.) with your actual device names from Home Assistant. Or let AI do it for you — see below.</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">What's Included</h2>
          <div className="space-y-2 mb-10">
            {files.map((file) => (
              <div key={file.name} className="flex items-start gap-3 py-2">
                <FileCode size={18} className="text-gray-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-mono text-sm text-gray-900">{file.name}</p>
                  <p className="text-sm text-gray-500">{file.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Using the Blueprint</h2>
          <p className="text-gray-600 mb-4">The <code className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded text-sm">sound_alert_flash.yaml</code> blueprint is a universal template for creating new alert automations without writing YAML. Once installed:</p>
          <ol className="space-y-2 text-gray-600 mb-6">
            <li><strong>1.</strong> Go to Settings → Automations & Scenes → Blueprints</li>
            <li><strong>2.</strong> Find "Hear at Home — Sound Alert Flash"</li>
            <li><strong>3.</strong> Click "Create Automation"</li>
            <li><strong>4.</strong> Choose your trigger sensor, lights, color, flash count, and whether to activate the bed shaker</li>
            <li><strong>5.</strong> Save — done</li>
          </ol>
          <p className="text-gray-600 mb-10">This makes it easy to add new alerts (package delivered, garage opened, dryer finished) without touching YAML.</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Customize Everything</h2>
          <p className="text-gray-600 mb-4">These files are a starting point. Change anything you want:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
            <li><strong>Flash colors</strong> — use whatever colors are meaningful to you</li>
            <li><strong>Flash counts</strong> — change the number of flashes per alert</li>
            <li><strong>Bed shaker timing</strong> — adjust when it activates (night only, always, never)</li>
            <li><strong>Notification messages</strong> — personalize the text</li>
            <li><strong>Add new automations</strong> — the blueprint makes it easy</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Customizing with AI</h2>
          <p className="text-gray-600 mb-4">You don't need to learn YAML to make these automations yours. <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-purple-700 font-medium">Claude AI</a> is remarkably good at reading, writing, and rewriting Home Assistant automations. Paste any automation from this repo into Claude, tell it your device names, and it will return a version customized for your setup.</p>
          <p className="text-gray-600 mb-4">But it goes well beyond swapping entity names. Claude can write entirely new automations from a plain-English description, add error handling, simplify complex logic, and help you debug when something isn't working. Describe what you want in your own words, and Claude builds it.</p>

          <p className="text-gray-600 mb-4">Even better, the community has built integrations that put Claude directly inside Home Assistant — so you can create and manage automations without leaving HA:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
            <li><a href="https://www.home-assistant.io/integrations/anthropic/" target="_blank" rel="noopener noreferrer" className="text-purple-700 font-medium">Official Anthropic integration</a> — adds Claude as a conversation agent inside Home Assistant, so you can talk to it from your dashboard</li>
            <li><a href="https://github.com/danbuhler/claude-code-ha" target="_blank" rel="noopener noreferrer" className="text-purple-700 font-medium">Claude Code for Home Assistant</a> — a toolkit that lets Claude Code manage your HA config directly — entity lookups, service calls, dashboard syncing, and automation writing</li>
            <li><a href="https://community.home-assistant.io/t/using-claude-code-to-manage-your-home-assistant-config-is-pretty-amazing/971269" target="_blank" rel="noopener noreferrer" className="text-purple-700 font-medium">Managing HA config with Claude Code</a> — community walkthrough showing the full workflow</li>
          </ul>
          <p className="text-gray-600 mb-6">Imagine telling Claude: "Add a glass breaking alert that flashes my office light orange and sends a notification to my iPhone." And it just builds the automation for you, right inside Home Assistant. That's where this is heading.</p>

          <Callout type="tip" title="Built something cool?">
            The Hear at Home repo is open source. If you create a useful automation, <a href="https://github.com/hearathomeproject/hear-at-home" target="_blank" rel="noopener noreferrer" className="text-purple-700 font-medium">submit a pull request</a> so the community can benefit.
          </Callout>
        </div>
      </section>
    </div>
  )
}
