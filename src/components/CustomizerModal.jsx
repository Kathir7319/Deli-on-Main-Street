import React, { useState } from 'react';
import { X, Check, Plus, Minus, ShieldCheck, Flame, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CustomizerModal = ({ item, isOpen, onClose }) => {
  if (!isOpen || !item) return null;

  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedBread, setSelectedBread] = useState(
    item.breadOptions ? item.breadOptions[0] : "Standard Sourdough"
  );
  const [toasting, setToasting] = useState("Warm Toasted");
  const [extraBacon, setExtraBacon] = useState(false);
  const [extraCheese, setExtraCheese] = useState(false);
  const [extraAvocado, setExtraAvocado] = useState(false);
  const [dressingLevel, setDressingLevel] = useState("Regular");
  const [specialInstructions, setSpecialInstructions] = useState("");

  const calculateUnitTotal = () => {
    let price = item.price;
    if (selectedBread.includes("Gluten-Free")) price += 1.50;
    if (extraBacon) price += 2.00;
    if (extraCheese) price += 1.25;
    if (extraAvocado) price += 1.75;
    return price;
  };

  const unitTotal = calculateUnitTotal();
  const grandTotal = unitTotal * quantity;

  const handleAddToCart = () => {
    addToCart(item, quantity, {
      bread: selectedBread,
      toasting,
      extraBacon,
      extraCheese,
      extraAvocado,
      dressingLevel,
      specialInstructions: specialInstructions.trim()
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#FBFBF9] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-charcoal-200 my-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Hero Image */}
        <div className="relative h-52 w-full overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FBFBF9] via-black/20 to-transparent" />
          
          {/* Square POS Sync ID Badge */}
          <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 text-xs text-white font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Square POS: {item.squareId}</span>
          </div>

          <div className="absolute bottom-3 left-5 right-5 flex justify-between items-end">
            <div>
              <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${item.badgeColor || 'bg-burgundy-700 text-white'} mb-1`}>
                {item.tag || "Fresh Deli Craft"}
              </span>
              <h3 className="font-serif font-black text-2xl text-charcoal-900 leading-tight">
                {item.name}
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xs text-charcoal-500 font-semibold uppercase block">Base Price</span>
              <span className="font-sans font-bold text-xl text-burgundy-700">${item.price.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-6 space-y-5 max-h-[60vh] overflow-y-auto">
          {/* Description & Ingredients */}
          <div className="bg-white p-4 rounded-2xl border border-charcoal-100 shadow-sm">
            <p className="text-xs text-charcoal-600 leading-relaxed">
              {item.description}
            </p>
            {item.ingredients && (
              <div className="mt-3 pt-3 border-t border-charcoal-100 flex flex-wrap gap-1.5">
                {item.ingredients.map((ing, idx) => (
                  <span key={idx} className="text-[11px] bg-cream-200 text-charcoal-700 px-2 py-0.5 rounded-md font-medium">
                    ✓ {ing}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Bread Choice (if applicable) */}
          {item.breadOptions && item.breadOptions.length > 0 && (
            <div>
              <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-2">
                1. Select Hearth Bread <span className="text-burgundy-700">*</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {item.breadOptions.map(bread => (
                  <button
                    key={bread}
                    type="button"
                    onClick={() => setSelectedBread(bread)}
                    className={`p-3 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between ${
                      selectedBread === bread 
                        ? 'border-burgundy-700 bg-burgundy-50 text-burgundy-900 font-bold shadow-sm ring-1 ring-burgundy-700' 
                        : 'border-charcoal-200 bg-white text-charcoal-700 hover:border-charcoal-300'
                    }`}
                  >
                    <span>{bread}</span>
                    {selectedBread === bread && <Check className="w-3.5 h-3.5 text-burgundy-700 ml-1 flex-shrink-0" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Toasting Style */}
          <div>
            <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-2">
              2. Toasting Style
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Warm Toasted", sub: "Golden & crisp" },
                { label: "Pressed Panini", sub: "Melted press" },
                { label: "Cold Deli", sub: "Fresh sliced" }
              ].map(opt => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => setToasting(opt.label)}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    toasting === opt.label
                      ? 'border-burgundy-700 bg-burgundy-50 text-burgundy-900 font-bold ring-1 ring-burgundy-700'
                      : 'border-charcoal-200 bg-white text-charcoal-700 hover:border-charcoal-300'
                  }`}
                >
                  <span className="block text-xs font-semibold">{opt.label}</span>
                  <span className="block text-[10px] text-charcoal-500">{opt.sub}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Upgrades & Add-ons */}
          <div>
            <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-2">
              3. Chef's Custom Upgrades
            </label>
            <div className="space-y-2">
              <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-charcoal-200 cursor-pointer hover:border-charcoal-300">
                <div className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    checked={extraBacon} 
                    onChange={e => setExtraBacon(e.target.checked)}
                    className="rounded text-burgundy-700 focus:ring-burgundy-700 h-4 w-4"
                  />
                  <span className="text-xs font-medium text-charcoal-800">Double Applewood Smoked Bacon</span>
                </div>
                <span className="text-xs font-bold text-burgundy-700">+$2.00</span>
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-charcoal-200 cursor-pointer hover:border-charcoal-300">
                <div className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    checked={extraCheese} 
                    onChange={e => setExtraCheese(e.target.checked)}
                    className="rounded text-burgundy-700 focus:ring-burgundy-700 h-4 w-4"
                  />
                  <span className="text-xs font-medium text-charcoal-800">Extra Melted Sharp Cheddar / Swiss</span>
                </div>
                <span className="text-xs font-bold text-burgundy-700">+$1.25</span>
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-charcoal-200 cursor-pointer hover:border-charcoal-300">
                <div className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    checked={extraAvocado} 
                    onChange={e => setExtraAvocado(e.target.checked)}
                    className="rounded text-burgundy-700 focus:ring-burgundy-700 h-4 w-4"
                  />
                  <span className="text-xs font-medium text-charcoal-800">Fresh Sliced Avocado</span>
                </div>
                <span className="text-xs font-bold text-burgundy-700">+$1.75</span>
              </label>
            </div>
          </div>

          {/* Dressing Preference */}
          <div>
            <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-2">
              4. Sauce &amp; Condiments Level
            </label>
            <div className="flex gap-2">
              {["Light Sauce", "Regular (Chef Standard)", "Extra Sauce", "Sauce on Side"].map(lvl => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setDressingLevel(lvl)}
                  className={`flex-1 py-2 px-1 text-center rounded-lg border text-[11px] font-medium transition-all ${
                    dressingLevel === lvl 
                      ? 'border-burgundy-700 bg-burgundy-50 text-burgundy-800 font-bold' 
                      : 'border-charcoal-200 bg-white text-charcoal-600'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Special Kitchen Request */}
          <div>
            <label className="block text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-1">
              Special Instructions
            </label>
            <textarea
              value={specialInstructions}
              onChange={e => setSpecialInstructions(e.target.value)}
              placeholder="e.g. No tomato, dressing on side, cut into quarters for kids..."
              rows={2}
              className="w-full text-xs p-3 rounded-xl border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-burgundy-700 bg-white"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 bg-white border-t border-charcoal-200 flex items-center justify-between gap-4">
          {/* Quantity Selector */}
          <div className="flex items-center border border-charcoal-300 rounded-xl bg-cream-100 p-1">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-charcoal-700 hover:text-burgundy-700 transition"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-9 text-center font-bold text-sm text-charcoal-900">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-charcoal-700 hover:text-burgundy-700 transition"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Add Button */}
          <button
            type="button"
            onClick={handleAddToCart}
            className="flex-1 bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-burgundy-900/20 flex items-center justify-between transition-all group"
          >
            <span>Add to Order</span>
            <span className="font-mono text-amber-300 font-extrabold text-sm group-hover:scale-105 transition-transform">
              ${grandTotal.toFixed(2)}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
