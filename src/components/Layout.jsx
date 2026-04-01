import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, Home, Smartphone, Speaker, Server, ShoppingCart, Palette, Zap, Download, Heart } from 'lucide-react'

const navLinks = [
  { to: '/quick-start', label: 'Quick Start', icon: Smartphone },
  { to: '/intermediate', label: 'Intermediate', icon: Speaker },
  { to: '/advanced', label: 'Advanced', icon: Server },
  { to: '/shopping', label: 'Shopping', icon: ShoppingCart },
  { to: '/download', label: 'Download', icon: Download },
  { to: '/about', label: 'About', icon: Heart },
]

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Skip to main content — accessibility */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-brand-accent focus:text-white focus:px-4 focus:py-2 focus:rounded">
        Skip to main content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 text-brand-dark font-bold text-lg no-underline hover:opacity-80 transition">
              <img src="/logo.svg" alt="Hear at Home logo" className="h-9 w-9 rounded-lg" />
              <span>Hear at Home <span className="text-sm font-normal text-gray-500">Project</span></span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`px-3 py-2 rounded-lg text-sm font-medium no-underline transition ${
                    location.pathname === to
                      ? 'bg-brand-blue/10 text-brand-blue'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-gray-200 bg-white" aria-label="Mobile navigation">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map(({ to, label, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium no-underline transition ${
                    location.pathname === to
                      ? 'bg-brand-blue/10 text-brand-blue'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={18} />
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Main content */}
      <main id="main" className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Guides */}
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-3">Guides</h3>
              <ul className="space-y-2">
                <li><Link to="/quick-start" className="text-gray-300 hover:text-white no-underline text-sm transition">Quick Start</Link></li>
                <li><Link to="/intermediate" className="text-gray-300 hover:text-white no-underline text-sm transition">Intermediate</Link></li>
                <li><Link to="/advanced" className="text-gray-300 hover:text-white no-underline text-sm transition">Advanced</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/shopping" className="text-gray-300 hover:text-white no-underline text-sm transition">Shopping Lists</Link></li>
                <li><Link to="/alert-codes" className="text-gray-300 hover:text-white no-underline text-sm transition">Alert Color Codes</Link></li>
                <li><Link to="/power-outage" className="text-gray-300 hover:text-white no-underline text-sm transition">Power Outage Guide</Link></li>
                <li><Link to="/download" className="text-gray-300 hover:text-white no-underline text-sm transition">Download</Link></li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-3">Community</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-white no-underline text-sm transition">About</Link></li>
                <li><a href="https://github.com/hearathomeproject/hear-at-home" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white no-underline text-sm transition">GitHub</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-sm">
              Hear at Home Project is free, open source, and built for anyone who might miss sounds at home.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Some product links are affiliate links that help support this project at no cost to you.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
