// NOOKSY — Product Data
// Replace placeholder images with your actual product image paths

const products = [
  {
    id: 'tb-01',
    name: 'Tumbler Bottle - Black',
    category: 'tumbler-bottle',
    categoryLabel: 'Tumbler Bottle',
    price: 795,
    originalPrice: 1299,
    badge: 'sale',
    image: [
      'https://images.nooksy.in/tb1/tb1-2.jpg'
      ],
    colors: [],
    sizes: [],
    description: 'Stainless Steel Bottle. Stainless Steel Straw. Leak-Proof Lid',
    details: 'Dimensions: 20oz. 600ml',
    inStock: true
  },
  {
   id: 'tb-02',
    name: 'Tumbler Bottle - White',
    category: 'tumbler-bottle',
    categoryLabel: 'Tumbler Bottle',
    price: 795,
    originalPrice: 1299,
    badge: 'sale',
    image: [
      'https://images.nooksy.in/tb2/tb2-1.jpg',
      'https://images.nooksy.in/tb2/tb2-2.jpg',
      'https://images.nooksy.in/tb2/tb2-3.jpg',
      'https://images.nooksy.in/tb2/tb2-4.jpg',
      'https://images.nooksy.in/tb2/tb2-5.jpg',
      'https://images.nooksy.in/tb2/tb2-6.jpg',
      'https://images.nooksy.in/tb2/tb2-7.jpg'
      ],
    colors: [],
    sizes: [],
    description: 'Stainless Steel Bottle. Stainless Steel Straw. Leak-Proof Lid',
    details: 'Dimensions: 20oz. 600ml',
    inStock: true
  },
  {
    id: 'tote-mini-03',
    name: 'Mini Tote — Black',
    category: 'tote-bags',
    categoryLabel: 'Tote Bags',
    price: 549,
    originalPrice: null,
    badge: null,
    image: '../images/products/tote-mini-black.jpg',
    colors: ['#000000', '#D9C9B0'],
    sizes: ['One Size'],
    description: 'Compact black canvas tote. Perfect for quick errands or gifting.',
    details: 'Dimensions: 28cm × 30cm. Weight: 180g.',
    inStock: true
  },
  {
    id: 'frame-oak-01',
    name: 'Minimal Oak Frame — 4×6',
    category: 'photo-frames',
    categoryLabel: 'Photo Frames',
    price: 549,
    originalPrice: null,
    badge: 'bestseller',
    image: '../images/products/frame-oak.jpg',
    colors: ['#c8a96e', '#000000'],
    sizes: ['4×6 inch', '5×7 inch'],
    description: 'Clean, minimal oak wood frame. Fits standard 4×6 photos. Portrait and landscape.',
    details: 'Material: Natural oak wood. Glass front. Easel back included.',
    inStock: true
  },
  {
    id: 'frame-collage-02',
    name: 'Collage Frame Set — 6 pcs',
    category: 'photo-frames',
    categoryLabel: 'Photo Frames',
    price: 999,
    originalPrice: 1299,
    badge: 'sale',
    image: '../images/products/frame-collage.jpg',
    colors: ['#fff', '#000000'],
    sizes: ['Standard'],
    description: 'Set of 6 matching frames. Mix and match sizes. Perfect for gallery walls.',
    details: 'Includes: 2×4×6, 2×5×7, 2×4×4 frames. Nails and hooks included.',
    inStock: true
  },
  {
    id: 'frame-metal-03',
    name: 'Black Metal Frame — 5×7',
    category: 'photo-frames',
    categoryLabel: 'Photo Frames',
    price: 649,
    originalPrice: null,
    badge: null,
    image: '../images/products/frame-metal.jpg',
    colors: ['#000000', '#c0c0c0'],
    sizes: ['5×7 inch'],
    description: 'Sleek black metal frame with glass front. Modern and minimal.',
    details: 'Material: Powder-coated metal. Shatter-resistant glass.',
    inStock: true
  },
  {
    id: 'tumbler-matte-01',
    name: 'Matte Black Tumbler — 500ml',
    category: 'tumblers',
    categoryLabel: 'Tumblers',
    price: 799,
    originalPrice: 999,
    badge: 'bestseller',
    image: '../images/products/tumbler-black.jpg',
    colors: ['#000000', '#D9C9B0', '#A7B9A8'],
    sizes: ['350ml', '500ml'],
    description: 'Double-wall insulated. Keeps drinks hot 6 hrs, cold 12 hrs. Leak-proof lid.',
    details: 'Material: 304 stainless steel. BPA-free. Dishwasher safe lid.',
    inStock: true
  },
  {
    id: 'tumbler-sage-02',
    name: 'Sage Green Tumbler — 350ml',
    category: 'tumblers',
    categoryLabel: 'Tumblers',
    price: 699,
    originalPrice: null,
    badge: 'new',
    image: '../images/products/tumbler-sage.jpg',
    colors: ['#A7B9A8', '#000000'],
    sizes: ['350ml'],
    description: 'Compact sage green tumbler. Perfect desk companion. Powder-coated finish.',
    details: 'Material: 304 stainless steel. BPA-free. Leak-proof lid.',
    inStock: true
  },
  {
    id: 'tumbler-beige-03',
    name: 'Insulated Flask — Beige',
    category: 'tumblers',
    categoryLabel: 'Tumblers',
    price: 849,
    originalPrice: null,
    badge: null,
    image: '../images/products/tumbler-beige.jpg',
    colors: ['#D9C9B0', '#000000'],
    sizes: ['500ml', '750ml'],
    description: 'Wide-mouth insulated flask in warm beige. Great for travel.',
    details: 'Material: 316 stainless steel. BPA-free. Wide mouth lid included.',
    inStock: true
  }
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
