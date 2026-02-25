"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Hair Artistry",
      description: "From precision cuts to bespoke coloring, our experts transform your hair into a statement.",
      image: "https://images.unsplash.com/photo-1560869713-7d0a294308b3?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Skin & Facials",
      description: "Rejuvenating treatments designed to restore your natural glow and vitality.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Bridal Glow",
      description: "Comprehensive bridal packages to ensure you look your most stunning on your special day.",
      image: "https://images.unsplash.com/photo-1481931098730-1198397163ef?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Nail Couture",
      description: "Artistic manicures and pedicures that blend style, health, and luxury.",
      image: "https://images.unsplash.com/photo-1604654894610-df49ff6697ad?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen Selection:bg-primary/20 bg-background text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass py-4 shadow-sm" : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-serif text-xl border-2 border-accent">R</div>
            <span className="text-2xl font-serif font-bold tracking-tight">Red<span className="text-primary">Orchid</span></span>
          </div>
          <div className="hidden md:flex gap-8 items-center text-sm font-medium uppercase tracking-widest text-foreground/80">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
            <a href="#contact" className="button-premium">Book Now</a>
          </div>
          <div className="md:hidden text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2000&auto=format&fit=crop"
            alt="Beauty Sanctuary"
            fill
            className="object-cover brightness-[0.8]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-[0.2em] uppercase bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20">
            Where Beauty Blossoms
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
            Unveil Your <br />
            <span className="italic text-primary-light">Natural Radiance</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Step into a world of elegance. At RedOrchid, we blend luxury with artistry to bring out the masterpiece in you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#services" className="button-premium text-lg px-10 py-4 w-full sm:w-auto text-center">
              Explore Services
            </a>
            <a href="#contact" className="px-10 py-4 glass rounded-full text-foreground font-medium hover:bg-white/80 transition-all w-full sm:w-auto text-center">
              Our Story
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl skew-y-2 hover:skew-y-0 transition-transform duration-500">
              <Image
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop"
                alt="About RedOrchid"
                width={800}
                height={1000}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent/10 rounded-full blur-3xl z-0"></div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              A Legacy of <span className="text-primary italic">Elegance</span> and Wellness
            </h2>
            <p className="text-muted text-lg mb-6 leading-relaxed">
              Founded on the belief that beauty is an expression of the soul, RedOrchid has been a sanctuary for those seeking a premium grooming experience. Our team of certified professionals is dedicated to providing personalized treatments that cater to your unique needs.
            </p>
            <p className="text-muted text-lg mb-10 leading-relaxed">
              We use only the finest organic products and the latest techniques to ensure you leave our parlour feeling confident, rejuvenated, and beautiful.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-border pt-10">
              <div>
                <h4 className="text-3xl font-serif text-primary font-bold">10+</h4>
                <p className="text-sm uppercase tracking-widest text-muted mt-1">Years of Grace</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-primary font-bold">5k+</h4>
                <p className="text-sm uppercase tracking-widest text-muted mt-1">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-[#FAF6F1]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 inline-block">Tailored for You</span>
            <h2 className="text-4xl md:text-6xl font-serif">Curated Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted leading-relaxed mb-6">{service.description}</p>
                  <a href="#contact" className="text-primary font-semibold flex items-center gap-2 group/link">
                    Book Service
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif">A Glimpse of Beauty</h2>
          <p className="text-muted mt-4 max-w-xl mx-auto italic">“In every orchid's bloom, we see a piece of art.”</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto h-[600px]">
          <div className="relative rounded-2xl overflow-hidden row-span-2">
            <Image src="https://images.unsplash.com/photo-1595475825244-672ce963138b?q=80&w=800&auto=format&fit=crop" alt="Gallery" fill className="object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="relative rounded-2xl overflow-hidden row-span-1">
            <Image src="https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?q=80&w=800&auto=format&fit=crop" alt="Gallery" fill className="object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="relative rounded-2xl overflow-hidden row-span-2 col-span-2">
            <Image src="https://images.unsplash.com/photo-1470468969717-61d5d52fd0d2?q=80&w=800&auto=format&fit=crop" alt="Gallery" fill className="object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="relative rounded-2xl overflow-hidden row-span-1">
            <Image src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop" alt="Gallery" fill className="object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-4xl font-serif mb-12 italic text-primary">"The orchid is the heart of our salon, and every client is treated with the same delicate care and admiration."</div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-primary p-0.5">
              <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" alt="Client" width={200} height={200} className="rounded-full" />
            </div>
            <h5 className="text-lg font-bold">Sophia Mitchell</h5>
            <p className="text-xs uppercase tracking-widest text-muted">Fashion Designer & Regular</p>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-[#1a1a1a] text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-serif text-xl border-2 border-accent">R</div>
              <span className="text-3xl font-serif font-bold">Red<span className="text-primary">Orchid</span></span>
            </div>
            <p className="text-white/60 max-w-md leading-relaxed mb-8">
              Excellence in beauty and wellness since 2014. Visit us for an unforgettable experience that will leave you glowing inside and out.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-accent">Contact Us</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                123 Orchid Lane, Beauty Square, NY
              </li>
              <li className="flex gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (555) 123-4567
              </li>
              <li className="flex gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@redorchid.com
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-accent">Working Hours</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span>09:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 - 18:00</span>
              </li>
              <li className="flex justify-between text-primary">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-10 border-t border-white/10 text-center text-white/40 text-sm">
          &copy; {new Date().getFullYear()} RedOrchid Beauty Parlour. All rights reserved. Designed with Elegance.
        </div>
      </footer>
    </div>
  );
}
