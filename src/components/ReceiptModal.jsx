import React from 'react';
import { CheckCircle2, Car, Store, MapPin, Printer, Clock, Phone, Sparkles, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Logo } from './Logo';

export const ReceiptModal = () => {
  const { orderReceipt, setOrderReceipt } = useCart();

  if (!orderReceipt) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-charcoal-200 my-6"
        onClick={e => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-gradient-to-br from-burgundy-700 via-burgundy-800 to-burgundy-950 p-6 text-white text-center relative overflow-hidden">
          <button 
            onClick={() => setOrderReceipt(null)}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="w-14 h-14 rounded-full bg-white text-burgundy-700 mx-auto flex items-center justify-center shadow-lg mb-3">
            <CheckCircle2 className="w-8 h-8 text-emerald-600" />
          </div>

          <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300 px-2.5 py-0.5 rounded-full bg-black/30 border border-amber-400/40 inline-block mb-1">
            Square POS Order Verified # {orderReceipt.orderId}
          </span>
          <h2 className="font-serif font-black text-2xl text-white">Kitchen Ticket Printed!</h2>
          <p className="text-xs text-cream-200 mt-1 max-w-xs mx-auto">
            Your fresh deli meal is now being handcrafted at our Downtown Fuquay-Varina counter.
          </p>
        </div>

        {/* Receipt Body */}
        <div className="p-6 space-y-5 text-charcoal-800">
          
          {/* Estimated Pickup Time Callout */}
          <div className="bg-amber-50 border border-amber-300 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wider block">Estimated Ready In</span>
                <span className="font-serif font-black text-xl text-amber-950">12 – 18 Minutes</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wider block">Ordered At</span>
              <span className="font-mono text-xs font-bold text-amber-900">{orderReceipt.date}</span>
            </div>
          </div>

          {/* Pickup Location & Curbside info */}
          <div className="bg-cream-100 rounded-2xl p-4 border border-charcoal-200 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-burgundy-800 uppercase tracking-wide">
              {orderReceipt.pickupMethod === 'curbside' ? (
                <>
                  <Car className="w-4 h-4 text-burgundy-700" />
                  <span>Curbside Pickup • Depot Street Lot</span>
                </>
              ) : (
                <>
                  <Store className="w-4 h-4 text-burgundy-700" />
                  <span>In-Store Counter Pickup</span>
                </>
              )}
            </div>

            <p className="text-xs text-charcoal-700">
              <strong>Address:</strong> 604 N Main St, Downtown Fuquay-Varina, NC 27526
            </p>

            {orderReceipt.vehicleDetails && (
              <div className="bg-white p-3 rounded-xl border border-charcoal-200 text-xs space-y-1">
                <div className="flex justify-between">
                  <span className="text-charcoal-500">Reserved Spot:</span>
                  <span className="font-bold text-burgundy-700">{orderReceipt.vehicleDetails.spot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-500">Vehicle:</span>
                  <span className="font-medium text-charcoal-800">{orderReceipt.vehicleDetails.color} {orderReceipt.vehicleDetails.make}</span>
                </div>
                <div className="text-[10px] text-charcoal-500 pt-1 border-t border-charcoal-100">
                  Just pull into the spot. Our team will bring your hot order directly to your driver-side window!
                </div>
              </div>
            )}
          </div>

          {/* Items Breakdown */}
          <div>
            <h4 className="text-xs font-bold text-charcoal-500 uppercase tracking-wider mb-2">
              Order Summary ({orderReceipt.items.length} items)
            </h4>
            <div className="divide-y divide-charcoal-100 border border-charcoal-200 rounded-2xl overflow-hidden bg-white">
              {orderReceipt.items.map((item, idx) => (
                <div key={idx} className="p-3 flex justify-between items-start text-xs">
                  <div>
                    <span className="font-bold text-charcoal-900">{item.quantity}x {item.name || item.title}</span>
                    {item.options?.bread && <div className="text-[10px] text-charcoal-500">Bread: {item.options.bread}</div>}
                    {item.options?.pickupDay && <div className="text-[10px] text-burgundy-700 font-semibold">Day: {item.options.pickupDay}</div>}
                  </div>
                  <span className="font-mono font-bold text-charcoal-800">
                    ${((item.price || 0) * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
              <div className="p-3 bg-cream-50 space-y-1 text-xs">
                <div className="flex justify-between text-charcoal-600">
                  <span>Subtotal</span>
                  <span className="font-mono">${orderReceipt.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-charcoal-600">
                  <span>NC Tax (7%)</span>
                  <span className="font-mono">${orderReceipt.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-sm text-charcoal-900 pt-1 border-t border-charcoal-200">
                  <span>Total Paid (Square)</span>
                  <span className="font-mono text-burgundy-700">${orderReceipt.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={handlePrint}
              className="flex-1 border border-charcoal-300 hover:bg-cream-200 text-charcoal-800 font-semibold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition"
            >
              <Printer className="w-4 h-4 text-charcoal-600" />
              <span>Print / Save Receipt</span>
            </button>

            <button
              type="button"
              onClick={() => setOrderReceipt(null)}
              className="flex-1 bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center transition shadow-md"
            >
              Done &amp; Return to Deli
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
