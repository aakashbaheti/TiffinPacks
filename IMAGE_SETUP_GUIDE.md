# TiffinPacks - Image Setup Guide

## Overview
Your website is now ready to display product and character images! This guide shows you how to add them.

## Getting Images

You have several options:

### Option 1: Free Stock Images
- **Character Images**: Search for Indian cartoon character references on:
  - [Unsplash](https://unsplash.com) - Search "Indian kids cartoon"
  - [Pexels](https://pexels.com) - Free high-quality images
  - [Pixabay](https://pixabay.com) - Royalty-free images

### Option 2: Generate Images with AI
- [DALL-E](https://openai.com/dall-e-3) - Generate character and product images
- [Midjourney](https://midjourney.com) - High-quality AI generated images
- [Stable Diffusion](https://stablediffusion.io) - Free AI image generation

Example prompts:
```
"Lunch box illustration with healthy Indian snacks, bright colors, cartoon style"
"Chota Bheem character, cheerful, Indian, cartoon, vibrant colors"
"Moti-Patlu character, fun and happy, Indian animation style"
```

### Option 3: Custom Design
- Hire a designer from Fiverr or Upwork
- Local graphic designer who understands your brand

## Directory Structure

Create an `images` folder in your project:

```
TiffinPacks/
├── index.html
├── shop.html
├── product.html
├── character-quiz.html
├── images/
│   ├── products/
│   │   ├── bheem-power-pack.jpg
│   │   ├── auggie-smart-stack.jpg
│   │   ├── motu-adventure-mix.jpg
│   │   ├── cockroach-sweet-bites.jpg
│   │   ├── bheem-energy-spirals.jpg
│   │   └── auggie-brain-boost.jpg
│   └── characters/
│       ├── bheem.svg
│       ├── auggie.svg
│       ├── motu.svg
│       └── cockroach.svg
```

## How to Add Product Images

### Current Image Display
Products currently show emoji representations:
- Chota Bheem: 💪
- Auggie: 🧠
- Motu Patlu: 🚂
- Cockroach Squad: 🦗

### To Replace with Real Images

**In `shop.html`, find the product card section and update the emoji to an image:**

Replace this:
```javascript
.product-image {
  font-size: 4rem;
  text-align: center;
  margin-bottom: 1rem;
}
```

With this:
```javascript
.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}
```

Then in `app.js`, update the `createProductCard` function:

Replace:
```javascript
const productCard = `
  <div class="product-card">
    <div class="product-image">${product.image}</div>
    ...
`
```

With:
```javascript
const productCard = `
  <div class="product-card">
    <img 
      src="images/products/${product.id}-${product.character.toLowerCase().replace(' ', '-')}.jpg" 
      alt="${product.name}"
      class="product-image"
      onerror="this.src='images/products/placeholder.jpg'"
    >
    ...
`
```

## How to Add Character Images

### In `character-quiz.html`

The quiz already shows character emojis:
```html
<div class="character-emoji">💪</div>
```

To add images, replace with:
```html
<img 
  src="images/characters/bheem.svg" 
  alt="Chota Bheem"
  style="width:100px; height:100px; margin-bottom:1rem;"
>
```

### For Quiz Results

After taking the quiz, update the result display:

```javascript
// In character-quiz.html, update the showResults function
const characterImage = `
  <img 
    src="images/characters/${character.id}.svg" 
    alt="${character.name}"
    style="width:150px; height:150px; margin-bottom:1rem;"
  >
`;
```

## Product Data Updates

Update `data.js` to include image paths:

```javascript
{
  id: 1,
  name: "Chota Bheem Power Pack",
  character: "Chota Bheem",
  characterColor: "var(--character-bheem)",
  price: 4.99,
  image: "images/products/bheem-power-pack.jpg",  // ADD THIS
  // ... rest of product data
}
```

## Quick Setup - Copy & Paste Ready

### Step 1: Download/Get Images
1. Get 6 product images (recommendations: bright, appetizing food photography)
2. Get 4 character images (Bheem, Auggie, Motu, Cockroach)
3. Name them clearly (bheem-power-pack.jpg, etc.)

### Step 2: Create Folder Structure
```bash
# On Windows, in your TiffinPacks folder:
mkdir images
mkdir images\products
mkdir images\characters
```

### Step 3: Place Images
- All product images → `images/products/`
- All character images → `images/characters/`

### Step 4: Update app.js
Find this line in `app.js`:
```javascript
let cardHTML = `
  <div class="product-card">
    <div class="product-image">${product.image}</div>
```

Change to:
```javascript
let cardHTML = `
  <div class="product-card">
    <img src="images/products/${product.character.toLowerCase()}-pack.jpg" 
         alt="${product.name}" class="product-image">
```

## Image Naming Convention

Keep it simple and consistent:

**Products:**
- bheem-power-pack.jpg
- auggie-smart-stack.jpg
- motu-adventure-mix.jpg
- cockroach-sweet-bites.jpg
- bheem-energy-spirals.jpg
- auggie-brain-boost.jpg

**Characters:**
- bheem.svg (or .png/.jpg)
- auggie.svg
- motu.svg
- cockroach.svg

## Image Optimization Tips

1. **Size**: Keep images under 500KB each
2. **Format**: Use JPG for photos, PNG/SVG for illustrations
3. **Dimensions**:
   - Product images: 400x300px minimum
   - Character images: 200x200px minimum

## Troubleshooting

### Images not showing?
1. Check file paths match exactly (case-sensitive on some servers)
2. Verify images exist in the right folder
3. Check browser console for errors (F12)

### Placeholder showing?
This means the image file path is broken. Double-check:
- Folder names and spelling
- File extensions (.jpg, .png, etc.)
- File location

## HTML5 Responsive Images (Optional)

For better performance on mobile:

```html
<img 
  src="images/products/bheem-power-pack.jpg"
  srcset="
    images/products/bheem-power-pack-small.jpg 480w,
    images/products/bheem-power-pack.jpg 800w
  "
  sizes="(max-width: 768px) 100vw, 800px"
  alt="Chota Bheem Power Pack"
  class="product-image"
>
```

## Next Steps

1. ✅ Color scheme updated (Green & Black)
2. ✅ UI simplified and cleaned up
3. ✅ Language toggle added (English/Hindi)
4. ⬜ Add product images
5. ⬜ Add character images
6. ⬜ Test on mobile devices
7. ⬜ Deploy to hosting

## Questions?

If you need help:
- Check if images exist in the correct folder
- Verify file names match exactly
- Look at browser console (F12) for error messages
- Test with simple placeholder URLs first

---

**Your website is professionally styled and fully functional. Images are the final polish!**
