export default function Services() {
  const services = [
    {
      title: "Sunday Divine Liturgy",
      time: "6:00 AM – 2:00 PM",
      desc:
        "Main weekly worship service including Kidase, preaching, mezmur, and Holy Eucharist.",
      icon: "⛪",
    },
    {
      title: "Saturday Youth Education",
      time: "12:00 PM – 6:00 PM",
      desc:
        "Youth Bible study, Orthodox teachings, choir practice, and spiritual development.",
      icon: "📖",
    },
    {
      title: "Feast Day Celebrations",
      time: "Special Schedule",
      desc:
        "Monthly celebrations for St. Gebriel and St. Arsema with extended prayer and liturgy.",
      icon: "🕯️",
    },
  ]

  const ministries = [
    {
      title: "Youth Ministry",
      desc: "Supporting young members through faith, fellowship, and education.",
      icon: "👨‍🎓",
    },
    {
      title: "Choir & Worship",
      desc: "Traditional mezmur and liturgical worship services.",
      icon: "🎵",
    },
    {
      title: "Sunday School",
      desc: "Teaching Orthodox faith and church traditions to children.",
      icon: "📚",
    },
    {
      title: "Women Ministry",
      desc: "Community support, prayer groups, and church volunteering.",
      icon: "🙏",
    },
    {
      title: "Sebeka Gubae",
      desc: "Church administration and community leadership.",
      icon: "🏛️",
    },
    {
      title: "Community Outreach",
      desc: "Helping families and supporting the community through charity.",
      icon: "❤️",
    },
  ]

  return (
    <div className="space-y-24">

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#6b0f1a] to-[#8a1c2d] text-white text-center py-28 px-6">
        <h1 className="text-5xl md:text-6xl font-bold">
          Church Services
        </h1>

        <p className="mt-6 text-lg text-[#f5e6d3] max-w-3xl mx-auto leading-relaxed">
          St. Gebriel & St. Arsema Ethiopian Orthodox Tewahedo Church
          welcomes all faithful to worship, prayer, spiritual teaching,
          and community fellowship.
        </p>
      </section>

      {/* SERVICE SCHEDULE */}
      <section className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#6b0f1a]">
            Weekly Service Schedule
          </h2>

          <p className="mt-4 text-gray-600">
            Join us for worship, prayer, and spiritual growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#6b0f1a]">
                {service.title}
              </h3>

              <p className="mt-3 font-semibold text-yellow-700">
                ⏰ {service.time}
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SPECIAL FEAST SECTION */}
      <section className="bg-gray-50 py-24 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-bold text-[#6b0f1a]">
              Feast Days & Holy Celebrations
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Our church celebrates major Ethiopian Orthodox feast days,
              especially the monthly celebrations of St. Gebriel and
              St. Arsema with Kidase, mezmur, prayer, and fellowship.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              These holy gatherings strengthen faith, preserve Orthodox
              traditions, and unite the community in worship.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-10 text-center">
            <div className="text-7xl mb-6">✝️</div>

            <h3 className="text-2xl font-bold text-[#6b0f1a]">
              Monthly Celebrations
            </h3>

            <p className="mt-4 text-gray-600">
              St. Gebriel Day • St. Arsema Day • Major Orthodox Holidays
            </p>
          </div>

        </div>
      </section>

      {/* MINISTRIES */}
      <section className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#6b0f1a]">
            Ministries & Programs
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our church ministries help members grow spiritually,
            serve the community, and preserve Orthodox traditions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <div
              key={index}
              className="border rounded-2xl p-8 bg-white shadow-sm hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">
                {ministry.icon}
              </div>

              <h3 className="text-xl font-bold text-[#6b0f1a]">
                {ministry.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {ministry.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#6b0f1a] text-white text-center py-24 px-6">

        <h2 className="text-4xl md:text-5xl font-bold">
          Join Us in Worship
        </h2>

        <p className="mt-6 text-[#f5e6d3] max-w-2xl mx-auto text-lg">
          Everyone is welcome to worship, learn, and grow spiritually
          with our church community.
        </p>

        <button className="mt-10 bg-yellow-300 text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-200 transition">
          Contact the Church
        </button>

      </section>

    </div>
  )
}