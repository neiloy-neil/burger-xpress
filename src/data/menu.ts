export type MenuItem = {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  popular?: boolean;
  image?: string;
};

export type Category =
  | "chicken-burger"
  | "beef-burger"
  | "chefs-choice"
  | "subway-sandwich"
  | "rice-bowl"
  | "chowmein"
  | "nachos"
  | "appetizers"
  | "meatbox";

export const CATEGORIES: { id: Category; label: string; emoji: string }[] = [
  { id: "chicken-burger", label: "Chicken Burger", emoji: "🍗" },
  { id: "beef-burger", label: "Beef Burger", emoji: "🥩" },
  { id: "chefs-choice", label: "Chef's Choice", emoji: "👨‍🍳" },
  { id: "subway-sandwich", label: "Subway & Sandwich", emoji: "🥪" },
  { id: "rice-bowl", label: "Rice Bowl", emoji: "🍚" },
  { id: "chowmein", label: "Chowmein", emoji: "🍜" },
  { id: "nachos", label: "Nachos", emoji: "🧀" },
  { id: "appetizers", label: "Appetizers", emoji: "🍟" },
  { id: "meatbox", label: "Meatbox", emoji: "📦" },
];

export const MENU_ITEMS: MenuItem[] = [
  // Chicken Burgers
  {
    id: "cb-1",
    name: "Chicken Cheese Burger",
    category: "chicken-burger",
    price: 199,
    description: "Juicy grilled chicken patty with melted cheese, lettuce, and our signature sauce.",
    popular: true,
  },
  {
    id: "cb-2",
    name: "Crispy Chicken Burger",
    category: "chicken-burger",
    price: 189,
    description: "Golden crispy chicken fillet with fresh vegetables and mayo.",
  },
  {
    id: "cb-3",
    name: "Spicy Chicken Burger",
    category: "chicken-burger",
    price: 199,
    description: "Extra-spicy marinated chicken with jalapeños and sriracha.",
  },
  {
    id: "cb-4",
    name: "Double Chicken Burger",
    category: "chicken-burger",
    price: 259,
    description: "Double the chicken, double the satisfaction — with double cheese.",
    popular: true,
  },
  {
    id: "cb-5",
    name: "Garlic Butter Chicken",
    category: "chicken-burger",
    price: 219,
    description: "Tender chicken glazed in garlic butter with crispy onion rings.",
  },
  {
    id: "cb-6",
    name: "BBQ Chicken Burger",
    category: "chicken-burger",
    price: 209,
    description: "Smoky BBQ sauce, caramelized onion, and crispy chicken.",
  },
  {
    id: "cb-7",
    name: "Zinger Chicken Burger",
    category: "chicken-burger",
    price: 179,
    description: "Classic zinger-style crispy chicken with coleslaw.",
  },

  // Beef Burgers
  {
    id: "bb-1",
    name: "Classic Beef Burger",
    category: "beef-burger",
    price: 279,
    description: "100% halal beef patty with fresh lettuce, tomato, onion, and special sauce.",
  },
  {
    id: "bb-2",
    name: "Beef Cheese Blast",
    category: "beef-burger",
    price: 319,
    description: "Beef patty loaded with triple cheese and caramelized onions.",
    popular: true,
  },
  {
    id: "bb-3",
    name: "Smoky Beef Burger",
    category: "beef-burger",
    price: 299,
    description: "Smoked beef patty with chipotle mayo and crispy bacon bits.",
  },
  {
    id: "bb-4",
    name: "Double Beef Burger",
    category: "beef-burger",
    price: 369,
    description: "Two juicy beef patties stacked with cheese and all the fixings.",
  },
  {
    id: "bb-5",
    name: "Mushroom Swiss Beef",
    category: "beef-burger",
    price: 339,
    description: "Sautéed mushrooms, Swiss cheese, and a perfectly seasoned beef patty.",
  },
  {
    id: "bb-6",
    name: "Jalapeño Beef Burger",
    category: "beef-burger",
    price: 309,
    description: "Spicy jalapeños and pepper jack cheese on a flame-grilled beef patty.",
  },
  {
    id: "bb-7",
    name: "BBQ Beef Burger",
    category: "beef-burger",
    price: 299,
    description: "Slow-cooked BBQ glaze, crispy onion straws, and aged cheddar.",
  },

  // Chef's Choice
  {
    id: "cc-1",
    name: "Signature Beef Boom Blast",
    category: "chefs-choice",
    price: 489,
    description: "Our flagship creation — double beef, triple cheese, caramelized onions, and a secret sauce.",
    popular: true,
  },
  {
    id: "cc-2",
    name: "Garlic Mushroom Burger",
    category: "chefs-choice",
    price: 369,
    description: "Roasted garlic aioli, sautéed mushrooms, and mozzarella on a brioche bun.",
    popular: true,
  },
  {
    id: "cc-3",
    name: "Truffle Chicken Special",
    category: "chefs-choice",
    price: 399,
    description: "Truffle oil-drizzled chicken with arugula and parmesan.",
  },
  {
    id: "cc-4",
    name: "The Tower Burger",
    category: "chefs-choice",
    price: 499,
    description: "Three-layer burger with chicken, beef, and all the toppings.",
  },
  {
    id: "cc-5",
    name: "Mango Habanero Chicken",
    category: "chefs-choice",
    price: 359,
    description: "Sweet mango glaze meets fiery habanero on crispy chicken.",
  },
  {
    id: "cc-6",
    name: "Smashed Beef Special",
    category: "chefs-choice",
    price: 419,
    description: "Thin-smashed patties with American cheese, pickles, and special XO sauce.",
  },
  {
    id: "cc-7",
    name: "Xpress Club Sandwich",
    category: "chefs-choice",
    price: 329,
    description: "Three-layer club with chicken, egg, bacon bits, and herbed mayo.",
  },
  {
    id: "cc-8",
    name: "Volcano Beef Burger",
    category: "chefs-choice",
    price: 449,
    description: "Nacho-crusted beef patty with lava cheese sauce and jalapeños.",
  },
  {
    id: "cc-9",
    name: "Mediterranean Chicken",
    category: "chefs-choice",
    price: 379,
    description: "Za'atar spiced chicken with tzatziki, cucumber, and feta.",
  },
  {
    id: "cc-10",
    name: "Chef's Daily Special",
    category: "chefs-choice",
    price: 459,
    description: "Ask your server — changes daily based on the freshest ingredients.",
  },

  // Subway & Sandwich
  {
    id: "ss-1",
    name: "Chicken Subway",
    category: "subway-sandwich",
    price: 219,
    description: "6-inch sub with grilled chicken, fresh veggies, and your choice of sauce.",
    popular: true,
  },
  {
    id: "ss-2",
    name: "Beef Subway",
    category: "subway-sandwich",
    price: 249,
    description: "6-inch sub with seasoned beef, lettuce, tomato, and onion.",
  },
  {
    id: "ss-3",
    name: "Tuna Sandwich",
    category: "subway-sandwich",
    price: 199,
    description: "Classic tuna with mayo, cucumber, and olives on toasted bread.",
  },
  {
    id: "ss-4",
    name: "Club Sandwich",
    category: "subway-sandwich",
    price: 229,
    description: "Triple-decker with chicken, egg, and fresh vegetables.",
  },
  {
    id: "ss-5",
    name: "Veggie Delight Sub",
    category: "subway-sandwich",
    price: 179,
    description: "Loaded with fresh veggies, cheese, and herbed sauce.",
  },

  // Rice Bowls
  {
    id: "rb-1",
    name: "Crispy Chicken Rice Bowl",
    category: "rice-bowl",
    price: 229,
    description: "Crispy chicken strips over steamed rice with teriyaki glaze.",
    popular: true,
  },
  {
    id: "rb-2",
    name: "Beef Rice Bowl",
    category: "rice-bowl",
    price: 269,
    description: "Tender beef pieces over fragrant rice with onion sauce.",
  },
  {
    id: "rb-3",
    name: "Spicy Chicken Rice",
    category: "rice-bowl",
    price: 239,
    description: "Szechuan-spiced chicken with steamed rice and pickled veggies.",
  },
  {
    id: "rb-4",
    name: "BBQ Chicken Rice Bowl",
    category: "rice-bowl",
    price: 249,
    description: "Smoky BBQ chicken thigh over garlic butter rice.",
  },
  {
    id: "rb-5",
    name: "Egg Fried Rice Chicken",
    category: "rice-bowl",
    price: 219,
    description: "Egg fried rice topped with soy-glazed chicken strips.",
  },
  {
    id: "rb-6",
    name: "Thai Basil Chicken Bowl",
    category: "rice-bowl",
    price: 259,
    description: "Wok-tossed chicken with Thai basil, chilies, and jasmine rice.",
  },
  {
    id: "rb-7",
    name: "Honey Garlic Beef Bowl",
    category: "rice-bowl",
    price: 279,
    description: "Tender beef strips in honey garlic sauce over steamed rice.",
  },
  {
    id: "rb-8",
    name: "Mixed Protein Bowl",
    category: "rice-bowl",
    price: 299,
    description: "Chicken and beef combo over rice with mixed sauce.",
  },
  {
    id: "rb-9",
    name: "Cheese Chicken Rice",
    category: "rice-bowl",
    price: 249,
    description: "Grilled chicken over rice smothered in molten cheese sauce.",
  },

  // Chowmein
  {
    id: "cm-1",
    name: "Chicken Chowmein",
    category: "chowmein",
    price: 199,
    description: "Wok-tossed noodles with tender chicken and fresh vegetables.",
    popular: true,
  },
  {
    id: "cm-2",
    name: "Beef Chowmein",
    category: "chowmein",
    price: 229,
    description: "Stir-fried egg noodles with seasoned beef and dark soy sauce.",
  },
  {
    id: "cm-3",
    name: "Spicy Chowmein",
    category: "chowmein",
    price: 209,
    description: "Fiery noodles with mixed protein and Szechuan peppercorns.",
  },
  {
    id: "cm-4",
    name: "Veggie Chowmein",
    category: "chowmein",
    price: 179,
    description: "Healthy stir-fried noodles with seasonal vegetables.",
  },

  // Nachos
  {
    id: "na-1",
    name: "Loaded Nachos",
    category: "nachos",
    price: 249,
    description: "Crispy tortilla chips loaded with cheese sauce, jalapeños, and sour cream.",
    popular: true,
  },
  {
    id: "na-2",
    name: "Chicken Nachos",
    category: "nachos",
    price: 279,
    description: "Nachos topped with spicy chicken, salsa, and melted cheese.",
  },
  {
    id: "na-3",
    name: "BBQ Beef Nachos",
    category: "nachos",
    price: 299,
    description: "Crispy chips with BBQ beef, pickled onions, and cheddar.",
  },
  {
    id: "na-4",
    name: "Classic Cheese Nachos",
    category: "nachos",
    price: 219,
    description: "Simple and satisfying — chips with golden cheese dip.",
  },

  // Appetizers
  {
    id: "ap-1",
    name: "Crispy Wedges",
    category: "appetizers",
    price: 119,
    description: "Seasoned potato wedges with dipping sauce.",
    popular: true,
  },
  {
    id: "ap-2",
    name: "Chicken Wings (6 pcs)",
    category: "appetizers",
    price: 249,
    description: "Saucy chicken wings in your choice of BBQ or buffalo.",
    popular: true,
  },
  {
    id: "ap-3",
    name: "Onion Rings",
    category: "appetizers",
    price: 139,
    description: "Golden battered onion rings with chipotle dip.",
  },
  {
    id: "ap-4",
    name: "Mozzarella Sticks",
    category: "appetizers",
    price: 189,
    description: "Crispy breaded mozzarella with marinara dipping sauce.",
  },
  {
    id: "ap-5",
    name: "Chicken Strips (4 pcs)",
    category: "appetizers",
    price: 219,
    description: "Crispy tenders with honey mustard.",
  },
  {
    id: "ap-6",
    name: "French Fries",
    category: "appetizers",
    price: 99,
    description: "Classic salted fries — the perfect sidekick.",
  },
  {
    id: "ap-7",
    name: "Loaded Fries",
    category: "appetizers",
    price: 169,
    description: "Fries topped with cheese sauce, jalapeños, and crispy bacon bits.",
  },

  // Meatbox
  {
    id: "mb-1",
    name: "Pro Meatbox",
    category: "meatbox",
    price: 523,
    description: "The ultimate feast — chicken burger, beef burger, wedges, wings, and a drink.",
    popular: true,
  },
];
