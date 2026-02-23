// Language Translation System
const translations = {
  en: {
    // Navigation
    "home": "Home",
    "shop": "Shop",
    "quiz": "Character Quiz",
    "about": "About",
    "cart": "Cart",
    
    // Homepage
    "hero_title": "🍱 TiffinPacks",
    "hero_subtitle": "Lunch Kits For Your Favorite Characters!",
    "hero_tagline": "Like Lunchables, but made just for Indian kids",
    "find_character": "🎮 Find Your Character",
    
    // Characters
    "which_character": "Which Character Are You?",
    "bheem": "Chota Bheem",
    "auggie": "Oggy",
    "motu": "Motu Patlu",
    "cockroach": "Cockroach Squad",
    
    "bheem_desc": "Brave and Strong",
    "auggie_desc": "Smart and Curious",
    "motu_desc": "Fun and Adventurous",
    "cockroach_desc": "Cute and Friendly",
    
    // Values
    "why_love": "Why Kids Love TiffinPacks",
    "super_yummy": "Super Yummy",
    "super_yummy_desc": "Tastes amazing with all your favorite Indian flavors!",
    "super_strong": "Super Strong",
    "super_strong_desc": "Real, healthy ingredients that make you strong!",
    "super_fun": "Super Fun",
    "super_fun_desc": "Character-themed packs with your favorite heroes!",
    
    // CTAs
    "find_character_cta": "Find Your Character & Start Shopping!",
    "discover_character": "Take the quiz to discover which TiffinPacks character matches your personality!",
    "take_quiz": "🎮 Take Quiz",
    "shop_now": "🛒 Shop Now",
    
    // Shop Page
    "dietary_preference": "Dietary Preference",
    "nutrition_focus": "Nutrition Focus",
    "sort_by_price": "Sort by Price",
    "default": "Default",
    "all_products": "All Products",
    "all_tags": "All Tags",
    "search_placeholder": "🔍 Search by name or ingredients...",
    "dietary": "Dietary",
    "all": "All",
    "vegetarian": "Vegetarian",
    "halal": "Halal",
    "price": "Price",
    "sort": "Sort",
    "low_to_high": "Low to High",
    "high_to_low": "High to Low",
    "search": "Search products...",
    "of": "कि",
    
    // Product
    "price_label": "Price",
    "quantity": "Quantity",
    "add_to_cart": "Add to Cart",
    "ingredients": "Ingredients",
    "allergens": "Allergens",
    "nutrition": "Nutrition",
    "portion": "Portion",
    "of": "of",
    
    // Quiz Questions
    "quiz_q1": "What's your superpower?",
    "quiz_q1_a1": "Super strength and courage!",
    "quiz_q1_a2": "Big brain for solving problems!",
    "quiz_q1_a3": "Making friends laugh!",
    "quiz_q1_a4": "Being cute and clever!",
    
    "quiz_q2": "What do you love most?",
    "quiz_q2_a1": "Fighting for my friends!",
    "quiz_q2_a2": "Learning new things!",
    "quiz_q2_a3": "Going on adventures!",
    "quiz_q2_a4": "Hanging with my squad!",
    
    "quiz_q3": "How do you handle challenges?",
    "quiz_q3_a1": "Face them head-on with strength!",
    "quiz_q3_a2": "Think it through and find the solution!",
    "quiz_q3_a3": "Find a fun way to solve it!",
    "quiz_q3_a4": "Ask for help from friends!",
    
    "quiz_q4": "Your favorite type of food is:",
    "quiz_q4_a1": "Energy-packed and filling!",
    "quiz_q4_a2": "Brain-boosting and nutritious!",
    "quiz_q4_a3": "Fun and tasty above all!",
    "quiz_q4_a4": "Anything yummy works for me!",
    
    "quiz_q5": "What do you want to be known for?",
    "quiz_q5_a1": "Being brave and strong!",
    "quiz_q5_a2": "Being smart and clever!",
    "quiz_q5_a3": "Always making people smile!",
    "quiz_q5_a4": "Being a great friend!",
    
    // Character Results
    "bheem_name": "Chota Bheem 💪",
    "bheem_result": "You're brave, strong, and always ready to help your friends! Just like Chota Bheem, you have a big heart and love protecting people you care about. You're a natural leader!",
    
    "auggie_name": "Oggy 🧠",
    "auggie_result": "You're smart, curious, and love solving mysteries! Like Oggy, you always think before you act and have great ideas. Your brain is your superpower!",
    
    "motu_name": "Motu Patlu 🚂",
    "motu_result": "You're fun-loving, adventurous, and always ready for the next big adventure! Like Motu and Patlu, you make everything exciting and love trying new things!",
    
    "cockroach_name": "The Cockroach Squad 🦗",
    "cockroach_result": "You're cute, clever, and a wonderful friend! Like Chester, Roach, and Grub, you know that teamwork makes the dream work. You and your squad are unstoppable!",
    "related_products": "Related Products",
    
    // Cart
    "your_cart": "Your Cart",
    "empty_cart": "Your cart is empty",
    "subtotal": "Subtotal",
    "total": "Total",
    "proceed": "Proceed to Checkout",
    "continue_shopping": "Continue Shopping",
    "remove": "Remove",
    
    // Checkout
    "checkout": "Checkout",
    "first_name": "First Name",
    "email": "Email",
    "phone": "Phone Number",
    "address": "Street Address",
    "city": "City",
    "zip": "ZIP Code",
    "country": "Country",
    "payment": "Payment Method",
    "place_order": "Place Order",
    
    // Quiz
    "question": "Question",
    "result": "Your Character Result",
    "retake": "Retake Quiz",
    "quiz_title": "🎮 Who Are You? 🎮",
    "quiz_subtitle": "Find out which TiffinPacks character you're most like!",
    
    // About Page
    "about_title": "About TiffinPacks",
    "about_subtitle": "We're building a better future for kids' snacking—one affordable, nutritious, culturally inclusive pack at a time.",
    "our_mission_heading": "Our Mission",
    "mission_text": "To make nutritious, affordable, delicious snack packs that kids love and parents trust. We use real Indian ingredients, no artificial junk, and respect every family's dietary preferences.",
    "who_we_serve": "Who We Serve",
    "who_we_serve_text": "Families across India who want their kids to snack smart. Parents who work, kids in school, teachers looking for mid-day snacks, NGOs serving underprivileged kids—everyone.",
    "serve_families": "Low-Income Families",
    "serve_families_text": "Parents working multiple jobs deserve affordable snacks they can feel good about. Every TiffinPack is under $5 because we respect your budget.",
    "serve_kids": "Growing Kids",
    "serve_kids_text": "Kids need protein, fiber, and nutrients—not sugar, artificial dyes, or mysterious ingredients. Our packs are designed for healthy, happy growth.",
    "serve_conscious": "Culturally Conscious Parents",
    "serve_conscious_text": "Whether vegetarian, halal, or just respectful of traditional values, we honor dietary and religious choices. Food is culture.",
    "serve_schools": "Schools & Community Programs",
    "serve_schools_text": "We partner with schools and NGOs to provide nutritious snacking for underserved communities. Bulk discounts available.",
    "build_trust": "How We Build Trust",
    "clear_labeling": "Clear Labeling",
    "clear_labeling_text": "No mystery ingredients. Every pack lists exactly what's inside—names you recognize, not mysterious E-numbers or \"natural flavors.\"",
    "nutrition_transparency": "Nutrition Transparency",
    "nutrition_transparency_text": "Nutrition facts and key benefits (protein, fiber, vitamins) on every pack. We highlight what makes each TiffinPack special.",
    "dietary_respect": "Dietary Respect",
    "dietary_respect_text": "Vegetarian and halal badges aren't marketing—they're commitments. We respect religious and ethical dietary choices because food is identity, not just calories.",
    "community_accountability": "Community Accountability",
    "community_accountability_text": "We partner with schools and NGOs. We're not hiding behind corporate layers—we're visible, accessible, and answerable to the communities we serve.",
    "packaged_healthy_title": "Why Packaged But Healthy?",
    "packaged_healthy_text": "Many parents feel guilty about packaged snacks. But busy families need solutions. We fill that gap with pre-portioned, affordable packs made from ingredients you'd use at home. It's not about replacing fresh food—it's about supporting parents who need budget-friendly, healthy shortcuts.",
    "partnerships_title": "Our Partnerships",
    "partnerships_text": "We work with local farms for ingredients, NGOs for distribution to underserved kids, and schools for feedback on what kids actually want to eat.",
  },
  
  hi: {
    // Navigation
    "home": "होम",
    "shop": "दुकान",
    "quiz": "चरित्र क्विज़",
    "about": "हमारे बारे में",
    "cart": "कार्ट",
    
    // Homepage
    "hero_title": "🍱 टिफिन पैक्स",
    "hero_subtitle": "अपने पसंदीदा पात्रों के लिए दोपहर का भोजन किट!",
    "hero_tagline": "लंचेबल्स जैसा, लेकिन भारतीय बच्चों के लिए बनाया गया",
    "find_character": "🎮 अपना चरित्र खोजें",
    "shop_now": "🛒 अब खरीदें",
    
    // Characters
    "which_character": "आप कौन से चरित्र हैं?",
    "bheem": "छोटा भीम",
    "auggie": "ओगी",
    "motu": "मोटू पतलू",
    "cockroach": "कॉकरोच स्क्वाड",
    
    "bheem_desc": "साहसी और मजबूत",
    "auggie_desc": "स्मार्ट और जिज्ञासु",
    "motu_desc": "मजेदार और साहसिक",
    "cockroach_desc": "प्यारा और दोस्ताना",
    
    // Values
    "why_love": "बच्चे टिफिन पैक्स को क्यों पसंद करते हैं",
    "super_yummy": "बहुत स्वादिष्ट",
    "super_yummy_desc": "आपके सभी पसंदीदा भारतीय स्वादों के साथ बहुत अच्छा स्वाद!",
    "super_strong": "बहुत मजबूत",
    "super_strong_desc": "असली, स्वस्थ सामग्री जो आपको मजबूत बनाती है!",
    "super_fun": "बहुत मजेदार",
    "super_fun_desc": "अपने पसंदीदा नायकों के साथ चरित्र-थीम वाले पैक!",
    
    // CTAs
    "find_character_cta": "अपना चरित्र खोजें और खरीदारी शुरू करें!",
    "discover_character": "यह खोजने के लिए क्विज़ लें कि कौन सा टिफिन पैक्स चरित्र आपकी व्यक्तित्व से मेल खाता है!",
    "take_quiz": "🎮 क्विज़ लें",
    "shop_now": "🛒 अब खरीदें",
    
    // Shop
    "filters": "फिल्टर",
    "dietary": "आहार",
    "all": "सभी",
    "vegetarian": "शाकाहारी",
    "halal": "हलाल",
    "price": "कीमत",
    "sort": "सॉर्ट करें",
    "low_to_high": "कम से अधिक",
    "high_to_low": "अधिक से कम",
    "search": "उत्पाद खोजें...",
    
    // Product
    "price_label": "कीमत",
    "quantity": "मात्रा",
    "add_to_cart": "कार्ट में जोड़ें",
    "ingredients": "सामग्री",
    "allergens": "एलर्जन्स",
    "nutrition": "पोषण",
    "portion": "भाग",
    "related_products": "संबंधित उत्पाद",
    
    // Cart
    "your_cart": "आपकी कार्ट",
    "empty_cart": "आपकी कार्ट खाली है",
    "subtotal": "उप-कुल",
    "total": "कुल",
    "proceed": "चेकआउट के लिए आगे बढ़ें",
    "continue_shopping": "खरीदारी जारी रखें",
    "remove": "हटाओ",
    
    // Shop Page (Hindi)
    "dietary_preference": "आहार प्राथमिकता",
    "nutrition_focus": "पोषण फोकस",
    "sort_by_price": "मूल्य द्वारा सॉर्ट करें",
    "all_products": "सभी उत्पाद",
    "all_tags": "सभी टैग",
    "search_placeholder": "🔍 नाम या सामग्री द्वारा खोजें...",
    
    // Checkout
    "checkout": "चेकआउट",
    "first_name": "पहला नाम",
    "email": "ईमेल",
    "phone": "फोन नंबर",
    "address": "पता",
    "city": "शहर",
    "zip": "पिन कोड",
    "country": "देश",
    "payment": "भुगतान विधि",
    "place_order": "ऑर्डर दें",
    
    // Quiz
    "question": "प्रश्न",
    "result": "आपका चरित्र परिणाम",
    "retake": "क्विज़ फिर से लें",
    "quiz_title": "🎮 आप कौन हैं? 🎮",
    "quiz_subtitle": "पता लगाएं कि आप कौन सा टिफिन पैक्स चरित्र सबसे ज्यादा पसंद करते हैं!",
    
    // Quiz Questions (Hindi)
    "quiz_q1": "तुम्हारी सुपरपावर क्या है?",
    "quiz_q1_a1": "शक्तिशाली और साहसी!",
    "quiz_q1_a2": "समस्याओं को हल करने के लिए बड़ा दिमाग!",
    "quiz_q1_a3": "दोस्तों को हंसाना!",
    "quiz_q1_a4": "प्यारा और चतुर होना!",
    
    "quiz_q2": "तुम्हें सबसे ज्यादा क्या पसंद है?",
    "quiz_q2_a1": "अपने दोस्तों के लिए लड़ना!",
    "quiz_q2_a2": "नई चीजें सीखना!",
    "quiz_q2_a3": "रोमांच पर जाना!",
    "quiz_q2_a4": "अपने दल के साथ घूमना!",
    
    "quiz_q3": "तुम चुनौतियों का सामना कैसे करते हो?",
    "quiz_q3_a1": "शक्ति से सीधा सामना करो!",
    "quiz_q3_a2": "सोचो और समाधान खोजो!",
    "quiz_q3_a3": "इसे हल करने का मजेदार तरीका खोजो!",
    "quiz_q3_a4": "दोस्तों से मदद माँगो!",
    
    "quiz_q4": "तुम्हारा पसंदीदा भोजन है:",
    "quiz_q4_a1": "ऊर्जा से भरपूर और भरा हुआ!",
    "quiz_q4_a2": "दिमाग को बढ़ावा देने वाला और पौष्टिक!",
    "quiz_q4_a3": "मजेदार और स्वादिष्ट सब कुछ!",
    "quiz_q4_a4": "कुछ भी स्वादिष्ट मेरे लिए काम करता है!",
    
    "quiz_q5": "तुम किसके लिए जाना जाना चाहते हो?",
    "quiz_q5_a1": "साहसी और मजबूत होना!",
    "quiz_q5_a2": "स्मार्ट और चतुर होना!",
    "quiz_q5_a3": "हमेशा लोगों को मुस्कुराना!",
    "quiz_q5_a4": "एक बड़ा दोस्त होना!",
    
    // Character Results (Hindi)
    "bheem_name": "छोटा भीम 💪",
    "bheem_result": "आप साहसी, मजबूत हैं, और हमेशा अपने दोस्तों की मदद के लिए तैयार हैं! छोटे भीम की तरह, आपका दिल बड़ा है और आप उन लोगों की रक्षा करना पसंद करते हैं जिनकी आप परवाह करते हैं। आप एक प्राकृतिक नेता हैं!",
    
    "auggie_name": "ओगी 🧠",
    "auggie_result": "आप स्मार्ट, उत्सुक हैं, और रहस्यों को हल करना पसंद करते हैं! ओगी की तरह, आप हमेशा कार्य करने से पहले सोचते हैं और बहुत अच्छे विचार रखते हैं। आपका दिमाग आपकी सुपरपावर है!",
    
    "motu_name": "मोटू पतलू 🚂",
    "motu_result": "आप मजेदार, साहसिक हैं, और अगली बड़ी रोमांच के लिए तैयार हैं! मोटू और पतलू की तरह, आप सब कुछ उत्तेजनापूर्ण बनाते हैं और नई चीजें आजमाना पसंद करते हैं!",
    
    "cockroach_name": "कॉकरोच स्क्वाड 🦗",
    "cockroach_result": "आप प्यारे, चतुर, और एक शानदार दोस्त हैं! चेस्टर, रोच और ग्रब की तरह, आप जानते हैं कि टीमवर्क स्वप्न को सच करता है। आप और आपका दल अदम्य हैं!",
    
    // About Page
    "about_title": "टिफिन पैक्स के बारे में",
    "about_subtitle": "हम बच्चों के स्नैकिंग के लिए एक बेहतर भविष्य बना रहे हैं—एक सस्ती, पौष्टिक, सांस्कृतिक रूप से समावेशी पैक एक समय में।",
    "our_mission_heading": "हमारा मिशन",
    "mission_text": "पौष्टिक, सस्ती, स्वादिष्ट स्नैक पैक बनाना जो बच्चों को पसंद हैं और माता-पिता पर विश्वास करते हैं। हम असली भारतीय सामग्री का उपयोग करते हैं, कोई कृत्रिम कचरा नहीं, और हर परिवार की आहार संबंधी प्राथमिकताओं का सम्मान करते हैं।",
    "who_we_serve": "हम किसे सेवा देते हैं",
    "who_we_serve_text": "भारत भर के परिवार जो चाहते हैं कि उनके बच्चे स्मार्ट स्नैक करें। मां-बाप जो काम करते हैं, स्कूल में बच्चे, शिक्षक जो दोपहर के स्नैक्स ढूंढ रहे हैं, वंचित बच्चों को सेवा देने वाले एनजीओ—सभी।",
    "serve_families": "कम आय वाले परिवार",
    "serve_families_text": "कई नौकरी में काम करने वाले माता-पिता सस्ती स्नैक्स के लायक हैं जिनके बारे में वे अच्छा महसूस कर सकें। हर टिफिन पैक $5 से कम है क्योंकि हम आपके बजट का सम्मान करते हैं।",
    "serve_kids": "बढ़ते बच्चे",
    "serve_kids_text": "बच्चों को प्रोटीन, फाइबर और पोषक तत्वों की जरूरत है—चीनी, कृत्रिम रंगों या रहस्यमय सामग्री नहीं। हमारे पैक स्वस्थ, खुशहाल विकास के लिए डिज़ाइन किए गए हैं।",
    "serve_conscious": "सांस्कृतिक रूप से सचेत माता-पिता",
    "serve_conscious_text": "चाहे शाकाहारी हों, हलाल हों या बस पारंपरिक मूल्यों के प्रति सम्मानजनक हों, हम आहार और धार्मिक विकल्पों का सम्मान करते हैं। भोजन संस्कृति है।",
    "serve_schools": "स्कूल और सामुदायिक कार्यक्रम",
    "serve_schools_text": "हम पौष्टिक स्नैकिंग प्रदान करने के लिए स्कूलों और एनजीओ के साथ साझेदारी करते हैं। बल्क छूट उपलब्ध है।",
    "build_trust": "हम विश्वास कैसे बनाते हैं",
    "clear_labeling": "स्पष्ट लेबलिंग",
    "clear_labeling_text": "कोई रहस्यमय सामग्री नहीं। हर पैक में ठीक से लिखा होता है कि अंदर क्या है—ऐसे नाम जो आप जानते हैं, रहस्यमय ई-नंबर या 'प्राकृतिक स्वाद' नहीं।",
    "nutrition_transparency": "पोषण पारदर्शिता",
    "nutrition_transparency_text": "हर पैक पर पोषण तथ्य और मुख्य लाभ (प्रोटीन, फाइबर, विटामिन)। हम यह हाइलाइट करते हैं कि प्रत्येक टिफिन पैक क्या विशेष बनाता है।",
    "dietary_respect": "आहार संबंधी सम्मान",
    "dietary_respect_text": "शाकाहारी और हलाल बैज़ मार्केटिंग नहीं हैं—वे प्रतिबद्धताएं हैं। हम धार्मिक और नैतिक आहार विकल्पों का सम्मान करते हैं क्योंकि भोजन पहचान है, केवल कैलोरी नहीं।",
    "community_accountability": "सामुदायिक जवाबदेही",
    "community_accountability_text": "हम स्कूलों और एनजीओ के साथ भागीदारी करते हैं। हम कॉर्पोरेट परतों के पीछे नहीं छुप रहे हैं—हम दृश्यमान, सुलभ और उन समुदायों के लिए जवाबदेह हैं जिनकी हम सेवा करते हैं।",
    "packaged_healthy_title": "पैकेज्ड लेकिन स्वस्थ क्यों?",
    "packaged_healthy_text": "कई माता-पिता को पैकेज्ड स्नैक्स के बारे में दोषी महसूस होता है। लेकिन व्यस्त परिवारों को समाधान चाहिए। हम इस अंतर को भरते हैं पूर्व-भाग, सस्ती पैक के साथ जो आप घर में बनाते हैं। यह ताज़े भोजन को बदलने के बारे में नहीं है—यह उन माता-पिता का समर्थन करने के बारे में है जिन्हें बजट-अनुकूल, स्वस्थ शॉर्टकट की आवश्यकता है।",
    "partnerships_title": "हमारी साझेदारी",
    "partnerships_text": "हम सामग्री के लिए स्थानीय खेतों के साथ काम करते हैं, वंचित बच्चों को वितरित करने के लिए एनजीओ के साथ, और यह जानने के लिए स्कूलों के साथ कि बच्चे वास्तव में क्या खाना पसंद करते हैं।",
  }
};

// Current language state
let currentLanguage = localStorage.getItem('tiffin_language') || 'en';

// Function to get translated text
function t(key) {
  return translations[currentLanguage][key] || translations['en'][key] || key;
}

// Function to set language
function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('tiffin_language', lang);
  updatePageLanguage();
}

// Function to update all text on page
function updatePageLanguage() {
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    elem.textContent = t(key);
  });
  
  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(elem => {
    const key = elem.getAttribute('data-i18n-placeholder');
    elem.placeholder = t(key);
  });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
  updatePageLanguage();
});
