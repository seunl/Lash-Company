import { ServiceItem, ReviewItem, GalleryItem, PressArticle, FaqItem } from '../types';

export const BUSINESS_INFO = {
  name: 'The Lash Company',
  legalName: 'Life is Suite Lash Company LLC',
  tagline: 'Where Lash Dreams Come True — Instantly Waterproof & Oil Proof',
  subtagline: 'Four Weeks Between Touchups. Houston\'s Original Lash Studio Since 2007.',
  phone: '713-520-5274',
  phoneDisplay: '(713) 520-LASH',
  email: 'jonijra@gmail.com',
  website: 'lashco.com',
  instagram: '@lashcohouston',
  instagramUrl: 'https://instagram.com/lashcohouston',
  facebook: 'TheLashCo',
  foundedYear: 2007,
  founder: 'Sophia Navarro',
  founderAlias: 'Joni Rae Russell',
  coFounder: 'Sophy Merszei (NovaLash CEO & Cosmetic Chemist)',
  stats: {
    rating: 4.6,
    reviewsCount: 41,
    happyClients: '5,000+',
    yearsInBusiness: '17+',
    retentionWeeks: 4,
    lashesPerEye: '65–75+',
  },
  locations: [
    {
      id: 'upper-kirby',
      name: 'Upper Kirby / Greenway Studio (Original Flagship)',
      address: '3109 Kirby Drive',
      altAddress: '3019 Kirby Dr',
      city: 'Houston',
      state: 'TX',
      zip: '77098',
      neighborhood: 'Upper Kirby / River Oaks / Greenway Plaza',
      phone: '(713) 520-5274',
      mapQuery: '3109+Kirby+Dr,+Houston,+TX+77098',
      hours: 'Tuesday – Saturday: 10:00 AM – 7:00 PM | Sun & Mon: Closed',
      parking: 'Complimentary private reserved parking in rear lot & Kirby valet available',
      isFlagship: true,
    },
    {
      id: 'heights',
      name: 'The Heights Studio',
      address: '1051 Heights Blvd, Suite 250',
      city: 'Houston',
      state: 'TX',
      zip: '77008',
      neighborhood: 'Historic Houston Heights',
      phone: '(713) 520-5274',
      mapQuery: '1051+Heights+Blvd+Suite+250,+Houston,+TX+77008',
      hours: 'Tuesday – Saturday: 10:00 AM – 7:00 PM | Sun & Mon: Closed',
      parking: 'On-site covered garage parking & street spots',
      isFlagship: false,
    },
  ],
  hoursSchedule: [
    { day: 'Tuesday', hours: '10:00 AM – 7:00 PM' },
    { day: 'Wednesday', hours: '10:00 AM – 7:00 PM' },
    { day: 'Thursday', hours: '10:00 AM – 7:00 PM' },
    { day: 'Friday', hours: '10:00 AM – 7:00 PM' },
    { day: 'Saturday', hours: '10:00 AM – 7:00 PM' },
    { day: 'Sunday', hours: 'Closed (Rest & Restock)' },
    { day: 'Monday', hours: 'Closed (Education & Training)' },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'classic-lashes',
    name: 'Classic Lashes',
    tagline: 'Timeless, Clean & Naturally Elevated',
    description: 'The definitive gold standard in lash extensions. A meticulous 1:1 application where an individual synthetic extension is isolated and bonded to a single healthy natural lash, creating an understated mascara-perfect finish without clumping.',
    whoItIsFor: 'Lash first-timers, busy professionals, and clients with dense natural lash lines looking for effortless everyday definition that looks like you were born with extraordinary genes.',
    durationFullSet: '2.0 Hours',
    durationFill: '60 Minutes',
    priceFullSet: 185,
    priceFill: 75,
    retention: 'Up to 4 Full Weeks',
    bestForEyeShape: 'Almond, round, and hooded eyes desiring subtle lengthening without excess weight.',
    lashCount: '65–75 lashes per eye custom mapped',
    maintenanceTips: [
      'Gently comb daily with your clean spoolie wand.',
      'Cleanse with physician-approved NovaLash CleanLash pads.',
      'No mascara needed — ever.',
      'Book touchup at week 3 or 4 to maintain seamless fullness.'
    ],
    image: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=900&auto=format&fit=crop',
    badge: 'Signature Everyday'
  },
  {
    id: 'american-volume',
    name: 'American Volume™',
    tagline: 'Invented by Sophia Navarro • Textured, Feathery Fullness',
    description: 'The groundbreaking technique conceived right here in Houston by Sophia Navarro herself. Unlike rigid Russian volume, American Volume combines multiple lengths and diameters to form hand-crafted feathery bouquets that yield dimensional texture, subtle spikes, and breathtaking soft fullness.',
    whoItIsFor: 'Discerning clients who want visible, rich, fluffy volume that looks luxurious and soft rather than artificial or like plastic strips. Ideal for clients with sparse or uneven natural lashes.',
    durationFullSet: '2.5 Hours',
    durationFill: '75 Minutes',
    priceFullSet: 265,
    priceFill: 85,
    retention: '4+ Weeks Between Touchups',
    bestForEyeShape: 'All eye shapes, especially deep-set, downturned, or sparse lash beds needing multi-layered dimension.',
    lashCount: '150–220 lightweight micro-fans per eye',
    inventorNote: 'Conceived and patented in educational curriculum by Sophia Navarro as NovaLash VP of Global Education. Imitated worldwide, perfected only at The Lash Company.',
    maintenanceTips: [
      'Sleep on a silk pillowcase to preserve fan symmetry.',
      'Enjoy showers, steam, swimming, or workouts on Day 1 — zero wait time.',
      'Brush morning and night to fluff fans.',
      'Monthly maintenance keeps your lash line pristine year-round.'
    ],
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=900&auto=format&fit=crop',
    badge: 'Invented by Sophia Navarro'
  },
  {
    id: 'london-volume',
    name: 'London Volume',
    tagline: 'Maximum Midnight Drama & High-Fashion Density',
    description: 'For those who command a bold, deep-black lash line. Ultra-fine micro-diameter extensions (0.05mm - 0.07mm) are expertly fanned into 4D to 6D clusters, generating intense density along the eyelid resembling a velvet liquid liner effect.',
    whoItIsFor: 'Glamour devotees, high-profile event attendees, brides, and clients who love dramatic, camera-ready eyes that captivate across the room.',
    durationFullSet: '2.5 Hours',
    durationFill: '75 Minutes',
    priceFullSet: 295,
    priceFill: 95,
    retention: '4 Weeks Minimum Retention',
    bestForEyeShape: 'Wide-set, prominent, or almond eyes wanting intense depth and contouring.',
    lashCount: '250–350 ultra-soft fibers per eye',
    maintenanceTips: [
      'Use oil-free foaming lash wash and gentle water rinse.',
      'Schedule refills promptly at 4 weeks.',
      'Avoid mechanical heated curlers.',
      'Comb only when dry using our signature gold lash brush.'
    ],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=900&auto=format&fit=crop',
    badge: 'High Glamour'
  },
  {
    id: 'candied-lashes',
    name: 'Candied Lashes™',
    tagline: 'Playful Shimmer, Color Accents & Signature Glam',
    description: 'Inspired by our famous Life is Suite candy bar! Custom hand-dipped glitter tips, jewel tone accents (plum, emerald, mocha brown, or midnight indigo), or ombre tips seamlessly blended into your Classic or American Volume set.',
    whoItIsFor: 'Fashion-forward clients, festival goers, gala stars, or anyone wanting a subtle whisper of colored light that catches the sun and illuminates eye color.',
    durationFullSet: '2.5 Hours',
    durationFill: '70 Minutes',
    priceFullSet: 245,
    priceFill: 85,
    retention: '4 Weeks Retention',
    bestForEyeShape: 'Ideal for highlighting green, blue, amber, or warm hazel eyes.',
    lashCount: 'Custom hybrid count with accent flare placement',
    maintenanceTips: [
      'Avoid heavy makeup oils around eye corners.',
      'Pairs perfectly with our complimentary candy tasting bag.',
      'Can be styled with subtle 10% color pop or 100% full-color drama.'
    ],
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=900&auto=format&fit=crop',
    badge: 'Signature Studio Exclusive'
  }
];

export const THREE_PILLARS = [
  {
    title: 'Uncompromising Quality',
    subtitle: '65–75+ Lashes Per Eye Custom Mapping',
    description: 'We never count minutes or cut corners. Each eye is individually mapped to your specific orbital bone structure, brow arch, and eyelid curvature. We isolate every single natural lash with medical magnification to protect lash follicle longevity.',
    highlight: 'Pure Silk & Mink Fibers with Platinum NovaLash Adhesive'
  },
  {
    title: 'Doctor-Reviewed Safety',
    subtitle: 'Periodic Optometry Reviews & Strict Health Protocols',
    description: 'Our team undergoes periodic guest lectures and safety audits by a Doctor of Optometry. We maintain hospital-grade sanitation, autoclave sterilization, and strictly refuse application if any active ocular condition or inflammation is detected.',
    highlight: 'Zero Formaldehyde, Physician-Developed Adhesives'
  },
  {
    title: 'Employee Loyalty & Mastery',
    subtitle: 'Months of Intensive Mentorship Before First Client',
    description: 'Unlike fast-turnover strip mall lash bars, our artists are career extensionists who train for months directly under Sophia Navarro before touching a paying client. This culture of deep respect translates directly into perfection in your lash chair.',
    highlight: 'Average Artist Tenure: 6+ Years with Sophia'
  }
];

export const CANDY_BAR_ITEMS = [
  {
    name: 'Haribo Goldbären & German Import Sour Drops',
    origin: 'Bonn, Germany',
    tasteProfile: 'Zesty citrus, sweet strawberry, sour blackcurrant',
    pairWith: 'Chilled Pellegrino Sparkling Mineral Water'
  },
  {
    name: 'Swedish Dala Horse Rhubarb & Berry Gummies',
    origin: 'Stockholm, Sweden',
    tasteProfile: 'Floral wild strawberry, tart rhubarb, gelatin-free chew',
    pairWith: 'White Tea & Peach Infusion'
  },
  {
    name: 'Artisan Swiss Sea Salt Dark Chocolate Truffles',
    origin: 'Zurich, Switzerland',
    tasteProfile: '72% cocoa, fleur de sel, velvet ganache center',
    pairWith: 'Espresso or Lavender Honey Herbal Brew'
  },
  {
    name: 'Tokyo Strawberry Milk & Matcha Crisps',
    origin: 'Kyoto, Japan',
    tasteProfile: 'Delicate stone-ground matcha biscuit, freeze-dried strawberry',
    pairWith: 'Matcha Iced Latte'
  },
  {
    name: 'Parisian Violet & Rose Pastilles',
    origin: 'Provence, France',
    tasteProfile: 'Fragrant French wildflower essences in heritage tins',
    pairWith: 'Rosewater Spritz'
  },
  {
    name: 'Champagne Bubble Sour Gummy Gems',
    origin: 'Boutique Confectionery, USA',
    tasteProfile: 'Sparkling effervescent tartness dusted in sugar crystals',
    pairWith: 'Celebratory Post-Lash Sparkling Toast'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Monica G.',
    source: 'Birdeye',
    rating: 5,
    date: '2 weeks ago',
    service: 'American Volume™ Full Set',
    comment: 'Sophia is an absolute genius and true artist. I have been coming to The Lash Company since 2011 and will never let anyone else touch my eyes. They survive Houston humidity, daily hot yoga, and pool days with my kids without a single shed. Plus, the candy bar is pure joy!',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Nadine Singson',
    source: 'Google',
    rating: 5,
    date: '1 month ago',
    service: 'American Volume™ Refill',
    comment: 'There is a reason Sophia lashes Beyonce and Hollywood stars when they are in town! The attention to detail is unmatched. I wake up every morning feeling 100% put together. The 4-week retention is 100% real — I only come in once a month.',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Megan Silianoff',
    source: 'Google',
    rating: 5,
    date: '3 weeks ago',
    service: 'Classic Lashes Set',
    comment: 'The Upper Kirby salon is so chic, serene, and immaculately clean. Having a sweet treat from the Life is Suite candy bar while getting pampered is the ultimate self-care Saturday. My lashes feel completely weightless and natural.',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Courtney B. Reynolds',
    source: 'Birdeye',
    rating: 5,
    date: '2 months ago',
    service: 'London Volume Lashes',
    comment: 'I am extremely prone to eye sensitivities and every other lash place in Houston left my eyes red. The Lash Company uses doctor-reviewed adhesives and the medical grade NovaLash glue never stings. 4.6 stars is an understatement — this is a 10-star salon.',
    verified: true
  },
  {
    id: 'rev-5',
    author: 'Camilla Vance',
    source: 'Google',
    rating: 5,
    date: 'Just recently',
    service: 'American Volume™',
    comment: 'Worth every single penny of the $250. You get what you pay for in Upper Kirby. Sophia is a master instructor and you can feel the technical precision. Zero clumping, perfect isolation.',
    verified: true
  },
  {
    id: 'rev-6',
    author: 'Elena Rostova',
    source: 'Voyage Houston',
    rating: 5,
    date: 'Featured Review',
    service: 'Candied Lashes Hybrid',
    comment: 'The lash artistry Sophia created transformed the entire industry worldwide. Her salon on Kirby Drive remains the benchmark against which all luxury lash studios in North America are measured.',
    verified: true
  }
];

export const PRESS_ARTICLES: PressArticle[] = [
  {
    id: 'press-voyage',
    outlet: 'Voyage Houston Magazine',
    headline: 'Meet Sophia Navarro of The Lash Company in Upper Kirby',
    date: 'Inspiring Stories Series',
    snippet: 'From an independent makeup artist in 2004 to global lash authority, Sophia Navarro built Houston\'s longest-standing eyelash extension salon on the bedrock of optometric safety, patented techniques, and a delightful Life is Suite candy bar.',
    badge: 'In-Depth Feature',
    linkText: 'Read Voyage Feature',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'press-modlux',
    outlet: 'Modern Luxury Houston',
    headline: 'The Beauty Elite: The Upper Kirby Studio Behind Hollywood\'s Best Lashes',
    date: 'Annual Style & Splurge Issue',
    snippet: 'Why Houston high society, international jetsetters, and icons like Beyonce Knowles trust Sophia Navarro\'s bespoke 65-75 lash mapping and instantly waterproof NovaLash chemistry.',
    badge: 'Style Authority',
    linkText: 'View Editorial Mention',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'press-novalash',
    outlet: 'NovaLash Global Journal',
    headline: 'Pioneering The American Volume Technique: A Conversation With Sophia Navarro',
    date: 'Master Trainer Spotlight',
    snippet: 'How VP of Global Education Sophia Navarro transformed lash texture forever by breaking away from rigid fans and creating feathery, multi-dimensional lash bouquets.',
    badge: 'Industry Milestone',
    linkText: 'Read Master Paper',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Feathered American Volume™ Transformation',
    category: 'American Volume',
    beforeImage: 'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop',
    curl: 'C & D Multi-Curl Hybrid',
    diameter: '0.07mm Featherweight',
    length: '9mm – 14mm Cat Eye Mapping',
    artist: 'Sophia Navarro (Master Artist)',
    description: 'Full dimensional fan placement designed to lift hooded eyes and deliver red-carpet drama with zero heaviness.'
  },
  {
    id: 'gal-2',
    title: 'Clean Classic 1:1 Natural Definition',
    category: 'Classic',
    beforeImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=800&auto=format&fit=crop',
    curl: 'B & C Natural Soft Curve',
    diameter: '0.15mm Silk Fiber',
    length: '8mm – 12mm Open Eye Map',
    artist: 'Senior Extensionist',
    description: 'Perfect for the everyday corporate executive who needs to walk from boardroom to dinner without touching mascara.'
  },
  {
    id: 'gal-3',
    title: 'London Volume Midnight Density',
    category: 'London Volume',
    beforeImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    curl: 'D-Curl Extreme Lift',
    diameter: '0.05mm Ultra-Micro',
    length: '10mm – 15mm Doll Eye Shape',
    artist: 'Sophia Navarro',
    description: 'Super-dense velvet eyeliner effect created with 5D-6D micro fans, completely oil-proof and waterproof from minute one.'
  },
  {
    id: 'gal-4',
    title: 'Candied Shimmer & Plum Accent Flare',
    category: 'Candied Lashes',
    beforeImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop',
    curl: 'C-Curl with Ombre Plum Accent',
    diameter: '0.07mm & 0.10mm Blend',
    length: '9mm – 13mm Kitten Flare',
    artist: 'Studio Senior Stylist',
    description: 'Rich dark espresso base with bespoke plum shimmer fibers at the outer third that sparkle under evening chandelier light.'
  },
  {
    id: 'gal-5',
    title: 'Soft American Volume Textured Spikes',
    category: 'American Volume',
    beforeImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=800&auto=format&fit=crop',
    curl: 'Mixed C & CC Curl',
    diameter: '0.07mm',
    length: '9mm – 13mm Wispy Texture',
    artist: 'Sophia Navarro Certified Extensionist',
    description: 'Our signature wispy dimensional styling that has made The Lash Company a staple of Houston luxury since 2007.'
  },
  {
    id: 'gal-6',
    title: 'Understated Classic Refinement',
    category: 'Classic',
    beforeImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop',
    curl: 'B-Curl Clean Taper',
    diameter: '0.12mm Light Silk',
    length: '8mm – 11mm Subtle Contour',
    artist: 'Senior Artist',
    description: 'Gentle, natural enhancement that preserves 100% of the client\'s native lash health through custom weight distribution.'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Retention & Waterproof',
    question: 'How long do The Lash Company extensions last between touchups?',
    answer: 'Unlike standard lash salons that require fills every 10 to 14 days, our patented NovaLash technique and medical-grade platinum adhesive deliver 4 full weeks of retention. With routine monthly maintenance appointments, our clients wear continuous, gorgeous extensions year-round without damaging their natural lashes.'
  },
  {
    id: 'faq-2',
    category: 'Retention & Waterproof',
    question: 'Can I really get them wet, swim, or cry immediately?',
    answer: 'Yes! That is one of our defining USPs. Traditional lash glues require 24 to 48 hours of avoiding moisture or humidity. Because we use physician-developed NovaLash adhesives cured with molecular science, your lashes are instantly waterproof and oil-proof. You can cry tears of joy, run a marathon, sweat in hot yoga, or swim in the Gulf right after walking out of our studio.'
  },
  {
    id: 'faq-3',
    category: 'Application & Safety',
    question: 'Will eyelash extensions damage my natural eyelashes?',
    answer: 'Never at The Lash Company. Damage only occurs when unqualified stylists use excessive glue or attach heavy clusters to multiple natural lashes. Sophia Navarro founded our business on the pillar of Safety: we strictly adhere to 1:1 isolation and weight-calibrated American Volume bouquets. Each extension sheds naturally along with your hair cycle, allowing new baby lashes to grow unhindered.'
  },
  {
    id: 'faq-4',
    category: 'Application & Safety',
    question: 'What if I have sensitive eyes or allergies?',
    answer: 'We specialize in sensitive eyes. Our adhesive was developed by NovaLash CEO and cosmetic chemist Sophy Merszei alongside physicians to be formaldehyde-free and biocompatible. Furthermore, our team receives regular educational lectures from a Doctor of Optometry. If you have an active ocular condition, we will pause and reschedule out of safety for your eyes.'
  },
  {
    id: 'faq-5',
    category: 'Candy Bar',
    question: 'Tell me about the complimentary Life is Suite candy bar!',
    answer: 'We are proud to be the First Ever Lash Salon with a dedicated candy bar! When Sophia expanded into her flagship salon, she created "Life is Suite" — a play on words honoring the sweet luxury of self-care. Every client enjoys complimentary access to imported artisanal confections from Switzerland, Germany, Sweden, and Japan, paired with chilled sparkling mineral water or artisan teas.'
  },
  {
    id: 'faq-6',
    category: 'Pricing & Booking',
    question: 'What is your service price range and cancellation policy?',
    answer: 'Our bespoke full sets range from $175 to $300 depending on the technique (Classic vs Sophia\'s American Volume vs London Volume), and monthly 4-week fills range from $75 to $95. We require a 24-hour notice for cancellations or rescheduling to accommodate our waitlist.'
  }
];

export const TIMELINE = [
  {
    year: '2004',
    title: 'The Spark & The 2nd NovaLash Class Ever',
    description: 'Sophia Navarro (aka Joni Rae Russell), an independent Houston makeup artist seeking new creative avenues, attends the second-ever eyelash extension training session hosted by NovaLash.'
  },
  {
    year: '2005',
    title: 'The 9-Client Days & Celebrity Callings',
    description: 'Within 6 months, her client calendar is overwhelmed. She leaves makeup completely. Seeing 9 clients a day, word spreads to Hollywood and global icons — including styling Beyonce Knowles. Clients fly in from LA, NYC, and Miami.'
  },
  {
    year: '2007',
    title: 'Founding The Lash Company in Upper Kirby',
    description: 'Partnering with NovaLash CEO and cosmetic chemist Sophy Merszei, Sophia co-founds The Lash Company at 3109 Kirby Drive — one of the very first dedicated lash-only salons in the United States.'
  },
  {
    year: '2012',
    title: 'Inventing The American Volume™ Technique',
    description: 'As NovaLash VP of Global Education, Sophia innovates beyond rigid European techniques to invent the American Volume method — hand-fanning multi-length, featherweight fibers for airy, lush texture.'
  },
  {
    year: 'Present',
    title: 'Houston\'s Longest-Standing Luxury Lash Landmark',
    description: 'Now with two premier studios in Upper Kirby and The Heights, 5,000+ loyal clients, the famous Life is Suite candy bar, and a peerless legacy of optometric safety and master-level craftsmanship.'
  }
];
