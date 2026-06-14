import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Smartphone, Speaker, Server, ArrowRight, Clock, DollarSign, ChevronRight } from 'lucide-react'

const levels = [
  {
    name: 'Quick Start',
    stage: 'Phone & Watch',
    tagline: 'Your phone becomes your ears',
    description: 'Use your iPhone or Android to alert you to smoke alarms, doorbells, dog barking, and more. Learn how to set up light flashing, vibrations, and haptic feedback on your watch and/or phone.',
    icon: Smartphone,
    color: 'bg-brand-green',
    colorLight: 'bg-brand-green/10',
    colorText: 'text-brand-green',
    what: 'Your phone',
    time: '15–20 minutes',
    cost: 'Free',
    link: '/quick-start',
  },
  {
    name: 'Intermediate',
    stage: 'Smart Lights',
    tagline: 'Your home starts listening',
    description: 'Your home reacts to the sounds it hears. A smoke alarm turns the lights red. A dog barking makes them flash yellow. Smart speakers (like Echo Dots) listen in key rooms and trigger smart lights through simple routines.',
    icon: Speaker,
    color: 'bg-brand-teal',
    colorLight: 'bg-brand-teal/10',
    colorText: 'text-brand-teal',
    what: 'Smart speaker + smart lights',
    time: '30–60 minutes',
    cost: '$100–$250',
    link: '/intermediate',
  },
  {
    name: 'Advanced',
    stage: 'Whole Home',
    tagline: 'You control everything',
    description: 'Custom light flash patterns, bed shakers for severe weather alerts at 3 AM, and push notifications telling you exactly what triggered it. Follow the guide or download a starter package and customize from there.',
    icon: Server,
    color: 'bg-brand-purple',
    colorLight: 'bg-brand-purple/10',
    colorText: 'text-brand-purple',
    what: 'Home Assistant hub',
    time: '2–4 hours',
    cost: '$250–$550',
    link: '/advanced',
  },
]

// FindYourLevel quiz logic removed

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 text-center bg-gradient-to-b from-brand-dark to-brand-navy text-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent mb-4">Free &amp; open source</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Never miss a sound at home.
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            Smart home alerts you can see and feel. <strong>Hear at Home</strong> is a free, open-source guide to building a connected, accessible home using everyday tech. Turn sounds into flashing lights and vibrations so you know when:
          </p>
          
          <ul className="text-left inline-block space-y-3 mb-10 text-lg sm:text-xl text-gray-200">
            <li className="flex items-center gap-3"><span className="text-brand-accent font-bold">✓</span> Your dog is barking</li>
            <li className="flex items-center gap-3"><span className="text-brand-accent font-bold">✓</span> The baby is crying</li>
            <li className="flex items-center gap-3"><span className="text-brand-accent font-bold">✓</span> The water was left running</li>
            <li className="flex items-center gap-3"><span className="text-brand-accent font-bold">✓</span> There's a tornado alert in the middle of the night</li>
            <li className="flex items-center gap-3"><span className="text-brand-accent font-bold">✓</span> The smoke alarm goes off</li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#levels"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-brand-accent text-white font-semibold text-lg no-underline hover:opacity-90 transition min-w-[240px]"
            >
              Explore the Guides <ArrowRight size={20} className="shrink-0" />
            </a>
            <Link
              to="/quick-start"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-white/30 text-white font-semibold text-lg no-underline hover:bg-white/10 transition"
            >
              Jump to Quick Start
            </Link>
          </div>
        </div>
      </section>

      {/* Level Cards */}
      <section id="levels" className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Start small, build at your own pace.</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Begin with the phone in your pocket, expand to smart lights, and eventually graduate to full home control. At every step, you can use your favorite AI assistant to answer questions, troubleshoot, or even write the advanced configurations for you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {levels.map((level) => (
              <div
                key={level.name}
                className="rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className={`${level.color} px-6 py-4 text-white`}>
                  <div className="flex items-center gap-2 mb-1">
                    <level.icon size={20} />
                    <span className="font-bold text-lg">{level.name}</span>
                    <span className="ml-auto text-xs font-semibold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full">{level.stage}</span>
                  </div>
                  <p className="text-white/90 text-sm">{level.tagline}</p>
                </div>

                <div className="px-6 py-5">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{level.description}</p>

                  <div className="space-y-2 mb-5">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Smartphone size={14} />
                      <span>What you need: <strong className="text-gray-700">{level.what}</strong></span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock size={14} />
                      <span>Setup time: <strong className="text-gray-700">{level.time}</strong></span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <DollarSign size={14} />
                      <span>Cost: <strong className="text-gray-700">{level.cost}</strong></span>
                    </div>
                  </div>

                  <Link
                    to={level.link}
                    className={`flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg ${level.color} text-white font-semibold no-underline hover:opacity-90 transition text-sm`}
                  >
                    Start this guide <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI ethos section */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Build your home in plain English</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Smart home setups used to mean reading technical manuals and writing complex code. Now, you can just describe what you need in your own words, and an assistant handles the technical translation for you.</p>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 max-w-lg mx-auto mb-10 text-left">
            <p className="text-sm text-gray-500 mb-1">You:</p>
            <p className="text-gray-800 italic">"Flash my bedroom light red when the smoke alarm goes off, turn on the bed shaker, and send a notification to my Apple Watch that says 'Smoke alarm detected. Get out and call 911.'"</p>
            <p className="text-sm text-brand-purple font-medium mt-3">An AI assistant builds the exact setup for you. Just copy, paste, and your home is ready to react.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-green"></span>
              100% free
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
              No accounts required
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-purple"></span>
              Open source
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
              No ads
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
              Privacy-first
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
