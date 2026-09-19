export type PageId = 'home' | 'about' | 'services' | 'candy-bar' | 'gallery' | 'reviews' | 'contact';

export interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  whoItIsFor: string;
  durationFullSet: string;
  durationFill: string;
  priceFullSet: number;
  priceFill: number;
  retention: string;
  bestForEyeShape: string;
  maintenanceTips: string[];
  inventorNote?: string;
  image: string;
  badge?: string;
  lashCount: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  source: 'Google' | 'Birdeye' | 'Voyage Houston' | 'Modern Luxury';
  rating: number;
  date: string;
  service: string;
  comment: string;
  verified: boolean;
  avatar?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Classic' | 'American Volume' | 'London Volume' | 'Candied Lashes';
  beforeImage: string;
  afterImage: string;
  curl: string;
  diameter: string;
  length: string;
  artist: string;
  description: string;
}

export interface PressArticle {
  id: string;
  outlet: string;
  headline: string;
  date: string;
  snippet: string;
  badge: string;
  linkText: string;
  image: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Retention & Waterproof' | 'Application & Safety' | 'Pricing & Booking' | 'Candy Bar';
}

export interface BookingState {
  location: string;
  serviceId: string;
  serviceType: 'full-set' | 'touchup';
  artistTier: 'sophia-master' | 'senior-artist';
  date: string;
  time: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  notes: string;
  referralSource: string;
  candyBoxAddon: boolean;
  depositAccepted: boolean;
}
