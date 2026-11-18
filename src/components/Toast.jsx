import React from 'react';
import { CheckCircle2, ShoppingBag, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Toast = () => {
  const { toastMessage, setIsCartOpen } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 z-50 max-w-sm w-full animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-charcoal-900 text-white p-4 rounded-2xl shadow-2xl border border-charcoal-700 flex items-center justify-between gap-3 backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <p className="text-xs font-medium text-cream-100">
            {toastMessage}
          </p>
        </div>

        <button
          onClick={() => setIsCartOpen(true)}
          className="flex-shrink-0 bg-burgundy-700 hover:bg-burgundy-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition"
        >
          View
        </button>
      </div>
    </div>
  );
};
