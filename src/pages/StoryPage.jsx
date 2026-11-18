import React from 'react';
import { 
  Heart, Award, ShieldCheck, Download, Sparkles, 
  MapPin, Clock, ChefHat, Users, CheckCircle2, ArrowRight 
} from 'lucide-react';
import { Logo } from '../components/Logo';
import { RESTAURANT_INFO } from '../data/deliData';

export const StoryPage = ({ setActivePage }) => {
  const downloadLogoSvg = () => {
    const link = document.createElement('a');
    link.href = '/logo.svg';
    link.download = 'Deli-on-Main-Street-Logo.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      
      {/* HERO / INTRO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-burgundy-700 bg-burgundy-50 border border-burgundy-200 px-3.5 py-1 rounded-full inline-block">
              Historic Downtown Heritage
            </span>
            <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-charcoal-900 leading-tight">
              Rooted in Fuquay-Varina. Built on Authentic Craft.
            </h1>
            <p className="text-xs sm:text-base text-charcoal-600 leading-relaxed font-normal">
              At Deli on Main Street, we believe a great sandwich isn’t just lunch—it’s an artisan tradition. From our 12-day brined beef pastrami to our morning hearth sourdough and family dinner-to-go casseroles, every recipe is made from scratch with Carolina ingredients.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={() => {
                  setActivePage('home');
                  window.scrollTo({ top: 500, behavior: 'smooth' });
                }}
                className="bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold text-xs py-3.5 px-6 rounded-xl shadow-md transition"
              >
                Explore Today's Menu
              </button>
              <button
                onClick={() => {
                  setActivePage('catering');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white border border-charcoal-300 text-charcoal-800 font-bold text-xs py-3.5 px-6 rounded-xl hover:bg-cream-200 transition"
              >
                Weekly Family Dinners
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-burgundy-700/10 rounded-full blur-2xl" />
              <Logo variant="badge" className="relative scale-110 drop-shadow-2xl" />
            </div>
          </div>

        </div>
      </section>

      {/* THE 4 PILLARS OF OUR DELI CRAFT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <span className="text-[11px] font-bold uppercase tracking-wider text-burgundy-700 bg-burgundy-50 border border-burgundy-200 px-3 py-1 rounded-full">
            Our Standards
          </span>
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-charcoal-900">
            Why Our Sandwiches Taste Different
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600">
            No shortcuts, no processed fillers, and no generic bread.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "12-Day Pastrami Brine",
              desc: "First-cut beef brisket cured for 12 days in whole coriander, black pepper, and brown sugar, then slow-steamed to melt-in-your-mouth tenderness.",
              icon: "🥩"
            },
            {
              title: "6:00 AM Morning Hearth",
              desc: "Sourdough, marbled rye, and yeast rolls baked fresh daily so every bite has a crusty snap and pillowy interior.",
              icon: "🥖"
            },
            {
              title: "Local Carolina Farms",
              desc: "Partnering with regional produce growers for crisp hydroponic butterhead lettuce, heirloom tomatoes, and sweet vidalia onions.",
              icon: "🌱"
            },
            {
              title: "Scratch-Simmered Soups",
              desc: "Our tomato basil and chicken noodle soups simmer for 6+ hours with bone broth and fresh chopped herbs—never from a bag or can.",
              icon: "🍲"
            }
          ].map((pillar, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-charcoal-200 shadow-sm space-y-3">
              <div className="text-3xl">{pillar.icon}</div>
              <h3 className="font-serif font-bold text-base text-charcoal-900">{pillar.title}</h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HISTORIC MAIN STREET ATMOSPHERE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cream-200 rounded-3xl border border-charcoal-200/90 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-500">
                604 N Main St Heritage
              </span>
              <h2 className="font-serif font-black text-2xl sm:text-3xl text-charcoal-900">
                In the Heart of Historic Downtown Fuquay
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                Situated steps away from the historic Fuquay Mineral Springs, our building preserves the rich heritage of Wake County while offering modern conveniences like seamless Square POS ordering and curbside pickup off Depot Street.
              </p>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                Whether you're stopping by during your lunch break from a nearby downtown boutique, grabbing boxes for a school event, or picking up a hot lasagna casserole for family dinner, our doors are always open with true Southern hospitality.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setActivePage('location')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-burgundy-700 hover:text-burgundy-900"
                >
                  <span>See Parking &amp; Wayfinding Map</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80" 
                  alt="Deli dining counter" 
                  className="rounded-2xl h-44 w-full object-cover shadow-sm"
                />
                <img 
                  src="https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80" 
                  alt="Fresh carved deli sandwiches" 
                  className="rounded-2xl h-44 w-full object-cover shadow-sm mt-4"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BRAND ASSETS DOWNLOAD SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-charcoal-200 p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <Logo variant="compact" className="scale-125" />
            <div>
              <h3 className="font-serif font-black text-xl text-charcoal-900">
                Deli on Main Street Brand Vector Logo
              </h3>
              <p className="text-xs text-charcoal-600 mt-0.5">
                Download the high-resolution SVG and PNG mark designed exclusively for Deli on Main Street.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={downloadLogoSvg}
            className="bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold text-xs py-3.5 px-6 rounded-xl flex items-center gap-2 shadow-md transition flex-shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Download Vector Logo (.SVG)</span>
          </button>
        </div>
      </section>

    </div>
  );
};
