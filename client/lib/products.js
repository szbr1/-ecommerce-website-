export const products = [
  {
    _id: "f663a6dc-1468-4b91-8d9c-a366dcde69cf",
    name: "Men's Classic Plaid Shirt",
    description: "A timeless classic, this high-quality plaid shirt is perfect for casual outings or a smart-casual look. Made from durable, comfortable cotton.",
    price: 45.99,
    category: "men",
    subCategory: "topwear",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://picsum.photos/id/101/500/500", // Original
      "https://picsum.photos/id/101/500/500?blur=2", // Blurred variant
      "https://picsum.photos/id/101/500/500?grayscale", // Grayscale variant
      "https://picsum.photos/id/101/500/500?random=1" // Different random image
    ],
    highlight: true,
    rating: 4.5, // Added rating
    topSeller: true, // Added topSeller
    date: "2025-05-25T12:02:41.856920"
  },
  {
    _id: "f31fd6be-8f7b-4a1e-826e-882df4f7bdb5",
    name: "Unisex Comfort Beach Sandals",
    description: "These ultra-comfortable beach sandals are your ideal companion for sandy shores and warm weather. Featuring a soft sole and durable straps.",
    price: 29.50,
    category: "footwear",
    subCategory: "sandals",
    sizes: ["US 6", "US 7", "US 8", "US 9", "US 10"],
    images: [
      "https://picsum.photos/id/102/500/500",
      "https://picsum.photos/id/102/500/500?random=2",
      "https://picsum.photos/id/102/500/500?grayscale",
      "https://picsum.photos/id/102/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.2,
    topSeller: true,
    date: "2025-01-26T12:02:41.857024"
  },
  {
    _id: "e1754e75-24f9-4ee7-9fdb-f88e86df87bc",
    name: "Unisex Vintage Wash Denim Jacket",
    description: "Achieve that effortlessly cool look with this vintage wash denim jacket. A versatile piece that pairs well with almost anything.",
    price: 75.00,
    category: "men",
    subCategory: "winterwear",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://picsum.photos/id/103/500/500",
      "https://picsum.photos/id/103/500/500?random=3",
      "https://picsum.photos/id/103/500/500?grayscale",
      "https://picsum.photos/id/103/500/500?blur=1"
    ],
    highlight: true,
    rating: 4.7,
    topSeller: false,
    date: "2025-05-17T12:02:41.857084"
  },
  {
    _id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    name: "Ergonomic Office Chair",
    description: "Designed for long hours of comfort, this ergonomic office chair features adjustable lumbar support and breathable mesh.",
    price: 189.99,
    category: "Home & Office",
    subCategory: "Office Furniture",
    sizes: ["One Size"],
    images: [
      "https://picsum.photos/id/104/500/500",
      "https://picsum.photos/id/104/500/500?random=4",
      "https://picsum.photos/id/104/500/500?grayscale",
      "https://picsum.photos/id/104/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.8,
    topSeller: true,
    date: "2025-07-16T10:00:00.000000"
  },
  {
    _id: "b2c3d4e5-f6a7-8901-2345-67890abcdef0",
    name: "Wireless Noise-Cancelling Headphones",
    description: "Immerse yourself in pure sound with these advanced wireless headphones featuring active noise cancellation and long battery life.",
    price: 129.99,
    category: "Electronics",
    subCategory: "Audio",
    sizes: ["One Size"],
    images: [
      "https://picsum.photos/id/106/500/500",
      "https://picsum.photos/id/106/500/500?random=5",
      "https://picsum.photos/id/106/500/500?grayscale",
      "https://picsum.photos/id/106/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.6,
    topSeller: false,
    date: "2025-07-15T11:30:00.000000"
  },
  {
    _id: "c3d4e5f6-a7b8-9012-3456-7890abcdef12",
    name: "Stainless Steel Water Bottle",
    description: "Stay hydrated on the go with this durable 750ml stainless steel water bottle. Double-walled insulation keeps drinks cold for hours.",
    price: 19.95,
    category: "Sports & Outdoors",
    subCategory: "Hydration",
    sizes: ["750ml"],
    images: [
      "https://picsum.photos/id/106/500/500", // Reusing 106 as per original, but adding variants
      "https://picsum.photos/id/106/500/500?random=6",
      "https://picsum.photos/id/106/500/500?grayscale",
      "https://picsum.photos/id/106/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.3,
    topSeller: true,
    date: "2025-07-14T14:15:00.000000"
  },
  {
    _id: "d4e5f6a7-b8c9-0123-4567-890abcdef234",
    name: "Kids Organic Cotton Bodysuit",
    description: "Soft and gentle on delicate skin, this organic cotton bodysuit is perfect for your little one. Features easy snap closures.",
    price: 18.00,
    category: "kids",
    subCategory: "topwear",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://picsum.photos/id/107/500/500",
      "https://picsum.photos/id/107/500/500?random=7",
      "https://picsum.photos/id/107/500/500?grayscale",
      "https://picsum.photos/id/107/500/500?blur=1"
    ],
    highlight: true,
    rating: 4.9,
    topSeller: true,
    date: "2025-07-13T09:45:00.000000"
  },
  {
    _id: "e5f6a7b8-c9d0-1234-5678-90abcdef3456",
    name: "Compact Travel Backpack",
    description: "Lightweight and versatile, this compact travel backpack is perfect for day trips or as an airline carry-on. Multiple compartments for organization.",
    price: 55.00,
    category: "Luggage & Bags",
    subCategory: "Backpacks",
    sizes: ["20L"],
    images: [
      "https://picsum.photos/id/108/500/500",
      "https://picsum.photos/id/108/500/500?random=8",
      "https://picsum.photos/id/108/500/500?grayscale",
      "https://picsum.photos/id/108/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.4,
    topSeller: false,
    date: "2025-07-12T16:20:00.000000"
  },
  {
    _id: "f6a7b8c9-d0e1-2345-6789-0abcdef45678",
    name: "Gourmet Coffee Beans",
    description: "Experience the rich aroma and smooth taste of our gourmet coffee beans. A medium roast blend with hints of chocolate and caramel.",
    price: 16.50,
    category: "Food & Beverages",
    subCategory: "Coffee",
    sizes: ["500g", "1kg"],
    images: [
      "https://picsum.photos/id/109/500/500",
      "https://picsum.photos/id/109/500/500?random=9",
      "https://picsum.photos/id/109/500/500?grayscale",
      "https://picsum.photos/id/109/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.0,
    topSeller: false,
    date: "2025-07-11T08:00:00.000000"
  },
  {
    _id: "g7b8c9d0-e1f2-3456-7890-abcdef567890",
    name: "Smart Home Speaker",
    description: "Control your smart home devices, play music, and get answers with this intuitive voice-activated smart speaker. Sleek design.",
    price: 99.00,
    category: "Electronics",
    subCategory: "Smart Home",
    sizes: ["One Size"],
    images: [
      "https://picsum.photos/id/110/500/500",
      "https://picsum.photos/id/110/500/500?random=10",
      "https://picsum.photos/id/110/500/500?grayscale",
      "https://picsum.photos/id/110/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.5,
    topSeller: true,
    date: "2025-07-10T13:00:00.000000"
  },
  {
    _id: "h8c9d0e1-f2a3-4567-8901-bcdef67890ab",
    name: "Yoga Mat",
    description: "Premium non-slip yoga mat provides excellent grip and cushioning for all your yoga and fitness routines. Easy to roll and carry.",
    price: 35.00,
    category: "Sports & Outdoors",
    subCategory: "Fitness",
    sizes: ["Standard"],
    images: [
      "https://picsum.photos/id/111/500/500",
      "https://picsum.photos/id/111/500/500?random=11",
      "https://picsum.photos/id/111/500/500?grayscale",
      "https://picsum.photos/id/111/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.1,
    topSeller: false,
    date: "2025-07-09T17:00:00.000000"
  },
  {
    _id: "i9d0e1f2-a3b4-5678-9012-cdefg7890abc",
    name: "Chef's Knife Set",
    description: "A professional-grade chef's knife set including essential knives for every culinary task. High-carbon stainless steel blades.",
    price: 149.99,
    category: "Home & Kitchen",
    subCategory: "Cookware",
    sizes: ["5-Piece Set"],
    images: [
      "https://picsum.photos/id/112/500/500",
      "https://picsum.photos/id/112/500/500?random=12",
      "https://picsum.photos/id/112/500/500?grayscale",
      "https://picsum.photos/id/112/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.7,
    topSeller: true,
    date: "2025-07-08T09:00:00.000000"
  },
  {
    _id: "j0e1f2a3-b4c5-6789-0123-defgh890abcd",
    name: "Pet Grooming Kit",
    description: "Keep your furry friend looking their best with this comprehensive pet grooming kit. Includes brushes, clippers, and comb.",
    price: 40.00,
    category: "Pet Supplies",
    subCategory: "Grooming",
    sizes: ["One Size"],
    images: [
      "https://picsum.photos/id/113/500/500",
      "https://picsum.photos/id/113/500/500?random=13",
      "https://picsum.photos/id/113/500/500?grayscale",
      "https://picsum.photos/id/113/500/500?blur=1"
    ],
    highlight: false,
    rating: 3.9,
    topSeller: false,
    date: "2025-07-07T12:00:00.000000"
  },
  {
    _id: "k1f2a3b4-c5d6-7890-1234-efghi90abcde",
    name: "Portable Bluetooth Speaker",
    description: "Take your music anywhere with this compact and powerful portable Bluetooth speaker. Waterproof and long-lasting battery.",
    price: 65.00,
    category: "Electronics",
    subCategory: "Audio",
    sizes: ["One Size"],
    images: [
      "https://picsum.photos/id/114/500/500",
      "https://picsum.photos/id/114/500/500?random=14",
      "https://picsum.photos/id/114/500/500?grayscale",
      "https://picsum.photos/id/114/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.4,
    topSeller: true,
    date: "2025-07-06T15:00:00.000000"
  },
  {
    _id: "l2a3b4c5-d6e7-8901-2345-fghij0abcdef",
    name: "Garden Tool Set",
    description: "Essential garden tool set for all your planting and landscaping needs. Durable and ergonomic handles for comfortable use.",
    price: 49.99,
    category: "Home & Garden",
    subCategory: "Gardening Tools",
    sizes: ["5-Piece Set"],
    images: [
      "https://picsum.photos/id/115/500/500",
      "https://picsum.photos/id/115/500/500?random=15",
      "https://picsum.photos/id/115/500/500?grayscale",
      "https://picsum.photos/id/115/500/500?blur=1"
    ],
    highlight: false,
    rating: 3.7,
    topSeller: false,
    date: "2025-07-05T10:30:00.000000"
  },
  {
    _id: "m3b4c5d6-e7f8-9012-3456-ghijk1abcdef",
    name: "Unisex Running Shoes",
    description: "Lightweight and responsive unisex running shoes designed for optimal performance and comfort on various terrains.",
    price: 89.00,
    category: "footwear",
    subCategory: "athletic shoes",
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
    images: [
      "https://picsum.photos/id/116/500/500",
      "https://picsum.photos/id/116/500/500?random=16",
      "https://picsum.photos/id/116/500/500?grayscale",
      "https://picsum.photos/id/116/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.6,
    topSeller: true,
    date: "2025-07-04T11:00:00.000000"
  },
  {
    _id: "n4c5d6e7-f8a9-0123-4567-hijkl2abcdef",
    name: "Digital Smartwatch",
    description: "Stay connected and track your fitness with this stylish digital smartwatch. Features heart rate monitoring and notification alerts.",
    price: 149.00,
    category: "Electronics",
    subCategory: "Wearable Tech",
    sizes: ["One Size"],
    images: [
      "https://picsum.photos/id/117/500/500",
      "https://picsum.photos/id/117/500/500?random=17",
      "https://picsum.photos/id/117/500/500?grayscale",
      "https://picsum.photos/id/117/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.8,
    topSeller: true,
    date: "2025-07-03T14:00:00.000000"
  },
  {
    _id: "o5d6e7f8-a9b0-1234-5678-ijklm3abcdef",
    name: "Cozy Throw Blanket",
    description: "Wrap yourself in warmth with this incredibly soft and cozy throw blanket. Perfect for snuggling on the couch.",
    price: 39.99,
    category: "Home & Living",
    subCategory: "Bed & Bath",
    sizes: ["50x60 inches"],
    images: [
      "https://picsum.photos/id/118/500/500",
      "https://picsum.photos/id/118/500/500?random=18",
      "https://picsum.photos/id/118/500/500?grayscale",
      "https://picsum.photos/id/118/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.2,
    topSeller: false,
    date: "2025-07-02T16:00:00.000000"
  },
  {
    _id: "p6e7f8a9-b0c1-2345-6789-klmno4abcdef",
    name: "High-Performance Blender",
    description: "Create smoothies, soups, and sauces with ease using this powerful high-performance blender. Multiple speed settings.",
    price: 89.99,
    category: "Home & Kitchen",
    subCategory: "Kitchen Appliances",
    sizes: ["1.5L"],
    images: [
      "https://picsum.photos/id/119/500/500",
      "https://picsum.photos/id/119/500/500?random=19",
      "https://picsum.photos/id/119/500/500?grayscale",
      "https://picsum.photos/id/119/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.7,
    topSeller: true,
    date: "2025-07-01T09:30:00.000000"
  },
  {
    _id: "q7f8a9b0-c1d2-3456-7890-lmnop5abcdef",
    name: "Kids Building Blocks Set",
    description: "Inspire creativity with this large set of colorful building blocks. Perfect for developing motor skills and imagination.",
    price: 25.00,
    category: "kids",
    subCategory: "toys",
    sizes: ["One Size"],
    images: [
      "https://picsum.photos/id/120/500/500",
      "https://picsum.photos/id/120/500/500?random=20",
      "https://picsum.photos/id/120/500/500?grayscale",
      "https://picsum.photos/id/120/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.3,
    topSeller: false,
    date: "2025-06-30T13:00:00.000000"
  },
  {
    _id: "r8a9b0c1-d2e3-4567-8901-mnopq6abcdef",
    name: "Waterproof Outdoor Tent",
    description: "Enjoy the great outdoors with this easy-to-pitch waterproof outdoor tent. Spacious and durable for all your camping adventures.",
    price: 120.00,
    category: "Sports & Outdoors",
    subCategory: "Camping Gear",
    sizes: ["2-Person", "4-Person"],
    images: [
      "https://picsum.photos/id/121/500/500",
      "https://picsum.photos/id/121/500/500?random=21",
      "https://picsum.photos/id/121/500/500?grayscale",
      "https://picsum.photos/id/121/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.5,
    topSeller: false,
    date: "2025-06-29T10:00:00.000000"
  },
  {
    _id: "s9b0c1d2-e3f4-5678-9012-nopqr7abcdef",
    name: "Sleek Laptop Sleeve",
    description: "Protect your laptop in style with this sleek and padded laptop sleeve. Fits most 13-inch and 15-inch laptops.",
    price: 20.00,
    category: "Electronics Accessories",
    subCategory: "Laptop Bags",
    sizes: ["13 inch", "15 inch"],
    images: [
      "https://picsum.photos/id/122/500/500",
      "https://picsum.photos/id/122/500/500?random=22",
      "https://picsum.photos/id/122/500/500?grayscale",
      "https://picsum.photos/id/122/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.0,
    topSeller: false,
    date: "2025-06-28T14:00:00.000000"
  },
  {
    _id: "t0c1d2e3-f4a5-6789-0123-opqrs8abcdef",
    name: "Aromatherapy Essential Oil Diffuser",
    description: "Create a calming ambiance with this elegant aromatherapy essential oil diffuser. Features LED lighting and auto shut-off.",
    price: 30.00,
    category: "Home & Living",
    subCategory: "Wellness",
    sizes: ["One Size"],
    images: [
      "https://picsum.photos/id/123/500/500",
      "https://picsum.photos/id/123/500/500?random=23",
      "https://picsum.photos/id/123/500/500?grayscale",
      "https://picsum.photos/id/123/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.2,
    topSeller: false,
    date: "2025-06-27T11:00:00.000000"
  },
  {
    _id: "u1d2e3f4-a5b6-7890-1234-pqrst9abcdef",
    name: "Resistance Band Set",
    description: "Level up your workouts with this versatile resistance band set. Includes bands of varying strengths for all fitness levels.",
    price: 28.50,
    category: "Sports & Outdoors",
    subCategory: "Fitness Accessories",
    sizes: ["5-Band Set"],
    images: [
      "https://picsum.photos/id/124/500/500",
      "https://picsum.photos/id/124/500/500?random=24",
      "https://picsum.photos/id/124/500/500?grayscale",
      "https://picsum.photos/id/124/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.1,
    topSeller: false,
    date: "2025-06-26T15:30:00.000000"
  },
  {
    _id: "v2e3f4a5-b6c7-8901-2345-qrstu0abcdef",
    name: "Classic Leather Wallet",
    description: "A sophisticated and practical classic leather wallet with multiple card slots and a coin pocket. Durable and stylish.",
    price: 40.00,
    category: "Accessories",
    subCategory: "Wallets",
    sizes: ["One Size"],
    images: [
      "https://picsum.photos/id/125/500/500",
      "https://picsum.photos/id/125/500/500?random=25",
      "https://picsum.photos/id/125/500/500?grayscale",
      "https://picsum.photos/id/125/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.5,
    topSeller: true,
    date: "2025-06-25T09:00:00.000000"
  },
  {
    _id: "w3f4a5b6-c7d8-9012-3456-rstuv1abcdef",
    name: "Wireless Gaming Mouse",
    description: "Gain the competitive edge with this high-precision wireless gaming mouse. Customizable buttons and ergonomic design.",
    price: 55.00,
    category: "Electronics",
    subCategory: "Gaming Peripherals",
    sizes: ["One Size"],
    images: [
      "https://picsum.photos/id/126/500/500",
      "https://picsum.photos/id/126/500/500?random=26",
      "https://picsum.photos/id/126/500/500?grayscale",
      "https://picsum.photos/id/126/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.6,
    topSeller: false,
    date: "2025-06-24T12:00:00.000000"
  },
  {
    _id: "x4a5b6c7-d8e9-0123-4567-stuvw2abcdef",
    name: "Non-Stick Frying Pan",
    description: "Cook healthy meals with ease using this durable non-stick frying pan. Even heat distribution and easy to clean.",
    price: 30.00,
    category: "Home & Kitchen",
    subCategory: "Cookware",
    sizes: ["10-inch"],
    images: [
      "https://picsum.photos/id/127/500/500",
      "https://picsum.photos/id/127/500/500?random=27",
      "https://picsum.photos/id/127/500/500?grayscale",
      "https://picsum.photos/id/127/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.2,
    topSeller: false,
    date: "2025-06-23T14:00:00.000000"
  },
  {
    _id: "y5b6c7d8-e9f0-1234-5678-tuvwx3abcdef",
    name: "Stylish Sunglasses",
    description: "Protect your eyes with these fashionable and UV-protected sunglasses. Perfect for any outdoor activity.",
    price: 25.00,
    category: "Accessories",
    subCategory: "Eyewear",
    sizes: ["One Size"],
    images: [
      "https://picsum.photos/id/128/500/500",
      "https://picsum.photos/id/128/500/500?random=28",
      "https://picsum.photos/id/128/500/500?grayscale",
      "https://picsum.photos/id/128/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.0,
    topSeller: false,
    date: "2025-06-22T10:00:00.000000"
  },
  {
    _id: "z6c7d8e9-f0a1-2345-6789-uvwxy4abcdef",
    name: "Children's Storybook Set",
    description: "Spark imagination with this enchanting children's storybook set. Beautiful illustrations and engaging narratives.",
    price: 35.00,
    category: "kids",
    subCategory: "books",
    sizes: ["One Size"],
    images: [
      "https://picsum.photos/id/129/500/500",
      "https://picsum.photos/id/129/500/500?random=29",
      "https://picsum.photos/id/129/500/500?grayscale",
      "https://picsum.photos/id/129/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.7,
    topSeller: true,
    date: "2025-06-21T11:30:00.000000"
  },
  {
    _id: "a7d8e9f0-a1b2-3456-7890-vwxyz5abcdef",
    name: "Car Phone Mount",
    description: "Securely hold your phone while driving with this universal car phone mount. Easy to install and adjust.",
    price: 15.00,
    category: "Automotive",
    subCategory: "Car Accessories",
    sizes: ["One Size"],
    images: [
      "https://picsum.photos/id/130/500/500",
      "https://picsum.photos/id/130/500/500?random=30",
      "https://picsum.photos/id/130/500/500?grayscale",
      "https://picsum.photos/id/130/500/500?blur=1"
    ],
    highlight: false,
    rating: 3.8,
    topSeller: false,
    date: "2025-06-20T16:00:00.000000"
  },
  {
    _id: "b8e9f0a1-b2c3-4567-8901-wxyzab6cdef",
    name: "Home Security Camera",
    description: "Keep your home safe and secure with this smart home security camera. Features motion detection and night vision.",
    price: 79.99,
    category: "Electronics",
    subCategory: "Home Security",
    sizes: ["One Size"],
    images: [
      "https://picsum.photos/id/131/500/500",
      "https://picsum.photos/id/131/500/500?random=31",
      "https://picsum.photos/id/131/500/500?grayscale",
      "https://picsum.photos/id/131/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.4,
    topSeller: false,
    date: "2025-06-19T09:45:00.000000"
  },
  {
    _id: "c9f0a1b2-c3d4-5678-9012-xyzabc7defg",
    name: "Dumbbell Set",
    description: "Build strength and tone muscles with this versatile dumbbell set. Ideal for home workouts and personal training.",
    price: 60.00,
    category: "Sports & Outdoors",
    subCategory: "Weight Training",
    sizes: ["10lb, 15lb, 20lb"],
    images: [
      "https://picsum.photos/id/132/500/500",
      "https://picsum.photos/id/132/500/500?random=32",
      "https://picsum.photos/id/132/500/500?grayscale",
      "https://picsum.photos/id/132/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.1,
    topSeller: false,
    date: "2025-06-18T13:00:00.000000"
  },
  {
    _id: "d0a1b2c3-d4e5-6789-0123-yzabcd8efgh",
    name: "Coffee Maker",
    description: "Start your day right with freshly brewed coffee from this automatic coffee maker. Programmable timer and keep-warm function.",
    price: 49.99,
    category: "Home & Kitchen",
    subCategory: "Kitchen Appliances",
    sizes: ["12-Cup"],
    images: [
      "https://picsum.photos/id/133/500/500",
      "https://picsum.photos/id/133/500/500?random=33",
      "https://picsum.photos/id/133/500/500?grayscale",
      "https://picsum.photos/id/133/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.3,
    topSeller: true,
    date: "2025-06-17T10:00:00.000000"
  },
  {
    _id: "e1b2c3d4-e5f6-7890-1234-zabcde9fghi",
    name: "Men's Dress Shoes",
    description: "Elevate your formal attire with these classic men's dress shoes. Crafted from premium leather with a comfortable fit.",
    price: 95.00,
    category: "footwear",
    subCategory: "formal shoes",
    sizes: ["US 8", "US 9", "US 10", "US 11", "US 12"],
    images: [
      "https://picsum.photos/id/134/500/500",
      "https://picsum.photos/id/134/500/500?random=34",
      "https://picsum.photos/id/134/500/500?grayscale",
      "https://picsum.photos/id/134/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.6,
    topSeller: false,
    date: "2025-06-16T14:00:00.000000"
  },
  {
    _id: "f2c3d4e5-f6a7-8901-2345-abcdef0ghij",
    name: "Women's Fashion Handbag",
    description: "A stylish and spacious women's fashion handbag perfect for daily use or special occasions. Multiple compartments for organization.",
    price: 60.00,
    category: "accessories",
    subCategory: "handbags",
    sizes: ["One Size"],
    images: [
      "https://picsum.photos/id/135/500/500",
      "https://picsum.photos/id/135/500/500?random=35",
      "https://picsum.photos/id/135/500/500?grayscale",
      "https://picsum.photos/id/135/500/500?blur=1"
    ],
    highlight: true,
    rating: 4.8,
    topSeller: true,
    date: "2025-06-15T11:00:00.000000"
  },
  {
    _id: "g3d4e5f6-a7b8-9012-3456-bcdef1hijkl",
    name: "Board Game for Families",
    description: "Gather your family for hours of fun with this engaging board game. Easy to learn and perfect for all ages.",
    price: 28.00,
    category: "Toys & Games",
    subCategory: "Board Games",
    sizes: ["One Size"],
    images: [
      "https://picsum.photos/id/136/500/500",
      "https://picsum.photos/id/136/500/500?random=36",
      "https://picsum.photos/id/136/500/500?grayscale",
      "https://picsum.photos/id/136/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.5,
    topSeller: false,
    date: "2025-06-14T15:00:00.000000"
  },
  {
    _id: "h4e5f6a7-b8c9-0123-4567-cdef2ijklm",
    name: "Portable Power Bank",
    description: "Never run out of battery again with this high-capacity portable power bank. Compatible with smartphones, tablets, and more.",
    price: 35.00,
    category: "Electronics Accessories",
    subCategory: "Charging",
    sizes: ["10000mAh"],
    images: [
      "https://picsum.photos/id/137/500/500",
      "https://picsum.photos/id/137/500/500?random=37",
      "https://picsum.photos/id/137/500/500?grayscale",
      "https://picsum.photos/id/137/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.0,
    topSeller: true,
    date: "2025-06-13T09:30:00.000000"
  },
  {
    _id: "i5f6a7b8-c9d0-1234-5678-def3jklmn",
    name: "Electric Kettle",
    description: "Boil water quickly and efficiently with this sleek electric kettle. Features automatic shut-off and boil-dry protection.",
    price: 40.00,
    category: "Home & Kitchen",
    subCategory: "Kitchen Appliances",
    sizes: ["1.7L"],
    images: [
      "https://picsum.photos/id/138/500/500",
      "https://picsum.photos/id/138/500/500?random=38",
      "https://picsum.photos/id/138/500/500?grayscale",
      "https://picsum.photos/id/138/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.3,
    topSeller: false,
    date: "2025-06-12T12:00:00.000000"
  },
  {
    _id: "j6a7b8c9-d0e1-2345-6789-ef4klmnop",
    name: "Kids Scooter",
    description: "Fun and safe scooter for kids, perfect for outdoor play and developing balance. Adjustable handlebar for growing children.",
    price: 50.00,
    category: "kids",
    subCategory: "outdoor toys",
    sizes: ["One Size"],
    images: [
      "https://picsum.photos/id/139/500/500",
      "https://picsum.photos/id/139/500/500?random=39",
      "https://picsum.photos/id/139/500/500?grayscale",
      "https://picsum.photos/id/139/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.6,
    topSeller: true,
    date: "2025-06-11T14:00:00.000000"
  },
  {
    _id: "k7b8c9d0-e1f2-3456-7890-fg5lmnopq",
    name: "Fitness Tracker Watch",
    description: "Track your steps, heart rate, and sleep with this advanced fitness tracker watch. Stay motivated and achieve your health goals.",
    price: 75.00,
    category: "Electronics",
    subCategory: "Wearable Tech",
    sizes: ["One Size"],
    images: [
      "https://picsum.photos/id/140/500/500",
      "https://picsum.photos/id/140/500/500?random=40",
      "https://picsum.photos/id/140/500/500?grayscale",
      "https://picsum.photos/id/140/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.5,
    topSeller: false,
    date: "2025-06-10T10:00:00.000000"
  },
  {
    _id: "l8c9d0e1-f2a3-4567-8901-gh6mnopq",
    name: "Desk Lamp with Wireless Charger",
    description: "A modern desk lamp with adjustable brightness and an integrated wireless charging pad for your smartphone.",
    price: 45.00,
    category: "Home & Office",
    subCategory: "Lighting",
    sizes: ["One Size"],
    images: [
      "https://picsum.photos/id/141/500/500",
      "https://picsum.photos/id/141/500/500?random=41",
      "https://picsum.photos/id/141/500/500?grayscale",
      "https://picsum.photos/id/141/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.0,
    topSeller: false,
    date: "2025-06-09T16:00:00.000000"
  },
  {
    _id: "m9d0e1f2-a3b4-5678-9012-hi7nopqrs",
    name: "Espresso Machine",
    description: "Become your own barista with this easy-to-use espresso machine. Brew rich and flavorful espresso shots at home.",
    price: 199.00,
    category: "Home & Kitchen",
    subCategory: "Kitchen Appliances",
    sizes: ["One Size"],
    images: [
      "https://picsum.photos/id/142/500/500",
      "https://picsum.photos/id/142/500/500?random=42",
      "https://picsum.photos/id/142/500/500?grayscale",
      "https://picsum.photos/id/142/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.8,
    topSeller: true,
    date: "2025-06-08T11:00:00.000000"
  },
  {
    _id: "new-id-1",
    name: "Women's Elegant Summer Dress",
    description: "Lightweight and flowy, this elegant dress is perfect for summer gatherings. Features a beautiful floral pattern and comfortable fit.",
    price: 55.00,
    category: "women",
    subCategory: "topwear",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://picsum.photos/id/143/500/500",
      "https://picsum.photos/id/143/500/500?random=43",
      "https://picsum.photos/id/143/500/500?grayscale",
      "https://picsum.photos/id/143/500/500?blur=1"
    ],
    highlight: true,
    rating: 4.6,
    topSeller: true,
    date: "2025-07-18T10:00:00.000000"
  },
  {
    _id: "new-id-2",
    name: "Men's Athletic Joggers",
    description: "Comfortable and stylish joggers for your workouts or casual wear. Made with breathable fabric and a tapered fit.",
    price: 40.00,
    category: "men",
    subCategory: "bottom wear",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://picsum.photos/id/144/500/500",
      "https://picsum.photos/id/144/500/500?random=44",
      "https://picsum.photos/id/144/500/500?grayscale",
      "https://picsum.photos/id/144/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.1,
    topSeller: false,
    date: "2025-07-18T10:05:00.000000"
  },
  {
    _id: "new-id-3",
    name: "Kids' Cozy Winter Hat",
    description: "Keep your little one warm with this soft and cozy winter hat. Features a playful design and ear flaps for extra warmth.",
    price: 15.00,
    category: "kids",
    subCategory: "winterwear",
    sizes: ["S", "M", "L"],
    images: [
      "https://picsum.photos/id/145/500/500",
      "https://picsum.photos/id/145/500/500?random=45",
      "https://picsum.photos/id/145/500/500?grayscale",
      "https://picsum.photos/id/145/500/500?blur=1"
    ],
    highlight: true,
    rating: 4.9,
    topSeller: true,
    date: "2025-07-18T10:10:00.000000"
  },
  {
    _id: "new-id-4",
    name: "Women's High-Waisted Jeans",
    description: "Trendy high-waisted jeans with a comfortable stretch fit. Perfect for everyday wear, easy to dress up or down.",
    price: 65.00,
    category: "women",
    subCategory: "bottom wear",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://picsum.photos/id/146/500/500",
      "https://picsum.photos/id/146/500/500?random=46",
      "https://picsum.photos/id/146/500/500?grayscale",
      "https://picsum.photos/id/146/500/500?blur=1"
    ],
    highlight: false,
    rating: 4.5,
    topSeller: false,
    date: "2025-07-18T10:15:00.000000"
  },
  {
    _id: "new-id-5",
    name: "Men's Puffer Vest",
    description: "Lightweight yet warm puffer vest, ideal for layering during cooler months. Features a water-resistant outer shell.",
    price: 70.00,
    category: "men",
    subCategory: "winterwear",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://picsum.photos/id/147/500/500",
      "https://picsum.photos/id/147/500/500?random=47",
      "https://picsum.photos/id/147/500/500?grayscale",
      "https://picsum.photos/id/147/500/500?blur=1"
    ],
    highlight: true,
    rating: 4.4,
    topSeller: true,
    date: "2025-07-18T10:20:00.000000"
  }
];