export default function Donate() {
  const donationOptions = [
    {
      title: "Tithes (አስራት)",
      desc: "Regular weekly/monthly offering to support the church.",
      icon: "✝️",
    },
    {
      title: "General Donation",
      desc: "Support church operations, utilities, and ministries.",
      icon: "🙏",
    },
    {
      title: "Memorial Gifts",
      desc: "Prayers and remembrance for loved ones.",
      icon: "🕯️",
    },
  ]

  const amounts = [20, 50, 100, 200]

  return (
    <div className="space-y-24">

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#6b0f1a] to-[#8a1c2d] text-white text-center py-28 px-6">

        <h1 className="text-5xl md:text-6xl font-bold">
          Payments & Donations
        </h1>

        <p className="mt-6 text-lg text-[#f5e6d3] max-w-3xl mx-auto leading-relaxed">
          “Each of you should give what you have decided in your heart to give…”
          <br />
          <span className="text-sm block mt-2">
            — 2 Corinthians 9:7
          </span>
        </p>

      </section>

      {/* MEMBER LOGIN */}
      <section className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-[#6b0f1a]">
          Registered Members
        </h2>

        <p className="mt-4 text-gray-600">
          Login to track donations, receipts, and contributions.
        </p>

        <button className="mt-6 bg-[#6b0f1a] text-white px-8 py-3 rounded-xl hover:bg-[#8a1c2d] transition">
          Member Login
        </button>

      </section>

      {/* QUICK DONATION AMOUNTS */}
      <section className="bg-gray-50 py-20 px-6 text-center">

        <h2 className="text-3xl font-bold text-[#6b0f1a]">
          Quick Give
        </h2>

        <p className="mt-3 text-gray-600">
          Choose a suggested amount
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">

          {amounts.map((amt, i) => (
            <button
              key={i}
              className="px-6 py-3 border rounded-xl bg-white hover:bg-[#6b0f1a] hover:text-white transition font-semibold"
            >
              ${amt}
            </button>
          ))}

        </div>

      </section>

      {/* DONATION OPTIONS */}
      <section className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-[#6b0f1a] mb-12">
          Give as Guest
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {donationOptions.map((item, i) => (
            <div
              key={i}
              className="p-8 border rounded-2xl shadow-sm bg-white hover:shadow-lg transition text-center"
            >

              <div className="text-4xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-[#6b0f1a]">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {item.desc}
              </p>

              <button className="mt-6 bg-[#6b0f1a] text-white px-6 py-2 rounded-lg hover:bg-[#8a1c2d] transition">
                Donate
              </button>

            </div>
          ))}

        </div>

      </section>

      {/* WHY GIVE */}
      <section className="max-w-5xl mx-auto px-6 text-center pb-20">

        <h2 className="text-3xl font-bold text-[#6b0f1a]">
          Why We Give
        </h2>

        <p className="mt-5 text-gray-600 leading-relaxed">
          Donations support liturgical services, youth education,
          choir ministry, outreach programs, and church maintenance.
          Your giving helps preserve the Orthodox faith for future generations.
        </p>

      </section>

    </div>
  )
}