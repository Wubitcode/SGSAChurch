import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-12 py-6 animate-fade-in">
      <header className="bg-gradient-to-br from-neutral-950 to-neutral-900 text-white rounded-3xl p-8 sm:p-12 border border-neutral-800 flex flex-col justify-center items-center text-center space-y-6 shadow-xl">
        <span className="text-xs font-extrabold text-amber-500 tracking-widest uppercase bg-neutral-800 px-3 py-1 rounded-full border border-neutral-700">Official Parish Portal</span>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight max-w-2xl leading-tight">Debre Amin St. Gabriel & St. Arsema Ethiopian Orthodox Tewahedo Church</h1>
        <p className="text-neutral-400 text-xs sm:text-sm max-w-xl leading-relaxed">Preserving the ancient apostolic liturgy, orthodox tradition, and spiritual community service heritage.</p>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-2">
          <Link to="/donate" className="bg-amber-600 text-neutral-950 font-bold px-6 py-3 rounded-xl text-xs hover:bg-amber-500 transition shadow text-center">Make an Offering</Link>
          <Link to="/services" className="border border-neutral-700 hover:border-neutral-500 px-6 py-3 rounded-xl text-xs font-bold transition text-center">Service Schedules</Link>
        </div>
      </header>
    </div>
  );
};

export default Home;
