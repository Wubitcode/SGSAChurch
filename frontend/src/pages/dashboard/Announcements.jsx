import React, { useState } from 'react';

const Announcements = () => {
  // Static state configuration tracking mockup for interface validation checks
  const [bulletins] = useState([
    {
      id: 1,
      titleEn: "Feast of St. Michael Holy Celebration",
      titleAm: "የቅዱስ ሚካኤል ዓመታዊ የንግሥ በዓል",
      date: "2026-06-12",
      category: "feast",
      contentEn: "Divine Liturgy service will commence early morning at 5:00 AM followed by a spiritual procession around the holy temple.",
      contentAm: "የማኅሌትና የቅዳሴ ጸሎት በማለዳ ከጠዋቱ 11:00 ሰዓት ጀምሮ ይከናወናል። በመቀጠልም የታቦተ ሕጉ መንፈሳዊ ሥርዓተ ዑደት ይደረጋል።"
    },
    {
      id: 2,
      titleEn: "Apostles Fast Schedule Announcement",
      titleAm: "የሐዋርያት ጾም (ጾመ ሐዋርያት) መግለጫ",
      date: "2026-06-01",
      category: "fast",
      contentEn: "The seasonal fasting guidelines and daily evening intercessory prayer times have been posted to the church bulletin database.",
      contentAm: "የጾሙ መርሃ ግብርና የዘወትር የሰርክ ጸሎት ሰዓታት በቤተ ክርስቲያኑ የሰሌዳ ማስታወቂያ ላይ ተለጥፏል።"
    }
  ]);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Workspace Context Section Controls Banner */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-5 rounded-xl shadow-sm border border-neutral-200">
        <div>
          <h3 className="text-sm font-bold text-neutral-800">የማስታወቂያ ሰሌዳ እና ሰንደቅ መግለጫ</h3>
          <p className="text-xs text-neutral-400">Post English and Amharic church alerts, fasting timelines, and parish bulletins.</p>
        </div>
        <button className="w-full sm:w-auto bg-emerald-600 text-white hover:bg-emerald-700 text-xs font-bold px-5 py-2.5 rounded-lg transition shadow-sm">
          📣 Broadcast New Bulletin
        </button>
      </div>

      {/* Responsive Bulletin Display Arrays */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {bulletins.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden flex flex-col justify-between">
            {/* Top Categorization and Date Stamp Strip */}
            <div className="px-6 py-4 bg-neutral-50 border-b border-neutral-100 flex justify-between items-center">
              <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md border ${
                item.category === 'feast' 
                  ? 'bg-amber-50 text-amber-700 border-amber-200' 
                  : 'bg-red-50 text-churchCrimson border-red-200'
              }`}>
                {item.category === 'feast' ? '⛪ Liturgical Feast' : '🙏 Fasting Season'}
              </span>
              <span className="text-xs font-mono font-medium text-neutral-400">{item.date}</span>
            </div>

            {/* Split Bilingual Core Message Body */}
            <div className="p-6 space-y-5 flex-1">
              {/* Amharic Text Layout Track */}
              <div className="border-l-4 border-churchGold pl-4 space-y-1 bg-neutral-50/50 p-3 rounded-r-lg">
                <h4 className="text-base font-extrabold text-neutral-900 leading-tight font-sans">{item.titleAm}</h4>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.contentAm}</p>
              </div>

              {/* English Text Layout Track */}
              <div className="border-l-4 border-neutral-300 pl-4 space-y-1 p-3">
                <h4 className="text-sm font-extrabold text-neutral-800 leading-tight">{item.titleEn}</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">{item.contentEn}</p>
              </div>
            </div>

            {/* Action Modification Footer Panel */}
            <div className="px-6 py-3.5 bg-neutral-50 border-t border-neutral-100 flex justify-end space-x-3">
              <button className="text-xs font-bold text-neutral-500 hover:text-neutral-700 transition px-2.5 py-1">Edit</button>
              <button className="text-xs font-bold text-churchCrimson hover:text-red-700 transition px-2.5 py-1">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;