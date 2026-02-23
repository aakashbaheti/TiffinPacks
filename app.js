/**
 * TiffinPacks - Main JavaScript Application
 * Handles cart management, filtering, search, and page interactions
 */

// ============================================
// CART MANAGEMENT (localStorage)
// ============================================

/**
 * Get cart from localStorage
 * Cart format: [{ id, name, price, quantity, dietary }, ...]
 */
function getCart() {
  const cart = localStorage.getItem('tiffin_cart');
  return cart ? JSON.parse(cart) : [];
}

/**
 * Save cart to localStorage
 */
function saveCart(cart) {
  localStorage.setItem('tiffin_cart', JSON.stringify(cart));
  updateCartCount();
}

/**
 * Add product to cart
 */
function addToCart(product, quantity = 1) {
  const cart = getCart();
  const existingItem = cart.find(item => item.id === product.id);

  if (existingItem) {
    // Item already in cart, increase quantity
    existingItem.quantity += quantity;
  } else {
    // New item to cart
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
      dietary: product.dietary
    });
  }

  saveCart(cart);
  showCartNotification();
}

/**
 * Remove product from cart
 */
function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
}

/**
 * Update quantity for cart item
 */
function updateCartQuantity(productId, quantity) {
  const cart = getCart();
  const item = cart.find(item => item.id === productId);
  
  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      item.quantity = quantity;
      saveCart(cart);
    }
  }
}

/**
 * Calculate cart total
 */
function getCartTotal() {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

/**
 * Get total items in cart
 */
function getCartItemCount() {
  const cart = getCart();
  return cart.reduce((count, item) => count + item.quantity, 0);
}

/**
 * Clear entire cart
 */
function clearCart() {
  localStorage.removeItem('tiffin_cart');
  updateCartCount();
}

/**
 * Update cart count display in header
 */
function updateCartCount() {
  const cartCountElement = document.querySelector('.cart-count');
  const count = getCartItemCount();
  
  if (cartCountElement) {
    if (count > 0) {
      cartCountElement.textContent = count;
      cartCountElement.style.display = 'flex';
    } else {
      cartCountElement.style.display = 'none';
    }
  }
}

/**
 * Show quick notification when item added
 */
function showCartNotification() {
  // Create or update notification
  let notification = document.getElementById('cart-notification');
  if (!notification) {
    notification = document.createElement('div');
    notification.id = 'cart-notification';
    notification.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
      background: var(--success);
      color: white;
      padding: 1rem 1.5rem;
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-lg);
      z-index: 1000;
      animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(notification);
  }

  notification.textContent = '✓ Added to cart!';
  notification.style.display = 'block';

  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);
}

// ============================================
// PRODUCT FILTERING & SEARCH (Shop Page)
// ============================================

/**
 * Filter products based on dietary preference
 */
function filterByDietary(products, dietary) {
  if (!dietary || dietary === 'all') return products;
  
  return products.filter(product => 
    product.dietary.includes(dietary)
  );
}

/**
 * Filter products by nutrition tags
 */
function filterByTag(products, tag) {
  if (!tag) return products;
  
  return products.filter(product => 
    product.tags.includes(tag)
  );
}

/**
 * Search products by name and ingredients
 */
function searchProducts(products, query) {
  if (!query) return products;
  
  const lowerQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.shortDesc.toLowerCase().includes(lowerQuery) ||
    product.ingredients.some(ing => ing.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Sort products by price
 */
function sortByPrice(products, order) {
  const sorted = [...products];
  
  if (order === 'low-high') {
    return sorted.sort((a, b) => a.price - b.price);
  } else if (order === 'high-low') {
    return sorted.sort((a, b) => b.price - a.price);
  }
  
  return sorted;
}

/**
 * Get filtered and sorted products
 * Used on shop.html
 */
function getFilteredProducts(
  products,
  searchQuery = '',
  dietary = 'all',
  tag = '',
  sortOrder = 'default'
) {
  let filtered = [...products];

  // Apply search
  filtered = searchProducts(filtered, searchQuery);

  // Apply dietary filter
  filtered = filterByDietary(filtered, dietary);

  // Apply tag filter
  filtered = filterByTag(filtered, tag);

  // Apply sorting
  if (sortOrder !== 'default') {
    filtered = sortByPrice(filtered, sortOrder);
  }

  return filtered;
}

// ============================================
// PRODUCT RENDERING
// ============================================

function isImagePath(value) {
  return typeof value === 'string' && /\.(png|jpe?g|webp|gif)$/i.test(value);
}

function renderProductImage(product) {
  if (isImagePath(product.image)) {
    return `<img src="${product.image}" alt="${product.name}" loading="lazy">`;
  }

  return product.image;
}

/**
 * Create product card HTML
 */
function createProductCard(product) {
  const dietaryBadges = product.dietary
    .map(d => `<span class="badge badge-${d}">${d.toUpperCase()}</span>`)
    .join('');

  const tagChips = product.tags
    .map(tag => `<span class="badge badge-tag">${tag}</span>`)
    .join('');

  return `
    <div class="card product-card">
      <div class="product-image">${renderProductImage(product)}</div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-desc">${product.shortDesc}</p>
        <div class="product-badges">
          ${dietaryBadges}
        </div>
        <div class="product-tags">
          ${tagChips}
        </div>
        <p class="product-price">$${product.price.toFixed(2)}</p>
      </div>
      <div class="product-actions">
        <button class="btn btn-outline btn-small" onclick="goToProduct(${product.id})">
          View Details
        </button>
        <button class="btn btn-primary btn-small" onclick="addToCart(products.find(p => p.id === ${product.id}))">
          Add to Cart
        </button>
      </div>
    </div>
  `;
}

/**
 * Render product grid
 */
function renderProductGrid(products, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (products.length === 0) {
    container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No products found. Try adjusting your filters.</p>';
    return;
  }

  container.innerHTML = products
    .map(product => createProductCard(product))
    .join('');
}

// ============================================
// PRODUCT DETAIL PAGE
// ============================================

/**
 * Get product by ID
 */
function getProductById(id) {
  return products.find(p => p.id === parseInt(id));
}

/**
 * Get product ID from URL query string
 */
function getProductIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

/**
 * Navigate to product detail page
 */
function goToProduct(productId) {
  window.location.href = `product.html?id=${productId}`;
}

/**
 * Add to cart from product detail page with quantity
 */
function addToCartFromDetail(productId, quantity) {
  const product = getProductById(productId);
  if (product) {
    addToCart(product, parseInt(quantity) || 1);
  }
}

// ============================================
// CART PAGE RENDERING
// ============================================

/**
 * Render cart items on cart.html
 */
function renderCartItems() {
  const container = document.getElementById('cart-items');
  if (!container) return;

  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = `
      <p style="text-align: center; padding: 2rem;">
        Your cart is empty. 
        <a href="shop.html" style="color: var(--primary); font-weight: 600;">Continue shopping</a>
      </p>
    `;
    document.getElementById('checkout-btn').disabled = true;
    return;
  }

  container.innerHTML = cart
    .map(item => `
      <div class="cart-item">
        <div class="cart-item-image">${item.image}</div>
        <div class="cart-item-details">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
          <div class="quantity-control">
            <button class="btn btn-small" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">−</button>
            <input type="number" class="quantity-input" value="${item.quantity}" readonly>
            <button class="btn btn-small" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
          </div>
          ${item.dietary.map(d => `<span class="badge badge-${d}">${d.toUpperCase()}</span>`).join('')}
        </div>
        <div>
          <div class="item-subtotal">$${(item.price * item.quantity).toFixed(2)}</div>
          <button class="btn btn-outline btn-small" onclick="removeFromCart(${item.id}); renderCartItems(); updateCartSummary();">
            Remove
          </button>
        </div>
      </div>
    `)
    .join('');

  document.getElementById('checkout-btn').disabled = false;
}

/**
 * Update cart summary (total)
 */
function updateCartSummary() {
  const totalElement = document.getElementById('cart-total');
  const itemCountElement = document.getElementById('cart-item-count');
  
  if (itemCountElement) {
    itemCountElement.textContent = getCartItemCount() + ' items';
  }
  
  if (totalElement) {
    totalElement.textContent = '$' + getCartTotal().toFixed(2);
  }
}

// ============================================
// CHECKOUT FORM VALIDATION
// ============================================

/**
 * Validate checkout form and process order
 */
function submitCheckoutForm(event) {
  event.preventDefault();

  // Get form data
  const form = event.target;
  const formData = new FormData(form);

  // Validation rules
  const errors = [];

  if (!formData.get('name').trim()) errors.push('Name is required');
  if (!formData.get('email').trim()) errors.push('Email is required');
  if (!formData.get('address').trim()) errors.push('Address is required');
  if (!formData.get('country')) errors.push('Country is required');
  if (!formData.get('payment')) errors.push('Payment method is required');

  // Email validation
  const email = formData.get('email');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailRegex.test(email)) {
    errors.push('Valid email is required');
  }

  // Show errors
  const errorContainer = document.getElementById('form-errors');
  if (errors.length > 0) {
    errorContainer.innerHTML = errors
      .map(error => `<div class="alert alert-error">${error}</div>`)
      .join('');
    errorContainer.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  // Clear errors
  errorContainer.innerHTML = '';

  // Process order
  processOrder(formData);
}

/**
 * Process the order and show confirmation
 */
function processOrder(formData) {
  // Get cart data
  const cart = getCart();
  const total = getCartTotal();

  // Create order object (in real app, would send to server)
  const order = {
    id: 'ORD-' + Date.now(),
    date: new Date().toLocaleDateString(),
    customer: {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      country: formData.get('country')
    },
    items: cart,
    total: total,
    paymentMethod: formData.get('payment')
  };

  // Save order (in localStorage for demo)
  localStorage.setItem('last_order', JSON.stringify(order));

  // Clear cart
  clearCart();

  // Show confirmation page
  showOrderConfirmation(order);
}

/**
 * Display order confirmation
 */
function showOrderConfirmation(order) {
  const checkoutForm = document.getElementById('checkout-form');
  const confirmationBox = document.getElementById('confirmation-box');

  if (checkoutForm) checkoutForm.style.display = 'none';
  
  if (confirmationBox) {
    confirmationBox.style.display = 'block';
    confirmationBox.innerHTML = `
      <div class="confirmation">
        <div class="confirmation-icon">✓</div>
        <h2>Order Confirmed!</h2>
        <p><strong>Order ID:</strong> ${order.id}</p>
        <p><strong>Date:</strong> ${order.date}</p>
        <p style="margin: 1rem 0; font-size: 1.25rem; color: var(--primary);">
          <strong>Total: $${order.total.toFixed(2)}</strong>
        </p>
        
        <div style="background: #f9f7f4; padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0; text-align: left;">
          <h4 style="color: var(--secondary); margin-bottom: 1rem;">Why TiffinPacks?</h4>
          <p style="margin-bottom: 0.5rem;">✓ <strong>Nutritious & Affordable:</strong> Real ingredients you recognize, under $5 per pack</p>
          <p style="margin-bottom: 0.5rem;">✓ <strong>Trusted by Parents:</strong> Clear labels, transparent ingredients, no hidden nasties</p>
          <p style="margin-bottom: 0;">✓ <strong>Respectful of Needs:</strong> Vegetarian & Halal options for every family</p>
        </div>

        <p style="color: var(--text-light); margin: 1rem 0;">
          A confirmation email has been sent to <strong>${order.customer.email}</strong>
        </p>

        <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
          <button class="btn btn-primary btn-block" onclick="window.location.href='shop.html'">
            Continue Shopping
          </button>
        </div>
      </div>
    `;
  }
}

// ============================================
// ACCORDION (FAQ) FUNCTIONALITY
// ============================================

/**
 * Initialize accordion components
 */
function initAccordion() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const isOpen = content.classList.contains('open');

      // Close all other accordion items
      document.querySelectorAll('.accordion-content').forEach(item => {
        item.classList.remove('open');
      });
      document.querySelectorAll('.accordion-header').forEach(h => {
        h.classList.remove('open');
      });

      // Toggle current item
      if (!isOpen) {
        content.classList.add('open');
        header.classList.add('open');
      }
    });

    // Keyboard support
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        header.click();
      }
    });
  });
}

// ============================================
// NAVIGATION & ACTIVE LINKS
// ============================================

/**
 * Set active nav link based on current page
 */
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * Setup mobile menu toggle
 */
function setupMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }
}

// ============================================
// PAGE INITIALIZATION
// ============================================

/**
 * Initialize when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
  // Common initializations for all pages
  updateCartCount();
  setActiveNavLink();
  setupMobileMenu();
  initAccordion();

  // Page-specific initializations
  // These will be called from individual HTML pages
});

/**
 * Log message for debugging
 */
function log(message) {
  console.log('[TiffinPacks] ' + message);
}

// Initialize on page load
window.addEventListener('load', () => {
  updateCartCount();
});
