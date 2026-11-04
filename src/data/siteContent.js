/**
 * siteContent.js — single source of truth for Maa Shardha Tour and Taxi Service.
 * Edit all copy, contact details, services, fleet, packages, etc. here.
 */

// ── Business / brand -------------------------------------------------------
export const business = {
  name: 'Maa Shardha Tour and Taxi Service',
  shortName: 'MST',
  tagline: 'Tour & Taxi Service • Indore, MP',
  heroSubtitle: 'Your Trusted Travel Partner in Indore, Ujjain & Beyond!',
  phones: [
    { display: '+91 70000 23165', tel: '+917000023165' },
    { display: '+91 91656 00957', tel: '+919165600957' },
  ],
  whatsapp: '917000023165', // wa.me format, no '+'
  email: 'maashardatourandtaxiservice@gmail.com',
  website: 'www.maashardhatourandtaxiservice.com',
  address: '965C Shree Krishna Enclave, Ujjain Road, Indore, MP',
  city: 'Indore, Madhya Pradesh',
  hours: 'Available 24 / 7',
};

// ── Navigation -------------------------------------------------------------
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Fleet & Services', href: '#services' },
  { label: 'Specialities', href: '#specialities' },
  { label: 'Packages', href: '#packages' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

// ── Hero -------------------------------------------------------------------
export const hero = {
  eyebrow: '24/7 Cab & Tour Services in Indore',
  title: 'Maa Shardha Tour and Taxi Service',
  subtitle: 'Reliable Cabs • Luxury Fleet • Pilgrimage & Outstation Tours',
  description:
    'Indore to Ujjain Mahakal Darshan, Omkareshwar Jyotirlinga, Airport Transfers, Outstation Cabs & Group Rentals with verified drivers and 24/7 service.',
  background:
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2400&auto=format&fit=crop',
  trustBadges: [
    'Indore & Ujjain Specialists',
    'Verified Chauffeurs',
    'Clean & Sanitized Cabs',
    'Transparent Pricing',
  ],
  stats: [
    { value: 100, suffix: '%', label: 'Customer Satisfaction' },
    { value: 24, suffix: '/7', label: 'Instant Booking Support' },
    { value: 15, suffix: '+', label: 'Fleet Vehicles Available' },
    { value: 4.9, suffix: '★', label: 'Client Rating', decimals: 1 },
  ],
};

// ── Services / Fleet Options -----------------------------------------------
export const services = [
  {
    id: 'hyundai-aura',
    icon: 'Car',
    title: 'Hyundai Aura',
    description:
      'Compact, stylish and fuel-efficient sedan for local Indore commutes, airport runs and pocket-friendly trips.',
    tags: ['4+1 Seater', 'AC Sedan', 'Ample Boot Space', 'Local & Outstation'],
    images: ['/images/vehicles/aura.png'],
  },
  {
    id: 'maruti-dzire',
    icon: 'Car',
    title: 'Maruti Suzuki Dzire',
    description:
      'India’s most reliable sedan offering plush seating, smooth highway performance and top-tier fuel economy.',
    tags: ['4+1 Seater', 'AC Sedan', 'Smooth Suspension', 'Intercity Travel'],
    images: ['/images/vehicles/dzire.png'],
  },
  {
    id: 'maruti-ertiga',
    icon: 'CarFront',
    title: 'Maruti Suzuki Ertiga',
    description:
      'Spacious and versatile 7-seater MPV perfect for family vacations, temple tours and comfortable group rides.',
    tags: ['6+1 Seater', 'Roof AC Vents', 'Foldable 3rd Row', 'Family Favorite'],
    images: ['/images/vehicles/ertiga.png'],
  },
  {
    id: 'kia-carens',
    icon: 'CarFront',
    title: 'Kia Carens',
    description:
      'Executive-class 6/7 seater MPV with refined leatherette seating, dual-zone AC and cutting-edge highway comfort.',
    tags: ['6/7 Seater', 'Premium Cabin', 'Automatic Climate', 'VIP Experience'],
    images: ['/images/vehicles/carens.png'],
  },
  {
    id: 'innova-crysta',
    icon: 'Car',
    title: 'Toyota Innova Crysta',
    description:
      'The undisputed king of intercity travel. Reclining captain chairs, premium safety and effortless power.',
    tags: ['7+1 Seater', 'Captain Seats', 'Premium SUV/MPV', 'King of the Road'],
    images: [
      '/images/vehicles/innova_crysta.png',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827486/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.37.45_rgvlgy.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827484/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.37.46_1_d06nyq.jpg',
    ],
  },
  {
    id: 'tempo-17',
    icon: 'Bus',
    title: 'Tempo Traveller – 17 Seater',
    description:
      'High-roof 17-seater Tempo Traveller with plush push-back seats, chilled AC, music system and ample luggage room.',
    tags: ['17 Seater', 'Push-Back Seats', 'High Roof AC', 'Pilgrimage & Groups'],
    images: [
      '/images/vehicles/tempo_traveller.png',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167335/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.30_1_cdynzw.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167335/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.29_2_d3nhau.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167335/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.30_hhkhc9.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167334/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.31_mhfaqd.jpg',
    ],
  },
  {
    id: 'tempo-26',
    icon: 'Bus',
    title: 'Tempo Traveller – 26 Seater',
    description:
      'Large 26-seater luxury traveller for large group pilgrimages, wedding guest convoys and corporate offsites.',
    tags: ['26 Seater', 'Push-Back Recliners', 'Dual AC', 'Large Groups'],
    images: [
      '/images/vehicles/tempo_traveller.png',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167335/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.29_kkmh5i.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167335/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.29_1_ahgih7.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167334/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.31_2_nruk6g.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781167334/happy%20luxe/traveller/WhatsApp_Image_2026-06-10_at_01.51.31_1_qianhc.jpg',
    ],
  },
  {
    id: 'force-urbania',
    icon: 'BusFront',
    title: 'Force Urbania',
    description:
      'Ultra-luxury Force Urbania with bespoke maharaja recliners, individual charging ports, ambient mood lighting and panoramic view.',
    tags: ['12 / 16 Seater', 'Maharaja Recliners', 'Ambient Lighting', 'VIP Luxury Van'],
    images: [
      '/images/vehicles/force_urbania.png',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780824939/happy%20luxe/Luxury%20Urbania%2012%20Seater%20%28%20Maharja%20Seats%20%29/WhatsApp_Image_2026-06-07_at_11.15.20_eyunco.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780824939/happy%20luxe/Luxury%20Urbania%2012%20Seater%20%28%20Maharja%20Seats%20%29/WhatsApp_Image_2026-06-07_at_11.15.18_1_sczbiy.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780825489/happy%20luxe/urbania%2016%20seater/WhatsApp_Image_2026-06-07_at_11.16.34_zia1rg.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780826332/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.23.25_ciq2es.jpg',
    ],
  },
  {
    id: 'luxury-bus',
    icon: 'BusFront',
    title: 'Luxury Bus',
    description:
      'Deluxe 35 to 52 seater luxury buses and coaches for grand weddings, school/college excursions and corporate tours.',
    tags: ['35–52 Seater', 'AC Luxury Coach', 'Air Suspension', 'Weddings & Events'],
    images: [
      '/images/vehicles/luxury_bus.png',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827486/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.31.57_cyletr.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827486/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.31.58_gs3tge.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781168206/happy%20luxe/WhatsApp_Image_2026-06-10_at_01.55.11_mkfvds.jpg',
      'https://res.cloudinary.com/dynbpb9u0/image/upload/v1781168205/happy%20luxe/WhatsApp_Image_2026-06-10_at_01.55.11_2_khuutm.jpg',
    ],
  },
];

// ── Specialised in ---------------------------------------------------------
export const specialities = [
  { icon: 'Landmark', title: 'Ujjain Mahakal & Omkareshwar Darshan', text: 'Comfortable, well-planned pilgrimage journeys for Bhasma Aarti and Jyotirlinga Darshan.' },
  { icon: 'Route', title: 'Outstation Cabs & One-Way Taxi', text: 'Hassle-free outstation rides to Bhopal, Kota, Ahmedabad, Pune, Mumbai and across MP.' },
  { icon: 'Plane', title: 'Airport Transfers (Indore IDR)', text: 'Punctual pickup & drop at Devi Ahilyabai Holkar International Airport with 24/7 service.' },
  { icon: 'UsersRound', title: 'Group & Family Tours', text: 'Effortless transport and itinerary coordination for families and large groups.' },
  { icon: 'Briefcase', title: 'Corporate & Business Travel', text: 'Executive-grade cars and punctuality for corporate delegations and offsites.' },
  { icon: 'Heart', title: 'Wedding & Event Fleet', text: 'Decorated luxury sedans, Urbania vans and buses for weddings and family celebrations.' },
];

// ── Fleet for reference / filters ------------------------------------------
export const fleet = services;

// ── Why choose us ----------------------------------------------------------
export const whyChooseUs = [
  { icon: 'BadgeCheck', title: 'Experienced & Verified Chauffeurs', text: 'Courteous, route-expert drivers committed to your comfort and safety.' },
  { icon: 'Sparkles', title: 'Spotless & Sanitized Fleet', text: 'Every vehicle is thoroughly washed and sanitised prior to every journey.' },
  { icon: 'ReceiptText', title: 'Transparent & All-Inclusive Pricing', text: 'Honest rates with zero hidden charges or unpleasant surprises.' },
  { icon: 'ShieldCheck', title: 'On-Time Guaranteed Service', text: 'We value your schedule — punctual pickups day or night across Indore.' },
  { icon: 'HeartHandshake', title: 'Customer-First Approach', text: 'Personalized attention and flexible stops tailored around your travel plans.' },
  { icon: 'Crown', title: 'Diverse Vehicle Fleet', text: 'From economy sedans to maharaja Urbania and 52-seater luxury buses.' },
];

// ── Popular packages -------------------------------------------------------
export const packages = [
  { icon: 'Landmark', title: 'Ujjain Mahakaleshwar Darshan', text: 'Same day or overnight trip to Mahakal Temple, Kal Bhairav & Harsiddhi Mata.' },
  { icon: 'Mountain', title: 'Omkareshwar & Mamleshwar Tour', text: 'Spiritual journey to the sacred island of Omkareshwar on the Narmada River.' },
  { icon: 'Map', title: 'Indore City Sightseeing Tour', text: 'Explore Rajwada Palace, Lal Bagh Palace, Khajrana Temple, Sarafa & 56 Dukan.' },
  { icon: 'Heart', title: 'Mandu & Maheshwar Heritage Day Trip', text: 'Visit Jahaz Mahal, Rani Roopmati Pavilion and scenic Maheshwar Fort.' },
  { icon: 'Plane', title: 'Indore Airport Pickup & Drop', text: 'Punctual 24/7 cab transfers to and from Devi Ahilyabai Holkar Airport (IDR).' },
  { icon: 'Briefcase', title: 'Corporate Outstation Cabs', text: 'Indore to Bhopal, Dewas, Pithampur, Ujjain, Ratlam and Gwalior corporate trips.' },
  { icon: 'Users', title: 'Pachmarhi Hill Station Tour', text: 'Scenic multi-day holiday packages to MP’s Queen of Satpura hill station.' },
  { icon: 'Sparkles', title: 'Custom Itinerary Packages', text: 'Craft your own travel plan across Madhya Pradesh with our custom tour expert.' },
];

// ── Booking process --------------------------------------------------------
export const bookingProcess = [
  { step: '01', icon: 'CarFront', title: 'Select Vehicle', text: 'Choose from sedans, Ertiga, Innova Crysta, Urbania or luxury buses.' },
  { step: '02', icon: 'PhoneCall', title: 'Call or WhatsApp', text: 'Reach us at 7000023165 for instant availability and clear quotes.' },
  { step: '03', icon: 'CalendarCheck', title: 'Confirm Details', text: 'Lock in your travel dates, pickup location and vehicle option.' },
  { step: '04', icon: 'PartyPopper', title: 'Enjoy Your Journey', text: 'Sit back, relax and travel in complete comfort with our experienced driver.' },
];

// ── Gallery ----------------------------------------------------------------
export const gallery = [
  { label: 'Outstation Journeys', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop' },
  { label: 'Airport Transfers', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop' },
  { label: 'Corporate & Wedding', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop' },
  { label: 'Force Urbania & Vans', image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1600&auto=format&fit=crop' },
  { label: 'Pilgrimage Darshan', image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1600&auto=format&fit=crop' },
  { label: 'Group Tours', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1600&auto=format&fit=crop' },
];

// ── Testimonials -----------------------------------------------------------
export const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Ujjain Mahakal Darshan · Innova Crysta',
    rating: 5,
    quote:
      'Booked Innova Crysta for our family trip to Ujjain Mahakal Bhasma Aarti. The driver arrived on time at 3:30 AM in Indore. Vehicle was spotless and the drive was extremely smooth.',
  },
  {
    name: 'Anjali Verma',
    role: 'Omkareshwar Pilgrimage · Tempo Traveller',
    rating: 5,
    quote:
      'Hired a 17-seater Tempo Traveller for a 2-day family pilgrimage to Omkareshwar and Maheshwar. Spacious, polite driver and very comfortable pushback seats. Highly recommended!',
  },
  {
    name: 'Pradeep Chouhan',
    role: 'Corporate Offsite · Force Urbania',
    rating: 5,
    quote:
      'The Force Urbania is next-level luxury. Our executive guests loved the maharaja seats and smooth ride. Maa Shardha delivered top-notch service in Indore.',
  },
  {
    name: 'Neha & Amit Tiwari',
    role: 'Indore to Bhopal Cab · Maruti Dzire',
    rating: 5,
    quote:
      'Best taxi experience in Indore! The Dzire was pristine, AC was chilled, and the driver drove very safely. Completely transparent fare with zero hidden fees.',
  },
  {
    name: 'Manish Patel',
    role: 'Wedding Transportation · Luxury Bus',
    rating: 5,
    quote:
      'Booked a 45-seater luxury bus for our wedding guests travelling from Indore to Ujjain. Everything was handled impeccably from start to finish. Thank you Maa Shardha!',
  },
];

// ── FAQ --------------------------------------------------------------------
export const faqs = [
  {
    q: 'Which vehicles can I book with Maa Shardha Tour and Taxi Service?',
    a: 'Our diverse fleet includes Hyundai Aura, Maruti Suzuki Dzire, Maruti Suzuki Ertiga, Kia Carens, Toyota Innova Crysta, Tempo Traveller (17 & 26 Seater), Force Urbania, and Luxury Buses (35 to 52 seaters).',
  },
  {
    q: 'Do you offer Ujjain Mahakal and Omkareshwar tour packages?',
    a: 'Yes! We specialize in pilgrimage tours from Indore to Ujjain (Mahakaleshwar Jyotirlinga, Bhasma Aarti, Kal Bhairav) and Omkareshwar Jyotirlinga, with same-day and multi-day packages.',
  },
  {
    q: 'Where is your office located in Indore?',
    a: 'Our registered office is located at 965C Shree Krishna Enclave, Ujjain Road, Indore, Madhya Pradesh. We provide doorstep pickup all across Indore city and airport.',
  },
  {
    q: 'Do you provide Devi Ahilyabai Holkar Airport transfers?',
    a: 'Yes, we provide 24/7 airport pickup and drop services at Indore Airport with flight tracking, prompt chauffeurs and upfront pricing.',
  },
  {
    q: 'How do I book a taxi or Tempo Traveller?',
    a: 'You can instantly book by calling us at +91 70000 23165 or +91 91656 00957, sending a WhatsApp message, or submitting the quick booking form on this page.',
  },
  {
    q: 'Are your rates transparent with no hidden costs?',
    a: 'Absolutely. We provide clear, all-inclusive quotations covering driver allowance, tolls and fuel as agreed, with zero hidden surprises.',
  },
];

// ── Campervan / Luxury Van Showcase ----------------------------------------
export const campervanVideo =
  'https://res.cloudinary.com/dynbpb9u0/video/upload/v1780827787/happy%20luxe/WhatsApp_Video_2026-06-07_at_11.20.49_sz3bfc.mp4';

export const campervanImages = [
  {
    label: 'Force Urbania Exterior',
    image: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827778/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.22.15_1_ufoagb.jpg',
  },
  {
    label: 'Maharaja Seating Interior',
    image: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827778/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.22.15_2_qjsvlb.jpg',
  },
  {
    label: 'Executive Travel Cabin',
    image: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827777/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.22.15_ckuxah.jpg',
  },
  {
    label: 'Highway Cruising Comfort',
    image: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827777/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.22.17_kixa6s.jpg',
  },
  {
    label: 'Plush Recliner Comfort',
    image: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827777/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.22.16_hk9vof.jpg',
  },
  {
    label: 'Luxury Group Journeys',
    image: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1780827777/happy%20luxe/WhatsApp_Image_2026-06-07_at_11.22.17_1_ieudax.jpg',
  },
];

// ── Footer -----------------------------------------------------------------
export const footer = {
  about:
    'Maa Shardha Tour and Taxi Service (MST) is your trusted travel partner in Indore, MP — offering reliable sedans, SUVs, Tempo Travellers, Force Urbania and luxury buses for local and outstation trips.',
  quickLinks: navLinks,
  popularServices: [
    'Ujjain Mahakal Darshan Taxi',
    'Omkareshwar Tour Packages',
    'Indore Airport Cab Service',
    'Tempo Traveller Hire Indore',
    'Force Urbania Luxury Van',
    'Outstation Taxi Service',
  ],
};
