import { Link } from 'react-router-dom'
import { ArrowRight, Clock, DollarSign, Smartphone } from 'lucide-react'

export default function GuideLayout({ level, color, colorBg, icon: Icon, title, tagline, time, cost, what, prevLevel, nextLevel, children }) {
  return (
    <div>
      {/* Guide header */}
      <section className={`${colorBg} py-12 px-4 sm:px-6 text-white`}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-white/70 text-sm mb-3">
            <Link to="/" className="text-white/70 hover:text-white no-underline transition">Home</Link>
            <span>/</span>
            <span className="text-white">{level}</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <Icon size={28} />
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">{level}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">{title}</h1>
          <p className="text-white/80 text-lg mb-6">{tagline}</p>
          <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-white/70">
            <span className="flex items-center gap-1"><Clock size={14} /> {time}</span>
            <span className="flex items-center gap-1"><DollarSign size={14} /> {cost}</span>
            <span className="flex items-center gap-1"><Smartphone size={14} /> {what}</span>
          </div>
        </div>
      </section>

      {/* Guide content */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto prose prose-gray prose-lg">
          {children}
        </div>
      </section>

      {/* Navigation between guides */}
      <section className="py-10 px-4 sm:px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between gap-4">
          {prevLevel ? (
            <Link
              to={prevLevel.link}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 no-underline transition"
            >
              &larr; {prevLevel.label}
            </Link>
          ) : <div />}
          {nextLevel && (
            <Link
              to={nextLevel.link}
              className={`flex items-center gap-2 px-5 py-3 rounded-lg ${color} text-white font-semibold no-underline hover:opacity-90 transition`}
            >
              {nextLevel.label} <ArrowRight size={18} />
            </Link>
          )}
        </div>
      </section>
    </div>
  )
}
