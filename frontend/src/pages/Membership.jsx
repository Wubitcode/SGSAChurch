import { useState } from 'react'

export default function Membership() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Membership request submitted 🙏")
    setForm({ fullName: '', email: '', phone: '', address: '' })
  }

  return (
    <div className="space-y-24">

      {/* HERO */}
      <section className="bg-[#6b0f1a] text-white text-center py-24 px-6">
        <h1 className="text-5xl font-bold">Become a Member</h1>
        <p className="mt-4 text-[#f5e6d3] max-w-2xl mx-auto">
          Join St. Gebriel & St. Arsema Church community and grow in faith, worship, and service.
        </p>
      </section>

      {/* FORM SECTION */}
      <section className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-[#6b0f1a] text-center mb-10">
          Membership Registration Form
        </h2>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full"
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Home Address"
            value={form.address}
            onChange={handleChange}
            className="p-3 border rounded-lg w-full md:col-span-2"
            required
          />

          <button
            type="submit"
            className="md:col-span-2 bg-[#6b0f1a] text-white py-3 rounded-lg font-semibold hover:bg-[#7b1220] transition"
          >
            Submit Membership Request
          </button>

        </form>
      </section>

      {/* WHY JOIN */}
      <section className="bg-gray-50 py-16 px-6 text-center">

        <h2 className="text-3xl font-bold text-[#6b0f1a]">
          Why Become a Member?
        </h2>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Membership connects you to sacraments, spiritual guidance, church programs,
          youth activities, and a strong Orthodox community in Toronto.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">

          <div className="p-6 border rounded-xl bg-white">
            Spiritual Growth
          </div>

          <div className="p-6 border rounded-xl bg-white">
            Community Support
          </div>

          <div className="p-6 border rounded-xl bg-white">
            Church Participation
          </div>

        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-[#6b0f1a]">
          What Happens Next?
        </h2>

        <div className="mt-6 space-y-3 text-gray-600">
          <p>✔ Your request will be reviewed by church leaders</p>
          <p>✔ A clergy member may contact you</p>
          <p>✔ You will be added to church communication groups</p>
          <p>✔ You can begin participating in services and programs</p>
        </div>

      </section>

    </div>
  )
}