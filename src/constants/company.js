/**
 * Brand & site-wide constants for SRI RAJAGANAPATHI LOGISTICS.
 * Extracted from official visiting card + business briefing.
 */

export const COMPANY = {
    name: 'Sri Rajaganapathi Logistics',
    shortName: 'SRL',
    legalName: 'Sri Rajaganapathi Logistics',
    tagline: 'Precision Logistics. Pharma-Grade Reliability.',
    description:
        'Salem-based logistics partner delivering pharmaceuticals, cold-chain medical shipments, industrial goods and commercial merchandise across Tamil Nadu and India — safely, on time, every time.',
    yearFounded: 2015,
};

export const CONTACT = {
    email: import.meta.env.VITE_CONTACT_EMAIL || 'srirajaganapathilogistics@gmail.com',
    phoneDisplay: '+91 94427 31439',
    phoneRaw: import.meta.env.VITE_CONTACT_PHONE || '+919442731439',
    whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '919442731439',
    address: {
        line1: 'M.K.S. Complex, Salem to Chennai Bye-Pass',
        line2: '1375, Kumaragiri Murugan Kovil Adivaram',
        locality: 'Kumaragiri, Ammapet',
        city: 'Salem',
        state: 'Tamil Nadu',
        pincode: '636003',
        country: 'India',
    },
    hours: 'Mon – Sat · 8:00 AM – 8:00 PM',
    mapsQuery:
        import.meta.env.VITE_GOOGLE_MAPS_QUERY ||
        'Sri+Rajaganapathi+Logistics+Ammapet+Salem+636003',
};

export const SOCIAL = {
    instagram: 'https://www.instagram.com/srirajaganapathilogistics_001',
    linkedin:
        'https://www.linkedin.com/in/sri-rajaganapathi-logistics-srl-a6373b422/',
};

export const REGULAR_ROUTES = [
    'Chennai',
    'Villupuram',
    'Pondicherry',
    'Salem',
    'Erode',
    'Coimbatore',
];

export const LOCAL_ROUTES = [
    'Karur',
    'Paramathi Velur',
    'Mohanur',
    'Namakkal',
    'Budhan Santhai',
    'Rasipuram',
    'Mallur',
    'Salem',
    'Omalur',
    'Thoppur',
    'Dharmapuri',
    'Kariyamangalam',
    'Kaveripattinam',
    'Krishnagiri',
    'Solagiri',
    'Hosur',
];

export const NAV_LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Process', href: '#process' },
    { label: 'Coverage', href: '#coverage' },
    { label: 'Contact', href: '#contact' },
];

export const STATS = [
    { value: 250000, suffix: '+', label: 'Deliveries Completed' },
    { value: 500, suffix: '+', label: 'Business Clients' },
    { value: 40, suffix: '+', label: 'Cities Served' },
    { value: 12, suffix: '+', label: 'Industries Powered' },
];
