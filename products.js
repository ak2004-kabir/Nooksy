// NOOKSY — Product Data
// Replace placeholder images with your actual product image paths

const products = [
  {
    id: 'tote-natural-01',
    name: 'Canvas Tote — Natural',
    category: 'tote-bags',
    categoryLabel: 'Tote Bags',
    price: 649,
    originalPrice: 899,
    badge: 'bestseller',
    image: '../images/products/tote-natural.jpg',
    colors: ['#D9C9B0', '#000000', '#A7B9A8', '#D8A7A7'],
    sizes: ['Small', 'Medium', 'Large'],
    description: '100% natural cotton canvas. Reinforced handles. Inner zip pocket. Machine washable.',
    details: 'Dimensions: 38cm × 42cm × 12cm. Weight: 280g.',
    inStock: true
  },
  {
    id: 'tote-floral-02',
    name: 'Printed Tote — Floral',
    category: 'tote-bags',
    categoryLabel: 'Tote Bags',
    price: 749,
    originalPrice: null,
    badge: 'new',
    image: '../images/products/tote-floral.jpg',
    colors: ['#fff', '#D9C9B0'],
    sizes: ['Medium', 'Large'],
    description: 'Soft cotton canvas with hand-drawn floral print. Everyday essential.',
    details: 'Dimensions: 36cm × 40cm. Weight: 260g.',
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

// Render a product card
function renderProductCard(p, basePath = '') {
  const badge = p.badge ? `<span class="prod-badge badge-${p.badge}">${p.badge}</span>` : '';
  const oldPrice = p.originalPrice ? `<span class="prod-old">₹${p.originalPrice.toLocaleString('en-IN')}</span>` : '';
  const imgSrc = p.image || '';
  const imgTag = imgSrc
    ? `<img src="${basePath}${imgSrc}" alt="${p.name}" loading="lazy" />`
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
