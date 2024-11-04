import React from 'react';
import { Music, Mic, Guitar, Piano, Drum, Play, Headphones, Mail, Instagram, Youtube } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80')"
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-yellow-500">
            Samuel James
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300">Multi-Instrumentalist • Composer • Producer</p>
        </div>
      </header>

      {/* Instruments Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Musical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Piano, name: "Piano", years: 15, level: "Expert" },
            { icon: Guitar, name: "Guitar", years: 12, level: "Expert" },
            { icon: Drum, name: "Drums", years: 8, level: "Advanced" },
          ].map((instrument) => (
            <div key={instrument.name} className="bg-zinc-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-zinc-800/70 transition">
              <instrument.icon className="w-12 h-12 mb-4 text-amber-400" />
              <h3 className="text-xl font-bold mb-2">{instrument.name}</h3>
              <p className="text-zinc-400">{instrument.years} Years Experience</p>
              <p className="text-amber-400">{instrument.level}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 px-4 md:px-8 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Midnight Symphony",
                type: "Original Composition",
                description: "A fusion of classical piano and modern electronic elements",
                image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80"
              },
              {
                title: "Urban Rhythms",
                type: "Studio Production",
                description: "Contemporary jazz meets hip-hop beats",
                image: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80"
              }
            ].map((work) => (
              <div key={work.title} className="group relative overflow-hidden rounded-xl">
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-[300px] object-cover transition group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold">{work.title}</h3>
                  <p className="text-amber-400">{work.type}</p>
                  <p className="text-zinc-300 text-sm">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Music, title: "Music Composition", description: "Custom compositions for film, media, and personal projects" },
            { icon: Headphones, title: "Studio Production", description: "Professional recording and mixing services" },
            { icon: Mic, title: "Live Performance", description: "Available for events, concerts, and private functions" }
          ].map((service) => (
            <div key={service.title} className="p-6 rounded-xl border border-zinc-800 hover:border-amber-400/50 transition">
              <service.icon className="w-8 h-8 mb-4 text-amber-400" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-zinc-400">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <footer className="py-20 px-4 md:px-8 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Create Together</h2>
          <p className="text-zinc-400 mb-8">Available for collaborations, performances, and studio sessions</p>
          <div className="flex justify-center gap-6">
            {[
              { icon: Mail, href: "mailto:contact@samueljames.com" },
              { icon: Instagram, href: "#" },
              { icon: Youtube, href: "#" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-2 rounded-full border border-zinc-700 hover:border-amber-400 hover:text-amber-400 transition"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;