export default function Events() {

  const events = [
    {
      title: "St. Gebriel & St. Arsema Feast Day",
      date: "Church Calendar Announcement",
      time: "All Day Celebration",
      desc:
        "Special Kidase, mezmur, prayer, and spiritual celebration honoring our patron saints.",
      icon: "✝️",
    },
    {
      title: "Sunday Divine Liturgy",
      date: "Every Sunday",
      time: "6:00 AM – 2:00 PM",
      desc:
        "Weekly worship service including Holy Communion, preaching, and prayer.",
      icon: "⛪",
    },
    {
      title: "Saturday Youth Education",
      date: "Every Saturday",
      time: "12:00 PM – 6:00 PM",
      desc:
        "Orthodox teachings, Bible study, choir practice, and youth fellowship.",
      icon: "📖",
    },
    {
      title: "Fasting & Prayer Program",
      date: "Seasonal Schedule",
      time: "Announced by Clergy",
      desc:
        "Church-wide fasting, prayer gatherings, and spiritual reflection periods.",
      icon: "🙏",
    },
  ]

  const announcements = [
    "Next fasting season schedule will be announced by clergy.",
    "Choir rehearsal every Friday after evening prayer.",
    "Monthly community prayer gathering for families and youth.",
    "Special St. Gebriel feast celebration preparations ongoing.",
  ]

  return (
    <div className="space-y-24">

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#6b0f1a] to-[#8a1c2d] text-white text-center py-28 px-6">

        <h1 className="text-5xl md:text-6xl font-bold">
          Church Events
        </h1>

        <p className="mt-6 text-lg text-[#f5e6d3] max-w-3xl mx-auto leading-relaxed">
          Stay connected with spiritual gatherings, feast days,
          youth programs, fasting seasons, and church celebrations
          at St. Gebriel & St. Arsema Ethiopian Orthodox Tewahedo Church.
        </p>

      </section>

      {/* FEATURED FEAST */}
      <section className="max-w-6xl mx-auto px-6">

        <div className="bg-[#6b0f1a] text-white rounded-3xl p-10 md:p-14 shadow-lg">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div>
              <p className="text-yellow-300 font-semibold mb-4">
                FEATURED CELEBRATION
              </p>

              <h2 className="text-4xl font-bold leading-tight">
                St. Gebriel & St. Arsema Feast Celebration
              </h2>

              <p className="mt-6 text-[#f5e6d3] leading-relaxed">
                Join the church community for special liturgy,
                mezmur, prayer, fellowship, and spiritual celebration
                honoring St. Gebriel and St. Arsema.
              </p>

              <button className="mt-8 bg-yellow-300 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-200 transition">
                Learn More
              </button>
            </div>

            <div className="bg-white/10 rounded-2xl p-10 text-center">
              <div className="text-7xl mb-6">🕯️</div>

              <h3 className="text-2xl font-bold">
                Annual Holy Celebration
              </h3>

              <p className="mt-4 text-[#f5e6d3]">
                Prayer • Kidase • Mezmur • Fellowship
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* EVENTS GRID */}
      <section className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#6b0f1a]">
            Upcoming & Regular Events
          </h2>

          <p className="mt-4 text-gray-600">
            Worship services, youth programs, and church gatherings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {events.map((event, i) => (
            <div
              key={i}
              className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
            >

              <div className="text-5xl mb-5">
                {event.icon}
              </div>

              <h2 className="text-2xl font-bold text-[#6b0f1a]">
                {event.title}
              </h2>

              <div className="mt-4 space-y-2 text-gray-600">

                <p>
                  📅 {event.date}
                </p>

                <p>
                  ⏰ {event.time}
                </p>

              </div>

              <p className="mt-5 text-gray-700 leading-relaxed">
                {event.desc}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* ANNOUNCEMENTS */}
      <section className="bg-gray-50 py-24 px-6">

        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#6b0f1a]">
              Church Announcements
            </h2>

            <p className="mt-4 text-gray-600">
              Important updates and community notices.
            </p>
          </div>

          <div className="space-y-5">

            {announcements.map((item, i) => (
              <div
                key={i}
                className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition"
              >
                <p className="text-gray-700">
                  📢 {item}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#6b0f1a] text-white text-center py-24 px-6">

        <h2 className="text-4xl md:text-5xl font-bold">
          Join Our Church Community
        </h2>

        <p className="mt-6 text-[#f5e6d3] max-w-2xl mx-auto text-lg">
          Everyone is welcome to participate in worship,
          spiritual gatherings, and church celebrations.
        </p>

        <button className="mt-10 bg-yellow-300 text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-200 transition">
          Contact the Church
        </button>

      </section>

    </div>
  )
}