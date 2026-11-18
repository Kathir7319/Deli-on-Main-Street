import React, { useState, useEffect } from 'react';
import { 
  Calendar, Clock, Users, CheckCircle2, ShieldCheck, 
  Sparkles, ArrowRight, Car, ChefHat, AlertCircle, FileText, 
  HelpCircle, Check, Send, Phone, Mail, Building
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { WEEKLY_FAMILY_DINNERS, CATERING_PACKAGES, RESTAURANT_INFO } from '../data/deliData';
import { useCart } from '../context/CartContext';

export const CateringPage = () => {
  const { addToCart, showToast } = useCart();

  // Weekly Family Meal State
  const [selectedMeal, setSelectedMeal] = useState(WEEKLY_FAMILY_DINNERS[0]);
  const [familyPickupDay, setFamilyPickupDay] = useState("Tuesday Afternoon (4:00 - 7:00 PM)");
  const [familyTimeSlot, setFamilyTimeSlot] = useState("5:15 PM (Curbside)");
  const [familyPortionCount, setFamilyPortionCount] = useState(1);

  // Corporate Catering Form State
  const [guestCount, setGuestCount] = useState(25);
  const [selectedPackage, setSelectedPackage] = useState(CATERING_PACKAGES[1].id); // Boxed lunches default
  const [contactName, setContactName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('11:30 AM');
  const [serviceType, setServiceType] = useState('delivery'); // 'delivery' | 'pickup'
  const [dietaryRequirements, setDietaryRequirements] = useState('');
  const [submittedInquiry, setSubmittedInquiry] = useState(null);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  // Sunday 5:00 PM Countdown calculation
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 14, minutes: 22, seconds: 40 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Calculate Catering Quote
  const currentPackageData = CATERING_PACKAGES.find(p => p.id === selectedPackage) || CATERING_PACKAGES[0];
  const quotePerPerson = currentPackageData.pricePerPerson;
  const quoteSubtotal = quotePerPerson * guestCount;
  const quoteTax = quoteSubtotal * 0.07;
  const quoteDeliveryFee = serviceType === 'delivery' ? 25.00 : 0.00;
  const quoteTotal = quoteSubtotal + quoteTax + quoteDeliveryFee;

  const handleAddFamilyDinnerToCart = () => {
    addToCart(selectedMeal, familyPortionCount, {
      pickupDay: familyPickupDay,
      timeSlot: familyTimeSlot,
      servings: "4-6 People",
      instructions: selectedMeal.heatingInstructions
    });
  };

  const handleCateringSubmit = (e) => {
    e.preventDefault();
    if (!contactName || !organization || !email || !phone || !eventDate) {
      showToast("Please fill in the required contact and event date fields.");
      return;
    }

    setIsSubmittingForm(true);

    setTimeout(() => {
      setIsSubmittingForm(false);
      const ticketId = `CAT-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedInquiry({
        ticketId,
        contactName,
        organization,
        email,
        phone,
        eventDate,
        eventTime,
        guestCount,
        packageName: currentPackageData.name,
        quoteTotal,
        serviceType
      });

      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch {
        // ignore
      }
    }, 1000);
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      
      {/* PAGE HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-burgundy-700 bg-burgundy-50 border border-burgundy-200 px-3.5 py-1 rounded-full inline-block">
          Large Format &amp; Pre-Order Systems
        </span>
        <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-charcoal-900 max-w-3xl mx-auto leading-tight">
          Weekly Family Dinners &amp; Corporate Catering
        </h1>
        <p className="text-xs sm:text-sm text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
          From stress-free weeknight family dinners with curbside pickup to individually boxed lunches for local Fuquay-Varina schools and offices.
        </p>
      </section>


      {/* SECTION 1: WEEKLY FAMILY DINNER-TO-GO PRE-ORDERING SYSTEM (From Blueprint) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pitch Banner */}
        <div className="bg-gradient-to-br from-burgundy-800 via-burgundy-900 to-burgundy-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-8">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300 bg-black/40 px-3 py-1 rounded-full border border-amber-400/30">
              Chef-Prepared Weekly Pre-Order
            </span>
            <h2 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl leading-tight">
              Take the stress out of weeknight cooking.
            </h2>
            <p className="text-xs sm:text-sm text-cream-200 leading-relaxed">
              Our chef-prepared family meals serve 4–6 people, come fully cooked, and include simple 20-minute heating instructions. Pick up curbside on Depot Street without ever stepping out of your car.
            </p>
          </div>

          {/* Live Cutoff Countdown Timer */}
          <div className="mt-6 pt-6 border-t border-burgundy-700/60 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                Strict Order Deadline: Every Sunday at 5:00 PM
              </span>
              <span className="text-xs text-cream-300">
                Guarantees kitchen prep &amp; scratch baking for Tuesday/Thursday pickups.
              </span>
            </div>

            {/* Countdown Clock Display */}
            <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-center flex-nowrap flex-shrink-0">
              <div className="bg-black/60 w-13 sm:w-14 py-2 px-1 rounded-xl border border-white/10 flex flex-col items-center justify-center">
                <span className="block font-black text-base sm:text-lg text-white leading-tight">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="text-[9px] uppercase font-bold text-charcoal-300 tracking-wider">Days</span>
              </div>
              <span className="text-amber-400 font-bold">:</span>
              <div className="bg-black/60 w-13 sm:w-14 py-2 px-1 rounded-xl border border-white/10 flex flex-col items-center justify-center">
                <span className="block font-black text-base sm:text-lg text-white leading-tight">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-[9px] uppercase font-bold text-charcoal-300 tracking-wider">Hours</span>
              </div>
              <span className="text-amber-400 font-bold">:</span>
              <div className="bg-black/60 w-13 sm:w-14 py-2 px-1 rounded-xl border border-white/10 flex flex-col items-center justify-center">
                <span className="block font-black text-base sm:text-lg text-white leading-tight">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-[9px] uppercase font-bold text-charcoal-300 tracking-wider">Mins</span>
              </div>
              <span className="text-amber-400 font-bold">:</span>
              <div className="bg-black/60 w-13 sm:w-14 py-2 px-1 rounded-xl border border-white/10 flex flex-col items-center justify-center">
                <span className="block font-black text-base sm:text-lg text-amber-300 leading-tight">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-[9px] uppercase font-bold text-charcoal-300 tracking-wider">Secs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Entrée Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Meal Choice Cards */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="font-serif font-black text-xl text-charcoal-900 flex items-center gap-2">
              <span>This Week's Chef Entrées</span>
              <span className="text-xs font-sans font-semibold text-charcoal-500">(Choose One)</span>
            </h3>

            <div className="space-y-4">
              {WEEKLY_FAMILY_DINNERS.map((meal) => {
                const isSelected = selectedMeal.id === meal.id;
                return (
                  <div
                    key={meal.id}
                    onClick={() => setSelectedMeal(meal)}
                    className={`p-5 rounded-3xl border transition-all cursor-pointer bg-white flex flex-col sm:flex-row gap-5 ${
                      isSelected
                        ? 'border-burgundy-700 ring-2 ring-burgundy-700 shadow-warm'
                        : 'border-charcoal-200 hover:border-charcoal-300 shadow-sm'
                    }`}
                  >
                    <img 
                      src={meal.image} 
                      alt={meal.title}
                      className="w-full sm:w-44 h-40 rounded-2xl object-cover flex-shrink-0"
                    />
                    
                    <div className="flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-burgundy-700 bg-burgundy-50 px-2 py-0.5 rounded">
                              {meal.badge}
                            </span>
                            <h4 className="font-serif font-black text-lg text-charcoal-900 mt-1">
                              {meal.title}
                            </h4>
                          </div>
                          <span className="font-mono font-bold text-xl text-burgundy-700 flex-shrink-0">
                            ${meal.price.toFixed(2)}
                          </span>
                        </div>

                        <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
                          {meal.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-charcoal-100 text-xs">
                        <span className="font-semibold text-charcoal-700">
                          Serves 4–6 Adults
                        </span>
                        <div className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${
                          isSelected ? 'bg-burgundy-700 text-white' : 'bg-cream-200 text-charcoal-700'
                        }`}>
                          {isSelected ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Selected</span>
                            </>
                          ) : (
                            <span>Select Entrée</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Included Sides Breakdown (Blueprint Specifications) */}
            <div className="bg-cream-200 p-6 rounded-3xl border border-charcoal-200/90 space-y-3">
              <h4 className="font-serif font-bold text-base text-charcoal-900 flex items-center gap-2">
                <span>Every Family Dinner Package Includes:</span>
                <span className="text-xs font-sans text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded-full">
                  All 4 Sides Included
                </span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-charcoal-700">
                <div className="bg-white p-3 rounded-xl border border-charcoal-200 flex items-center gap-2">
                  <span className="text-base">🧄</span>
                  <div>
                    <strong className="block text-charcoal-900">Roasted Garlic Green Beans</strong>
                    <span className="text-[11px] text-charcoal-500">Tender beans tossed with lemon zest</span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-charcoal-200 flex items-center gap-2">
                  <span className="text-base">🥔</span>
                  <div>
                    <strong className="block text-charcoal-900">Crispy Rosemary Red Potatoes</strong>
                    <span className="text-[11px] text-charcoal-500">Olive oil &amp; cracked sea salt roasted</span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-charcoal-200 flex items-center gap-2">
                  <span className="text-base">🥗</span>
                  <div>
                    <strong className="block text-charcoal-900">Large Crisp Garden Salad</strong>
                    <span className="text-[11px] text-charcoal-500">Cucumbers, tomatoes &amp; house vinaigrette</span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-charcoal-200 flex items-center gap-2">
                  <span className="text-base">🥖</span>
                  <div>
                    <strong className="block text-charcoal-900">6 House-Baked Yeast Rolls</strong>
                    <span className="text-[11px] text-charcoal-500">Fluffy rolls with whipped honey butter</span>
                  </div>
                </div>
              </div>

              {/* Heating note */}
              <div className="p-3 bg-white rounded-xl border border-charcoal-200 text-xs text-charcoal-600 flex items-start gap-2">
                <Info className="w-4 h-4 text-burgundy-700 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Heating Instructions:</strong> {selectedMeal.heatingInstructions}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Pre-Order Reservation Form / Square Online Ordering Simulation */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-charcoal-200 shadow-warm space-y-6 sticky top-28">
            
            <div className="border-b border-charcoal-200 pb-4">
              <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-700 font-semibold mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Square Online Widget • Sync ID: {selectedMeal.squareId}</span>
              </div>
              <h3 className="font-serif font-black text-2xl text-charcoal-900">
                Pre-Order Reservation
              </h3>
              <p className="text-xs text-charcoal-500 mt-0.5">
                Lock in your family dinner for curbside pickup on Depot Street.
              </p>
            </div>

            {/* Selected Entrée Summary */}
            <div className="bg-cream-100 p-4 rounded-2xl border border-charcoal-200 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-charcoal-500 block">Selected Meal</span>
                <span className="font-serif font-bold text-sm text-charcoal-900 block">{selectedMeal.title}</span>
                <span className="text-xs text-charcoal-500 font-medium">Includes all 4 sides • Serves 4-6</span>
              </div>
              <span className="font-mono font-bold text-lg text-burgundy-700">
                ${selectedMeal.price.toFixed(2)}
              </span>
            </div>

            {/* Pickup Day Selector (Blueprint: Tuesday / Thursday Curbside) */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider">
                1. Select Curbside Pickup Day <span className="text-burgundy-700">*</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Tuesday Afternoon (4:00 - 7:00 PM)",
                  "Thursday Afternoon (4:00 - 7:00 PM)"
                ].map(day => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setFamilyPickupDay(day)}
                    className={`p-3 rounded-xl border text-left text-xs transition ${
                      familyPickupDay === day
                        ? 'border-burgundy-700 bg-burgundy-50 text-burgundy-900 font-bold ring-1 ring-burgundy-700'
                        : 'border-charcoal-200 hover:border-charcoal-300 text-charcoal-700'
                    }`}
                  >
                    <span className="block font-bold">{day.split(' ')[0]}</span>
                    <span className="text-[10px] text-charcoal-500 block">4:00 PM – 7:00 PM</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Pickup Time Slot */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider">
                2. Approximate Curbside Time Slot
              </label>
              <select
                value={familyTimeSlot}
                onChange={e => setFamilyTimeSlot(e.target.value)}
                className="w-full bg-cream-100 border border-charcoal-300 rounded-xl p-3 text-xs focus:ring-2 focus:ring-burgundy-700 focus:outline-none"
              >
                <option value="4:15 PM">4:15 PM – Early School Pickup Window</option>
                <option value="4:45 PM">4:45 PM – Commute Window</option>
                <option value="5:15 PM (Curbside)">5:15 PM – Peak Rush Curbside</option>
                <option value="5:45 PM">5:45 PM – Evening Family Slot</option>
                <option value="6:15 PM">6:15 PM – Late Window</option>
                <option value="6:45 PM">6:45 PM – Final Evening Pickup</option>
              </select>
            </div>

            {/* Portions count */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider">
                3. Number of Family Meals (Serves 4-6 Each)
              </label>
              <div className="flex items-center gap-3">
                {[1, 2, 3].map(count => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setFamilyPortionCount(count)}
                    className={`flex-1 py-2.5 rounded-xl border text-xs font-bold transition ${
                      familyPortionCount === count
                        ? 'bg-charcoal-900 text-white border-charcoal-900'
                        : 'bg-white text-charcoal-700 border-charcoal-200 hover:bg-cream-100'
                    }`}
                  >
                    {count} Meal ({count * 5} servings)
                  </button>
                ))}
              </div>
            </div>

            {/* Curbside instructions note */}
            <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
              <Car className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Curbside Guarantee:</strong> Reserved parking spot in Depot St rear lot. You will receive an SMS reminder 30 minutes before your slot.
              </span>
            </div>

            {/* Action CTA */}
            <button
              type="button"
              onClick={handleAddFamilyDinnerToCart}
              className="w-full bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-burgundy-900/25 flex items-center justify-between transition group"
            >
              <span>Add Family Dinner to Basket</span>
              <span className="font-mono text-amber-300 font-extrabold text-base">
                ${(selectedMeal.price * familyPortionCount).toFixed(2)}
              </span>
            </button>

            <p className="text-[10px] text-center text-charcoal-500">
              🔒 Seamless Square POS processing. Pre-order cut-off strictly Sunday at 5:00 PM.
            </p>

          </div>

        </div>

      </section>


      {/* SECTION 2: CORPORATE & INSTITUTIONAL CATERING REQUEST FORM (From Blueprint) */}
      <section id="corporate-catering" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl border border-charcoal-200 p-6 sm:p-12 shadow-sm space-y-10">
          
          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-burgundy-700 bg-burgundy-50 border border-burgundy-200 px-3 py-1 rounded-full inline-block">
              Institutional &amp; Office Catering
            </span>
            <h2 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl text-charcoal-900">
              Corporate &amp; School Catering Request Form
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              Serving Downtown Fuquay-Varina businesses, Wake County schools, medical clinics, and events. Seamless ordering with zero handwritten faxes or messy email threads.
            </p>
          </div>

          {/* Form and Live Quote Estimator Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Form Column */}
            <form onSubmit={handleCateringSubmit} className="lg:col-span-7 space-y-6">
              
              {/* Package Selection */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider">
                  Select Catering Package <span className="text-burgundy-700">*</span>
                </label>
                <div className="space-y-3">
                  {CATERING_PACKAGES.map(pkg => {
                    const isSelected = selectedPackage === pkg.id;
                    return (
                      <div
                        key={pkg.id}
                        onClick={() => setSelectedPackage(pkg.id)}
                        className={`p-4 rounded-2xl border cursor-pointer transition ${
                          isSelected
                            ? 'border-burgundy-700 bg-burgundy-50/50 ring-2 ring-burgundy-700'
                            : 'border-charcoal-200 hover:border-charcoal-300 bg-cream-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-charcoal-900">{pkg.name}</span>
                          <span className="font-mono font-bold text-burgundy-700 text-sm">
                            ${pkg.pricePerPerson.toFixed(2)} / person
                          </span>
                        </div>
                        <p className="text-xs text-charcoal-600 mt-1">{pkg.description}</p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {pkg.includes.slice(0, 3).map((inc, idx) => (
                            <span key={idx} className="text-[10px] bg-white border border-charcoal-200 text-charcoal-600 px-2 py-0.5 rounded">
                              ✓ {inc}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Guest Count Slider */}
              <div className="space-y-3 bg-cream-100 p-4 rounded-2xl border border-charcoal-200">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-charcoal-800 uppercase tracking-wider">
                    Estimated Guest Count (Min. 10 People)
                  </label>
                  <span className="font-serif font-black text-xl text-burgundy-700 bg-white px-3 py-1 rounded-xl border border-charcoal-200">
                    {guestCount} Guests
                  </span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="150" 
                  step="5"
                  value={guestCount}
                  onChange={e => setGuestCount(parseInt(e.target.value))}
                  className="w-full accent-burgundy-700 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-charcoal-500 font-mono">
                  <span>10 Guests (Small Group)</span>
                  <span>50 Guests</span>
                  <span>100 Guests</span>
                  <span>150+ Guests</span>
                </div>
              </div>

              {/* Contact Information Fields (From Blueprint) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-charcoal-700">
                    Contact Person Name <span className="text-burgundy-700">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rachel Miller"
                    value={contactName}
                    onChange={e => setContactName(e.target.value)}
                    className="w-full p-3 bg-white border border-charcoal-300 rounded-xl text-xs focus:ring-2 focus:ring-burgundy-700 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-charcoal-700">
                    Company / School / Organization <span className="text-burgundy-700">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Fuquay-Varina High / Tech Firm"
                    value={organization}
                    onChange={e => setOrganization(e.target.value)}
                    className="w-full p-3 bg-white border border-charcoal-300 rounded-xl text-xs focus:ring-2 focus:ring-burgundy-700 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-charcoal-700">
                    Direct Email Address <span className="text-burgundy-700">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rachel@organization.org"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full p-3 bg-white border border-charcoal-300 rounded-xl text-xs focus:ring-2 focus:ring-burgundy-700 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-charcoal-700">
                    Direct Phone Number <span className="text-burgundy-700">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(919) 555-0199"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full p-3 bg-white border border-charcoal-300 rounded-xl text-xs focus:ring-2 focus:ring-burgundy-700 focus:outline-none"
                  />
                </div>
              </div>

              {/* Event Timing & Delivery Service */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-charcoal-700">
                    Event Date <span className="text-burgundy-700">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={eventDate}
                    onChange={e => setEventDate(e.target.value)}
                    className="w-full p-3 bg-white border border-charcoal-300 rounded-xl text-xs focus:ring-2 focus:ring-burgundy-700 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-charcoal-700">
                    Requested Time <span className="text-burgundy-700">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 11:30 AM"
                    value={eventTime}
                    onChange={e => setEventTime(e.target.value)}
                    className="w-full p-3 bg-white border border-charcoal-300 rounded-xl text-xs focus:ring-2 focus:ring-burgundy-700 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-charcoal-700">
                    Delivery Option
                  </label>
                  <select
                    value={serviceType}
                    onChange={e => setServiceType(e.target.value)}
                    className="w-full p-3 bg-white border border-charcoal-300 rounded-xl text-xs focus:ring-2 focus:ring-burgundy-700 focus:outline-none"
                  >
                    <option value="delivery">Catering Van Delivery ($25)</option>
                    <option value="pickup">Curbside Pickup (Free)</option>
                  </select>
                </div>
              </div>

              {/* Dietary Needs & Notes (From Blueprint) */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-charcoal-700">
                  Special Dietary Needs / Custom Instructions
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g., 3 Gluten-Free boxes, 2 Vegetarian portobello wraps, nut-free setup, deliver to 2nd floor conference room A..."
                  value={dietaryRequirements}
                  onChange={e => setDietaryRequirements(e.target.value)}
                  className="w-full p-3 bg-white border border-charcoal-300 rounded-xl text-xs focus:ring-2 focus:ring-burgundy-700 focus:outline-none"
                />
              </div>

              {/* Form Submit CTA */}
              <button
                type="submit"
                disabled={isSubmittingForm}
                className="w-full bg-burgundy-700 hover:bg-burgundy-800 disabled:opacity-50 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-burgundy-900/20 flex items-center justify-center gap-2 transition text-sm group"
              >
                {isSubmittingForm ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Transmitting to Kitchen Catering Manager...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-amber-300" />
                    <span>Submit Catering Request &rarr;</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-charcoal-500 text-center">
                Automated confirmation email is sent immediately, and our kitchen manager contacts you within 2 business hours.
              </p>

            </form>

            {/* Live Quote Estimator Widget */}
            <div className="lg:col-span-5 bg-cream-100 p-6 sm:p-8 rounded-3xl border border-charcoal-200/90 shadow-sm space-y-6 sticky top-28">
              <div>
                <span className="text-[10px] uppercase font-bold text-burgundy-700 tracking-wider block">
                  Instant Estimate
                </span>
                <h3 className="font-serif font-black text-2xl text-charcoal-900">
                  Catering Proposal Preview
                </h3>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-charcoal-200 space-y-3 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-charcoal-100">
                  <span className="font-bold text-charcoal-900">{currentPackageData.name}</span>
                  <span className="text-charcoal-600 font-mono">${quotePerPerson.toFixed(2)} / ea</span>
                </div>

                <div className="space-y-1.5 text-charcoal-600">
                  <div className="flex justify-between">
                    <span>{guestCount} Guests &times; ${quotePerPerson.toFixed(2)}</span>
                    <span className="font-mono text-charcoal-900 font-semibold">${quoteSubtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated NC Sales Tax (7%)</span>
                    <span className="font-mono text-charcoal-900">${quoteTax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service ({serviceType === 'delivery' ? 'Local Fuquay Delivery' : 'Curbside Pickup'})</span>
                    <span className="font-mono text-charcoal-900">${quoteDeliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-charcoal-900 font-bold text-base pt-2 border-t border-charcoal-200">
                    <span>Estimated Total</span>
                    <span className="font-mono text-burgundy-700 font-black">${quoteTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* What Happens Next Checklist */}
              <div className="space-y-2 text-xs text-charcoal-700">
                <h5 className="font-bold text-charcoal-900 uppercase tracking-wider text-[11px]">
                  Our Catering Process:
                </h5>
                <ul className="space-y-1.5">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Individual box labeling with attendee names</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>School &amp; corporate invoicing / PO support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Compostable cutlery, napkins &amp; condiment sets</span>
                  </li>
                </ul>
              </div>

              {/* Direct Inquiries Note */}
              <div className="bg-white p-4 rounded-2xl border border-charcoal-200 text-xs space-y-1 text-charcoal-600">
                <span className="font-bold text-charcoal-900 block">Need a custom menu or have questions?</span>
                <p>Call our catering desk directly at <a href="tel:9193461060" className="font-bold text-burgundy-700 underline">(919) 346-1060</a> or email <span className="font-mono text-charcoal-800">catering@delionmainstreet.com</span>.</p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CONFIRMATION INQUIRY MODAL (When Catering Form Submitted) */}
      {submittedInquiry && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 text-center space-y-5 shadow-2xl border border-charcoal-200">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-burgundy-700 bg-burgundy-50 px-2 py-0.5 rounded font-bold">
                Ticket # {submittedInquiry.ticketId}
              </span>
              <h3 className="font-serif font-black text-2xl text-charcoal-900 mt-2">
                Catering Request Transmitted!
              </h3>
              <p className="text-xs text-charcoal-600 mt-1">
                Thank you, <strong>{submittedInquiry.contactName}</strong>! Our kitchen manager has received your inquiry for <strong>{submittedInquiry.organization}</strong>.
              </p>
            </div>

            <div className="bg-cream-100 p-4 rounded-2xl border border-charcoal-200 text-xs text-left space-y-1.5 text-charcoal-700">
              <div className="flex justify-between">
                <span className="text-charcoal-500">Event Date:</span>
                <span className="font-bold text-charcoal-900">{submittedInquiry.eventDate} @ {submittedInquiry.eventTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-charcoal-500">Package:</span>
                <span className="font-bold text-charcoal-900">{submittedInquiry.packageName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-charcoal-500">Guest Count:</span>
                <span className="font-bold text-charcoal-900">{submittedInquiry.guestCount} People</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-charcoal-200">
                <span className="text-charcoal-500">Estimated Total:</span>
                <span className="font-mono font-bold text-burgundy-700">${submittedInquiry.quoteTotal.toFixed(2)}</span>
              </div>
            </div>

            <p className="text-[11px] text-charcoal-500">
              An itemized confirmation has been emailed to <strong>{submittedInquiry.email}</strong>.
            </p>

            <button
              type="button"
              onClick={() => setSubmittedInquiry(null)}
              className="w-full bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold py-3 px-4 rounded-xl text-xs transition"
            >
              Close Confirmation
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
