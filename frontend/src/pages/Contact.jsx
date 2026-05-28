import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Message sent successfully 🙏")
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="space-y-24">

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#6b0f1a] to-[#8a1c2d] text-white text-center py-28 px-6">

        <h1 className="text-5xl md:text-6xl font-bold">
          Contact Us
        </h1>

        <p className="mt-6 text-lg text-[#f5e6d3] max-w-2xl mx-auto">
          We are here to support your spiritual journey.
          Reach out to St. Gebriel & St. Arsema Ethiopian Orthodox Church.
        </p>

      </section>

      {/* CONTACT INFO CARDS */}
      <section className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-6 text-center">

          <div className="p-6 border rounded-2xl shadow-sm bg-white">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="font-bold text-[#6b0f1a]">Location</h3>
            <p className="text-gray-600 mt-2">
              Toronto, Ontario, Canada
            </p>
          </div>

          <div className="p-6 border rounded-2xl shadow-sm bg-white">
            <div className="text-3xl mb-3">📧</div>
            <h3 className="font-bold text-[#6b0f1a]">Email</h3>
            <p className="text-gray-600 mt-2">
              info@sgsachurch.org
            </p>
          </div>

          <div className="p-6 border rounded-2xl shadow-sm bg-white">
            <div className="text-3xl mb-3">📞</div>
            <h3 className="font-bold text-[#6b0f1a]">Phone</h3>
            <p className="text-gray-600 mt-2">
              +1 (000) 000-0000
            </p>
          </div>

        </div>

      </section>

      {/* FORM + MAP */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* FORM */}
        <div className="bg-white border rounded-2xl p-8 shadow-sm">

          <h2 className="text-3xl font-bold text-[#6b0f1a] mb-6">
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b0f1a]"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b0f1a]"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows="6"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b0f1a]"
              required
            />

            <button
              type="submit"
              className="w-full bg-[#6b0f1a] text-white py-3 rounded-lg font-semibold hover:bg-[#8a1c2d] transition"
            >
              Send Message 🙏
            </button>

          </form>

        </div>

        {/* MAP PLACEHOLDER */}
        <div className="bg-gray-100 rounded-2xl p-8 flex flex-col justify-center items-center text-center">

          <h2 className="text-3xl font-bold text-[#6b0f1a]">
            Visit Our Church
          </h2>

          <p className="mt-4 text-gray-600">
            St. Gebriel & St. Arsema Ethiopian Orthodox Church
          </p>

          <div className="mt-6 w-full h-64 bg-gray-300 rounded-xl flex items-center justify-center">
            Google Map Coming Soon
          </div>

        </div>

      </section>

      {/* FOOTER NOTE */}
      <section className="bg-gray-50 py-16 text-center px-6">

        <h2 className="text-2xl font-bold text-[#6b0f1a]">
          We Welcome You Always
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Whether for prayer, guidance, or fellowship,
          our church is always open to support you spiritually.
        </p>

      </section>

    </div>
  )
}