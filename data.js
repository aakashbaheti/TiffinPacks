// Product data for TiffinPacks
// Character-themed lunch kits like Lunchables but for Indian kids!
// Each product includes: id, name, character, price, dietary badges, nutrition tags, full details for product page

const products = [
  {
    id: 1,
    name: "Chhota Bheem Power Pack",
    character: "Chhota Bheem",
    characterColor: "bheem",
    price: 3.99,
    dietary: ["vegetarian"],
    tags: ["Protein", "Whole Grains"],
    image: "chota_bheem_veg.png",
    shortDesc: "Roti wraps, paneer tikka, and crunchy veggies.",
    description: "Mini whole-wheat roti wraps with paneer tikka cubes, carrot-cucumber sticks, and a date-almond ladoo. Power up like Bheem with a filling, kid-friendly combo.",
    ingredients: [
      "Mini whole-wheat roti wraps",
      "Paneer tikka cubes",
      "Carrot sticks",
      "Cucumber sticks",
      "Date-almond ladoo"
    ],
    allergens: ["Dairy", "Tree nuts (almond)"],
    portion: "1 kid-size pack",
    trustNote: "High protein from paneer and iron plus fiber from whole wheat and veggies help kids stay strong and energized.",
    nutrition: "High protein, iron, and fiber"
  },
  {
    id: 2,
    name: "Motu Patlu Protein Pack",
    character: "Motu Patlu",
    characterColor: "motu",
    price: 3.79,
    dietary: ["vegetarian"],
    tags: ["Protein", "Vitamins"],
    image: "motu_patlu_veg.png",
    shortDesc: "Mini idlis with sambar dip and roasted chana.",
    description: "Mini idlis with sambar dip, roasted chana, and sweet mango slices. Snack smart with Motu and Patlu and keep energy steady all day.",
    ingredients: [
      "Mini idlis",
      "Sambar dip",
      "Roasted chana",
      "Mango slices"
    ],
    allergens: [],
    portion: "1 kid-size pack",
    trustNote: "Fermented idlis support gut health, and chana adds plant protein for a satisfying snack.",
    nutrition: "Fermented foods plus plant protein"
  },
  {
    id: 3,
    name: "Oggy Crunch Pack",
    character: "Oggy",
    characterColor: "auggie",
    price: 3.89,
    dietary: ["vegetarian"],
    tags: ["Whole Grains", "Vitamins"],
    image: "auggie_cockroach_veg.png",
    shortDesc: "Baked samosa bites, mint dip, and crunchy makhana.",
    description: "Baked vegetable samosa bites with mint yogurt dip, roasted makhana (fox nuts), and crisp apple slices. Crunch time with Oggy.",
    ingredients: [
      "Baked vegetable samosa bites",
      "Mint yogurt dip",
      "Roasted makhana (fox nuts)",
      "Apple slices"
    ],
    allergens: ["Dairy"],
    portion: "1 kid-size pack",
    trustNote: "High fiber and low-oil baked snacks make this a crunchy, better-for-you pick.",
    nutrition: "High fiber, baked not fried"
  },
  {
    id: 4,
    name: "Chhota Bheem Champion Pack",
    character: "Chhota Bheem",
    characterColor: "bheem",
    price: 4.79,
    dietary: ["halal"],
    tags: ["Protein", "Whole Grains"],
    image: "chota_bheem_chicken.png",
    shortDesc: "Halal chicken tikka wrap with hummus and dates.",
    description: "Whole-wheat chicken tikka wrap with hummus dip, cucumber sticks, and dates. Train like a champion with lean halal protein and balanced macros.",
    ingredients: [
      "Whole-wheat chicken tikka wrap",
      "Hummus dip",
      "Cucumber sticks",
      "Dates"
    ],
    allergens: ["Sesame"],
    portion: "1 kid-size pack",
    trustNote: "Lean halal protein plus whole grains keep kids fueled and focused.",
    nutrition: "Lean protein, balanced macros"
  },
  {
    id: 5,
    name: "Motu Patlu Adventure Pack",
    character: "Motu Patlu",
    characterColor: "motu",
    price: 4.59,
    dietary: ["halal"],
    tags: ["Protein", "Vitamins"],
    image: "motu_patlu_chicken.png",
    shortDesc: "Halal seekh kebab bites with mini naan and raita.",
    description: "Halal chicken seekh kebab bites, mini naan, yogurt raita dip, and orange slices. Adventure in every bite.",
    ingredients: [
      "Halal chicken seekh kebab bites",
      "Mini naan",
      "Yogurt raita dip",
      "Orange slices"
    ],
    allergens: ["Dairy", "Gluten"],
    portion: "1 kid-size pack",
    trustNote: "Protein plus probiotics from yogurt support active, happy tummies.",
    nutrition: "Protein plus probiotics"
  },
  {
    id: 6,
    name: "Oggy Energy Pack",
    character: "Oggy",
    characterColor: "auggie",
    price: 3.69,
    dietary: [],
    tags: ["Protein", "Vitamins"],
    image: "auggie_cockroach_beg.png",
    shortDesc: "Paratha triangles with egg bhurji and fruit.",
    description: "Mini paratha triangles with egg bhurji filling, peanut chikki, and banana slices. Energy for nonstop fun.",
    ingredients: [
      "Mini paratha triangles",
      "Egg bhurji filling",
      "Peanut chikki",
      "Banana slices"
    ],
    allergens: ["Egg", "Peanuts", "Gluten"],
    portion: "1 kid-size pack",
    trustNote: "Protein plus natural sugars help kids stay fueled through busy days.",
    nutrition: "Protein plus natural energy"
  }
];

// Export for use in other JavaScript files
// This works in modern browsers when using type="module" in HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = products;
}
