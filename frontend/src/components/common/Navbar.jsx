import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Events', path: '/events' },
    { name: 'Media', path: '/media' },
    { name: 'Contact', path: '/contact' },
    { name: 'Membership', path: '/membership' },
  ]

  return (
    <header className="sticky top-0 z-50 shadow-lg">

      {/* ================= TOP BAR ================= */}
      <div className="bg-[#3e0910] text-[#f5e6d3] text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">

          <div className="flex items-center gap-6">
            <p>✝ Ethiopian Orthodox Tewahedo Church</p>
            <p>📍 Toronto, Canada</p>
          </div>

          <div className="flex items-center gap-5">

            <a href="https://www.youtube.com/channel/UCXooxZcD_DMex99Y3IPxCAg"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-300"
            >
              YouTube
            </a>

            <a href="https://www.tiktok.com/@stgabrieltorontoeotc"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-300"
            >
              TikTok
            </a>

            <a href="#" className="hover:text-yellow-300">Facebook</a>
            <a href="#" className="hover:text-yellow-300">Telegram</a>

          </div>
        </div>
      </div>

      {/* ================= BRAND HEADER ================= */}
      <div className="bg-[#6b0f1a] text-white">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* LEFT SAINT */}
          <img
            src="/images/saints/st-gebriel.jpg"
            alt="St Gebriel"
            className="w-30 h-30 md:w-34 md:h-34 rounded-full border-4 border-yellow-300 object-cover shadow-lg"
          />

          {/* CENTER TITLE */}
          <Link to="/" className="text-center leading-tight">
            <h1 className="text-2xl md:text-3xl font-bold tracking-wide hover:text-yellow-300">
              SGSA CHURCH
            </h1>
            <p className="text-xs md:text-sm text-[#f5e6d3]">
              St. Gebriel & St. Arsema Ethiopian Orthodox Tewahedo Church
            </p>
          </Link>

          {/* RIGHT SAINT */}
          <img
            src="/images/saints/st-arsema.jpg"
            alt="St Arsema"
            className="w-30 h-30 md:w-34 md:h-34 rounded-full border-4 border-yellow-300 object-cover shadow-lg"
          />

        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <div className="bg-[#5a0d16] text-white border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium mx-auto">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition hover:text-yellow-300 relative ${
                  isActive(link.path) ? 'text-yellow-300' : ''
                }`}
              >
                {link.name}

                {isActive(link.path) && (
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-yellow-300 rounded-full"></span>
                )}
              </Link>
            ))}

            {/* DONATE BUTTON */}
            <Link
              to="/donate"
              className="bg-yellow-300 text-black px-5 py-2 rounded-xl font-semibold hover:bg-yellow-200"
            >
              Donate
            </Link>

          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            {open ? '✕' : '☰'}
          </button>

        </div>

        {/* ================= MOBILE MENU ================= */}
        {open && (
          <div className="md:hidden px-6 pb-6 space-y-3">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`block py-2 ${
                  isActive(link.path) ? 'text-yellow-300' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/donate"
              onClick={() => setOpen(false)}
              className="block bg-yellow-300 text-black text-center py-3 rounded-xl font-semibold mt-4"
            >
              Donate
            </Link>

          </div>
        )}

      </div>
    </header>
  )
}