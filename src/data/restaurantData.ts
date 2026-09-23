export interface DishItem {
  id: string;
  name: string;
  urduName: string;
  description: string;
  price: string;
  image: string;
  category: 'karahi' | 'bbq' | 'paratha' | 'tea';
  tag?: string;
}

export const RESTAURANT_INFO = {
  name: 'SUBHANALLA RESTAURANT',
  tagline: 'Authentic Pakistani Taste, Served with Tradition.',
  description: 'Rich desi flavors, freshly prepared meals and traditional hospitality in the heart of Larkana.',
  city: 'Larkana, Sindh, Pakistan',
  address: 'Chandka Staff Colony, Larkana, Pakistan',
  phone: '+92 310 3358405',
  whatsappNumber: '923103358405',
  whatsappUrl: 'https://wa.me/923103358405?text=Assalam-o-Alaikum%20Subhanalla%20Restaurant,%20I%20would%20like%20to%20inquire%20about%20ordering.',
  rating: {
    score: '3.7',
    totalReviews: 231,
    source: 'Google Maps Verified Listing',
    foodRating: '4.2',
    hospitalityRating: '4.0',
    valueRating: '4.5',
  },
  hours: 'Open 24 Hours · Monday to Sunday',
};

export const SIGNATURE_DISHES: DishItem[] = [
  {
    id: 'chicken-karahi',
    name: 'Chicken Karahi',
    urduName: 'چکن کڑاہی',
    description: 'Fresh chicken cooked to perfection in a traditional iron wok with ripe country tomatoes, sliced green chilies, julienned ginger, and house-ground aromatic garam masala.',
    price: 'Rs. 1,450 / Full',
    image: '/images/signature_karahi_1790151872155.jpg',
    category: 'karahi',
    tag: 'House Special'
  },
  {
    id: 'chicken-tikka',
    name: 'Chicken Tikka',
    urduName: 'چکن تکہ بوٹی',
    description: 'Juicy chicken quarters and skewers marinated in spiced yogurt, red chilies, and smoked charcoal, served sizzling with fresh mint raita, onion rings, and lemon.',
    price: 'Rs. 450 / Quarter',
    image: '/images/signature_tikka_1790151884784.jpg',
    category: 'bbq',
    tag: 'Charcoal Sizzler'
  },
  {
    id: 'anda-paratha',
    name: 'Anda Paratha',
    urduName: 'انڈا پراٹھا',
    description: 'Crisp, golden flaky tawa paratha with multi-layered dough paired with a spiced golden fried egg or fluffy omelette. The pride of Larkana breakfast.',
    price: 'Rs. 160',
    image: '/images/signature_anda_paratha_1790151895917.jpg',
    category: 'paratha',
    tag: 'Breakfast Classic'
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'g-1',
    title: 'Authentic Sizzling Karahi Feast',
    caption: 'Freshly prepared upon order with traditional spices',
    image: '/images/signature_karahi_1790151872155.jpg',
    span: 'col-span-12 md:col-span-7 row-span-2'
  },
  {
    id: 'g-2',
    title: 'Smoky Charcoal Chicken Tikka',
    caption: 'Grilled over live red-hot charcoal embers',
    image: '/images/signature_tikka_1790151884784.jpg',
    span: 'col-span-12 md:col-span-5'
  },
  {
    id: 'g-3',
    title: 'Tandoor Naan & Roti',
    caption: 'Handcrafted dough baked in clay tandoor',
    image: '/images/gallery_tandoor_naan_1790151923241.jpg',
    span: 'col-span-12 md:col-span-5'
  },
  {
    id: 'g-4',
    title: 'Crispy Flaky Anda Paratha',
    caption: 'Golden layers with farm-fresh desi egg',
    image: '/images/signature_anda_paratha_1790151895917.jpg',
    span: 'col-span-12 md:col-span-6'
  },
  {
    id: 'g-5',
    title: 'Karak Doodh Patti Chai',
    caption: 'Brewed slow with rich milk and cardamom',
    image: '/images/gallery_pakistani_tea_1790151934436.jpg',
    span: 'col-span-12 md:col-span-6'
  }
];

export const MENU_PREVIEW = [
  {
    category: 'Karahis & Desi Curries',
    items: [
      { name: 'Desi Chicken Karahi (Full)', price: 'Rs. 1,450', desc: 'Slow-cooked in iron wok with fresh tomatoes, ginger & green chilies' },
      { name: 'Desi Chicken Karahi (Half)', price: 'Rs. 750', desc: 'Served sizzling hot with rich masala tari' },
      { name: 'White Chicken Karahi', price: 'Rs. 1,600', desc: 'Creamy yogurt, green cardamom & cracked black pepper' },
      { name: 'Daal Mash Special Fry', price: 'Rs. 320', desc: 'Desi ghee tarka with dry red chilies and cumin' }
    ]
  },
  {
    category: 'BBQ & Charcoal Grills',
    items: [
      { name: 'Chicken Tikka (Chest / Leg)', price: 'Rs. 450', desc: 'Marinated in authentic Sindhi spices & charcoal grilled' },
      { name: 'Chicken Boti Plate', price: 'Rs. 480', desc: 'Tender boneless chicken skewers with mint chutney' },
      { name: 'Gola Kabab (4 Pcs)', price: 'Rs. 420', desc: 'Melt-in-mouth spiced minced meat kababs' }
    ]
  },
  {
    category: 'Parathas, Tandoor & Breakfast',
    items: [
      { name: 'Signature Anda Paratha', price: 'Rs. 160', desc: 'Flaky desi ghee paratha with farm-fresh fried egg' },
      { name: 'Sada Paratha', price: 'Rs. 100', desc: 'Multi-layered crispy tawa paratha' },
      { name: 'Tandoori Roti / Roghani Naan', price: 'Rs. 40 / 80', desc: 'Fresh from the red-hot clay tandoor' },
      { name: 'Chana Masala Plate', price: 'Rs. 180', desc: 'Aromatic chickpea curry with authentic gravy' }
    ]
  },
  {
    category: 'Chai & Refreshments',
    items: [
      { name: 'Special Karak Doodh Patti Chai', price: 'Rs. 90', desc: 'Cooked rich milk tea with cardamom aroma' },
      { name: 'Desi Namkeen / Meethi Lassi', price: 'Rs. 150', desc: 'Freshly churned yogurt beverage' },
      { name: 'Chilled Soft Drink', price: 'Rs. 100', desc: 'Assorted beverages' }
    ]
  }
];
