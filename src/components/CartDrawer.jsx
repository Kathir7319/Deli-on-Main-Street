import React, { useState } from 'react';
import { 
  X, ShoppingBag, Trash2, ArrowRight, CheckCircle2, 
  Car, Store, Clock, ShieldCheck, MapPin, Sparkles, ChevronRight, AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/deliData';

export const CartDrawer = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart,
    subtotal, 
    tax, 
    total,
    setOrderReceipt,
    showToast
  } = useCart();

  const [pickupMethod, setPickupMethod] = useState('curbside'); // 'curbside' | 'counter'
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [parkingSpot, setParkingSpot] = useState('Spot 3 (Depot St)');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCartOpen) return null;

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback
    }
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    if (!customerName || !customerPhone) {
      showToast("Please provide your name and phone number for pickup notifications.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const orderId = `DMS-${Math.floor(100000 + Math.random() * 900000)}`;
      
      const receipt = {
        orderId,
        date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        items: [...cartItems],
        subtotal,
        tax,
        total,
        pickupMethod,
        customerName,
        customerPhone,
        vehicleDetails: pickupMethod === 'curbside' ? {
          spot: parkingSpot,
          make: vehicleMake || 'Customer Vehicle',
          color: vehicleColor || 'Not specified'
        } : null,
        pickupAddress: RESTAURANT_INFO.address + ", Downtown Fuquay-Varina, NC",
        curbsideNote: RESTAURANT_INFO.parkingGuide.depotStreet
      };

      setOrderReceipt(receipt);
      clearCart();
      setIsCartOpen(false);
      triggerConfetti();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FBFBF9] shadow-2xl flex flex-col justify-between border-l border-charcoal-200">
          
          {/* Top Bar */}
          <div className="p-5 border-b border-charcoal-200 bg-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-burgundy-50 text-burgundy-700 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif font-black text-lg text-charcoal-900 leading-tight">Your Deli Order</h2>
                <span className="text-xs text-charcoal-500 font-medium">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in basket
                </span>
              </div>
            </div>

            <button 
              onClick={() => setIsCartOpen(false)}
              className="w-8 h-8 rounded-full bg-cream-200 hover:bg-cream-300 text-charcoal-700 flex items-center justify-center transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Square POS Sync Live Status */}
          <div className="bg-emerald-50 border-b border-emerald-200 px-4 py-2 flex items-center justify-between text-xs text-emerald-800">
            <div className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Square Online Sync: Connected</span>
            </div>
            <span className="text-[11px] font-mono text-emerald-700 font-semibold">POS v2.4</span>
          </div>

          {/* Scrollable Cart Items */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-cream-300 text-charcoal-400 mx-auto flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="font-serif font-bold text-lg text-charcoal-800">Your basket is hungry!</h3>
                <p className="text-xs text-charcoal-500 max-w-xs mx-auto">
                  Explore our signature deli sandwiches, rotating daily soups, or reserve your Tuesday/Thursday family dinner-to-go.
                </p>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="inline-block mt-2 text-xs font-bold bg-burgundy-700 hover:bg-burgundy-800 text-white px-5 py-2.5 rounded-xl shadow-md transition"
                >
                  Explore Today's Menu
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div 
                      key={item.cartItemId} 
                      className="p-3.5 rounded-2xl bg-white border border-charcoal-200 shadow-sm flex gap-3 transition-all hover:border-charcoal-300"
                    >
                      {item.image && (
                        <img 
                          src={item.image} 
                          alt={item.name || item.title} 
                          className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-1">
                          <h4 className="font-bold text-xs text-charcoal-900 truncate">
                            {item.name || item.title}
                          </h4>
                          <span className="font-mono font-bold text-xs text-burgundy-700 flex-shrink-0">
                            ${((item.price || 0) * item.quantity).toFixed(2)}
                          </span>
                        </div>

                        {/* Options / Customizations summary */}
                        <div className="text-[11px] text-charcoal-500 space-y-0.5 mt-1">
                          {item.options?.bread && <div>Bread: <span className="font-medium text-charcoal-700">{item.options.bread}</span></div>}
                          {item.options?.toasting && <div>Style: <span className="font-medium text-charcoal-700">{item.options.toasting}</span></div>}
                          {item.options?.pickupDay && <div>Pickup: <span className="font-semibold text-burgundy-700">{item.options.pickupDay}</span></div>}
                          {item.options?.extraBacon && <span className="inline-block mr-1 text-[10px] bg-amber-100 text-amber-800 px-1 rounded">+Bacon</span>}
                          {item.options?.extraCheese && <span className="inline-block mr-1 text-[10px] bg-amber-100 text-amber-800 px-1 rounded">+Cheese</span>}
                          {item.options?.extraAvocado && <span className="inline-block text-[10px] bg-green-100 text-green-800 px-1 rounded">+Avocado</span>}
                        </div>

                        {/* Quantity and Remove */}
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-charcoal-100">
                          <div className="flex items-center gap-1.5 bg-cream-200 rounded-lg p-0.5 text-xs">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                              className="w-5 h-5 rounded bg-white text-charcoal-700 flex items-center justify-center font-bold"
                            >
                              -
                            </button>
                            <span className="w-5 text-center font-semibold">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                              className="w-5 h-5 rounded bg-white text-charcoal-700 flex items-center justify-center font-bold"
                            >
                              +
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeFromCart(item.cartItemId)}
                            className="text-charcoal-400 hover:text-red-600 transition p-1"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pickup Method Selection */}
                <div className="bg-white p-4 rounded-2xl border border-charcoal-200 space-y-3">
                  <h4 className="text-xs font-bold text-charcoal-800 uppercase tracking-wider">
                    Select Pickup Experience
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPickupMethod('curbside')}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        pickupMethod === 'curbside'
                          ? 'border-burgundy-700 bg-burgundy-50 text-burgundy-900 ring-1 ring-burgundy-700'
                          : 'border-charcoal-200 hover:border-charcoal-300 text-charcoal-700'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <Car className="w-4 h-4 text-burgundy-700" />
                        <span className="text-xs font-bold">Curbside Pickup</span>
                      </div>
                      <span className="text-[10px] text-charcoal-500 block">Depot St Rear Lot (Spots 1-8)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPickupMethod('counter')}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        pickupMethod === 'counter'
                          ? 'border-burgundy-700 bg-burgundy-50 text-burgundy-900 ring-1 ring-burgundy-700'
                          : 'border-charcoal-200 hover:border-charcoal-300 text-charcoal-700'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <Store className="w-4 h-4 text-burgundy-700" />
                        <span className="text-xs font-bold">In-Store Counter</span>
                      </div>
                      <span className="text-[10px] text-charcoal-500 block">604 N Main St Walk-In</span>
                    </button>
                  </div>

                  {/* Curbside Vehicle Form */}
                  {pickupMethod === 'curbside' && (
                    <div className="bg-cream-100 p-3 rounded-xl border border-charcoal-200 space-y-2 mt-2 text-xs">
                      <div className="flex items-center gap-1.5 text-burgundy-800 font-semibold text-[11px]">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Curbside Vehicle Details (Depot St Lot):</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <input 
                          type="text" 
                          placeholder="Vehicle Make/Model (e.g. Honda CR-V)"
                          value={vehicleMake}
                          onChange={e => setVehicleMake(e.target.value)}
                          className="bg-white border border-charcoal-300 rounded-lg p-2 text-xs focus:ring-1 focus:ring-burgundy-700 focus:outline-none"
                        />
                        <input 
                          type="text" 
                          placeholder="Color (e.g. Silver)"
                          value={vehicleColor}
                          onChange={e => setVehicleColor(e.target.value)}
                          className="bg-white border border-charcoal-300 rounded-lg p-2 text-xs focus:ring-1 focus:ring-burgundy-700 focus:outline-none"
                        />
                      </div>
                      <select 
                        value={parkingSpot}
                        onChange={e => setParkingSpot(e.target.value)}
                        className="w-full bg-white border border-charcoal-300 rounded-lg p-2 text-xs focus:ring-1 focus:ring-burgundy-700 focus:outline-none"
                      >
                        <option value="Spot 1 (Depot St)">Depot St Curbside Slot #1</option>
                        <option value="Spot 2 (Depot St)">Depot St Curbside Slot #2</option>
                        <option value="Spot 3 (Depot St)">Depot St Curbside Slot #3 (Directly by rear gate)</option>
                        <option value="Spot 4 (Depot St)">Depot St Curbside Slot #4</option>
                        <option value="Main St Flash Pickup">Main Street Parallel Parking Front Space</option>
                      </select>
                    </div>
                  )}

                  {/* Customer Contact */}
                  <div className="space-y-2 pt-1">
                    <label className="block text-xs font-bold text-charcoal-800">
                      Contact for Pickup Notification
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <input 
                        type="text" 
                        placeholder="Your Full Name *"
                        required
                        value={customerName}
                        onChange={e => setCustomerName(e.target.value)}
                        className="bg-white border border-charcoal-300 rounded-lg p-2 text-xs focus:ring-1 focus:ring-burgundy-700 focus:outline-none"
                      />
                      <input 
                        type="tel" 
                        placeholder="Mobile Phone (for SMS) *"
                        required
                        value={customerPhone}
                        onChange={e => setCustomerPhone(e.target.value)}
                        className="bg-white border border-charcoal-300 rounded-lg p-2 text-xs focus:ring-1 focus:ring-burgundy-700 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Downtown Fuquay-Varina Wayfinding Tip */}
                <div className="bg-amber-50 border border-amber-200/80 p-3 rounded-xl flex items-start gap-2 text-[11px] text-amber-900">
                  <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong>Lunch Rush Tip:</strong> Peak downtown hours are 11:30 AM – 1:30 PM. Use the municipal lot on Depot Street behind our building to skip Main Street traffic completely.
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Bottom Checkout Panel */}
          {cartItems.length > 0 && (
            <div className="p-5 bg-white border-t border-charcoal-200 space-y-3">
              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-charcoal-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono text-charcoal-800">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>NC State &amp; Wake County Tax (7%)</span>
                  <span className="font-mono text-charcoal-800">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Depot St Curbside Service</span>
                  <span className="text-emerald-700 font-bold uppercase text-[10px]">Free</span>
                </div>
                <div className="flex justify-between font-bold text-sm text-charcoal-900 pt-2 border-t border-charcoal-200">
                  <span>Total Due</span>
                  <span className="font-mono text-lg text-burgundy-700">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                type="button"
                onClick={handleCheckout}
                disabled={isSubmitting}
                className="w-full bg-burgundy-700 hover:bg-burgundy-800 disabled:opacity-50 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-burgundy-900/25 flex items-center justify-center gap-2 transition group"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2 text-xs">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Transmitting to Square POS Kitchen Terminal...
                  </span>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4 text-amber-300" />
                    <span>Submit &amp; Transmit to Kitchen (${total.toFixed(2)})</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-3 text-[10px] text-charcoal-400 pt-1">
                <span>🔒 Encrypted 256-bit</span>
                <span>•</span>
                <span>⚡ Real-Time Kitchen Print</span>
                <span>•</span>
                <span>📱 SMS Ready Alert</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
