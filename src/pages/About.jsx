import { Heart, Mail, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <section className="py-12 px-4 sm:px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-white/70 text-sm mb-3">
            <Link to="/" className="text-white/70 hover:text-white no-underline transition">Home</Link>
            <span>/</span>
            <span className="text-white">About</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <Heart size={28} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">About Hear at Home</h1>
          <p className="text-gray-300 text-lg">A free, open-source project that uses AI to help D/deaf and hard of hearing people build visual and tactile alert systems for their homes — using mainstream tech and plain English.</p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Why This Exists</h2>
            <p className="text-gray-600 mb-4">Your home is full of sounds: smoke alarms, doorbells, glass breaking, a dog barking at the door, water left running. If you can hear them, you react without thinking. If you can't — because you were born deaf, because your hearing has changed, or because you take your hearing aids out at night — those sounds just happen without you.</p>
            <p className="text-gray-600 mb-4">AI changes that. For the first time, you can describe what you want your home to do in plain English — "flash my bedroom light red when the smoke alarm goes off and shake the bed" — and an AI assistant like Claude will build the automation for you. No code. No documentation. Just a conversation.</p>
            <p className="text-gray-600 mb-4">Hear at Home is built on that idea. It's a free, open-source guide to setting up visual and tactile alerts using AI assistants, mainstream smart home technology, and your own words. Flashing lights instead of sirens. Bed shakers instead of alarms. A notification on your phone or Apple Watch that tells you exactly what triggered it. And an AI companion that helps you build, troubleshoot, and customize all of it.</p>
            <p className="text-gray-600 mb-4">Specialized accessibility alerting systems exist and they work well for many people. Hear at Home takes a different approach: use the same technology everyone else is already using, pair it with AI, and make it do exactly what you need.</p>
            <p className="text-gray-600 mb-4">The point is independence. Knowing what's happening in your own home without relying on someone else to tell you. A smoke alarm at 3 AM, someone at the door, a tornado warning — you'll know.</p>
            <p className="text-gray-600">This isn't a product. There's nothing to buy from us. It's a guide, a set of downloadable automations, and a community of people who believe you shouldn't need to spend $1,000 on a proprietary system when a $25 Echo Dot, a free iPhone feature, and an AI assistant can get you there.</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">How It Works</h2>
            <p className="text-gray-600 mb-4">Hear at Home is organized into three levels, with AI helping at every step. You pick where to start based on your comfort, budget, and needs — and you can move up whenever you're ready.</p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-green-50 border border-green-200">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-green text-white text-sm font-bold shrink-0">1</span>
                <div>
                  <p className="font-bold text-gray-900">Quick Start — Awareness</p>
                  <p className="text-sm text-gray-600">Your phone listens for sounds and alerts you. Free, takes 15 minutes, uses what you already have. Ask Claude any questions along the way.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-teal-50 border border-teal-200">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-teal text-white text-sm font-bold shrink-0">2</span>
                <div>
                  <p className="font-bold text-gray-900">Intermediate — React</p>
                  <p className="text-sm text-gray-600">Echo Dots listen in multiple rooms and trigger smart lights and smart plugs through Alexa Routines. Claude helps troubleshoot and plan your layout.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-50 border border-purple-200">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-purple text-white text-sm font-bold shrink-0">3</span>
                <div>
                  <p className="font-bold text-gray-900">Advanced — Control</p>
                  <p className="text-sm text-gray-600">Home Assistant with custom automations, door sensors, weather alerts, and bed shakers. Tell Claude what you want and it writes the entire configuration for you.</p>
                </div>
              </div>
            </div>
            <p className="text-gray-600">Each level builds on the one before it, and AI is the thread that connects them all. At Quick Start, you ask Claude questions. At Intermediate, Claude helps you troubleshoot and plan. At Advanced, Claude builds your entire smart home configuration. The goal is full control — and AI is how you get there.</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Principles</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900">Free and open source</p>
                <p className="text-gray-600 text-sm">Every guide, automation, and blueprint is free to use, modify, and share. The code is on GitHub under an open license.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Honest recommendations</p>
                <p className="text-gray-600 text-sm">We tell you what works and what doesn't at each level. No overselling. If a limitation exists, we name it and tell you what fixes it.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Privacy first</p>
                <p className="text-gray-600 text-sm">Sound Recognition runs entirely on your phone — nothing is sent to the cloud. Home Assistant runs locally in your home. Your data stays yours.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Start where you are</p>
                <p className="text-gray-600 text-sm">Not everyone has $500 or a weekend to set up a smart home. The Quick Start level is free and takes 15 minutes. That's a real starting point.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Built by the community</p>
                <p className="text-gray-600 text-sm">This project grows through contributions. Built a cool automation? Found a better product? Submit a PR or open an issue.</p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">About the Creator</h2>
            <p className="text-gray-600 mb-4">Catharine lost her hearing to meningitis at eight months old and was one of the earliest recipients of the cochlear implant as part of FDA clinical trials in 1986. Being a technology pioneer is quite literally in her DNA.</p>
            <p className="text-gray-600 mb-4">That early experience shaped everything that came after. Rather than waiting for specialized products to catch up, Catharine has always looked at mainstream technology and asked: <em>how can I make this work for me?</em> An iPhone becomes a sound detector. An Echo Dot becomes a listener. A smart light becomes a smoke alarm you can see. The same devices on everyone else's shelf, retrofitted with a different purpose.</p>
            <p className="text-gray-600 mb-4">For years, Catharine dreamed of having a fully integrated accessible home — but was always daunted by the technicality of Home Assistant, managing individual configuration files, and navigating a fragmented ecosystem of different systems. Then she started using Claude Code alongside Home Assistant, and everything changed. What used to take hours of reading documentation and debugging YAML became a conversation: describe what you want, and the AI builds it for you.</p>
            <p className="text-gray-600 mb-4">Hear at Home is the result — and Catharine is passionate about sharing it because she believes a fully accessible smart home is more within reach than ever. It's also a great way to learn how to work with AI tools like Claude. You start with a real problem (making your home safer), you use AI to solve it, and along the way you build confidence with technology that's useful far beyond your smart home.</p>
            <p className="text-gray-500 text-sm">Catharine McNally is a Program Manager at GitHub, with previous accessibility roles at Twitter and Phase2 Technology. She also co-founded a startup creating accessible museum tours in 2008.</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Get Involved</h2>
            <div className="space-y-4">
              <a
                href="https://github.com/hearathomeproject/hear-at-home"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition no-underline"
              >
                <ExternalLink size={24} className="text-gray-900" />
                <div>
                  <p className="font-semibold text-gray-900">Contribute on GitHub</p>
                  <p className="text-sm text-gray-500">Submit automations, report bugs, improve documentation, or suggest features.</p>
                </div>
              </a>
              <a
                href="mailto:hello@hearathomeproject.org"
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition no-underline"
              >
                <Mail size={24} className="text-gray-900" />
                <div>
                  <p className="font-semibold text-gray-900">Get in touch</p>
                  <p className="text-sm text-gray-500">Questions, ideas, or stories about your setup — we'd love to hear from you.</p>
                </div>
              </a>
            </div>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl text-center">
            <p className="text-gray-600 mb-3">Ready to get started?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/quick-start" className="px-6 py-3 rounded-lg bg-brand-green text-white font-semibold no-underline hover:opacity-90 transition">
                Start with Quick Start
              </Link>
              <Link to="/shopping" className="px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold no-underline hover:bg-gray-800 transition">
                View Shopping Lists
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
