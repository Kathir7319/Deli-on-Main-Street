export const RESTAURANT_INFO = {
  name: "Deli on Main Street",
  tagline: "Downtown Fuquay-Varina, NC",
  subheading: "Fresh Deli Sandwiches, Daily Soups, and Family Dinners-to-Go—Crafted Daily at Deli on Main Street in Downtown Fuquay-Varina.",
  address: "604 N Main St",
  city: "Fuquay-Varina",
  state: "NC",
  zip: "27526",
  district: "Historic Downtown Fuquay-Varina",
  phone: "(919) 346-1060",
  phoneDisplay: "(919) 346-1060",
  email: "hello@delionmainstreet.com",
  cateringEmail: "catering@delionmainstreet.com",
  googleMapsUrl: "https://share.google/YL28BXXcrL96BPrb4",
  rating: 4.3,
  reviewCount: 234,
  hours: {
    weekday: "Monday – Saturday: 10:30 AM – 7:30 PM",
    sunday: "Sunday: Closed (Weekly Pre-Orders Cutoff at 5:00 PM)",
    schedule: [
      { day: "Monday", hours: "10:30 AM – 7:30 PM", isOpen: true },
      { day: "Tuesday", hours: "10:30 AM – 7:30 PM", isOpen: true, familyPickup: "Curbside Family Pickup (4:00 PM - 7:00 PM)" },
      { day: "Wednesday", hours: "10:30 AM – 7:30 PM", isOpen: true },
      { day: "Thursday", hours: "10:30 AM – 7:30 PM", isOpen: true, familyPickup: "Curbside Family Pickup (4:00 PM - 7:00 PM)" },
      { day: "Friday", hours: "10:30 AM – 7:30 PM", isOpen: true, popular: "Lunch Rush 11:30 - 1:30" },
      { day: "Saturday", hours: "10:30 AM – 7:30 PM", isOpen: true, popular: "Downtown Farmers Market Special" },
      { day: "Sunday", hours: "Closed (Online Pre-orders Due by 5 PM)", isOpen: false }
    ]
  },
  parkingGuide: {
    mainStreet: "Free parallel parking spots directly on 604 N Main Street in front of the deli (15-min and 2-hour slots).",
    depotStreet: "Large municipal public lot directly behind our building off Depot Street. Recommended for effortless pickup during peak lunch hours (11:30 AM – 1:30 PM) and Tuesday/Thursday family dinner curbside pickup."
  }
};

export const MENU_CATEGORIES = [
  { id: "sandwiches", name: "Signature Sandwiches", icon: "Sandwich", description: "Stacked high with premium house-cured meats & fresh artisanal bakery breads." },
  { id: "soups-bakery", name: "Daily Soups & Bakery", icon: "Soup", description: "Slow-simmered daily scratch soups and morning bakery fresh out of the hearth." },
  { id: "salads-sides", name: "Fresh Salads & Deli Sides", icon: "Salad", description: "Scratch-made sides, crisped kettle chips, and farm-fresh greens." },
  { id: "drinks", name: "Drinks & Craft Sodas", icon: "Coffee", description: "Southern sweet teas, local Carolina sodas, cold brews, and sparkling drinks." }
];

export const MENU_ITEMS = [
  {
    id: "MSC-01",
    squareId: "MSC-01",
    name: "The Main Street Club",
    category: "sandwiches",
    price: 13.95,
    tag: "Customer #1 Favorite",
    badgeColor: "bg-burgundy-700 text-white",
    description: "Smoked turkey breast, honey ham, crispy thick-cut hardwood bacon, sharp cheddar, fresh hydroponic lettuce, vine-ripe tomato, and house herb mayo on artisan fresh sourdough.",
    ingredients: ["Smoked turkey", "Honey ham", "Crispy bacon", "Sharp cheddar", "Hydroponic lettuce", "Vine tomato", "House herb mayo", "Fresh sourdough"],
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    dietary: ["house-favorite"],
    breadOptions: ["Fresh Sourdough", "Marbled Rye", "Brioche Roll", "Gluten-Free Bun (+$1.50)"],
    prepTime: "6-8 min"
  },
  {
    id: "DPS-02",
    squareId: "DPS-02",
    name: "Downtown Pastrami Special",
    category: "sandwiches",
    price: 14.95,
    tag: "Chef's Signature",
    badgeColor: "bg-amber-600 text-white",
    description: "12-day house-brined first-cut beef pastrami steamed warm, melted aged Swiss, tangy house-fermented sauerkraut, and spicy brown deli mustard on grilled marbled rye.",
    ingredients: ["First-cut beef pastrami", "Melted swiss cheese", "House sauerkraut", "Spicy brown deli mustard", "Grilled marbled rye"],
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    dietary: ["chef-choice", "house-favorite"],
    breadOptions: ["Marbled Rye", "Fresh Sourdough", "Ciabatta", "Gluten-Free Bun (+$1.50)"],
    prepTime: "7-9 min"
  },
  {
    id: "CST-03",
    squareId: "CST-03",
    name: "Carolina Smoked Turkey & Havarti",
    category: "sandwiches",
    price: 13.75,
    tag: "Popular",
    badgeColor: "bg-emerald-700 text-white",
    description: "Slow-smoked herb turkey breast, creamy Danish havarti, sliced avocado, tender baby spinach, pickled red onions, and sweet cranberry mustard on toasted multigrain loaf.",
    ingredients: ["Slow-smoked turkey", "Creamy havarti", "Fresh avocado", "Baby spinach", "Pickled red onions", "Cranberry mustard", "Toasted multigrain"],
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
    dietary: ["healthy-pick"],
    breadOptions: ["Toasted Multigrain", "Fresh Sourdough", "Marbled Rye", "Gluten-Free Bun (+$1.50)"],
    prepTime: "6-8 min"
  },
  {
    id: "FIG-04",
    squareId: "FIG-04",
    name: "The Fuquay Italian Grinder",
    category: "sandwiches",
    price: 14.50,
    tag: "Stacked High",
    badgeColor: "bg-red-800 text-white",
    description: "Thinly sliced Genoa salami, hot capicola, imported mortadella, aged provolone, shredded iceberg, heirloom tomato, hot pepper relish, and oregano red wine vinaigrette on an artisan hoagie roll.",
    ingredients: ["Genoa salami", "Hot capicola", "Mortadella", "Aged provolone", "Shredded iceberg", "Heirloom tomato", "Hot pepper relish", "Red wine vinaigrette"],
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80",
    dietary: ["house-favorite"],
    breadOptions: ["Artisan Hoagie Roll", "Toasted Ciabatta", "Sourdough"],
    prepTime: "6-8 min"
  },
  {
    id: "RVM-05",
    squareId: "RVM-05",
    name: "Herb Roasted Veggie Melt",
    category: "sandwiches",
    price: 12.50,
    tag: "Vegetarian",
    badgeColor: "bg-green-700 text-white",
    description: "Marinated grilled portobello mushrooms, fire-roasted sweet red peppers, shaved zucchini ribbons, fresh whole milk mozzarella, and scratch basil pesto aioli pressed warm on rosemary ciabatta.",
    ingredients: ["Grilled portobello", "Roasted red peppers", "Zucchini ribbons", "Fresh mozzarella", "Basil pesto aioli", "Rosemary ciabatta"],
    image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=800&q=80",
    dietary: ["vegetarian", "healthy-pick"],
    breadOptions: ["Rosemary Ciabatta", "Fresh Sourdough", "Gluten-Free Bun (+$1.50)"],
    prepTime: "8-10 min"
  },
  {
    id: "RBD-06",
    squareId: "RBD-06",
    name: "Roast Beef & Sharp Cheddar Dip",
    category: "sandwiches",
    price: 15.25,
    tag: "Warm & Hearty",
    badgeColor: "bg-charcoal-700 text-white",
    description: "Tender medium-rare roast beef carved thin, melted sharp Wisconsin white cheddar, caramelized sweet onions, and creamy horseradish spread on a crusty French roll with hot rosemary au jus for dipping.",
    ingredients: ["Tender roast beef", "Wisconsin white cheddar", "Caramelized onions", "Horseradish spread", "French roll", "Hot rosemary au jus"],
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=800&q=80",
    dietary: ["house-favorite"],
    breadOptions: ["Crusty French Roll", "Sourdough", "Marbled Rye"],
    prepTime: "8-10 min"
  },

  // Soups & Bakery
  {
    id: "SOUP-TB",
    squareId: "SP-01",
    name: "Creamy Tomato Basil Soup",
    category: "soups-bakery",
    price: 7.25,
    tag: "Mon & Wed Special",
    badgeColor: "bg-red-700 text-white",
    description: "Vine-ripened summer tomatoes, heavy sweet cream, fresh sweet basil, garlic confit, and shaved parmesan. Served with a warm house-baked yeast roll.",
    ingredients: ["San Marzano tomatoes", "Sweet cream", "Fresh basil", "Garlic confit", "Parmesan", "Warm roll"],
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    dietary: ["vegetarian"],
    scheduleDays: ["Monday", "Wednesday"],
    prepTime: "Ready to serve"
  },
  {
    id: "SOUP-CN",
    squareId: "SP-02",
    name: "Hearty Chicken Noodle Soup",
    category: "soups-bakery",
    price: 7.50,
    tag: "Tue & Thu Special",
    badgeColor: "bg-amber-600 text-white",
    description: "Slow-simmered bone-broth soup with tender pulled roasted chicken, hand-rolled thick egg noodles, sweet carrots, celery, and fresh dill. Served with a warm roll.",
    ingredients: ["Roasted chicken", "Hand-rolled noodles", "Carrots", "Celery", "Fresh dill", "Rich chicken broth", "Warm roll"],
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    dietary: ["house-favorite"],
    scheduleDays: ["Tuesday", "Thursday"],
    prepTime: "Ready to serve"
  },
  {
    id: "SOUP-CC",
    squareId: "SP-03",
    name: "Chef's Choice: Fuquay Potato & Bacon Chowder",
    category: "soups-bakery",
    price: 7.95,
    tag: "Fri & Sat Special",
    badgeColor: "bg-charcoal-800 text-white",
    description: "Velvety chowder with cubed Carolina russet potatoes, hardwood smoked bacon lardoons, sharp aged cheddar, and fresh green scallions. Served with a warm roll.",
    ingredients: ["Russet potatoes", "Smoked bacon", "Sharp cheddar", "Sweet scallions", "Rich cream", "Warm roll"],
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    dietary: ["chef-choice"],
    scheduleDays: ["Friday", "Saturday"],
    prepTime: "Ready to serve"
  },
  {
    id: "BAK-CC",
    squareId: "BK-01",
    name: "House-Baked Chocolate Chip Cookie",
    category: "soups-bakery",
    price: 3.25,
    tag: "Baked Fresh Daily",
    badgeColor: "bg-burgundy-700 text-white",
    description: "Brown butter dough, French dark chocolate disks, gooey center, and a delicate pinch of Maldon sea salt flakes. Baked every morning at 6:00 AM.",
    ingredients: ["Brown butter", "Guittard dark chocolate", "Cage-free eggs", "Maldon sea salt"],
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
    dietary: ["vegetarian", "house-favorite"],
    prepTime: "Fresh daily"
  },
  {
    id: "BAK-SC",
    squareId: "BK-02",
    name: "Seasonal Fruit & Cream Scone",
    category: "soups-bakery",
    price: 3.95,
    tag: "Morning Hearth",
    badgeColor: "bg-amber-700 text-white",
    description: "Tender, flaky buttermilk scone folded with seasonal Carolina blueberries or blackberries and finished with a citrus sugar drizzle.",
    ingredients: ["Organic blueberries", "Buttermilk", "Vanilla bean glaze"],
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80",
    dietary: ["vegetarian"],
    prepTime: "Fresh daily"
  },
  {
    id: "BAK-FB",
    squareId: "BK-03",
    name: "Oversized Belgian Fudge Brownie",
    category: "soups-bakery",
    price: 4.25,
    tag: "Decadent",
    badgeColor: "bg-charcoal-700 text-white",
    description: "Deep, dense chocolate brownie loaded with chunks of dark and milk chocolate and baked with a crinkly glossy crust.",
    ingredients: ["Belgian cocoa", "Dark chocolate chunks", "Pure butter", "Cane sugar"],
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    dietary: ["vegetarian"],
    prepTime: "Fresh daily"
  },

  // Salads & Sides
  {
    id: "SD-PS",
    squareId: "SD-01",
    name: "Southern Red Bliss Potato Salad",
    category: "salads-sides",
    price: 4.50,
    tag: "Deli Classic",
    badgeColor: "bg-charcoal-600 text-white",
    description: "Red skin potatoes tossed in our creamy stone-ground mustard dressing, crunchy celery, green onion, and seasoned hard-boiled eggs.",
    ingredients: ["Red bliss potatoes", "Stone-ground mustard", "Celery", "Green onion", "Hard-boiled eggs"],
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    dietary: ["vegetarian", "gluten-free-friendly"],
    prepTime: "Side"
  },
  {
    id: "SD-CS",
    squareId: "SD-02",
    name: "Downtown Fuquay Chop Salad",
    category: "salads-sides",
    price: 11.25,
    tag: "Farm Fresh",
    badgeColor: "bg-green-700 text-white",
    description: "Crisp romaine, radicchio, marinated chickpeas, English cucumber, heirloom grape tomatoes, shaved pecorino, and house herb vinaigrette.",
    ingredients: ["Romaine", "Radicchio", "Chickpeas", "Cucumber", "Heirloom tomatoes", "Pecorino", "Herb vinaigrette"],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    dietary: ["vegetarian", "gluten-free-friendly", "healthy-pick"],
    prepTime: "5 min"
  },
  {
    id: "SD-KC",
    squareId: "SD-03",
    name: "Artisan Kettle Cooked Chips",
    category: "salads-sides",
    price: 2.50,
    tag: "Crispy",
    badgeColor: "bg-amber-600 text-white",
    description: "Golden small-batch kettle chips cooked in peanut oil with sea salt or Carolina BBQ dusting.",
    ingredients: ["Potatoes", "Peanut oil", "Sea salt"],
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=80",
    dietary: ["vegetarian", "gluten-free-friendly"],
    prepTime: "Side"
  },

  // Drinks
  {
    id: "DR-CW",
    squareId: "DR-01",
    name: "North Carolina Bottled Cheerwine",
    category: "drinks",
    price: 3.00,
    tag: "Carolina Icon",
    badgeColor: "bg-burgundy-700 text-white",
    description: "Classic Salisbury, NC cherry soda crafted with real cane sugar in an authentic retro glass bottle.",
    ingredients: ["Glass bottle Cheerwine", "Cane sugar"],
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80",
    dietary: ["local-favorite"],
    prepTime: "Chilled bottle"
  },
  {
    id: "DR-ST",
    squareId: "DR-02",
    name: "Southern Sweet Tea (32 oz)",
    category: "drinks",
    price: 2.95,
    tag: "Brewed Fresh",
    badgeColor: "bg-amber-700 text-white",
    description: "Brewed fresh multiple times a day with orange pekoe tea leaves, pure cane sugar, and served ice-cold with fresh lemon wedges.",
    ingredients: ["Orange pekoe black tea", "Pure cane sugar", "Lemon wedge"],
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
    dietary: ["house-favorite"],
    prepTime: "Cold cup"
  },
  {
    id: "DR-LM",
    squareId: "DR-03",
    name: "Fresh Hand-Squeezed Mint Lemonade",
    category: "drinks",
    price: 3.50,
    tag: "Hand-Crafted",
    badgeColor: "bg-yellow-600 text-white",
    description: "Freshly squeezed Meyer lemons, filtered water, organic cane sugar, and bruised fresh garden mint leaves.",
    ingredients: ["Meyer lemons", "Cane sugar", "Garden mint"],
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    dietary: ["vegetarian"],
    prepTime: "Cold cup"
  }
];

export const WEEKLY_FAMILY_DINNERS = [
  {
    id: "FAM-01",
    squareId: "FAM-DIN-LAS",
    title: "Traditional Slow-Roasted Lasagna Family Dinner",
    serves: "Serves 4 to 6 people",
    price: 58.00,
    badge: "Most Popular Weeknight Special",
    tagline: "Hearty Italian Comfort with Handcrafted Ricotta & Fresh Marinara",
    description: "Take the stress out of weeknight cooking. Multi-layered artisan lasagna with sweet Italian sausage, lean ground chuck, whole milk ricotta, san marzano tomato marinara, and blanketed in golden melted mozzarella. Fully cooked with simple 25-minute reheat instructions.",
    sides: [
      "Roasted Garlic Green Beans with sea salt & lemon zest",
      "Crispy Rosemary Red Potatoes roasted in olive oil",
      "Large Garden Salad with cucumbers, tomatoes & house Italian herb dressing",
      "Half Dozen (6) Fresh Hearth-Baked Soft Yeast Rolls with honey butter"
    ],
    heatingInstructions: "Preheat oven to 375°F. Remove lid, tent with foil, and bake for 25 minutes until bubbling. Rest 5 minutes before serving.",
    pickupDays: ["Tuesday Afternoon (4:00 - 7:00 PM)", "Thursday Afternoon (4:00 - 7:00 PM)"],
    cutoffNote: "Pre-orders strictly close Sunday at 5:00 PM.",
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "FAM-02",
    squareId: "FAM-DIN-PRK",
    title: "Brown Sugar Glazed Pork Tenderloin Family Dinner",
    serves: "Serves 4 to 6 people",
    price: 62.00,
    badge: "Carolina Signature",
    tagline: "Local Carolina Pork Tenderloin with Cider-Brown Sugar Reduction",
    description: "Chef-seared and slow-roasted Carolina pork tenderloin medallions drizzled with an apple cider, brown sugar, and rosemary pan reduction. Tender, juicy, and paired with scratch-made sides that the whole family loves.",
    sides: [
      "Roasted Garlic Green Beans with sea salt & lemon zest",
      "Crispy Rosemary Red Potatoes roasted in olive oil",
      "Large Garden Salad with cucumbers, tomatoes & house vinaigrette",
      "Half Dozen (6) Fresh Hearth-Baked Soft Yeast Rolls with honey butter"
    ],
    heatingInstructions: "Preheat oven to 350°F. Warm tenderloin in covered pan for 15 minutes. Spoon warm glaze over top and serve.",
    pickupDays: ["Tuesday Afternoon (4:00 - 7:00 PM)", "Thursday Afternoon (4:00 - 7:00 PM)"],
    cutoffNote: "Pre-orders strictly close Sunday at 5:00 PM.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80"
  }
];

export const CATERING_PACKAGES = [
  {
    id: "pkg-platters",
    name: "Signature Sandwich Tray Assortment",
    pricePerPerson: 16.50,
    minGuests: 10,
    highlight: "Best for Office Gatherings & Luncheons",
    description: "Generous assortment of our award-winning signature sandwiches cut into easy-to-grab portions (The Main Street Club, Pastrami Special, Smoked Turkey Havarti, Italian Grinder, and Veggie Melts).",
    includes: [
      "Assorted deli sandwiches cut into manageable thirds",
      "Choice of Southern Red Bliss Potato Salad OR Herb Pasta Salad",
      "Assorted individual bags of crunchy Kettle Cooked Chips",
      "Sweet Bakery Dessert Tray (Bite-sized fudge brownies, cookies & scones)",
      "Serving tongs, compostable plates, napkins, and cutlery packets"
    ]
  },
  {
    id: "pkg-boxes",
    name: "Individually Labeled Boxed Lunches",
    pricePerPerson: 18.00,
    minGuests: 10,
    highlight: "Ideal for Fuquay Schools, Seminars & Working Lunches",
    description: "Clean, individually labeled, tamper-evident kraft boxes featuring your guest's custom sandwich selection, packaged for grab-and-go speed with zero mess.",
    includes: [
      "Full signature artisan sandwich individually wrapped and labeled with guest name & dietary tags",
      "Individual bag of small-batch Kettle Cooked Chips",
      "Side portion of scratch-made potato salad or chilled pasta salad",
      "Fresh gourmet house-baked chocolate chip cookie",
      "Individually wrapped utensils, napkin, mint, and wet wipe"
    ]
  },
  {
    id: "pkg-hot-buffet",
    name: "Executive Hot Entrée Buffet",
    pricePerPerson: 22.50,
    minGuests: 15,
    highlight: "For Banquets, Corporate Receptions & Celebrations",
    description: "Full hot-pan chaffing presentation featuring our chef's signature family dinner entrées in banquet portions.",
    includes: [
      "Choice of Entrée: Slow-Roasted Lasagna OR Brown Sugar Glazed Pork Tenderloin",
      "Crispy Rosemary Red Potatoes & Roasted Garlic Green Beans",
      "Large Crisp Garden Chop Salad with dressings on the side",
      "Basket of warm yeast rolls with honey butter whipped spread",
      "Assorted dessert bars & cold beverages available as add-on"
    ]
  }
];

export const GOOGLE_REVIEWS_STATS = {
  overallRating: 4.3,
  totalReviews: 234,
  googleMapsUrl: "https://share.google/YL28BXXcrL96BPrb4",
  starDistribution: [
    { stars: 5, percentage: 76 },
    { stars: 4, percentage: 14 },
    { stars: 3, percentage: 4 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 4 }
  ],
  popularMentions: ["Huge Sandwiches", "Cannolis & Rainbow Cookies", "The Bengal", "Hot Honey Chicken", "Authentic NY Deli", "Fresh Scratch Meats"]
};

export const REVIEWS = [
  {
    name: "Heather Lynn",
    role: "Local Guide • 11 reviews",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "4 months ago",
    mealType: "Lunch ($10–20)",
    tag: "Verified Google Review",
    content: "After seeing people's reviews of this place, we tried it today. We bought 2 sandwiches which each came with our choice of macaroni salad or coleslaw and a pickle spear. Our sandwiches were fresh, delicious and they did not skimp on meat! The staff was super friendly too. We will definitely be back!",
    dishMention: "Sandwiches with Macaroni Salad & Coleslaw",
    source: "Google Maps"
  },
  {
    name: "Eric Wright",
    role: "Verified Customer",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "10 months ago",
    mealType: "Breakfast",
    tag: "Owner Responded",
    content: "Had an awesome breakfast bagel this morning and the service was amazing. The girl who took my order seems really good at her job.",
    ownerResponse: "Thank you so much! We're thrilled you enjoyed the breakfast bagel—and we love hearing that our team made your morning even better. We'll be sure to pass along the compliment to her. Hope to see you again soon!",
    dishMention: "Fresh Breakfast Bagel",
    source: "Google Maps"
  },
  {
    name: "Lex J",
    role: "Local Guide • 170 reviews • 1,438 photos",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "4 months ago",
    mealType: "Lunch ($10–20)",
    tag: "Top Contributor",
    content: "Oh my gosh! They've got the best NY sandwiches! Between their cannolis and their rainbow cookies, you can't eat just one. I wish I had room for the pistachio muffin but those sandwiches are no joke! They've got weight to them and don't try to skimp. Real authentic NY deli feel in Fuquay-Varina.",
    dishMention: "Cannolis, Rainbow Cookies & NY Sandwiches",
    source: "Google Maps"
  },
  {
    name: "Kyle Oppenheim",
    role: "Local Guide • 131 reviews • 21 photos",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "2 months ago",
    mealType: "Lunch",
    tag: "Owner Responded",
    content: "If you haven't been, get here as fast as you can! Highly recommend the special Hot Honey Chicken sandwich, this thing is an absolutely delicious BEAST! My photo doesn't do it justice as it was about as long as my forearm! Owner came out to chat, fantastic hospitality.",
    ownerResponse: "We greatly appreciate your positive feedback, Kyle. More importantly, it was great meeting you and chatting today. Hope to see you soon!….thank you!",
    dishMention: "Hot Honey Chicken Special",
    source: "Google Maps"
  },
  {
    name: "Tessa Renze",
    role: "Local Guide • 22 reviews • 51 photos",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "2 months ago",
    mealType: "Lunch",
    tag: "Verified Google Review",
    content: "Yummy food! Lots of sandwiches. Amazing desserts - apparently flown in from NY. The people were nice too. Not a ton of seating, but there are a couple of outdoor tables as well.",
    dishMention: "NY Flown-In Desserts & Stacked Sandwiches",
    source: "Google Maps"
  },
  {
    name: "Matt",
    role: "Local Guide • 27 reviews • 17 photos",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "1 month ago",
    mealType: "Lunch ($10–20)",
    tag: "Verified Google Review",
    content: "Just had The Bengal. Absolute fire 🔥 Amazing sandwich and was huge! Nice family owned shop - highly suggest stopping in!",
    dishMention: "The Bengal Sandwich",
    source: "Google Maps"
  },
  {
    name: "Chandler Meyer",
    role: "Local Guide • 13 reviews • 10 photos",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "4 months ago",
    mealType: "Dinner ($20–30)",
    tag: "Verified Google Review",
    content: "An amazing addition to Fuquay. We went in for the first time yesterday. The owner was super welcoming and you can tell he's passionate about his sandwiches. Ordered the chicken parm hero and the hot honey special. Both were incredible!",
    dishMention: "Chicken Parm Hero & Hot Honey Special",
    source: "Google Maps"
  },
  {
    name: "GeraldLaz38",
    role: "Local Guide • 121 reviews • 302 photos",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "9 months ago",
    mealType: "Lunch ($10–20)",
    tag: "Owner Responded",
    content: "Who says New Yorkers aren't nice? Very good experience with a friendly staff and excellent food. I arrived at 11:35 to beat the rush and I'm glad I did because it filled up quickly. Generous authentic portions and true pride in craft.",
    ownerResponse: "Thank you so much for the thoughtful review and kind words. We truly appreciate the feedback, especially as we continue working through the early growing pains of a new business. We’re glad you enjoyed the food, the staff, and the overall experience!",
    dishMention: "Authentic Deli Lunch & Warm Service",
    source: "Google Maps"
  },
  {
    name: "Christopher C",
    role: "Local Guide • 15 reviews • 6 photos",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "2 months ago",
    mealType: "Lunch ($10–20)",
    tag: "Verified Google Review",
    content: "I got the chicken cutlet hero with fresh mozzarella, roasted red peppers & balsamic glaze. Bread was perfect, chicken was crispy and tender, seasoned wonderfully. Definitely one of the best deli spots in the area.",
    dishMention: "Chicken Cutlet Hero with Mozzarella",
    source: "Google Maps"
  },
  {
    name: "Luke Kiper",
    role: "Local Guide • 17 reviews • 5 photos",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "4 months ago",
    mealType: "Casual Lunch",
    tag: "Verified Google Review",
    content: "Hi, how ya doinnn! Passed this place a million times and finally tried it complete hitter new fav deli in the area. Do not pass this place up its a hidden gem! Thanks for bringing high quality food to Fuquay!",
    dishMention: "Hidden Gem Deli Sandwiches",
    source: "Google Maps"
  },
  {
    name: "Jeremy B",
    role: "Local Guide • 58 reviews • 42 photos",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    rating: 4,
    date: "2 months ago",
    mealType: "Lunch ($20–30)",
    tag: "Verified Google Review",
    content: "Very nice establishment inside. Good sandwich shop vibes and you could tell the owners put some thought into it. Generous food portions for sure! Immediate leftovers to take home.",
    dishMention: "Italian Sub & Potato Salad",
    source: "Google Maps"
  }
];
