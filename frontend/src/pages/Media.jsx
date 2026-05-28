import { useState } from 'react'

export default function Media() {
  const [activeCategory, setActiveCategory] = useState('All')

  const images = [
    { src: "/images/media/service1.jpg", category: "Divine Services" },
    { src: "/images/media/service2.jpg", category: "Divine Services" },
    { src: "/images/media/feast1.jpg", category: "Feast Days" },
    { src: "/images/media/youth1.jpg", category: "Youth Program" },
    { src: "/images/media/choir1.jpg", category: "Choir & Worship" },
    { src: "/images/media/event1.jpg", category: "Feast Days" },
  ]

  const categories = [
    "All",
    "Divine Services",
    "Feast Days",
    "Youth Program",
    "Choir & Worship",
  ]

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory)

  return (
    <div className="space-y-24">

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#6b0f1a] to-[#8a1c2d] text-white text-center py-28 px-6">

        <h1 className="text-5xl md:text-6xl font-bold">
          Church Media
        </h1>

        <p className="mt-6 text-lg text-[#f5e6d3] max-w-3xl mx-auto leading-relaxed">
          Moments of worship, prayer, celebration, and spiritual life at
          St. Gebriel & St. Arsema Ethiopian Orthodox Tewahedo Church.
        </p>

      </section>

      {/* FEATURED MEDIA */}
      <section className="max-w-6xl mx-auto px-6">

        <div className="bg-gray-50 rounded-2xl p-10 text-center shadow-sm">

          <h2 className="text-3xl font-bold text-[#6b0f1a]">
            Featured Moment
          </h2>

          <p className="mt-3 text-gray-600">
            Highlight from recent Sunday Divine Liturgy
          </p>

          <div className="mt-6">
            <img
              src="/images/media/service1.jpg"
              className="w-full max-h-[500px] object-cover rounded-2xl shadow-lg"
            />
          </div>

        </div>

      </section>

      {/* CATEGORY FILTER */}
      <section className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-[#6b0f1a] mb-8">
          Browse Media
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-10">

          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border transition ${
                activeCategory === cat
                  ? "bg-[#6b0f1a] text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}

        </div>

        {/* GALLERY */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">

          {filteredImages.map((img, i) => (
            <div
              key={i}
              className="break-inside-avoid overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition bg-white"
            >
              <img
                src={img.src}
                alt="church media"
                className="w-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}

        </div>

      </section>

      {/* VIDEO SECTION */}
      <section className="bg-gray-50 py-24 px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#6b0f1a]">
            Sermons & Choir Videos
          </h2>

          <p className="mt-4 text-gray-600">
            Watch sermons, liturgy, and choir performances.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="aspect-video bg-black rounded-2xl flex items-center justify-center text-white text-lg shadow-lg">
            🎥 Video Coming Soon
          </div>
        </div>

      </section>

    </div>
  )
}