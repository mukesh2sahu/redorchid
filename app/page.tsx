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
      title: "Hair Cuts & Styling",
      price: "from Rs 1000",
      image: "/images/haircut and styling.png",
    },
    {
      title: "Facial & Skincare",
      price: "from Rs 2000",
      image: "/images/skincare.png",
    },
    {
      title: "Bridal Makeup",
      price: "from Rs 5000",
      image: "/images/bridal makeup.png",
    },
    {
      title: "Manicure & Pedicure",
      price: "from Rs 2500",
      image: "/images/pedicure.png",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen Selection:bg-primary/20 bg-background text-foreground">
      {/* Top Bar */}
      <div className="bg-[#1a1a1a] text-white py-2 px-6 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium uppercase tracking-widest">
          <div className="flex gap-6">
            <span>Call Us: +1 (555) 123-4567</span>
            <span>Mon-Sun: 9:00 AM - 8:00 PM</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">Facebook</a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white py-3 shadow-md" : "bg-white py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-serif font-black tracking-tight text-foreground">
              RED<span className="text-primary">ORCHID</span>
            </span>
          </div>
          <div className="hidden lg:flex gap-10 items-center text-sm font-bold uppercase tracking-wider">
            <a href="#" className="nav-link">Home</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="btn-parlour">Book Appointment</a>
          </div>
          <button className="lg:hidden text-primary">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2000&auto=format&fit=crop"
            alt="Beauty Parlour"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
          <div className="max-w-2xl animate-fade-in">
            <h4 className="text-primary font-bold uppercase tracking-[0.3em] mb-4">Welcome to RedOrchid</h4>
            <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-tight">
              Enhance Your <br />
              <span className="italic">Beautiful</span> Glow
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light">
              Experience professional beauty services tailored to your needs. From hair to skin, we make you feel confident and radiant every day.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="btn-parlour text-lg px-8 py-4">Explore Services</a>
              <a href="#about" className="btn-outline border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4">Our Story</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 section-title">Our Services</h2>
            <p className="text-muted max-w-xl mx-auto">We provide a wide range of beauty treatments using premium products and modern techniques.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="parlour-card group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">{service.title}</h3>
                  <p className="price-tag mb-4">{service.price}</p>
                  <a href="#contact" className="text-primary text-xs font-bold uppercase tracking-widest border-b-2 border-primary/20 hover:border-primary transition-all">Book This Service</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-24 px-6 bg-[#fce4ec] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12 relative z-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Special <br /><span className="text-primary">Bridal Packages</span></h2>
            <p className="text-lg mb-10 text-muted leading-relaxed">
              Make your special day even more memorable. Get up to 20% off on our exclusive bridal makeup and styling packages. Limited slots available!
            </p>
            <button className="btn-parlour">Claim Your Offer</button>
          </div>
          <div className="relative h-[500px] border-[15px] border-white shadow-2xl rounded-sm overflow-hidden">
            <Image
              src="/images/bride.jpg"
              alt="Bridal"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 section-title">Why Choose Us</h2>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {[
            { title: "Expert Stylists", desc: "Our team consists of certified professionals with years of experience." },
            { title: "Premium Products", desc: "We use only high-quality, branded products for your hair and skin." },
            { title: "Luxury Ambiance", desc: "Relax and rejuvenate in our modern, clean, and comfortable parlour." }
          ].map((item, i) => (
            <div key={i} className="text-center p-8 bg-[#fff9fb] rounded-xl">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">0{i + 1}</div>
              <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter">{item.title}</h4>
              <p className="text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-[#1a1a1a] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 italic">Ready for a Makeover?</h2>
          <p className="text-white/70 mb-10 text-lg">Your beauty deserves the best care. Book your slot today and get a complimentary consultation.</p>
          <a href="#contact" className="btn-parlour text-lg px-12 py-5">Book Your Slot Now</a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-20 px-6 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <span className="text-3xl font-serif font-black tracking-tight mb-8 block">RED<span className="text-primary">ORCHID</span></span>
            <p className="text-muted text-sm leading-relaxed mb-6">Expert beauty care and premium parlour services since 2014. Committed to making you look and feel your best.</p>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-8">Contact Info</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li>123 Orchid St, Beauty Square, NY</li>
              <li>+1 (555) 123-4567</li>
              <li>info@redorchid.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><a href="#services" className="hover:text-primary">Our Services</a></li>
              <li><a href="#" className="hover:text-primary">Price List</a></li>
              <li><a href="#about" className="hover:text-primary">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-8">Working Hours</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li className="flex justify-between"><span>Mon - Sat</span> <span>9:00 AM- 9:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span className="text-primary font-bold">8:00 AM- 9:00 PM</span></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-20 border-t border-border mt-16 text-center text-xs font-bold uppercase tracking-[0.3em] text-muted/50">
          &copy; {new Date().getFullYear()} RedOrchid Beauty Parlour. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
