import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Car, ShieldCheck, 
  Send, CheckCircle2, AlertCircle, HelpCircle, ChevronDown, ChevronUp 
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/deliData';

export const LocationPage = () => {
  const [contactFormName, setContactFormName] = useState('');
  const [contactFormEmail, setContactFormEmail] = useState('');
  const [contactFormPhone, setContactFormPhone] = useState('');
  const [contactFormSubject, setContactFormSubject] = useState('General Question');
  const [contactFormMessage, setContactFormMessage] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = [
    {
      q: "Where should I park during the busy lunch rush (11:30 AM – 1:30 PM)?",
      a: "We highly recommend parking in the large free municipal public lot directly behind our building off Depot Street. There are over 80 open spaces, zero parallel parking hassle, and a direct walkway leading right into our back order entrance."
    },
    {
      q: "How does curbside pickup work for weekly family dinners?",
      a: "When you place your pre-order, you'll select Tuesday or Thursday. Simply pull into one of the designated 'Curbside Pickup' numbered stalls (Spots 1-8) in the Depot Street lot. We receive an automatic alert and bring your warm, boxed meal straight to your car window."
    },
    {
      q: "Can you accommodate gluten sensitivities or food allergies?",
      a: "Yes! We offer certified gluten-free buns for any of our signature sandwiches (prepared with dedicated clean boards and knives). Our potato salad, chop salads, and select soups are also gluten-free friendly. Please let us know in your order notes."
    },
    {
      q: "Why do weekly family dinner pre-orders close strictly at Sunday 5:00 PM?",
      a: "Our culinary team slow-roasts our lasagnas, glazes our pork tenderloins, and scratch-bakes our rolls in limited fresh batches. The Sunday cut-off ensures we source the exact quantities from our Carolina farm partners with zero food waste."
    }
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactFormName('');
      setContactFormEmail('');
      setContactFormPhone('');
      setContactFormMessage('');
    }, 500);
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-burgundy-700 bg-burgundy-50 border border-burgundy-200 px-3.5 py-1 rounded-full inline-block">
          Visit Us in Fuquay-Varina
        </span>
        <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-charcoal-900 max-w-3xl mx-auto leading-tight">
          Hours, Location &amp; Parking Guide
        </h1>
        <p className="text-xs sm:text-sm text-charcoal-600 max-w-2xl mx-auto">
          Everything you need for a quick, stress-free visit—whether you're picking up lunch or grabbing your weekly family dinner curbside.
        </p>
      </section>

      {/* CORE INFO CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Address & Location */}
          <div className="bg-white p-6 rounded-3xl border border-charcoal-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-burgundy-50 text-burgundy-700 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-500 block">Downtown Address</span>
              <h3 className="font-serif font-black text-xl text-charcoal-900 mt-1">604 N Main St</h3>
              <p className="text-xs text-charcoal-600 mt-0.5">
                Historic Downtown District<br />
                Fuquay-Varina, NC 27526
              </p>
              <p className="text-[11px] text-amber-700 font-medium mt-2">
                Front entrance on Main St • Rear pickup on Depot St
              </p>
            </div>
            <a
              href="https://share.google/YL28BXXcrL96BPrb4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs font-bold text-burgundy-700 hover:underline"
            >
              Open in Google Maps &rarr;
            </a>
          </div>

          {/* Card 2: Operating Hours */}
          <div className="bg-white p-6 rounded-3xl border border-charcoal-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-500 block">Deli Hours</span>
              <h3 className="font-serif font-black text-xl text-charcoal-900 mt-1">Mon – Sat: 10:30 AM – 7:30 PM</h3>
              <p className="text-xs text-charcoal-600 mt-0.5">
                Sunday: Closed<br />
                <span className="text-amber-800 font-semibold">(Family pre-orders close Sundays at 5:00 PM)</span>
              </p>
              <div className="mt-2 text-[11px] text-emerald-700 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open for lunch &amp; dinner orders</span>
              </div>
            </div>
          </div>

          {/* Card 3: Contact & Direct Desk */}
          <div className="bg-white p-6 rounded-3xl border border-charcoal-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-500 block">Phone &amp; Online</span>
              <h3 className="font-serif font-black text-xl text-charcoal-900 mt-1">
                <a href="tel:9193461060" className="hover:text-burgundy-700 font-mono">
                  (919) 346-1060
                </a>
              </h3>
              <p className="text-xs text-charcoal-600 mt-0.5">
                Direct Kitchen Line: (919) 346-1060<br />
                Email: hello@delionmainstreet.com
              </p>
              <p className="text-[11px] text-charcoal-500 mt-2">
                Fast kitchen answers during prep hours
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* DETAILED DOWNTOWN PARKING GUIDE (From Blueprint) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-charcoal-900 via-charcoal-950 to-black text-white rounded-3xl p-6 sm:p-12 shadow-xl space-y-8">
          
          <div className="max-w-2xl space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-400/20 border border-amber-400/30 px-3 py-1 rounded-full">
              Downtown Parking Guide
            </span>
            <h2 className="font-serif font-black text-2xl sm:text-3xl">
              How to Park Like a Fuquay-Varina Local
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-300">
              Never get stuck circling Main Street. Follow our two quick parking recommendations:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-charcoal-800/80 p-6 rounded-2xl border border-charcoal-700 space-y-3">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                <Car className="w-5 h-5" />
                <span>Option A: Main Street Parallel Spaces</span>
              </div>
              <p className="text-xs text-charcoal-300 leading-relaxed">
                Free public parking spaces are located immediately along Main Street directly in front of our deli. Perfect for quick morning coffee, grab-and-go sandwich pickups outside of peak hours (before 11:30 AM and after 1:30 PM).
              </p>
              <div className="text-[11px] text-charcoal-400 pt-1">
                ⏱ Limit: 2-Hour free parking
              </div>
            </div>

            <div className="bg-charcoal-800/80 p-6 rounded-2xl border border-charcoal-700 space-y-3 ring-2 ring-amber-500/50">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <ShieldCheck className="w-5 h-5" />
                <span>Option B: Depot Street Municipal Lot (Recommended)</span>
              </div>
              <p className="text-xs text-charcoal-300 leading-relaxed">
                For stress-free pickup during heavy lunch hours and for all Tuesday/Thursday family dinner pickups, use the large municipal public lot situated directly behind the building off Depot Street. Over 80 spaces, dedicated curbside slots (1–8), and a direct garden walkway into our rear door.
              </p>
              <div className="text-[11px] text-amber-300 font-bold pt-1">
                ⭐ Recommended for lunch rush &amp; curbside family meals
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CONTACT FORM & FAQS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-charcoal-200 shadow-sm space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-burgundy-700 bg-burgundy-50 border border-burgundy-200 px-3 py-1 rounded-full">
                Get in Touch
              </span>
              <h3 className="font-serif font-black text-2xl text-charcoal-900 mt-2">
                Send Us a Message
              </h3>
              <p className="text-xs text-charcoal-500 mt-1">
                Have a question about large group catering, bread ingredients, or town events?
              </p>
            </div>

            {contactSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-sm text-emerald-900">Message Received!</h4>
                <p className="text-xs text-emerald-800">
                  Thank you for reaching out to Deli on Main Street. Our team will review your message and reply promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setContactSubmitted(false)}
                  className="text-xs font-bold text-burgundy-700 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-charcoal-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={contactFormName}
                    onChange={e => setContactFormName(e.target.value)}
                    className="w-full p-3 bg-cream-100 border border-charcoal-300 rounded-xl text-xs focus:ring-2 focus:ring-burgundy-700 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-charcoal-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={contactFormEmail}
                      onChange={e => setContactFormEmail(e.target.value)}
                      className="w-full p-3 bg-cream-100 border border-charcoal-300 rounded-xl text-xs focus:ring-2 focus:ring-burgundy-700 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-charcoal-700">Phone (Optional)</label>
                    <input
                      type="tel"
                      placeholder="(919) 555-0100"
                      value={contactFormPhone}
                      onChange={e => setContactFormPhone(e.target.value)}
                      className="w-full p-3 bg-cream-100 border border-charcoal-300 rounded-xl text-xs focus:ring-2 focus:ring-burgundy-700 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-charcoal-700">Topic</label>
                  <select
                    value={contactFormSubject}
                    onChange={e => setContactFormSubject(e.target.value)}
                    className="w-full p-3 bg-cream-100 border border-charcoal-300 rounded-xl text-xs focus:ring-2 focus:ring-burgundy-700 focus:outline-none"
                  >
                    <option value="General Question">General Question</option>
                    <option value="Catering Question">Corporate / School Catering Inquiry</option>
                    <option value="Family Meal Question">Weekly Family Dinner Pre-Order Question</option>
                    <option value="Dietary Question">Allergen / Gluten-Free Inquiry</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-charcoal-700">Your Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can our kitchen help you today?"
                    value={contactFormMessage}
                    onChange={e => setContactFormMessage(e.target.value)}
                    className="w-full p-3 bg-cream-100 border border-charcoal-300 rounded-xl text-xs focus:ring-2 focus:ring-burgundy-700 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold py-3.5 px-4 rounded-xl text-xs shadow-md transition flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message to Deli Team</span>
                </button>
              </form>
            )}
          </div>

          {/* Frequently Asked Questions */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-500">
                Common Inquiries
              </span>
              <h3 className="font-serif font-black text-2xl text-charcoal-900 mt-1">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isExpanded = expandedFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-charcoal-200 overflow-hidden shadow-sm transition"
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-3 hover:bg-cream-100 transition"
                    >
                      <span className="font-bold text-xs text-charcoal-900">{faq.q}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-burgundy-700 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-charcoal-400 flex-shrink-0" />
                      )}
                    </button>
                    {isExpanded && (
                      <div className="px-4 pb-4 pt-1 text-xs text-charcoal-600 leading-relaxed border-t border-charcoal-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
