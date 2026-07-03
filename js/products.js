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
    description: 'Your everyday drink, elevated. The Nooksy Skinny Tumbler keeps your coffee hot and your water cold — all day, wherever you go. Built slim enough to fit any cupholder, bold enough to turn heads.',
    details: 'Capacity: 600ml (20oz) · Material: Food-grade stainless steel · Finish: High-gloss black · Includes: Leak-proof clear lid + stainless steel straw · Fits standard car cupholders · Hand wash recommended',
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
    description: 'Clean lines, calm energy. The Nooksy Skinny Tumbler in Cloud White features a minimal wave art print that is as effortless as your morning routine. Double-wall insulated to keep your drinks at the perfect temperature all day long.',
    details: 'Capacity: 600ml (20oz) · Material: Food-grade stainless steel · Finish: Matte white with line art print · Includes: Leak-proof clear lid + stainless steel straw · Fits standard car cupholders · Hand wash recommended',
    inStock: true
  },
  {
    id: 'atb-01',
    name: 'Zipper Tote Bag - Nature',
    category: 'tote-bags',
    categoryLabel: 'Tote Bags',
    price: 445,
    originalPrice: 999,
    badge: 'sale',
    images: [
      'https://images.nooksy.in/atb1/atb1-1.jpg',
      'https://images.nooksy.in/atb1/atb1-2.jpg',
      'https://images.nooksy.in/atb1/atb1-3.jpg',
      'https://images.nooksy.in/atb1/atb1-4.jpg',
      'https://images.nooksy.in/atb1/atb1-5.jpg',
      'https://images.nooksy.in/atb1/atb1-6.jpg'
      ],
    colors: [],
    sizes: [],
    description: 'This tote bag can be used for several purposes.',
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
    details: 'Frame material: Premium black wood<br>· Size: 8×10 inches<br>· Includes: High-quality sketch print + frame<br>· Turnaround: 7-10 business days after photo submission<br>· How it works: Place order → WhatsApp your photo to +91 73561 13346 → Approve sketch preview → Dispatched<br>· Perfect for: Weddings, anniversaries, birthdays, Valentines Day',
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
