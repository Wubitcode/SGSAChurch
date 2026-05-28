import { Link } from 'react-router-dom'

export default function Home() {

  const services = [
    {
      title: "Sunday Divine Liturgy",
      desc: "Weekly worship service every Sunday from 6:00 AM - 2:00 PM.",
      icon: "⛪",
    },
    {
      title: "Youth Education Program",
      desc: "Orthodox teachings, Bible study, choir practice, and youth fellowship.",
      icon: "📖",
    },
    {
      title: "Mahlet & Prayer",
      desc: "Traditional Ethiopian Orthodox praise, worship, and spiritual prayer.",
      icon: "🙏",
    },
  ]

  const schedules = [
    {
      title: "Sunday Divine Liturgy",
      time: "6:00 AM - 2:00 PM",
      desc: "Holy Eucharist, preaching, worship, and community fellowship.",
    },
    {
      title: "Saturday Youth Education",
      time: "12:00 PM - 6:00 PM",
      desc: "Youth Bible study, Orthodox education, and choir practice.",
    },
    {
      title: "Feast Days",
      time: "Monthly Celebration",
      desc: "Special prayer, liturgy, and Orthodox feast celebrations.",
    },
  ]

  const mediaImages = [
    "/images/media/service1.jpg",
    "/images/media/service2.jpg",
    "/images/media/feast1.jpg",
  ]

  return (
    <div className="bg-[#faf7f2] overflow-x-hidden">

      {/* ================= HERO (CLEAN + PORTRAIT STYLE) ================= */}
      <section
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/home/church-hero.jpg')",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* CENTER CONTENT (NOT CROWDED) */}
        <div className="relative z-10 text-center text-white px-6 max-w-3xl">

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            St. Gebreal & St. Arsema
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Ethiopian Orthodox Tewahedo Church in Toronto
          </p>

          <p className="mt-4 text-gray-300">
            A place of worship, prayer, fasting, tradition, and spiritual growth.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex justify-center gap-5 flex-wrap">

            <Link
              to="/services"
              className="bg-yellow-300 text-black px-8 py-3 rounded-xl font-semibold hover:bg-yellow-200 transition"
            >
              Explore Services
            </Link>

            <Link
              to="/donate"
              className="border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-[#6b0f1a] transition"
            >
              Donate
            </Link>

          </div>
        </div>
      </section>

      {/* ================= WELCOME ================= */}
      <section className="py-24">
        <div className="container grid md:grid-cols-2 gap-14 items-center">

          <img
            src="/images/home/church-inside.jpg"
            className="rounded-3xl shadow-xl h-[450px] w-full object-cover"
          />

          <div>
            <h2 className="text-4xl font-bold text-[#6b0f1a]">
              Welcome to SGSA Church
            </h2>

            <p className="mt-6 text-gray-600">
              A spiritual home for Orthodox worship, community, and teaching.
            </p>

            <Link
              to="/about"
              className="inline-block mt-8 bg-[#6b0f1a] text-white px-6 py-3 rounded-xl"
            >
              Learn More
            </Link>
          </div>

        </div>
      </section>

      {/* ================= SCHEDULE ================= */}
      <section className="py-24">
        <div className="container">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#6b0f1a]">
              Worship Schedule
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {schedules.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow">
                <h3 className="text-xl font-bold text-[#6b0f1a]">
                  {item.title}
                </h3>
                <p className="mt-2 text-yellow-700 font-semibold">
                  {item.time}
                </p>
                <p className="mt-4 text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= MEDIA ================= */}
      <section className="py-24 bg-white">
        <div className="container">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#6b0f1a]">
              Church Media
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {mediaImages.map((img, i) => (
              <img
                key={i}
                src={img}
                className="rounded-2xl h-80 w-full object-cover shadow-md"
              />
            ))}

          </div>

          <div className="text-center mt-10">
            <Link
              to="/media"
              className="bg-[#6b0f1a] text-white px-6 py-3 rounded-xl"
            >
              View Gallery
            </Link>
          </div>

        </div>
      </section>

      {/* ================= DONATE ================= */}
      <section className="bg-[#6b0f1a] text-white py-24 text-center">
        <div className="container">

          <h2 className="text-4xl font-bold">
            Support the Church
          </h2>

          <Link
            to="/donate"
            className="inline-block mt-8 bg-yellow-300 text-black px-8 py-4 rounded-xl"
          >
            Donate Now
          </Link>

        </div>
      </section>

    </div>
  )
}