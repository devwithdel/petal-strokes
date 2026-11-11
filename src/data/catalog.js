// Petal Strokes — Satin Ribbon Rose Bouquets
// Edit this file to update products, prices, colors and add-ons.
// Images live in /public/images — swap the files and keep the same filenames.

export const SITE = {
  name: 'Petal Strokes',
  tagline: 'Handmade satin ribbon rose bouquets, made with love in Ozamiz City.',
  city: 'Ozamiz City, Philippines',
  instagram: { handle: '@petalstroke_8', dm: 'https://ig.me/m/petalstroke_8' },
  tiktok: { handle: '@petalstrokes6', url: 'https://www.tiktok.com/@petalstrokes6' },
  // Add a Facebook/Messenger link here if she has one, otherwise leave null.
  facebook: null,
}

export const RIBBON_COLORS = [
  { id: 'pink', name: 'Pink', hex: '#F4A7B9' },
  { id: 'yellow', name: 'Yellow', hex: '#F5D76E' },
  { id: 'green', name: 'Green', hex: '#A8D5A2' },
  { id: 'red', name: 'Red', hex: '#D9534F' },
  { id: 'blue', name: 'Blue', hex: '#7FAFD4' },
  { id: 'purple', name: 'Purple', hex: '#B39DDB' },
  { id: 'cream', name: 'Cream', hex: '#F5ECD7' },
]

export const SIZES = [
  { pieces: 3, price: 180 },
  { pieces: 5, price: 250 },
  { pieces: 7, price: 350 },
  { pieces: 9, price: 480 },
  { pieces: 12, price: 580 },
]

export const ADDONS = [
  { id: 'fairy-lights', name: 'Fairy Lights', price: 30, quantity: false },
  { id: 'greeting-topper', name: 'Greeting Topper', price: 35, quantity: false },
  { id: 'glitter', name: 'Glitter (per rose)', price: 8, quantity: true },
  { id: 'butterfly-topper', name: 'Butterfly Topper (each)', price: 15, quantity: true },
  { id: 'message', name: 'Message card', price: 25, quantity: false },
]

export const BOUQUETS = [
  {
    id: 'classic-rose',
    name: 'Classic Ribbon Rose',
    description: 'Timeless satin ribbon roses in a soft blush wrap. Our most-loved bouquet.',
    image: '/images/bouquet-classic.jpg',
    alt: 'A classic bouquet of blush satin ribbon roses tied with a satin bow',
    tags: ['bestseller', 'romantic'],
    featured: true,
  },
  {
    id: 'blush-cascade',
    name: 'Blush Cascade',
    description: 'Flowing layers of pink and cream ribbon roses with trailing greenery.',
    image: '/images/bouquet-blush-cascade.jpg',
    alt: 'Cascading blush and cream satin ribbon rose bouquet',
    tags: ['romantic', 'wedding'],
    featured: true,
  },
  {
    id: 'sunset-garden',
    name: 'Sunset Garden',
    description: 'Warm peach, gold and coral tones — like a sunset you can hold.',
    image: '/images/bouquet-sunset.jpg',
    alt: 'Sunset-toned satin ribbon rose bouquet in peach and gold',
    tags: ['vibrant'],
    featured: true,
  },
  {
    id: 'moonlight-white',
    name: 'Moonlight White',
    description: 'Pure cream and white ribbon roses for an elegant, airy feel.',
    image: '/images/bouquet-moonlight.jpg',
    alt: 'White and cream satin ribbon rose bouquet',
    tags: ['minimal', 'elegant'],
    featured: false,
  },
  {
    id: 'golden-hour',
    name: 'Golden Hour',
    description: 'Sunflower-yellow ribbon roses with a touch of gold shimmer.',
    image: '/images/bouquet-golden.jpg',
    alt: 'Golden yellow satin ribbon rose bouquet',
    tags: ['cheerful'],
    featured: false,
  },
  {
    id: 'lavender-dream',
    name: 'Lavender Dream',
    description: 'Soft purple and lilac ribbon roses, dreamy and delicate.',
    image: '/images/bouquet-lavender.jpg',
    alt: 'Lavender satin ribbon rose bouquet',
    tags: ['soft'],
    featured: false,
  },
  {
    id: 'red-passion',
    name: 'Red Passion',
    description: 'Deep red ribbon roses for bold, heartfelt gestures.',
    image: '/images/bouquet-red.jpg',
    alt: 'Deep red satin ribbon rose bouquet',
    tags: ['bold'],
    featured: false,
  },
  {
    id: 'mixed-meadow',
    name: 'Mixed Meadow',
    description: 'A playful mix of colors — perfect for birthdays and surprises.',
    image: '/images/bouquet-mixed.jpg',
    alt: 'Multi-colored satin ribbon rose bouquet',
    tags: ['fun', 'birthday'],
    featured: false,
  },
]