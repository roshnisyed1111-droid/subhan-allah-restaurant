import React, { useState } from 'react';
import { X, MessageCircle, Phone, Sparkles, Check, ChevronRight } from 'lucide-react';
import { MENU_PREVIEW, RESTAURANT_INFO, DishItem } from '../data/restaurantData';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSelectedDish?: DishItem | null;
}

export const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose, initialSelectedDish }) => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [cartItems, setCartItems] = useState<{ [name: string]: number }>({});
  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway'>('takeaway');

  if (!isOpen) return null;

  const handleAddItem = (itemName: string) => {
    setCartItems((prev) => ({
      ...prev,
      [itemName]: (prev[itemName] || 0) + 1,
    }));
  };

  const handleRemoveItem = (itemName: string) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[itemName] > 1) {
        updated[itemName] -= 1;
      } else {
        delete updated[itemName];
      }
      return updated;
    });
  };

  const totalItemsCount = Object.values(cartItems).reduce((sum, count) => sum + count, 0);

  const generateWhatsAppOrderText = () => {
    if (totalItemsCount === 0) {
      return encodeURIComponent(
        `Assalam-o-Alaikum Subhanalla Restaurant Larkana! I would like to place an order for ${orderType.toUpperCase()}. Please share today's special menu.`
      );
    }

    const itemsList = Object.entries(cartItems)
      .map(([name, count]) => `• ${count}x ${name}`)
      .join('\n');

    const message = `Assalam-o-Alaikum Subhanalla Restaurant!
I would like to place an order:
Order Type: ${orderType.toUpperCase()}

Items:
${itemsList}

Please confirm preparation time and total bill for Chandka Staff Colony, Larkana.`;

    return encodeURIComponent(message);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <div
        className="relative w-full max-w-4xl bg-[#191616] border border-[#C59A52] rounded-sm shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="p-6 bg-[#3A1115] border-b border-[#C59A52]/30 flex items-center justify-between text-[#FFF9EF]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C59A52] font-semibold block">
              Subhanalla Restaurant Larkana
            </span>
            <h3 className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl font-bold tracking-tight">
              DESI KHANA & TRADITIONAL MENU
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 rounded-full bg-[#191616] text-[#C59A52] hover:text-[#FFF9EF] border border-[#C59A52]/40 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Categories Bar */}
        <div className="px-6 py-3 bg-[#250d10] border-b border-[#C59A52]/20 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {MENU_PREVIEW.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setSelectedCategory(idx)}
              className={`px-4 py-2 rounded-xs text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === idx
                  ? 'bg-gradient-to-r from-[#651F24] to-[#9E252B] text-[#FFF9EF] border border-[#C59A52]'
                  : 'text-[#FFF9EF]/70 hover:text-[#C59A52]'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Menu Items Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4 bg-[#191616] text-[#FFF9EF]">
          <div className="flex items-center justify-between border-b border-[#C59A52]/20 pb-2">
            <h4 className="font-['Cormorant_Garamond'] text-2xl font-bold text-[#C59A52]">
              {MENU_PREVIEW[selectedCategory].category}
            </h4>
            <span className="text-xs text-[#F7F0E3]/60 font-['Manrope']">Fresh On Order</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MENU_PREVIEW[selectedCategory].items.map((item) => {
              const count = cartItems[item.name] || 0;
              return (
                <div
                  key={item.name}
                  className="p-4 rounded-sm bg-[#3A1115]/50 border border-[#C59A52]/25 hover:border-[#C59A52]/60 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h5 className="font-['Cormorant_Garamond'] text-xl font-bold text-[#FFF9EF]">
                        {item.name}
                      </h5>
                      <p className="text-xs text-[#F7F0E3]/70 font-light font-['Manrope'] mt-1">
                        {item.desc}
                      </p>
                    </div>
                    <span className="font-mono text-sm font-bold text-[#C59A52] shrink-0 tabular-nums">
                      {item.price}
                    </span>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#C59A52]/15 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-[#C59A52]/80">
                      Prepared in Desi Spices
                    </span>
                    <div className="flex items-center gap-2">
                      {count > 0 && (
                        <>
                          <button
                            onClick={() => handleRemoveItem(item.name)}
                            className="w-6 h-6 rounded-xs bg-[#191616] text-[#FFF9EF] hover:bg-[#651F24] border border-[#C59A52]/40 text-xs font-bold flex items-center justify-center cursor-pointer"
                          >
                            -
                          </button>
                          <span className="text-xs font-mono text-[#C59A52] font-bold w-4 text-center">
                            {count}
                          </span>
                        </>
                      )}
                      <button
                        onClick={() => handleAddItem(item.name)}
                        className="px-2.5 py-1 rounded-xs bg-[#651F24] hover:bg-[#9E252B] text-[#FFF9EF] text-xs font-semibold tracking-wider uppercase border border-[#C59A52]/50 transition-colors cursor-pointer"
                      >
                        {count > 0 ? '+ Add More' : '+ Select'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Order Via WhatsApp Action Bar */}
        <div className="p-5 bg-[#3A1115] border-t border-[#C59A52]/30 text-[#FFF9EF] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            {/* Order Type Toggle */}
            <div className="flex items-center gap-1 p-1 bg-[#191616] rounded-xs border border-[#C59A52]/30 text-xs">
              <button
                onClick={() => setOrderType('takeaway')}
                className={`px-3 py-1 rounded-xs transition-colors ${
                  orderType === 'takeaway'
                    ? 'bg-[#651F24] text-[#FFF9EF] font-bold'
                    : 'text-[#FFF9EF]/70'
                }`}
              >
                Takeaway
              </button>
              <button
                onClick={() => setOrderType('dine-in')}
                className={`px-3 py-1 rounded-xs transition-colors ${
                  orderType === 'dine-in'
                    ? 'bg-[#651F24] text-[#FFF9EF] font-bold'
                    : 'text-[#FFF9EF]/70'
                }`}
              >
                Dine-In
              </button>
            </div>

            <div className="text-xs">
              <span className="text-[#C59A52] font-semibold block">
                {totalItemsCount > 0 ? `${totalItemsCount} dishes selected` : 'Select items or send custom query'}
              </span>
              <span className="text-[#F7F0E3]/60 text-[11px]">Direct WhatsApp to kitchen</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <a
              href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
              className="px-4 py-2.5 rounded-sm bg-[#191616] text-[#FFF9EF] hover:bg-[#250d10] border border-[#C59A52]/50 text-xs font-semibold tracking-wider uppercase flex items-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C59A52]" />
              <span>Call Kitchen</span>
            </a>

            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${generateWhatsAppOrderText()}`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-sm bg-[#25D366] hover:bg-[#22c35e] text-white text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-lg hover:scale-105 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Order via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
