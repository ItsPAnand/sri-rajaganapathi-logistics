import {
    MdLocalShipping,
    MdMedicalServices,
    MdVaccines,
    MdInventory2,
    MdMemory,
    MdCheckroom,
    MdPrecisionManufacturing,
    MdShoppingBag,
} from 'react-icons/md';
import {
    FaTemperatureHalf,
    FaTruckMedical,
    FaBoxesStacked,
    FaShieldHalved,
    FaRoute,
    FaClock,
    FaHeadset,
    FaHandshake,
} from 'react-icons/fa6';

/**
 * Service catalogue. `Icon` is a react-icons component reference (do not JSX render here).
 */
export const SERVICES = [
    {
        id: 'cold-chain',
        Icon: FaTemperatureHalf,
        title: 'Cold-Chain Logistics',
        subtitle: 'Temperature-controlled precision',
        description:
            'Specialised transportation of poultry vaccines, veterinary medicines and injections using validated thermocol ice-box packaging that preserves the required temperature end-to-end.',
        highlights: ['Vaccine-safe', 'Validated packaging', 'Chain-of-custody'],
        accent: 'primary',
        featured: true,
    },
    {
        id: 'pharma',
        Icon: MdMedicalServices,
        title: 'Pharmaceutical Distribution',
        subtitle: 'Our core specialty',
        description:
            'Reliable last-mile supply of medicines, healthcare products and medical supplies to pharmacies, hospitals, clinics and healthcare distributors across Tamil Nadu.',
        highlights: ['Hospitals & clinics', 'Retail pharmacies', 'Distributor network'],
        accent: 'secondary',
        featured: true,
    },
    {
        id: 'medical',
        Icon: FaTruckMedical,
        title: 'Medical & Healthcare Delivery',
        subtitle: 'Life-critical logistics',
        description:
            'Priority handling for injections, diagnostic supplies and time-sensitive medical consignments — moved with hospital-grade discipline.',
        highlights: ['Priority routing', 'Careful handling', 'Signed-for delivery'],
        accent: 'accent',
    },
    {
        id: 'vaccines',
        Icon: MdVaccines,
        title: 'Poultry & Veterinary Vaccines',
        subtitle: 'Farm-to-clinic cold chain',
        description:
            'Dedicated cold-chain lanes for the poultry and veterinary industry, keeping vaccines efficacious from origin to farm gate.',
        highlights: ['Farms & hatcheries', 'Vet clinics', 'Verified handoffs'],
        accent: 'primary',
    },
    {
        id: 'industrial',
        Icon: MdPrecisionManufacturing,
        title: 'Industrial Logistics',
        subtitle: 'For manufacturers & B2B',
        description:
            'Movement of industrial goods, machinery components and raw materials with structured schedules and dedicated capacity.',
        highlights: ['Manufacturing', 'B2B lanes', 'Scheduled dispatch'],
        accent: 'secondary',
    },
    {
        id: 'electronics',
        Icon: MdMemory,
        title: 'Electronic Goods',
        subtitle: 'High-value, fragile care',
        description:
            'Insured, cushion-packed transport for consumer electronics, appliances and IT hardware with anti-shock handling protocols.',
        highlights: ['Fragile-safe', 'Insured', 'Anti-shock packing'],
        accent: 'accent',
    },
    {
        id: 'textile',
        Icon: MdCheckroom,
        title: 'Silk & Textile Transport',
        subtitle: 'For Tamil Nadu’s mills',
        description:
            'Dedicated capacity for silk bundles, textile rolls and finished garments — from Salem, Erode and Karur to India-wide markets.',
        highlights: ['Silk bundles', 'Textile rolls', 'Garment loads'],
        accent: 'primary',
    },
    {
        id: 'commercial',
        Icon: MdShoppingBag,
        title: 'Commercial & Retail',
        subtitle: 'FMCG, footwear, paper & more',
        description:
            'Reliable movement of footwear, paper bundles and mixed commercial merchandise supporting retail supply chains across South India.',
        highlights: ['Footwear', 'Paper bundles', 'Retail SKUs'],
        accent: 'secondary',
    },
];

export const WHY_CHOOSE = [
    {
        Icon: FaTemperatureHalf,
        title: 'Temperature-Controlled',
        text: 'Validated cold-chain packaging designed for pharma and veterinary use.',
    },
    {
        Icon: FaShieldHalved,
        title: 'Safe Handling',
        text: 'Trained crews, tamper-evident sealing and careful loading protocols.',
    },
    {
        Icon: FaClock,
        title: 'On-Time Delivery',
        text: 'Scheduled routes and daily service windows you can plan operations around.',
    },
    {
        Icon: FaRoute,
        title: 'Wide Coverage',
        text: 'Regular routes across Tamil Nadu with reach into Pondicherry, Karnataka & beyond.',
    },
    {
        Icon: FaBoxesStacked,
        title: 'Any Load, Handled',
        text: 'From a single vaccine box to full-truck industrial consignments.',
    },
    {
        Icon: FaHandshake,
        title: 'Business-First',
        text: 'Dedicated account handling for hospitals, distributors and manufacturers.',
    },
    {
        Icon: FaHeadset,
        title: 'Fast Response',
        text: 'A responsive team on WhatsApp and phone — quotes and pickups moved fast.',
    },
    {
        Icon: MdLocalShipping,
        title: 'Reliable Fleet',
        text: 'Maintained vehicles, disciplined drivers, transparent status updates.',
    },
];

export const INDUSTRIES = [
    { Icon: MdVaccines, name: 'Poultry & Veterinary' },
    { Icon: MdMedicalServices, name: 'Healthcare & Hospitals' },
    { Icon: FaTruckMedical, name: 'Pharmaceutical' },
    { Icon: MdPrecisionManufacturing, name: 'Industrial & MSME' },
    { Icon: MdCheckroom, name: 'Silk & Textile' },
    { Icon: MdShoppingBag, name: 'Retail & FMCG' },
    { Icon: MdMemory, name: 'Electronics' },
    { Icon: MdInventory2, name: 'Commercial Merchandise' },
];

export const PROCESS_STEPS = [
    {
        step: '01',
        title: 'Inquiry',
        text: 'Share pickup, drop, dimensions and temperature needs via phone, WhatsApp or the contact form.',
    },
    {
        step: '02',
        title: 'Booking',
        text: 'We confirm the lane, ETA, packaging spec and pricing — usually within the hour.',
    },
    {
        step: '03',
        title: 'Pickup',
        text: 'Trained crew arrives with the correct packaging, seals the consignment and issues a receipt.',
    },
    {
        step: '04',
        title: 'Safe Transport',
        text: 'Temperature-managed, load-secured transit on scheduled lanes with driver check-ins.',
    },
    {
        step: '05',
        title: 'Delivery',
        text: 'Timely handover at pharmacy, hospital, distributor or business location — with signature capture.',
    },
    {
        step: '06',
        title: 'Confirmation',
        text: 'Instant status confirmation to your team so downstream operations can proceed with certainty.',
    },
];
