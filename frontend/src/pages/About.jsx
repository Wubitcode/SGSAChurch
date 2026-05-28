import { Link } from 'react-router-dom'

export default function About() {

  const deacons = [
    {
      name: "Deacon Michael",
      role: "Liturgical Service",
      image: "/images/deacons/deacon1.jpg",
    },
    {
      name: "Deacon Daniel",
      role: "Prayer & Teaching",
      image: "/images/deacons/deacon2.jpg",
    },
    {
      name: "Deacon Samuel",
      role: "Choir & Worship",
      image: "/images/deacons/deacon3.jpg",
    },
  ]

  const leaders = [
    {
      name: "Sebeka Gubae Council",
      role: "Church Administration & Community Leadership",
    },
    {
      name: "Youth Ministry Leaders",
      role: "Youth Spiritual Growth & Outreach",
    },
    {
      name: "Women Ministry Leaders",
      role: "Community Support & Fellowship",
    },
  ]

  const values = [
    {
      title: "Faith",
      desc: "Rooted in Orthodox teachings and traditions of the Ethiopian Church.",
      icon: "✝",
    },
    {
      title: "Community",
      desc: "Building unity, fellowship, and spiritual support among believers.",
      icon: "🤝",
    },
    {
      title: "Service",
      desc: "Serving God through worship, charity, and education.",
      icon: "🙏",
    },
  ]

  return (
    <div className="bg-[#faf7f2] overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/about/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center text-white max-w-3xl px-6">

          <h1 className="text-5xl md:text-6xl font-bold">
            About Our Church
          </h1>

          <p className="mt-6 text-gray-200 text-lg">
            St. Gebreal & St. Arsema Ethiopian Orthodox Tewahedo Church in Toronto
          </p>

          <p className="mt-4 text-gray-300">
            A community built on worship, prayer, tradition, and spiritual growth.
          </p>

        </div>
      </section>

      {/* ================= HEAD PRIEST ================= */}
      <section className="py-24">
        <div className="container grid md:grid-cols-2 gap-14 items-center">

          <img
            src="/images/about/head-priest.jpg"
            alt="Head Priest"
            className="rounded-3xl shadow-xl h-[520px] w-full object-cover"
          />

          <div>
            <p className="text-[#6b0f1a] font-semibold uppercase tracking-wide">
              Spiritual Leadership
            </p>

            <h2 className="mt-3 text-4xl font-bold text-[#6b0f1a]">
              Kesis Seleshi Robi (Like Teguhan)
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Head Priest of SGSA Church guiding the community through Orthodox teaching,
              prayer, and pastoral care.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Leading with humility, unity, and strong commitment to Orthodox tradition.
            </p>
          </div>

        </div>
      </section>

      {/* ================= DEACONS ================= */}
      <section className="py-24 bg-white">
        <div className="container">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#6b0f1a]">
              Church Deacons
            </h2>
            <p className="mt-4 text-gray-600">
              Supporting worship, teaching, and liturgical service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {deacons.map((d, i) => (
              <div
                key={i}
                className="bg-[#faf7f2] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
              >
                <img
                  src={d.image}
                  alt={d.name}
                  className="h-72 w-full object-cover"
                />

                <div className="p-6 text-center">
                  <h3 className="font-bold text-[#6b0f1a]">
                    {d.name}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    {d.role}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= HISTORY ================= */}
      <section className="py-24">
        <div className="container grid md:grid-cols-2 gap-14 items-center">

          <div>
            <h2 className="text-4xl font-bold text-[#6b0f1a]">
              Church History
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              SGSA Church was founded to serve Ethiopian Orthodox believers in Toronto,
              preserving ancient traditions and faith.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              It continues to grow as a spiritual home for worship, education, and service.
            </p>
          </div>

          <img
            src="/images/about/church-history.jpg"
            alt="Church History"
            className="rounded-3xl shadow-xl h-[450px] w-full object-cover"
          />

        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-24 bg-white">
        <div className="container">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#6b0f1a]">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {values.map((v, i) => (
              <div
                key={i}
                className="bg-[#faf7f2] p-8 rounded-2xl text-center hover:shadow-md transition"
              >
                <div className="text-5xl mb-4">{v.icon}</div>

                <h3 className="text-xl font-bold text-[#6b0f1a]">
                  {v.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {v.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= LEADERS ================= */}
      <section className="py-24 bg-[#6b0f1a] text-white">
        <div className="container text-center">

          <h2 className="text-4xl font-bold">
            Sebeka Gubae & Leaders
          </h2>

          <p className="mt-4 text-[#f5e6d3]">
            Church administration and community leadership
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            {leaders.map((l, i) => (
              <div
                key={i}
                className="bg-white/10 border border-white/20 p-8 rounded-2xl"
              >
                <h3 className="text-xl font-bold">
                  {l.name}
                </h3>

                <p className="mt-3 text-[#f5e6d3]">
                  {l.role}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  )
}