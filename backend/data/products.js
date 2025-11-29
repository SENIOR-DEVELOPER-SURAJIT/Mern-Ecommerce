// Comprehensive Product Database for Softcart Tech Solutions

const products = [
    // ========== MOBILE PHONES (10 products) ==========
    {
        id: 1,
        name: 'iPhone 15 Pro Max',
        price: 1199.99,
        category: 'Mobile',
        rating: 5,
        color: 'Titanium Blue',
        size: '256GB',
        details: {
            product: '6.7" Super Retina XDR display, A17 Pro chip, Pro camera system',
            warranty: '1 Year Apple Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'iphone-15-pro',
        images: ['iphone-15-pro', 'iphone-15-pro-2', 'iphone-15-pro-3'],
        stock: 25,
        brand: 'Apple'
    },
    {
        id: 2,
        name: 'Samsung Galaxy S24 Ultra',
        price: 1099.99,
        category: 'Mobile',
        rating: 5,
        color: 'Phantom Black',
        size: '512GB',
        details: {
            product: '6.8" Dynamic AMOLED, Snapdragon 8 Gen 3, 200MP camera',
            warranty: '1 Year Samsung Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'samsung-s24-ultra',
        images: ['samsung-s24-ultra', 'samsung-s24-ultra-2', 'samsung-s24-ultra-3'],
        stock: 30,
        brand: 'Samsung'
    },
    {
        id: 3,
        name: 'Google Pixel 8 Pro',
        price: 899.99,
        category: 'Mobile',
        rating: 5,
        color: 'Obsidian',
        size: '256GB',
        details: {
            product: '6.7" LTPO OLED, Google Tensor G3, AI-powered camera',
            warranty: '1 Year Google Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'pixel-8-pro',
        images: ['pixel-8-pro', 'pixel-8-pro-2', 'pixel-8-pro-3'],
        stock: 20,
        brand: 'Google'
    },
    {
        id: 4,
        name: 'OnePlus 12',
        price: 799.99,
        category: 'Mobile',
        rating: 4,
        color: 'Flowy Emerald',
        size: '256GB',
        details: {
            product: '6.82" AMOLED, Snapdragon 8 Gen 3, 50MP Hasselblad camera',
            warranty: '1 Year OnePlus Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'oneplus-12',
        images: ['oneplus-12', 'oneplus-12-2', 'oneplus-12-3'],
        stock: 15,
        brand: 'OnePlus'
    },
    {
        id: 5,
        name: 'Xiaomi 14 Pro',
        price: 699.99,
        category: 'Mobile',
        rating: 4,
        color: 'Titanium Gray',
        size: '512GB',
        details: {
            product: '6.73" AMOLED, Snapdragon 8 Gen 3, Leica camera system',
            warranty: '1 Year Xiaomi Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'xiaomi-14-pro',
        images: ['xiaomi-14-pro', 'xiaomi-14-pro-2', 'xiaomi-14-pro-3'],
        stock: 18,
        brand: 'Xiaomi'
    },
    {
        id: 6,
        name: 'iPhone 14',
        price: 699.99,
        category: 'Mobile',
        rating: 4,
        color: 'Midnight',
        size: '128GB',
        details: {
            product: '6.1" Super Retina XDR, A15 Bionic, Dual camera system',
            warranty: '1 Year Apple Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'iphone-14',
        images: ['iphone-14', 'iphone-14-2', 'iphone-14-3'],
        stock: 35,
        brand: 'Apple'
    },
    {
        id: 7,
        name: 'Samsung Galaxy Z Fold 5',
        price: 1799.99,
        category: 'Mobile',
        rating: 5,
        color: 'Icy Blue',
        size: '512GB',
        details: {
            product: '7.6" Foldable AMOLED, Snapdragon 8 Gen 2, Triple camera',
            warranty: '1 Year Samsung Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'galaxy-fold-5',
        images: ['galaxy-fold-5', 'galaxy-fold-5-2', 'galaxy-fold-5-3'],
        stock: 10,
        brand: 'Samsung'
    },
    {
        id: 8,
        name: 'Oppo Find X6 Pro',
        price: 849.99,
        category: 'Mobile',
        rating: 4,
        color: 'Desert Silver',
        size: '256GB',
        details: {
            product: '6.82" AMOLED, Snapdragon 8 Gen 2, Hasselblad camera',
            warranty: '1 Year Oppo Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'oppo-find-x6',
        images: ['oppo-find-x6', 'oppo-find-x6-2', 'oppo-find-x6-3'],
        stock: 12,
        brand: 'Oppo'
    },
    {
        id: 9,
        name: 'Vivo X100 Pro',
        price: 799.99,
        category: 'Mobile',
        rating: 4,
        color: 'Asteroid Black',
        size: '256GB',
        details: {
            product: '6.78" AMOLED, MediaTek Dimensity 9300, Zeiss optics',
            warranty: '1 Year Vivo Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'vivo-x100-pro',
        images: ['vivo-x100-pro', 'vivo-x100-pro-2', 'vivo-x100-pro-3'],
        stock: 14,
        brand: 'Vivo'
    },
    {
        id: 10,
        name: 'Nothing Phone 2',
        price: 599.99,
        category: 'Mobile',
        rating: 4,
        color: 'White',
        size: '256GB',
        details: {
            product: '6.7" LTPO OLED, Snapdragon 8+ Gen 1, Glyph Interface',
            warranty: '1 Year Nothing Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'nothing-phone-2',
        images: ['nothing-phone-2', 'nothing-phone-2-2', 'nothing-phone-2-3'],
        stock: 22,
        brand: 'Nothing'
    },

    // ========== FASHION (10 products) ==========
    {
        id: 11,
        name: 'Nike Air Max 270',
        price: 149.99,
        category: 'Fashion',
        rating: 5,
        color: 'Triple Black',
        size: 'US 9',
        details: {
            product: 'Premium sneakers with Max Air cushioning, breathable mesh upper',
            warranty: '6 Months Manufacturer Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'nike-air-max-270',
        images: ['nike-air-max-270', 'nike-air-max-270-2', 'nike-air-max-270-3'],
        stock: 45,
        brand: 'Nike'
    },
    {
        id: 12,
        name: 'Adidas Ultraboost 23',
        price: 189.99,
        category: 'Fashion',
        rating: 5,
        color: 'Core Black',
        size: 'US 10',
        details: {
            product: 'Running shoes with Boost cushioning, Primeknit upper',
            warranty: '6 Months Manufacturer Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'adidas-ultraboost',
        images: ['adidas-ultraboost', 'adidas-ultraboost-2', 'adidas-ultraboost-3'],
        stock: 38,
        brand: 'Adidas'
    },
    {
        id: 13,
        name: 'Levi\'s 501 Original Jeans',
        price: 89.99,
        category: 'Fashion',
        rating: 5,
        color: 'Dark Stonewash',
        size: '32W x 32L',
        details: {
            product: 'Classic straight fit jeans, 100% cotton denim',
            warranty: 'No Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'levis-501',
        images: ['levis-501', 'levis-501-2', 'levis-501-3'],
        stock: 60,
        brand: 'Levi\'s'
    },
    {
        id: 14,
        name: 'Ray-Ban Aviator Sunglasses',
        price: 159.99,
        category: 'Fashion',
        rating: 5,
        color: 'Gold/Green',
        size: 'Standard',
        details: {
            product: 'Classic aviator style, UV protection, metal frame',
            warranty: '1 Year Manufacturer Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'rayban-aviator',
        images: ['rayban-aviator', 'rayban-aviator-2', 'rayban-aviator-3'],
        stock: 28,
        brand: 'Ray-Ban'
    },
    {
        id: 15,
        name: 'Tommy Hilfiger Polo Shirt',
        price: 79.99,
        category: 'Fashion',
        rating: 4,
        color: 'Navy Blue',
        size: 'L',
        details: {
            product: 'Classic fit polo, 100% cotton pique, embroidered logo',
            warranty: 'No Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'tommy-polo',
        images: ['tommy-polo', 'tommy-polo-2', 'tommy-polo-3'],
        stock: 55,
        brand: 'Tommy Hilfiger'
    },
    {
        id: 16,
        name: 'Puma Suede Classic',
        price: 79.99,
        category: 'Fashion',
        rating: 4,
        color: 'Peacoat/White',
        size: 'US 9',
        details: {
            product: 'Iconic suede sneakers, rubber sole, classic design',
            warranty: '6 Months Manufacturer Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'puma-suede',
        images: ['puma-suede', 'puma-suede-2', 'puma-suede-3'],
        stock: 42,
        brand: 'Puma'
    },
    {
        id: 17,
        name: 'Calvin Klein Leather Belt',
        price: 49.99,
        category: 'Fashion',
        rating: 4,
        color: 'Black',
        size: '34',
        details: {
            product: 'Genuine leather belt, reversible design, silver buckle',
            warranty: 'No Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'ck-belt',
        images: ['ck-belt', 'ck-belt-2', 'ck-belt-3'],
        stock: 48,
        brand: 'Calvin Klein'
    },
    {
        id: 18,
        name: 'Zara Slim Fit Blazer',
        price: 129.99,
        category: 'Fashion',
        rating: 4,
        color: 'Charcoal Gray',
        size: 'M',
        details: {
            product: 'Modern slim fit blazer, wool blend, two-button closure',
            warranty: 'No Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'zara-blazer',
        images: ['zara-blazer', 'zara-blazer-2', 'zara-blazer-3'],
        stock: 25,
        brand: 'Zara'
    },
    {
        id: 19,
        name: 'H&M Cotton T-Shirt Pack',
        price: 29.99,
        category: 'Fashion',
        rating: 4,
        color: 'Multi (3-pack)',
        size: 'M',
        details: {
            product: 'Pack of 3 basic tees, 100% cotton, crew neck',
            warranty: 'No Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'hm-tshirt-pack',
        images: ['hm-tshirt-pack', 'hm-tshirt-pack-2', 'hm-tshirt-pack-3'],
        stock: 75,
        brand: 'H&M'
    },
    {
        id: 20,
        name: 'Fossil Leather Watch',
        price: 149.99,
        category: 'Fashion',
        rating: 5,
        color: 'Brown/Silver',
        size: 'Standard',
        details: {
            product: 'Chronograph watch, genuine leather strap, stainless steel case',
            warranty: '2 Year Manufacturer Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'fossil-watch',
        images: ['fossil-watch', 'fossil-watch-2', 'fossil-watch-3'],
        stock: 32,
        brand: 'Fossil'
    },

    // ========== ELECTRONICS (10 products) ==========
    {
        id: 21,
        name: 'Sony WH-1000XM5 Headphones',
        price: 399.99,
        category: 'Electronics',
        rating: 5,
        color: 'Black',
        size: 'Over-Ear',
        details: {
            product: 'Premium noise-canceling headphones, 30hr battery, LDAC support',
            warranty: '1 Year Sony Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'sony-wh1000xm5',
        images: ['sony-wh1000xm5', 'sony-wh1000xm5-2', 'sony-wh1000xm5-3'],
        stock: 28,
        brand: 'Sony'
    },
    {
        id: 22,
        name: 'Apple AirPods Pro 2',
        price: 249.99,
        category: 'Electronics',
        rating: 5,
        color: 'White',
        size: 'In-Ear',
        details: {
            product: 'Active noise cancellation, adaptive transparency, MagSafe charging',
            warranty: '1 Year Apple Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'airpods-pro-2',
        images: ['airpods-pro-2', 'airpods-pro-2-2', 'airpods-pro-2-3'],
        stock: 45,
        brand: 'Apple'
    },
    {
        id: 23,
        name: 'iPad Air M2',
        price: 599.99,
        category: 'Electronics',
        rating: 5,
        color: 'Space Gray',
        size: '11-inch, 128GB',
        details: {
            product: '11" Liquid Retina display, M2 chip, Apple Pencil support',
            warranty: '1 Year Apple Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'ipad-air-m2',
        images: ['ipad-air-m2', 'ipad-air-m2-2', 'ipad-air-m2-3'],
        stock: 22,
        brand: 'Apple'
    },
    {
        id: 24,
        name: 'Samsung Galaxy Watch 6',
        price: 299.99,
        category: 'Electronics',
        rating: 4,
        color: 'Graphite',
        size: '44mm',
        details: {
            product: 'AMOLED display, health tracking, 40hr battery, Wear OS',
            warranty: '1 Year Samsung Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'galaxy-watch-6',
        images: ['galaxy-watch-6', 'galaxy-watch-6-2', 'galaxy-watch-6-3'],
        stock: 35,
        brand: 'Samsung'
    },
    {
        id: 25,
        name: 'Canon EOS R6 Mark II',
        price: 2499.99,
        category: 'Electronics',
        rating: 5,
        color: 'Black',
        size: 'Body Only',
        details: {
            product: '24.2MP full-frame sensor, 4K 60fps video, in-body stabilization',
            warranty: '1 Year Canon Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'canon-r6-ii',
        images: ['canon-r6-ii', 'canon-r6-ii-2', 'canon-r6-ii-3'],
        stock: 8,
        brand: 'Canon'
    },
    {
        id: 26,
        name: 'DJI Mini 4 Pro Drone',
        price: 759.99,
        category: 'Electronics',
        rating: 5,
        color: 'Gray',
        size: 'Standard',
        details: {
            product: '4K HDR video, 34min flight time, omnidirectional obstacle sensing',
            warranty: '1 Year DJI Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'dji-mini-4-pro',
        images: ['dji-mini-4-pro', 'dji-mini-4-pro-2', 'dji-mini-4-pro-3'],
        stock: 15,
        brand: 'DJI'
    },
    {
        id: 27,
        name: 'Bose SoundLink Revolve+',
        price: 329.99,
        category: 'Electronics',
        rating: 4,
        color: 'Triple Black',
        size: 'Portable',
        details: {
            product: '360° sound, 17hr battery, water-resistant, Bluetooth speaker',
            warranty: '1 Year Bose Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'bose-revolve',
        images: ['bose-revolve', 'bose-revolve-2', 'bose-revolve-3'],
        stock: 26,
        brand: 'Bose'
    },
    {
        id: 28,
        name: 'Logitech MX Master 3S',
        price: 99.99,
        category: 'Electronics',
        rating: 5,
        color: 'Graphite',
        size: 'Wireless Mouse',
        details: {
            product: 'Ergonomic design, 8K DPI sensor, quiet clicks, multi-device',
            warranty: '1 Year Logitech Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'mx-master-3s',
        images: ['mx-master-3s', 'mx-master-3s-2', 'mx-master-3s-3'],
        stock: 52,
        brand: 'Logitech'
    },
    {
        id: 29,
        name: 'GoPro HERO 12 Black',
        price: 399.99,
        category: 'Electronics',
        rating: 5,
        color: 'Black',
        size: 'Action Camera',
        details: {
            product: '5.3K60 video, HyperSmooth 6.0, waterproof to 33ft',
            warranty: '1 Year GoPro Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'gopro-hero-12',
        images: ['gopro-hero-12', 'gopro-hero-12-2', 'gopro-hero-12-3'],
        stock: 19,
        brand: 'GoPro'
    },
    {
        id: 30,
        name: 'Anker PowerCore 20000mAh',
        price: 49.99,
        category: 'Electronics',
        rating: 4,
        color: 'Black',
        size: 'Power Bank',
        details: {
            product: 'High-capacity portable charger, dual USB ports, fast charging',
            warranty: '18 Months Anker Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'anker-powercore',
        images: ['anker-powercore', 'anker-powercore-2', 'anker-powercore-3'],
        stock: 68,
        brand: 'Anker'
    },

    // ========== HOME (10 products) ==========
    {
        id: 31,
        name: 'Dyson V15 Detect Vacuum',
        price: 649.99,
        category: 'Home',
        rating: 5,
        color: 'Nickel/Yellow',
        size: 'Cordless',
        details: {
            product: 'Laser dust detection, 60min runtime, HEPA filtration',
            warranty: '2 Year Dyson Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'dyson-v15',
        images: ['dyson-v15', 'dyson-v15-2', 'dyson-v15-3'],
        stock: 14,
        brand: 'Dyson'
    },
    {
        id: 32,
        name: 'Nespresso Vertuo Next',
        price: 179.99,
        category: 'Home',
        rating: 4,
        color: 'Cherry Red',
        size: 'Coffee Maker',
        details: {
            product: 'One-touch brewing, 5 cup sizes, Centrifusion technology',
            warranty: '1 Year Nespresso Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'nespresso-vertuo',
        images: ['nespresso-vertuo', 'nespresso-vertuo-2', 'nespresso-vertuo-3'],
        stock: 32,
        brand: 'Nespresso'
    },
    {
        id: 33,
        name: 'Philips Hue Starter Kit',
        price: 199.99,
        category: 'Home',
        rating: 5,
        color: 'White & Color',
        size: '4 Bulbs + Bridge',
        details: {
            product: 'Smart LED bulbs, 16 million colors, voice control compatible',
            warranty: '2 Year Philips Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'philips-hue',
        images: ['philips-hue', 'philips-hue-2', 'philips-hue-3'],
        stock: 28,
        brand: 'Philips'
    },
    {
        id: 34,
        name: 'iRobot Roomba j7+',
        price: 799.99,
        category: 'Home',
        rating: 5,
        color: 'Graphite',
        size: 'Robot Vacuum',
        details: {
            product: 'AI obstacle avoidance, self-emptying base, smart mapping',
            warranty: '1 Year iRobot Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'roomba-j7',
        images: ['roomba-j7', 'roomba-j7-2', 'roomba-j7-3'],
        stock: 11,
        brand: 'iRobot'
    },
    {
        id: 35,
        name: 'Instant Pot Duo Plus',
        price: 119.99,
        category: 'Home',
        rating: 5,
        color: 'Stainless Steel',
        size: '6 Quart',
        details: {
            product: '9-in-1 pressure cooker, 15 smart programs, dishwasher safe',
            warranty: '1 Year Instant Pot Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'instant-pot',
        images: ['instant-pot', 'instant-pot-2', 'instant-pot-3'],
        stock: 42,
        brand: 'Instant Pot'
    },
    {
        id: 36,
        name: 'Ninja Air Fryer Max XL',
        price: 129.99,
        category: 'Home',
        rating: 4,
        color: 'Gray',
        size: '5.5 Quart',
        details: {
            product: 'Max crisp technology, 7 cooking functions, easy clean basket',
            warranty: '1 Year Ninja Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'ninja-airfryer',
        images: ['ninja-airfryer', 'ninja-airfryer-2', 'ninja-airfryer-3'],
        stock: 38,
        brand: 'Ninja'
    },
    {
        id: 37,
        name: 'Nest Learning Thermostat',
        price: 249.99,
        category: 'Home',
        rating: 5,
        color: 'Stainless Steel',
        size: '3rd Generation',
        details: {
            product: 'Auto-schedule, energy saving, remote control via app',
            warranty: '2 Year Google Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'nest-thermostat',
        images: ['nest-thermostat', 'nest-thermostat-2', 'nest-thermostat-3'],
        stock: 24,
        brand: 'Google Nest'
    },
    {
        id: 38,
        name: 'Cuisinart Food Processor',
        price: 199.99,
        category: 'Home',
        rating: 4,
        color: 'Brushed Chrome',
        size: '14 Cup',
        details: {
            product: 'Extra-large capacity, stainless steel blades, dishwasher safe',
            warranty: '3 Year Cuisinart Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'cuisinart-processor',
        images: ['cuisinart-processor', 'cuisinart-processor-2', 'cuisinart-processor-3'],
        stock: 21,
        brand: 'Cuisinart'
    },
    {
        id: 39,
        name: 'Shark Navigator Lift-Away',
        price: 199.99,
        category: 'Home',
        rating: 4,
        color: 'Blue',
        size: 'Upright Vacuum',
        details: {
            product: 'HEPA filter, lift-away pod, swivel steering, pet hair tool',
            warranty: '5 Year Shark Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'shark-navigator',
        images: ['shark-navigator', 'shark-navigator-2', 'shark-navigator-3'],
        stock: 29,
        brand: 'Shark'
    },
    {
        id: 40,
        name: 'Keurig K-Elite Coffee Maker',
        price: 169.99,
        category: 'Home',
        rating: 4,
        color: 'Brushed Slate',
        size: 'Single Serve',
        details: {
            product: 'Iced coffee setting, 5 brew sizes, 75oz reservoir',
            warranty: '1 Year Keurig Warranty',
            merchant: 'Softcart Tech Solutions'
        },
        image: 'keurig-elite',
        images: ['keurig-elite', 'keurig-elite-2', 'keurig-elite-3'],
        stock: 36,
        brand: 'Keurig'
    }
];

module.exports = products;
