// NOOKSY — Product Data
// Replace placeholder images with your actual product image paths

const products = [
  {
    id: 'tb-01',
    name: 'Tumbler Bottle - Black',
    category: 'tumblers',
    categoryLabel: 'Tumbler Bottle',
    price: 795,
    originalPrice: 1299,
    badge: 'sale',
    images: [
      'https://images.nooksy.in/tb1-v2/tb1-1-v2.jpg',
      'https://images.nooksy.in/tb1-v2/tb1-2-v2.jpg',
      'https://images.nooksy.in/tb1-v2/tb1-3-v2.jpg',
      'https://images.nooksy.in/tb1-v2/tb1-4-v2.jpg',
      'https://images.nooksy.in/tb1-v2/tb1-5-v2.jpg',
      'https://images.nooksy.in/tb1-v2/tb1-6-v2.jpg',
      'https://images.nooksy.in/tb1-v2/tb1-7-v2.jpg'
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
    category: 'tumblers',
    categoryLabel: 'Tumbler Bottle',
    price: 795,
    originalPrice: 1299,
    badge: 'sale',
    images: [
      'https://images.nooksy.in/tb2-v2/tb2-1-v2.jpg',
      'https://images.nooksy.in/tb2-v2/tb2-2-v2.jpg',
      'https://images.nooksy.in/tb2-v2/tb2-3-v2.jpg',
      'https://images.nooksy.in/tb2-v2/tb2-4-v2.jpg',
      'https://images.nooksy.in/tb2-v2/tb2-5-v2.jpg',
      'https://images.nooksy.in/tb2-v2/tb2-6-v2.jpg',
      'https://images.nooksy.in/tb2-v2/tb2-7-v2.jpg'
      ],
    colors: [],
    sizes: [],
    description: 'Stainless Steel Bottle. Stainless Steel Straw. Leak-Proof Lid',
    details: 'Dimensions: 20oz. 600ml',
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
    description: 'This tote bag can be used for several purposes, such as grocery shopping, carrying books, laptop bags, gym bags, or even as a fashion accessory. Our tote bags are a more sustainable alternative to plastic shopping bags.,
    details: '',
    inStock: true
  },
  {
    id: 'fps-01',
    name: 'Sketch Photo Frame',
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
    sizes: ['8×10 inch', '8×12 inch', 10x12 inch],
    description: 'Turn your memories into a sketch',
    details: '',
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
