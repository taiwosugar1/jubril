export interface CarColor {
    name: string;
    hex: string;
}

// THE ALLURE tab
export interface CarAllure {
    whyIDriveThis: string;   // the large italic pull-quote
    body: string;            // the smaller paragraph below
}

// THE DNA tab — 2-column stat grid
export interface CarDNAStat {
    label: string;   // e.g. "V8 MASTERY"
    value: string;   // e.g. "800 Horsepower"
}

// THE CRAFT tab — 2-column bullet list
// Just an array of strings (craft feature bullets)

export interface CarData {
    slug: string;
    name: string;
    brand: string;
    tagline: string;

    // Tab content — structured per the reference UI
    allure: CarAllure;
    dnaStats: CarDNAStat[];      // THE DNA: stat grid
    craftItems: string[];        // THE CRAFT: bullet list items
    colors: CarColor[];          // THE PALETTE: color swatches

    description: string;
    image: string;
    heroImage: string;

    // Asset Overview panel
    price: string;
    fuelType: string;
    bodyType: string;
    transmission: string;
    power: string;
    engine: string;

    url: string;
    priceNote?: string;

    // Optional specs row under tab content (kept for backward compat)
    specs?: { label: string; value: string }[];
}

export const CARS_DB: CarData[] = [
    {
        slug: 'brabus-800',
        name: 'BRABUS 800',
        brand: 'Mercedes-AMG G63',
        tagline: 'The Masterpiece.',

        allure: {
            whyIDriveThis:
                '"The G-Wagon is an icon, but the BRABUS 800 is a force of nature. It’s the ultimate expression of \'Go Anywhere\' power combined with \'Stay Anywhere\' luxury."',
            body:
                "There's a specific gravity to the Widestar body. It’s intimidating, yes, but also remarkably refined. It represents the peak of German engineering pushed to its absolute atmospheric limit.",
        },

        dnaStats: [
            { label: 'V8 MASTERY', value: '800 Horsepower' },
            { label: 'PEAK TORQUE', value: '1000 N·m Torque' },
            { label: 'ROCKET LAUNCH', value: '4.1s to 100 km/h' },
            { label: 'WIDESTAR STANCE', value: 'Carbon Widebody' },
        ],
        specs: [
            { label: 'POWER', value: '800 HP' },
            { label: 'TORQUE', value: '1000 Nm' },
            { label: '0–100', value: '4.1s' },
        ],

        craftItems: [
            'Hand-Stitched Masterpiece Leather',
            'Visible Carbon Fiber Accents',
            '24-inch Monoblock Z Forged Wheels',
            'Performance Valve Exhaust System',
            'Carbon Fiber Hood Attachment',
            'Brabus Ride Control Suspension',
        ],

        colors: [
            { name: 'Signature Black', hex: '#050505' },
            { name: 'Granite Grey', hex: '#333333' },
            { name: 'Deep Charcoal', hex: '#1A1A1A' },
            { name: 'Military Green', hex: '#2F3528' },
        ],

        description:
            'The BRABUS 800 is the ultimate high-performance supercar based on the Mercedes-AMG G 63. It combines extreme V8 power with an unmistakable widebody design and bespoke luxury.',

        image: '/images/brabus-cars/1.png',
        heroImage: '/images/brabus-cars/2.png',

        price: 'Available on Request',
        fuelType: 'Petrol',
        bodyType: 'Off-Road SUV',
        transmission: '9-Speed Shift',
        power: '800 hp',
        engine: '4.0L V8 Biturbo',

        url: 'https://hybridmotorsnigeria.com/vehicles/brabus-800',
        priceNote: '* Final pricing subject to bespoke configurations and regional taxes.',
    },

    {
        slug: 'brabus-700',
        name: 'BRABUS 700',
        brand: 'Rolls-Royce Cullinan Series II',
        tagline: 'The Pinnacle.',

        allure: {
            whyIDriveThis:
                '"Standard luxury is everywhere, but true presence? That\'s rare. The BRABUS 700 Cullinan takes that legendary \'magic carpet ride\' and gives it a pulse."',
            body:
                'I drive this when I want to disappear into total comfort without losing my edge. It’s about the absolute silence of the V12 and the realization that you’re moving in something that feels more like a private jet than an SUV.',
        },

        dnaStats: [
            { label: 'V12 POWER', value: '700 HP Output' },
            { label: 'ELITE TORQUE', value: '950 N·m Torque' },
            { label: 'EXECUTIVE GLIDE', value: 'Active Air Suspension' },
            { label: 'SERIES II EDGE', value: 'Bespoke Refinement' },
        ],

        specs: [
            { label: 'POWER', value: '700 HP' },
            { label: 'TORQUE', value: '950 Nm' },
            { label: 'ENGINE', value: 'V12 TT' },
        ],

        craftItems: [
            'Hand-Finished Masterpiece Interior',
            'Carbon Fiber Aerodynamic Kit',
            '24-inch Monoblock Wheels',
            'Stainless Steel Valvetronic Exhaust',
            'Exclusive BRABUS Scuff Plates',
            'Individual Rear Seat Configuration',
        ],

        colors: [
            { name: 'Arctic White', hex: '#FDFDFD' },
            { name: 'Deep Midnight', hex: '#000033' },
            { name: 'Gunmetal Grey', hex: '#4B4B4B' },
            { name: 'Imperial Black', hex: '#000000' },
        ],

        description:
            'The BRABUS 700 Cullinan Series II redefines executive travel. It enhances the inherent grace of the Rolls-Royce with a precision-tuned V12 and signature carbon fiber aesthetics.',

        image: '/images/brabus-ross/brabus-700-ross-royce.png',
        heroImage: '/images/brabus-ross/2.png',

        price: 'Available on Request',
        fuelType: 'Petrol',
        bodyType: 'Luxury SUV',
        transmission: '8-Speed Automatic',
        power: '700 hp',
        engine: '6.75L V12 Twin-Turbo',

        url: 'https://hybridmotorsnigeria.com/vehicles/brabus-700-cullinan-series-ii',
        priceNote: '* Final pricing subject to bespoke configurations and regional taxes.',
    },

    {
        slug: 'exeed',
        name: 'EXEED RX',
        brand: 'EXEED',
        tagline: 'Art of Technology.',

        allure: {
            whyIDriveThis:
                '"The RX is what happens when you decide that a car shouldn\'t just be a machine, but a piece of kinetic art. It’s the most beautiful SUV coming out of Asia right now."',
            body:
                'I chose to bring the RX into our collection because it represents the new standard. It’s high-tech, yes, but it’s high-tech with a soul. That IDA Gold Award wasn’t a fluke—it’s a reflection of how this car makes you feel just looking at it.',
        },

        dnaStats: [
            { label: 'PROPULSION POWER', value: '192 kW / 261 HP' },
            { label: 'TORQUE PEAK', value: '400 N·m Torque' },
            { label: 'CHASSIS CONTROL', value: 'CDC Adaptive Dampers' },
            { label: 'GEAR SELECTION', value: 'Aisin 8-Speed AT' },
        ],

        specs: [
            { label: 'POWER', value: '261 HP' },
            { label: 'TORQUE', value: '400 Nm' },
            { label: 'DRIVE', value: 'AWD' },
        ],

        craftItems: [
            'Flying Wing Star Track LED Lights',
            '24.6-inch Curved Display',
            'Snapdragon 8155 Smart Cockpit',
            '14-Speaker Sony Surround Sound',
            'Ventilated Nappa Leather Seats',
            'Level 2.5 ADAS Assistance',
        ],

        colors: [
            { name: 'Moonlight White', hex: '#F0F0EE' },
            { name: 'Meteorite Grey', hex: '#555555' },
            { name: 'Star Silver', hex: '#C0C0C0' },
            { name: 'Obsidian Black', hex: '#0A0A0A' },
        ],

        description:
            'Winner of the IDA Gold Award, the Exeed RX 400T combines futuristic design with a high-performance TGDI engine and a luxury-first interior.',

        image: '/images/exeed-cars/exeed.png',
        heroImage: '/images/exeed/exeed-rx-hero.png',

        price: '₦69,000,000',
        fuelType: 'Petrol',
        bodyType: 'Coupe SUV',
        transmission: '8-Speed AT',
        power: '261 hp',
        engine: '2.0L TGDI Engine',

        url: 'https://hybridmotorsnigeria.com/vehicles/exeed-rx-400t',
        priceNote: '* Final pricing subject to configuration and regional availability.',
    },

    {
        slug: 'soueast',
        name: 'SOUEAST S09',
        brand: 'SOUEAST',
        tagline: 'The Space Master.',

        allure: {
            whyIDriveThis:
                '"Usually, seven-seaters are a compromise. The S09 is the first one I’ve driven where you feel like the most important person in the car, no matter which row you’re in."',
            body:
                'For the long journeys, this is my go-to. It’s about that "silent cabin" experience. When you’re inside, the world outside just stops mattering, and you can actually focus on the road or the vision ahead.',
        },

        dnaStats: [
            { label: 'TURBO OUTPUT', value: '187 kW / 254 HP' },
            { label: 'TORQUE FORCE', value: '390 N·m Torque' },
            { label: 'SEATING LOGIC', value: '7-Seat Configuration' },
            { label: 'SMART SAFETY', value: 'Level 2 ADAS System' },
        ],

        specs: [
            { label: 'POWER', value: '254 HP' },
            { label: 'TORQUE', value: '390 Nm' },
            { label: 'SEATS', value: '7-Seater' },
        ],

        craftItems: [
            'Panoramic Sky-View Sunroof',
            'Master-Grade Silent Cabin',
            '12.3-inch Dual-Screen Cockpit',
            '64-Color Ambient Lighting',
            'Nappa-Grain Soft Upholstery',
            'Power Memory Seats',
        ],

        colors: [
            { name: 'Glacier White', hex: '#F8F9FA' },
            { name: 'Iron Grey', hex: '#4A4A4A' },
            { name: 'Celestial Blue', hex: '#1E2A38' },
            { name: 'Pure Black', hex: '#000000' },
        ],

        description:
            'The Soueast S09 is a premium 7-seater SUV that blends massive interior space with intelligent technology and executive-level comfort.',

        image: '/images/soueast-cars/soueast.png',
        heroImage: '/images/soueast/s09-hero.png',

        price: '₦85,500,000',
        fuelType: 'Petrol',
        bodyType: '7-Seater SUV',
        transmission: '7-Speed DCT',
        power: '254 hp',
        engine: '2.0T Engine',

        url: 'https://hybridmotorsnigeria.com/vehicles/soueast-s09',
        priceNote: '* Final pricing subject to configuration and regional availability.',
    },
];

console.log(
    'CARS_DB loaded with',
    CARS_DB.length,
    'cars:',
    CARS_DB.map((c) => c.slug)
);