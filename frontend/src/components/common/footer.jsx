import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#2d1b12] text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">

        {/* CHURCH INFO */}
        <div>
          <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
            <span className="text-xl">✝</span>
            SGSA Church
          </h2>

          <p className="text-sm text-gray-300 leading-relaxed">
            St. Gebriel & St. Arsema Ethiopian Orthodox Tewahedo Church
            dedicated to faith, worship, and community service in Toronto.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h2 className="text-lg font-bold mb-3">Quick Links</h2>

          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-300">About</Link></li>
            <li><Link to="/services" className="hover:text-yellow-300">Services</Link></li>
            <li><Link to="/events" className="hover:text-yellow-300">Events</Link></li>
            <li><Link to="/media" className="hover:text-yellow-300">Media</Link></li>
            <li><Link to="/donate" className="hover:text-yellow-300">Donate</Link></li>
          </ul>
        </div>

        {/* SERVICE TIMES */}
        <div>
          <h2 className="text-lg font-bold mb-3">Service Times</h2>

          <ul className="space-y-2 text-sm text-gray-300">
            <li>Sunday Liturgy - 6:00 AM – 2:00 PM</li>
            <li>Saturday Youth Education - 12:00 PM – 6:00 PM</li>
            <li>Feast Day Services - As Announced</li>
          </ul>
        </div>

        {/* CONTACT + SOCIALS */}
        <div>
          <h2 className="text-lg font-bold mb-3">Contact & Socials</h2>

          <ul className="space-y-2 text-sm text-gray-300">
            <li>📍 Toronto, Canada</li>
            <li>📧 info@sgsachurch.org</li>
            <li>📞 +1 (000) 000-0000</li>
          </ul>

          {/* SOCIAL MEDIA */}
          <div className="mt-5 flex flex-wrap gap-3 text-sm">

            {/* YouTube */}
            <a
              href="https://www.youtube.com/channel/UCXooxZcD_DMex99Y3IPxCAg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400"
            >
              ▶ YouTube
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@stgabrieltorontoeotc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
            >
              🎵 TikTok
            </a>

            {/* Facebook (placeholder) */}
            <a
              href="#"
              className="hover:text-blue-400"
            >
              📘 Facebook
            </a>

            {/* Telegram (placeholder) */}
            <a
              href="#"
              className="hover:text-sky-300"
            >
              ✈ Telegram
            </a>

          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} SGSA Church (St. Gebriel & St. Arsema). All rights reserved.
      </div>

    </footer>
  )
}