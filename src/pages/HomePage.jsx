import React, { useState } from 'react';
import { 
  ArrowRight, Sparkles, Star, Clock, MapPin, Search, 
  Filter, Check, ChefHat, ShieldCheck, Car, Flame, 
  Calendar, Coffee, Utensils, Award, Info, Heart
} from 'lucide-react';
import { 
  RESTAURANT_INFO, 
  MENU_CATEGORIES, 
  MENU_ITEMS, 
  WEEKLY_FAMILY_DINNERS, 
  REVIEWS 
} from '../data/deliData';
import { CustomizerModal } from '../components/CustomizerModal';
import { useCart } from '../context/CartContext';
import { Logo } from '../components/Logo';
import { GoogleReviewsSection } from '../components/GoogleReviewsSection';

export const HomePage = ({ setActivePage }) => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('sandwiches');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all');
  const [activeCustomizingItem, setActiveCustomizingItem] = useState(null);

  // Current Day of Week for soup highlight
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDayName = days[new Date().getDay()];
  const [selectedSoupDay, setSelectedSoupDay] = useState(
    currentDayName === "Sunday" ? "Monday" : currentDayName
  );

  // Filter items
  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.ingredients?.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (!matchesCategory || !matchesSearch) return false;

    if (dietaryFilter === 'all') return true;
    if (dietaryFilter === 'vegetarian') return item.dietary?.includes('vegetarian');
    if (dietaryFilter === 'house-favorite') return item.dietary?.includes('house-favorite');
    if (dietaryFilter === 'chef-choice') return item.dietary?.includes('chef-choice');
    if (dietaryFilter === 'gluten-free-friendly') return item.dietary?.includes('gluten-free-friendly') || item.breadOptions?.some(b => b.includes('Gluten-Free'));
    return true;
  });

  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* HERO SECTION (Above the Fold) */}
      <section className="relative overflow-hidden pt-8 pb-14 md:py-20 lg:py-24">
        {/* Ambient Warm Glow background accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-burgundy-700/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge & Heritage pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-300 border border-charcoal-200 text-charcoal-800 text-xs font-semibold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-burgundy-700 animate-pulse" />
                <span>Downtown Fuquay-Varina's Premier Craft Deli</span>
                <span className="text-charcoal-400">•</span>
                <span className="text-burgundy-700 font-bold">604 N Main St</span>
              </div>

              {/* Blueprint Headline */}
              <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tight text-charcoal-900 leading-[1.15]">
                Fresh Deli Sandwiches, Daily Soups, and Family Dinners-to-Go—<span className="text-burgundy-700 inline-block">Crafted Daily</span> in Downtown Fuquay-Varina.
              </h1>

              {/* Blueprint Subheadline */}
              <p className="text-sm sm:text-base text-charcoal-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Skip the rush-hour phone calls. Explore our fully responsive digital menu and secure your weekly family pre-orders seamlessly online.
              </p>

              {/* Blueprint CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-2">
                <a
                  href="#digital-menu"
                  className="w-full sm:w-auto bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold px-7 py-4 rounded-2xl shadow-lg shadow-burgundy-900/25 flex items-center justify-center gap-2.5 transition active:scale-95 group text-sm whitespace-nowrap flex-shrink-0"
                >
                  <Utensils className="w-4 h-4 text-amber-300 flex-shrink-0" />
                  <span className="whitespace-nowrap">View Today's Menu</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setActivePage('catering');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto bg-white hover:bg-cream-200 border-2 border-charcoal-300 text-charcoal-800 font-bold px-7 py-4 rounded-2xl shadow-sm flex items-center justify-center gap-2 transition active:scale-95 text-sm whitespace-nowrap flex-shrink-0"
                >
                  <Calendar className="w-4 h-4 text-burgundy-700 flex-shrink-0" />
                  <span className="whitespace-nowrap">Order Family Dinner To-Go</span>
                </button>
              </div>

              {/* Trust Metrics / Social Proof */}
              <div className="pt-6 border-t border-charcoal-200 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-charcoal-600">
                <a
                  href="#google-reviews"
                  className="flex items-center gap-2 hover:opacity-90 transition group cursor-pointer"
                >
                  <div className="flex text-[#fabb05]">
                    {[1, 2, 3, 4].map(i => (
                      <Star key={i} className="w-4 h-4 fill-[#fabb05] text-[#fabb05]" />
                    ))}
                    <div className="relative">
                      <Star className="w-4 h-4 text-charcoal-300 fill-charcoal-300" />
                      <div className="absolute inset-0 overflow-hidden w-[35%]">
                        <Star className="w-4 h-4 fill-[#fabb05] text-[#fabb05]" />
                      </div>
                    </div>
                  </div>
                  <span className="font-extrabold text-charcoal-900 group-hover:text-burgundy-700 transition">
                    4.3 ★
                  </span>
                  <span className="text-charcoal-600 underline decoration-dotted font-medium">
                    Google Maps (234+ Reviews)
                  </span>
                </a>

                <div className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Square POS Live Kitchen Sync</span>
                </div>

                <div className="flex items-center gap-1.5 font-medium">
                  <Car className="w-4 h-4 text-burgundy-700" />
                  <span>Depot St Curbside Lot</span>
                </div>
              </div>

            </div>

            {/* Right Visual Asset Column: Hero Stacked Sandwich Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Decorative border frame */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-burgundy-700 via-amber-500 to-burgundy-900 opacity-20 blur-lg" />
                
                <div className="relative rounded-3xl bg-white p-3 shadow-2xl border border-charcoal-200/80 overflow-hidden">
                  {/* Hero Sandwich Image */}
                  <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden group">
                    <img 
                      src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1000&q=85" 
                      alt="The Main Street Club - Handcrafted deli sandwich"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-black/20" />

                    {/* Official Deli on Main Street Logo Stamp on Hero */}
                    <div className="absolute top-4 right-4">
                      <Logo variant="badge" className="scale-75 origin-top-right drop-shadow-2xl" />
                    </div>

                    {/* Ingredient Callout Tags floating on image */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-bold text-charcoal-800 shadow-md flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-burgundy-700" />
                      <span>Fresh Sourdough &amp; Smoked Turkey</span>
                    </div>

                    {/* Hero Sandwich Info overlay */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-charcoal-200 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-burgundy-700 block">
                          Today's Featured Craft
                        </span>
                        <h4 className="font-serif font-black text-lg text-charcoal-900">
                          The Main Street Club
                        </h4>
                        <p className="text-[11px] text-charcoal-500">
                          Smoked turkey, honey ham, crispy bacon, cheddar &amp; house mayo
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setActiveCustomizingItem(MENU_ITEMS[0])}
                        className="bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold text-xs px-3.5 py-2.5 rounded-xl flex items-center gap-1 shadow-md transition flex-shrink-0"
                      >
                        <span>$13.95</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                  </div>
                </div>

                {/* Floating mini badge: Depot St Parking Notice */}
                <div className="absolute -bottom-5 -left-4 hidden sm:flex items-center gap-2 bg-charcoal-900 text-white p-3 rounded-2xl shadow-xl border border-charcoal-700 text-xs">
                  <Car className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <div>
                    <span className="font-bold block text-amber-300">Stress-Free Pickup</span>
                    <span className="text-[11px] text-charcoal-300">Park behind on Depot Street</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* VALUE HIGHLIGHTS / TRENDING TICKER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-3xl border border-charcoal-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-burgundy-50 text-burgundy-700 flex items-center justify-center flex-shrink-0">
              <ChefHat className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-charcoal-900">Scratch Kitchen &amp; Cured Meats</h3>
              <p className="text-xs text-charcoal-500 mt-1 leading-relaxed">
                12-day brined pastrami, slow-roasted beef, and breads delivered fresh from local Carolina bakeries each morning.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-charcoal-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-charcoal-900">Direct Square POS Sync</h3>
              <p className="text-xs text-charcoal-500 mt-1 leading-relaxed">
                No blurry Facebook photos or busy phone signals. Your online order transmits instantly to the kitchen display.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-charcoal-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-charcoal-900">Effortless Curbside Pickup</h3>
              <p className="text-xs text-charcoal-500 mt-1 leading-relaxed">
                Pull into our dedicated Depot Street parking spots behind the shop. We run your lunch or dinner right to your car.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* INTERACTIVE DIGITAL MENU SECTION (Replaces Blurry Facebook Photos) */}
      <section id="digital-menu" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-[11px] font-bold uppercase tracking-wider text-burgundy-700 bg-burgundy-50 border border-burgundy-200 px-3 py-1 rounded-full">
            Interactive Digital Menu
          </span>
          <h2 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-charcoal-900">
            Crafted for Clarity. Built for Taste.
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600">
            Clear pricing, certified Square POS integration, and allergen-friendly options made fresh to order.
          </p>
        </div>

        {/* Category Navigation Tabs (Pills) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 mb-8 overflow-x-auto pb-2 px-1 no-scrollbar flex-nowrap sm:flex-wrap">
          {MENU_CATEGORIES.map(cat => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-sm whitespace-nowrap flex-shrink-0 ${
                  isSelected
                    ? 'bg-burgundy-700 text-white shadow-burgundy-900/20 ring-2 ring-burgundy-700'
                    : 'bg-white text-charcoal-700 hover:bg-cream-200 border border-charcoal-200'
                }`}
              >
                <span className="whitespace-nowrap">{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Search & Dietary Filter Bar */}
        <div className="bg-white p-3.5 sm:p-4 rounded-3xl border border-charcoal-200 shadow-sm mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
          
          {/* Live Search */}
          <div className="relative w-full md:w-80 flex-shrink-0">
            <Search className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search sandwiches, ingredients..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-charcoal-200 text-xs focus:outline-none focus:ring-2 focus:ring-burgundy-700 bg-cream-100"
            />
          </div>

          {/* Dietary Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar flex-nowrap md:flex-wrap">
            <span className="text-[11px] font-bold text-charcoal-500 uppercase mr-1 hidden sm:inline whitespace-nowrap flex-shrink-0">
              Filter:
            </span>
            {[
              { id: 'all', label: 'All Items' },
              { id: 'house-favorite', label: '★ Favorites' },
              { id: 'vegetarian', label: 'Vegetarian' },
              { id: 'gluten-free-friendly', label: 'Gluten-Free Friendly' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setDietaryFilter(f.id)}
                className={`text-[11px] px-3 py-1.5 rounded-lg font-semibold transition whitespace-nowrap flex-shrink-0 ${
                  dietaryFilter === f.id
                    ? 'bg-charcoal-800 text-white'
                    : 'bg-cream-200 text-charcoal-600 hover:bg-cream-300'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div 
              key={item.id}
              className="bg-white rounded-3xl border border-charcoal-200/90 shadow-sm hover:shadow-warm-lg transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Card Image */}
              <div className="relative h-52 w-full overflow-hidden bg-cream-300">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Square POS Sync ID Tag */}
                <div className="absolute top-3 left-3 bg-charcoal-900/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-white font-mono flex items-center gap-1 border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Square POS: {item.squareId}</span>
                </div>

                {/* Badge Tag */}
                {item.tag && (
                  <div className={`absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${item.badgeColor || 'bg-burgundy-700 text-white'} shadow-sm`}>
                    {item.tag}
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif font-black text-lg text-charcoal-900 leading-tight group-hover:text-burgundy-700 transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-mono font-bold text-base text-burgundy-700">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>

                  <p className="text-xs text-charcoal-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Ingredients Tags */}
                  {item.ingredients && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {item.ingredients.slice(0, 4).map((ing, i) => (
                        <span key={i} className="text-[10px] bg-cream-200 text-charcoal-600 px-2 py-0.5 rounded font-medium">
                          {ing}
                        </span>
                      ))}
                      {item.ingredients.length > 4 && (
                        <span className="text-[10px] bg-cream-200 text-charcoal-500 px-1.5 py-0.5 rounded font-medium">
                          +{item.ingredients.length - 4} more
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 border-t border-charcoal-100 flex items-center gap-2">
                  {item.category === 'sandwiches' ? (
                    <button
                      type="button"
                      onClick={() => setActiveCustomizingItem(item)}
                      className="flex-1 bg-burgundy-700 hover:bg-burgundy-800 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition shadow-sm flex items-center justify-center gap-1.5"
                    >
                      <span>Customize &amp; Order</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => addToCart(item, 1)}
                      className="flex-1 bg-burgundy-700 hover:bg-burgundy-800 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition shadow-sm flex items-center justify-center gap-1.5"
                    >
                      <span>Add to Order</span>
                      <span className="text-amber-300 font-mono font-bold">${item.price.toFixed(2)}</span>
                    </button>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="bg-white p-12 text-center rounded-3xl border border-charcoal-200 space-y-3">
            <p className="text-sm font-bold text-charcoal-700">No items match your filter.</p>
            <button
              onClick={() => { setSearchQuery(''); setDietaryFilter('all'); }}
              className="text-xs text-burgundy-700 font-bold underline"
            >
              Clear filters and show all
            </button>
          </div>
        )}

      </section>


      {/* DAILY SOUP ROTATION & MORNING BAKERY SHELF */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cream-300/80 rounded-3xl border border-charcoal-200/90 p-6 sm:p-10 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 border border-amber-300 px-2.5 py-0.5 rounded-full">
                Simmered Daily From Scratch
              </span>
              <h2 className="font-serif font-black text-2xl sm:text-3xl text-charcoal-900 mt-1">
                Daily Soups &amp; Hearth Bakery Schedule
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
                Served warm with a fresh house-baked roll. Pick your day to see what is bubbling in our soup kettle!
              </p>
            </div>

            {/* Day Selector Tabs */}
            <div className="flex flex-wrap gap-1 bg-white p-1 rounded-2xl border border-charcoal-200">
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(day => (
                <button
                  key={day}
                  type="button"
                  onClick={() => setSelectedSoupDay(day)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                    selectedSoupDay === day
                      ? 'bg-burgundy-700 text-white shadow-sm'
                      : 'text-charcoal-600 hover:text-burgundy-700'
                  }`}
                >
                  {day.slice(0, 3)}
                  {day === currentDayName && (
                    <span className="ml-1 w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Daily Soup Presentation Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-3xl border border-charcoal-200 shadow-sm">
            <div className="lg:col-span-4 rounded-2xl overflow-hidden h-64 relative">
              <img 
                src={
                  selectedSoupDay === "Monday" || selectedSoupDay === "Wednesday" 
                    ? "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80"
                    : selectedSoupDay === "Tuesday" || selectedSoupDay === "Thursday"
                    ? "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80"
                    : "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80"
                }
                alt="Daily scratch soup"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-burgundy-700 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                {selectedSoupDay}'s Soup Feature
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-600 uppercase">
                  {selectedSoupDay === "Monday" || selectedSoupDay === "Wednesday" ? "Mon / Wed Rotation" :
                   selectedSoupDay === "Tuesday" || selectedSoupDay === "Thursday" ? "Tue / Thu Rotation" :
                   "Friday & Saturday Weekend Chef's Choice"}
                </span>
                <h3 className="font-serif font-black text-2xl text-charcoal-900 mt-0.5">
                  {selectedSoupDay === "Monday" || selectedSoupDay === "Wednesday" 
                    ? "Creamy Tomato Basil with Fresh Sweet Basil & Garlic Confit"
                    : selectedSoupDay === "Tuesday" || selectedSoupDay === "Thursday"
                    ? "Hearty Slow-Simmered Chicken Noodle with Hand-Rolled Noodles"
                    : "Chef's Choice: Fuquay Loaded Russet Potato & Smoked Bacon Chowder"}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                {selectedSoupDay === "Monday" || selectedSoupDay === "Wednesday"
                  ? "Crafted from slow-roasted San Marzano tomatoes, pure sweet cream, garlic confit, and cracked black pepper. Finished with shaved aged parmesan cheese."
                  : selectedSoupDay === "Tuesday" || selectedSoupDay === "Thursday"
                  ? "Rich bone-broth simmered with tender pulled roasted chicken, hand-cut egg noodles, crisp aromatic celery, tender carrots, and garden fresh dill."
                  : "Creamy, decadent chowder loaded with cubed Carolina russet potatoes, thick-cut applewood smoked bacon, Wisconsin sharp cheddar, and tender scallions."}
              </p>

              <div className="bg-cream-100 p-3 rounded-xl border border-charcoal-200 flex items-center justify-between text-xs text-charcoal-700">
                <span className="font-semibold">🥖 Note: Served warm with our house-baked yeast bakery roll.</span>
                <span className="font-mono font-bold text-burgundy-700">$7.25 / Bowl</span>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    const soupItem = MENU_ITEMS.find(i => i.scheduleDays?.includes(selectedSoupDay)) || MENU_ITEMS[6];
                    addToCart(soupItem, 1);
                  }}
                  className="bg-burgundy-700 hover:bg-burgundy-800 text-white text-xs font-bold px-5 py-3 rounded-xl transition shadow-md flex items-center gap-2"
                >
                  <Utensils className="w-3.5 h-3.5" />
                  <span>Add {selectedSoupDay}'s Soup to Order ($7.25)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Morning Bakery Showcase */}
          <div className="pt-4">
            <h4 className="font-serif font-bold text-lg text-charcoal-900 mb-3 flex items-center gap-2">
              <span>Hearth-Baked Daily Selection</span>
              <span className="text-[11px] font-sans font-semibold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full">
                Baked Fresh Every Morning at 6:00 AM
              </span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { name: "House-Baked Chocolate Chip Cookie", desc: "Brown butter, Guittard dark chocolate wafers & Maldon sea salt.", price: "$3.25", item: MENU_ITEMS[9] },
                { name: "Seasonal Fruit & Cream Scone", desc: "Flaky buttermilk scone folded with Carolina blueberries & vanilla glaze.", price: "$3.95", item: MENU_ITEMS[10] },
                { name: "Oversized Belgian Fudge Brownie", desc: "Dense chocolate fudge brownie loaded with chocolate chunks.", price: "$4.25", item: MENU_ITEMS[11] }
              ].map((bakery, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-charcoal-200 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h5 className="font-bold text-xs text-charcoal-900">{bakery.name}</h5>
                      <span className="font-mono font-bold text-xs text-burgundy-700">{bakery.price}</span>
                    </div>
                    <p className="text-[11px] text-charcoal-500 mt-1 leading-normal">{bakery.desc}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => addToCart(bakery.item, 1)}
                    className="mt-3 text-[11px] font-bold text-burgundy-700 hover:text-burgundy-900 flex items-center gap-1 self-start"
                  >
                    <span>+ Add Bakery Item</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* WAYFINDING & OPERATING HOURS SECTION (Two-Column Layout from Blueprint) */}
      <section id="hours-parking" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
          <span className="text-[11px] font-bold uppercase tracking-wider text-burgundy-700 bg-burgundy-50 border border-burgundy-200 px-3 py-1 rounded-full">
            Downtown Wayfinding
          </span>
          <h2 className="font-serif font-black text-2xl sm:text-3xl text-charcoal-900">
            Hours &amp; Stress-Free Parking Guide
          </h2>
          <p className="text-xs text-charcoal-600">
            Conveniently situated in historic Downtown Fuquay-Varina with dual access points.
          </p>
        </div>

        {/* Blueprint 2-Column Layout next to Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Address, Hours, & Depot St Parking Guide */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-charcoal-200 shadow-sm flex flex-col justify-between space-y-6">
            
            {/* Address */}
            <div className="space-y-2">
              <span className="text-[11px] uppercase font-bold text-charcoal-500 tracking-wider block">
                Physical Location
              </span>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-burgundy-50 text-burgundy-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-charcoal-900 leading-tight">
                    {RESTAURANT_INFO.address}
                  </h3>
                  <p className="text-xs text-charcoal-600">
                    Fuquay-Varina, NC {RESTAURANT_INFO.zip}
                  </p>
                  <p className="text-[11px] text-amber-700 font-semibold mt-0.5">
                    Directly in the historic downtown district (across from the mineral springs park)
                  </p>
                </div>
              </div>
            </div>

            {/* Operating Hours Table */}
            <div className="space-y-2 pt-4 border-t border-charcoal-100">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase font-bold text-charcoal-500 tracking-wider">
                  Operating Hours
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Open Now</span>
                </span>
              </div>
              
              <div className="bg-cream-100 rounded-2xl p-4 border border-charcoal-200 text-xs space-y-2">
                <div className="flex justify-between font-semibold text-charcoal-800">
                  <span>Monday – Saturday:</span>
                  <span className="font-mono text-burgundy-700 font-bold">10:30 AM – 7:30 PM</span>
                </div>
                <div className="flex justify-between text-charcoal-500 pt-1 border-t border-charcoal-200">
                  <span>Sunday:</span>
                  <span className="font-medium text-charcoal-600">Closed (Online Pre-orders close 5:00 PM)</span>
                </div>
              </div>
            </div>

            {/* Blueprint Downtown Parking Guide */}
            <div className="space-y-2 pt-4 border-t border-charcoal-100">
              <span className="text-[11px] uppercase font-bold text-charcoal-500 tracking-wider block">
                Downtown Parking Guide
              </span>
              <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 space-y-2 text-xs text-charcoal-700">
                <div className="flex items-start gap-2">
                  <Car className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-amber-950 block">Main Street Parking:</strong>
                    <span>{RESTAURANT_INFO.parkingGuide.mainStreet}</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-amber-200/80 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-emerald-950 block">Depot Street Public Lot (Recommended):</strong>
                    <span>{RESTAURANT_INFO.parkingGuide.depotStreet}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Directions Button */}
            <a
              href="https://share.google/YL28BXXcrL96BPrb4"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-charcoal-900 hover:bg-black text-white text-xs font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Get Driving Directions (Google Maps)</span>
            </a>

          </div>

          {/* Column 2: Interactive Styled Map Component Visualizer */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-charcoal-200 shadow-sm overflow-hidden flex flex-col">
            
            {/* Map Top Bar */}
            <div className="bg-charcoal-800 text-white p-4 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="font-bold">Downtown Fuquay-Varina Wayfinding Map</span>
              </div>
              <span className="text-[11px] text-amber-300 font-mono">604 N Main St ↔ Depot St Lot</span>
            </div>

            {/* SVG Interactive Town Map Visualization */}
            <div className="relative flex-1 bg-[#F5F4EE] min-h-[380px] p-6 flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 600 400" className="w-full h-full max-h-[380px]">
                <defs>
                  <linearGradient id="roadGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#4A4A4A"/>
                    <stop offset="100%" stopColor="#383838"/>
                  </linearGradient>
                </defs>

                {/* Background Grid / Blocks */}
                <rect x="0" y="0" width="600" height="400" fill="#ECE9DE" />
                
                {/* Town Blocks */}
                <rect x="40" y="30" width="220" height="90" rx="8" fill="#DFDACB" stroke="#CDC7B5" strokeWidth="2" />
                <text x="150" y="80" fill="#787364" fontSize="12" fontWeight="700" textAnchor="middle">HISTORIC DISTRICT BOUTIQUES</text>
                
                <rect x="340" y="30" width="220" height="90" rx="8" fill="#DFDACB" stroke="#CDC7B5" strokeWidth="2" />
                <text x="450" y="80" fill="#787364" fontSize="12" fontWeight="700" textAnchor="middle">FUQUAY MINERAL SPRINGS PARK</text>

                <rect x="40" y="270" width="220" height="100" rx="8" fill="#DFDACB" stroke="#CDC7B5" strokeWidth="2" />
                <text x="150" y="325" fill="#787364" fontSize="12" fontWeight="700" textAnchor="middle">DEPOT COMMONS &amp; ARTS</text>

                {/* Main Street Horizontal Road */}
                <rect x="0" y="140" width="600" height="60" fill="url(#roadGrad)" />
                <line x1="0" y1="170" x2="600" y2="170" stroke="#FBBF24" strokeWidth="2" strokeDasharray="15 15" />
                <text x="300" y="162" fill="#FFFFFF" fontSize="11" fontWeight="800" letterSpacing="3" textAnchor="middle">
                  MAIN STREET (FRONT ENTRANCE)
                </text>

                {/* Depot Street Road */}
                <rect x="280" y="220" width="50" height="180" fill="#4A4A4A" />
                <text x="305" y="340" fill="#FFFFFF" fontSize="10" fontWeight="700" letterSpacing="2" textAnchor="middle" transform="rotate(-90 305 340)">
                  DEPOT ST
                </text>

                {/* Depot Street Municipal Parking Lot */}
                <rect x="350" y="240" width="210" height="130" rx="12" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 4" />
                <text x="455" y="265" fill="#38BDF8" fontSize="12" fontWeight="900" textAnchor="middle">
                  FREE MUNICIPAL PARKING LOT
                </text>
                <text x="455" y="280" fill="#94A3B8" fontSize="10" textAnchor="middle">
                  (Behind Deli on Main Street • 80+ Spaces)
                </text>

                {/* Parking Spots 1-6 */}
                {[0, 1, 2, 3, 4].map(idx => (
                  <g key={idx} transform={`translate(${370 + idx * 34}, 300)`}>
                    <rect x="0" y="0" width="28" height="48" rx="4" fill="#0F172A" stroke="#E2E8F0" strokeWidth="1" />
                    <text x="14" y="28" fill="#38BDF8" fontSize="9" fontWeight="bold" textAnchor="middle">
                      P{idx + 1}
                    </text>
                  </g>
                ))}
                <text x="455" y="362" fill="#FBBF24" fontSize="9" fontWeight="bold" textAnchor="middle">
                  ★ CURBSIDE PICKUP SPOTS 1 - 5 ★
                </text>

                {/* Deli on Main Street Building (Center Anchor) */}
                <rect x="220" y="75" width="160" height="85" rx="10" fill="#8B0000" stroke="#D97706" strokeWidth="3" />
                <text x="300" y="103" fill="#FFFFFF" fontSize="11.5" fontWeight="900" textAnchor="middle">
                  DELI ON MAIN STREET
                </text>
                <text x="300" y="120" fill="#FDE68A" fontSize="9" fontWeight="700" letterSpacing="1" textAnchor="middle">
                  604 N MAIN ST
                </text>
                <text x="300" y="136" fill="#FFFFFF" fontSize="8" fontWeight="600" textAnchor="middle">
                  FRONT &amp; REAR DOORS
                </text>

                {/* Walkway Connector from Depot lot to rear deli door */}
                <line x1="300" y1="160" x2="300" y2="240" stroke="#8B0000" strokeWidth="3" strokeDasharray="4 3" />
                <line x1="300" y1="240" x2="350" y2="240" stroke="#8B0000" strokeWidth="3" strokeDasharray="4 3" />
                
                {/* Visual Pin */}
                <circle cx="300" cy="65" r="14" fill="#8B0000" stroke="#FFFFFF" strokeWidth="2" />
                <text x="300" y="70" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">📍</text>
              </svg>

              {/* Map floating banner */}
              <div className="absolute bottom-3 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-charcoal-200 text-xs flex items-center justify-between shadow-md">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-burgundy-700" />
                  <span className="font-bold text-charcoal-900">Dual Access:</span>
                  <span className="text-charcoal-600 hidden sm:inline">Walk in from Main St or pick up curbside on Depot St.</span>
                </div>
                <span className="text-[11px] font-mono font-bold text-burgundy-700">604 N Main St</span>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* GOOGLE CUSTOMER REVIEWS SHOWCASE */}
      <GoogleReviewsSection />

      {/* Customizer Modal for Sandwiches */}
      <CustomizerModal 
        item={activeCustomizingItem}
        isOpen={!!activeCustomizingItem}
        onClose={() => setActiveCustomizingItem(null)}
      />

    </div>
  );
};
