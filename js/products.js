// NOOKSY — Product Data
// Replace placeholder images with your actual product image paths

const products = [
  {
    id: 'tb-01',
    name: 'Nooksy Skinny Tumbler — Midnight Black',
    category: 'tumblers',
    categoryLabel: 'Tumbler Bottle',
    price: 795,
    originalPrice: 1299,
    badge: 'sale',
    images: [
      'https://images.nooksy.in/tb1-v2/tb1-1-v2.jpg',
      'https://images.nooksy.in/tb1-v2/tb1-2-v2.jpg',
      'https://images.nooksy.in/tb1-v2/tb1-3-v2.jpg',
      'https://images.nooksy.in/tb1-v2/tb1-4-v3.jpg',
      'https://images.nooksy.in/tb1-v2/tb1-5-v3.jpg',
      'https://images.nooksy.in/tb1-v2/tb1-6-v2.jpg',
      'https://images.nooksy.in/tb1-v2/tb1-7-v2.jpg'
      ],
    colors: [],
    sizes: [],
    description: 'Your everyday drink, elevated. The Nooksy Skinny Tumbler keeps your coffee hot and your water cold — all day, wherever you go.<br>Built slim enough to fit any cupholder, bold enough to turn heads.',
    details: '<br><br>· Capacity: 600ml (20oz)<br>· Material: Food-grade stainless steel<br>· Finish: High-gloss black<br>· Includes: Leak-proof clear lid + stainless steel straw<br>· Fits standard car cupholders<br>· Hand wash recommended',
    inStock: true
  },
  {
   id: 'tb-02',
    name: 'Nooksy Skinny Tumbler — Cloud White',
    category: 'tumblers',
    categoryLabel: 'Tumbler Bottle',
    price: 795,
    originalPrice: 1299,
    badge: 'sale',
    images: [
      'https://images.nooksy.in/tb2-v2/tb2-1-v2.jpg',
      'https://images.nooksy.in/tb2-v2/tb2-2-v2.jpg',
      'https://images.nooksy.in/tb2-v2/tb2-3-v2.jpg',
      'https://images.nooksy.in/tb2-v2/tb2-4-v3.jpg',
      'https://images.nooksy.in/tb2-v2/tb2-5-v3.jpg',
      'https://images.nooksy.in/tb2-v2/tb2-6-v2.jpg',
      'https://images.nooksy.in/tb2-v2/tb2-7-v2.jpg'
      ],
    colors: [],
    sizes: [],
    description: 'Clean lines, calm energy. The Nooksy Skinny Tumbler in Cloud White features a minimal wave art print that is as effortless as your morning routine.<br>Double-wall insulated to keep your drinks at the perfect temperature all day long.',
    details: '<br><br>· Capacity: 600ml (20oz)<br>· Material: Food-grade stainless steel<br>· Finish: Matte white with line art print<br>· Includes: Leak-proof clear lid + stainless steel straw<br>· Fits standard car cupholders<br>· Hand wash recommended',
    inStock: true
  },
  {
    id: 'atb-01',
    name: 'Nooksy Adventure Tote — Nature Print',
    category: 'tote-bags',
    categoryLabel: 'Tote Bags',
    price: 445,
    originalPrice: 999,
    badge: 'sale',
    images: [
      'https://images.nooksy.in/atb1/atb1-1.jpg',
      'https://images.nooksy.in/atb1/atb1-2.jpg',
      'https://images.nooksy.in/atb1/atb1-3-v2.jpg',
      'https://images.nooksy.in/atb1/atb1-4.jpg',
      'https://images.nooksy.in/atb1/atb1-5.jpg',
      'https://images.nooksy.in/atb1/atb1-6-v2.jpg'
      ],
    colors: [],
    sizes: [],
    description: 'Carry the outdoors with you, everywhere.<br>The Nooksy Adventure Tote features a vibrant nature-inspired print — mountains, rivers, trees, and golden skies — on a durable cream canvas base.<br>Spacious enough for your daily essentials, playful enough to make a statement.',
    details: '<br><br>· Size: 13×13 inches<br>· Material: Canvas (Cloth)<br>· Closure: Main zipper compartment<br>· Handles: Printed canvas straps<br>· Print: Full allover nature illustration<br>· Colour: White base with multicolour print<br>· Machine washable.',
    inStock: true
  },
  {
    id: 'atb-02',
    name: 'Nooksy Wonderland Tote — Fantasy Print',
    category: 'tote-bags',
    categoryLabel: 'Tote Bags',
    price: 445,
    originalPrice: 999,
    badge: 'sale',
    images: [
      'https://images.nooksy.in/atb2/atb2-1.jpg',
      'https://images.nooksy.in/atb2/atb2-2.jpg',
      'https://images.nooksy.in/atb2/atb2-3.jpg',
      'https://images.nooksy.in/atb2/atb2-4.jpg',
      'https://images.nooksy.in/atb2/atb2-5.jpg',
      'https://images.nooksy.in/atb2/atb2-6.jpg'
      ],
    colors: [],
    sizes: [],
    description: 'Not your average tote.<br>The Nooksy Wonderland Tote is a wearable work of art — bursting with unicorns, owls, forests, and hidden creatures across a vivid illustrated canvas.<br>Bold, playful, and impossible to miss.<br>For the ones who refuse to blend in.',
    details: '<br><br>· Size: 13×13 inches<br>· Material: Canvas (Cloth)<br>· Closure: Main zipper compartment<br>· Handles: Fully printed canvas straps<br>· Print: Full allover fantasy illustration<br> · Machine washable.',
    inStock: true
  },
  {
    id: 'atb-03',
    name: 'Nooksy Sunday Ride Tote — Watercolour Print',
    category: 'tote-bags',
    categoryLabel: 'Tote Bags',
    price: 445,
    originalPrice: 999,
    badge: 'sale',
    images: [
      'https://images.nooksy.in/atb3/atb3-1.jpg',
      'https://images.nooksy.in/atb3/atb3-2.jpg',
      'https://images.nooksy.in/atb3/atb3-3.jpg',
      'https://images.nooksy.in/atb3/atb3-4.jpg',
      'https://images.nooksy.in/atb3/atb3-5.jpg',
      'https://images.nooksy.in/atb3/atb3-6.jpg'
      ],
    colors: [],
    sizes: [],
    description: 'Soft colours, easy days.<br>The Sunday Ride Tote brings a whimsical watercolour bicycle illustration to your everyday carry — delicate brushstrokes in peach, mint, and blush on a natural cream canvas.<br>The kind of bag that makes a simple outing feel a little more special.',
    details: '<br><br>· Size: 13×13 inches<br>· Material: Canvas (Cloth)<br>· Closure: Main zipper compartment<br>· Handles: Natural canvas straps<br>· Colour: Cream base with pastel multicolour print<br>· Print: Watercolour bicycle illustration<br> · Machine washable.',
    inStock: true
  },
  {
    id: 'atb-05',
    name: 'Nooksy Fuji Tote — Japanese Art Print',
    category: 'tote-bags',
    categoryLabel: 'Tote Bags',
    price: 445,
    originalPrice: 999,
    badge: 'sale',
    images: [
      'https://images.nooksy.in/atb5/atb5-1.jpg',
      'https://images.nooksy.in/atb5/atb5-2.jpg',
      'https://images.nooksy.in/atb5/atb5-3.jpg',
      'https://images.nooksy.in/atb5/atb5-4.jpg',
      'https://images.nooksy.in/atb5/atb5-5.jpg',
      'https://images.nooksy.in/atb5/atb5-6.jpg'
      ],
    colors: [],
    sizes: [],
    description: 'Calm, bold, unforgettable.<br>The Fuji Tote draws from classic Japanese art — a fiery maple tree, a torii gate, and Mount Fuji rising through the mist — all set against a deep navy canvas.<br>Carries your day with the quiet confidence of someone who has good taste.',
    details: '<br><br>· Size: 13×13 inches<br>· Material: Canvas (Cloth)<br>· Closure: Main zipper compartment<br>· Handles: Natural cream canvas straps<br>· Colour: Deep navy base with red and white print<br>· Print: Japanese landscape art — Mount Fuji, maple tree, torii gate<br> · Machine washable.',
    inStock: true
  },
  {
    id: 'atb-07',
    name: 'Nooksy Noir Bloom Tote — Floral Print',
    category: 'tote-bags',
    categoryLabel: 'Tote Bags',
    price: 445,
    originalPrice: 999,
    badge: 'sale',
    images: [
      'https://images.nooksy.in/atb7/atb7-1.jpg',
      'https://images.nooksy.in/atb7/atb7-2.jpg',
      'https://images.nooksy.in/atb7/atb7-3.jpg',
      'https://images.nooksy.in/atb7/atb7-4.jpg',
      'https://images.nooksy.in/atb7/atb7-5.jpg',
      'https://images.nooksy.in/atb7/atb7-6.jpg'
      ],
    colors: [],
    sizes: [],
    description: 'Classic contrast, bold florals.<br>The Noir Bloom Tote features an allover white botanical print on deep black canvas — the kind of design that works just as well with a kurta as it does with a dress.<br>imeless, versatile, and always in style.',
    details: '<br><br>· Size: 13×13 inches<br>· Material: Canvas (Cloth)<br>· Closure: Main zipper compartment<br>· Handles: Printed canvas straps<br>· Colour: Black base with white print<br>· Print: Allover white floral botanical<br> · Machine washable.',
    inStock: true
  },
  {
    id: 'ltb-01',
    name: 'Nooksy Large Tote — Be Kind',
    category: 'tote-bags',
    categoryLabel: 'Tote Bags',
    price: 545,
    originalPrice: 1099,
    badge: 'sale',
    images: [
      'https://images.nooksy.in/ltb1/ltb1-1.jpg',
      'https://images.nooksy.in/ltb1/ltb1-2.jpg',
      'https://images.nooksy.in/ltb1/ltb1-3.jpg',
      'https://images.nooksy.in/ltb1/ltb1-4.jpg',
      'https://images.nooksy.in/ltb1/ltb1-5.jpg',
      'https://images.nooksy.in/ltb1/ltb1-6.jpg',
      'https://images.nooksy.in/ltb1/ltb1-7.jpg'
      ],
    colors: [],
    sizes: [],
    description: 'More than a bag — it is a mindset. The Nooksy Be Kind Tote is your everyday carry, done right.<br>Roomy enough for your laptop, notebook, water bottle, and everything in between.<br>The vibrant floral wreath print with honeybees makes it a conversation starter wherever you go.',
    details: '<br><br>· Size: 14×14 inches<br>· Material: Canvas (Cloth)<br>· Colour: White<br>· Closure: Top zipper<br>· Compartments: 2 spacious main compartments<br>· Pockets: 1 large inner pocket + 2 small inner pockets + 1 inner zipper pocket<br>· Extras: Built-in key holder<br>· Print: Be Kind floral wreath with <br>· Machine washable',
    inStock: true
  },
  {
    id: 'ltb-02',
    name: 'Nooksy Vitamin Sea Tote — Ocean Print',
    category: 'tote-bags',
    categoryLabel: 'Tote Bags',
    price: 545,
    originalPrice: 1099,
    badge: 'sale',
    images: [
      'https://images.nooksy.in/ltb2/ltb2-1.jpg',
      'https://images.nooksy.in/ltb2/ltb2-2.jpg',
      'https://images.nooksy.in/ltb2/ltb2-3.jpg',
      'https://images.nooksy.in/ltb2/ltb2-4.jpg',
      'https://images.nooksy.in/ltb2/ltb2-5.jpg',
      'https://images.nooksy.in/ltb2/ltb2-6.jpg',
      'https://images.nooksy.in/ltb2/ltb2-7.jpg'
      ],
    colors: [],
    sizes: [],
    description: 'For those who run on saltwater and good vibes.<br>The Vitamin Sea Tote features a glowing ocean-inspired print — coral reefs, starfish, and sea shells in electric blue and lime — on a sleek black canvas.<br>Built bigger and smarter than your average tote, with enough pockets to actually stay organised.',
    details: '<br><br>· Size: 14×14 inches<br>· Material: Canvas (Cloth)<br>· Colour: Black with neon ocean print<br>· Closure: Top zipper<br>· Compartments: 2 spacious main compartments<br>· Pockets: 1 large inner pocket + 2 small inner pockets + 1 inner zipper pocket<br>· Extras: Built-in key holder<br>· Machine washable',
    inStock: true
  },
  {
    id: 'ltb-03',
    name: 'Nooksy Les Fauves Tote — Art Exhibition Print',
    category: 'tote-bags',
    categoryLabel: 'Tote Bags',
    price: 545,
    originalPrice: 1099,
    badge: 'sale',
    images: [
      'https://images.nooksy.in/ltb3/ltb3-1.jpg',
      'https://images.nooksy.in/ltb3/ltb3-2.jpg',
      'https://images.nooksy.in/ltb3/ltb3-3.jpg',
      'https://images.nooksy.in/ltb3/ltb3-4.jpg',
      'https://images.nooksy.in/ltb3/ltb3-5.jpg',
      'https://images.nooksy.in/ltb3/ltb3-6.jpg',
      'https://images.nooksy.in/ltb3/ltb3-7.jpg'
      ],
    colors: [],
    sizes: [],
    description: 'Carry a piece of art history.<br>The Les Fauves Tote is inspired by the bold colours and abstract forms of the French Fauvist movement — tropical leaves, graphic cut-outs, and vivid contrasts on a clean off-white canvas.<br>The tote for people with an eye for design and a life that demands more than one pocket.',
    details: '<br><br>· Size: 14×14 inches<br>· Material: Canvas (Cloth)<br>· Colour: Off-white with multicolour art print<br>· Closure: Top zipper<br>· Compartments: 2 spacious main compartments<br>· Pockets: 1 large inner pocket + 2 small inner pockets + 1 inner zipper pocket<br>· Extras: Built-in key holder<br>· Machine washable',
    inStock: true
  },
  {
    id: 'fps-01',
    name: 'Nooksy Sketch Frame — Turn Your Memory into Art',
    category: 'photo-frames',
    categoryLabel: 'Photo Frames',
    price: 400,
    originalPrice: 899,
    badge: 'bestseller',
   images: [
      'https://images.nooksy.in/spf1/spf1-1.jpg',
      'https://images.nooksy.in/spf1/spf1-2.jpg',
      'https://images.nooksy.in/spf1/spf1-3.jpg',
      'https://images.nooksy.in/spf1/spf1-4.jpg',
      'https://images.nooksy.in/spf1/spf1-5.jpg'
      ],
    colors: [],
    sizes: ['8×10 inch', '8×12 inch', '10x12 inch'],
    description: 'Your favourite photo, reimagined as a hand-style sketch.<br>Send us any memory — a wedding moment, anniversary photo, family portrait, or a candid — and we will transform it into a beautiful pencil sketch, framed and ready to gift or display. Every piece is one of a kind, just like the memory behind it.',
    details: '<br><br>· Frame material: Premium black wood<br>· Size: 8×10 inches<br>· Includes: High-quality sketch print + frame<br>· Turnaround: 7-10 business days after photo submission<br>· How it works: Place order → WhatsApp your photo to +91 73561 13346 → Approve sketch preview → Dispatched<br>· Perfect for: Weddings, anniversaries, birthdays, Valentines Day',
    inStock: true
  },
];

function getCardImage(p) {
  if (p.images && p.images.length > 0) return p.images[0];
  if (p.image) return p.image;
  return '';
}

// Render a product card
function renderProductCard(p, basePath = '') {
  const badge = p.badge ? `<span class="prod-badge badge-${p.badge}">${p.badge}</span>` : '';
  const oldPrice = p.originalPrice ? `<span class="prod-old">₹${p.originalPrice.toLocaleString('en-IN')}</span>` : '';
  const imgSrc = getCardImage(p);
  const imgTag = imgSrc
    ? `<img src="${imgSrc}" alt="${p.name}" loading="lazy" />`
    : `<i class="ti ti-photo" style="font-size:48px;color:#ccc"></i>`;

  return `
    <div class="product-card">
      <a href="${basePath}pages/product.html?id=${p.id}">
        <div class="product-img">
          ${imgTag}
          ${badge}
          <button class="prod-wish" aria-label="Save to wishlist"><i class="ti ti-heart"></i></button>
        </div>
        <div class="product-info">
          <div class="prod-cat">${p.categoryLabel}</div>
          <div class="prod-name">${p.name}</div>
          <div>
            <span class="prod-price">₹${p.price.toLocaleString('en-IN')}</span>
            ${oldPrice}
          </div>
        </div>
      </a>
      <div style="padding:0 1rem 1rem">
        <button class="prod-add" onclick="addToCart({id:'${p.id}',name:'${p.name}',price:${p.price},image:'${imgSrc}'})">
          Add to Cart
        </button>
      </div>
    </div>`;
}
