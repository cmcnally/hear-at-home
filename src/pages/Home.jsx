import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Smartphone, Speaker, Server, ArrowRight, Clock, DollarSign, ChevronRight } from 'lucide-react'

const levels = [
  {
    name: 'Quick Start',
    stage: 'Awareness',
    tagline: 'Your phone becomes your ears',
    description: 'Use your iPhone or Android to alert you to smoke alarms, doorbells, dog barking, and more. Learn how to set up light flashing, vibrations, and haptic feedback on your watch.',
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
    stage: 'React',
    tagline: 'Your home starts listening',
    description: 'Your home reacts to the sounds it hears. A smoke alarm turns the lights red. A dog barking makes them flash yellow. Echo Dots listen in key rooms and trigger smart lights through Alexa Routines.',
    icon: Speaker,
    color: 'bg-brand-teal',
    colorLight: 'bg-brand-teal/10',
    colorText: 'text-brand-teal',
    what: 'Echo Dot + smart lights',
    time: '30–60 minutes',
    cost: '$100–$250',
    link: '/intermediate',
  },
  {
    name: 'Advanced',
    stage: 'Control',
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

const deviceOptions = [
  { id: 'phone', label: 'iPhone or Android' },
  { id: 'echo', label: 'Alexa / Echo Dot' },
  { id: 'lights', label: 'Smart color lights' },
  { id: 'plug', label: 'Smart plug' },
  { id: 'hub', label: 'Home Assistant or similar hub' },
]

const comfortQuestions = [
  {
    question: 'How comfortable are you with tech?',
    options: [
      { label: 'Show me the easiest path', result: 0 },
      { label: 'I can follow step-by-step instructions', result: 1 },
      { label: 'I like tinkering and full control', result: 2 },
    ],
  },
  {
    question: 'What phone do you use?',
    options: [
      { label: 'iPhone', result: 'iphone' },
      { label: 'Android', result: 'android' },
      { label: 'Either / both', result: 'both' },
    ],
  },
]

function FindYourLevel() {
  const [step, setStep] = useState(0) // 0 = devices, 1 = comfort, 2 = phone
  const [selectedDevices, setSelectedDevices] = useState([])
  const [comfort, setComfort] = useState(null)
  const [result, setResult] = useState(null)

  const toggleDevice = (id) => {
    setSelectedDevices(prev =>
      prev.includes(id) ? prev.filter(d => d !== id) : [...prev, id]
    )
  }

  const handleDevicesContinue = () => {
    setStep(1)
  }

  const handleComfort = (option) => {
    setComfort(option.result)
    setStep(2)
  }

  const handlePhone = (option) => {
    // Calculate level based on devices + comfort
    const hasHub = selectedDevices.includes('hub')
    const hasEchoAndLights = selectedDevices.includes('echo') && selectedDevices.includes('lights')
    const comfortLevel = comfort

    let levelIndex
    if (hasHub || (hasEchoAndLights && comfortLevel >= 2)) {
      levelIndex = 2 // Advanced
    } else if (hasEchoAndLights || (selectedDevices.includes('echo') && comfortLevel >= 1)) {
      levelIndex = 1 // Intermediate
    } else {
      levelIndex = 0 // Quick Start
    }

    setResult({
      level: levels[levelIndex],
      phone: option.result,
    })
  }

  const reset = () => {
    setStep(0)
    setSelectedDevices([])
    setComfort(null)
    setResult(null)
  }

  if (result) {
    return (
      <div className="text-center">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${result.level.colorLight} ${result.level.colorText} font-semibold text-lg mb-4`}>
          <result.level.icon size={20} />
          {result.level.name}
        </div>
        <p className="text-gray-600 text-lg mb-6 max-w-md mx-auto">
          Based on your answers, the <strong>{result.level.name}</strong> guide is your best starting point.
          {result.phone !== 'both' && result.phone !== 2 && (
            <span> We'll show you the {result.phone === 'iphone' ? 'iPhone' : 'Android'}-specific steps.</span>
          )}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to={result.phone && result.phone !== 'both' ? `${result.level.link}?phone=${result.phone}` : result.level.link}
            className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg ${result.level.color} text-white font-semibold no-underline hover:opacity-90 transition`}
          >
            Start the {result.level.name} Guide <ArrowRight size={18} />
          </Link>
          <button
            onClick={reset}
            className="px-6 py-3 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition"
          >
            Take quiz again
          </button>
        </div>
      </div>
    )
  }

  const totalSteps = 3

  return (
    <div className="text-center">
      <div className="flex justify-center gap-2 mb-6">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition ${
              i <= step ? 'bg-brand-blue' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      {step === 0 && (
        <>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">What do you already have?</h3>
          <p className="text-sm text-gray-500 mb-6">Select all that apply — or none if you're starting from scratch.</p>
          <div className="flex flex-col gap-2 max-w-sm mx-auto mb-6">
            {deviceOptions.map((device) => (
              <button
                key={device.id}
                onClick={() => toggleDevice(device.id)}
                className={`flex items-center gap-3 px-5 py-3 rounded-xl border-2 text-left font-medium transition cursor-pointer ${
                  selectedDevices.includes(device.id)
                    ? 'border-brand-blue bg-brand-blue/5 text-brand-blue'
                    : 'border-gray-200 text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 ${
                  selectedDevices.includes(device.id)
                    ? 'border-brand-blue bg-brand-blue text-white'
                    : 'border-gray-300'
                }`}>
                  {selectedDevices.includes(device.id) && <span className="text-xs">✓</span>}
                </span>
                {device.label}
              </button>
            ))}
          </div>
          <button
            onClick={handleDevicesContinue}
            className="px-8 py-3 rounded-lg bg-brand-blue text-white font-semibold hover:opacity-90 transition cursor-pointer"
          >
            Continue
          </button>
        </>
      )}

      {step === 1 && (
        <>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">{comfortQuestions[0].question}</h3>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
            {comfortQuestions[0].options.map((option) => (
              <button
                key={option.label}
                onClick={() => handleComfort(option)}
                className="flex-1 px-5 py-4 rounded-xl border-2 border-gray-200 hover:border-brand-blue hover:bg-brand-blue/5 text-gray-700 font-medium transition text-center cursor-pointer"
              >
                {option.label}
              </button>
            ))}
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">{comfortQuestions[1].question}</h3>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
            {comfortQuestions[1].options.map((option) => (
              <button
                key={option.label}
                onClick={() => handlePhone(option)}
                className="flex-1 px-5 py-4 rounded-xl border-2 border-gray-200 hover:border-brand-blue hover:bg-brand-blue/5 text-gray-700 font-medium transition text-center cursor-pointer"
              >
                {option.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 text-center bg-gradient-to-b from-brand-dark to-brand-navy text-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent mb-4">Free &amp; open source</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Use AI to build a home you can see and feel.
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Your home runs on sound — smoke alarms, doorbells, someone at the door. If you're D/deaf or hard of hearing, those sounds happen without you. Hear at Home is a free guide to setting up visual and tactile alerts using AI assistants, smart lights, and everyday tech. Describe what you want in plain English, and AI builds it for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#find-your-level"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-brand-accent text-white font-semibold text-lg no-underline hover:opacity-90 transition"
            >
              Find Your Level <ArrowRight size={20} />
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

      {/* Awareness → Reaction → Control */}
      <section className="py-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm font-medium text-gray-500">
          <span className="flex items-center gap-1"><Smartphone size={16} className="text-brand-green" /> Awareness</span>
          <ChevronRight size={16} className="hidden sm:block text-gray-300" />
          <span className="flex items-center gap-1"><Speaker size={16} className="text-brand-teal" /> React</span>
          <ChevronRight size={16} className="hidden sm:block text-gray-300" />
          <span className="flex items-center gap-1"><Server size={16} className="text-brand-purple" /> Control</span>
        </div>
      </section>

      {/* Level Cards */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Three levels. AI helps at every step.</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Start with your phone, add smart lights and Echo Dots, then graduate to full Home Assistant control. At every level, AI assistants like <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-brand-purple font-medium">Claude</a> are your guide — answering questions, troubleshooting problems, and at the Advanced level, writing your entire smart home configuration for you.
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
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Why AI changes everything</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Smart home setups used to require reading documentation, writing config files, and hours of troubleshooting. Now you just describe what you want, and AI builds it for you.</p>
          <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100 max-w-lg mx-auto mb-10 text-left">
            <p className="text-sm text-gray-500 mb-1">You:</p>
            <p className="text-gray-800 italic">"Flash my bedroom light red when the smoke alarm goes off, turn on the bed shaker, and send a notification to my Apple Watch that says 'Smoke alarm detected. Get out and call 911.'"</p>
            <p className="text-sm text-brand-purple font-medium mt-3">Claude writes the automation. You paste it into Home Assistant. Done.</p>
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

      {/* Find Your Level Quiz */}
      <section id="find-your-level" className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Not sure where to start?</h2>
          <p className="text-center text-gray-600 mb-10">Answer three quick questions and we'll point you in the right direction.</p>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <FindYourLevel />
          </div>
        </div>
      </section>
    </div>
  )
}
