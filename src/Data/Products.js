const products = [
  {
    id: 1,
    productName: "iPhone 13",
    category: "Phones",
    price: 999,
    rating: 4.7,
    imageUrl:
      "https://images.unsplash.com/photo-1639769167793-f046c9351f4f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "The latest iPhone with advanced features.",
    favorite: false,
    brand: {
      id: 1,
      name: "Apple",
      country: "United States",
    },
  },
  {
    id: 2,
    productName: "Samsung Galaxy S21",
    category: "Phones",
    price: 899,
    rating: 4.6,
    imageUrl:
      "https://images.unsplash.com/photo-1610792516820-2bff50c652a2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Powerful Android phone with stunning display.",
    favorite: true,
    brand: {
      id: 2,
      name: "Samsung",
      country: "South Korea",
    },
  },
  {
    id: 3,
    productName: "MacBook Pro",
    category: "Laptops",
    price: 1999,
    rating: 4.8,
    imageUrl:
      "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "High-performance laptop for professionals.",
    favorite: true,
    brand: {
      id: 3,
      name: "Apple",
      country: "United States",
    },
  },
  {
    id: 4,
    productName: "Dell XPS 13",
    category: "Laptops",
    price: 1499,
    rating: 4.5,
    imageUrl:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Sleek and powerful laptop with a stunning display.",
    favorite: false,
    brand: {
      id: 4,
      name: "Dell",
      country: "United States",
    },
  },
  {
    id: 5,
    productName: "Apple Watch Series 6",
    category: "Watches",
    price: 399,
    rating: 4.9,
    imageUrl:
      "https://images.unsplash.com/photo-1636569713946-cd687486f6b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Advanced smartwatch with fitness tracking.",
    favorite: true,
    brand: {
      id: 1,
      name: "Apple",
      country: "United States",
    },
  },
  {
    id: 6,
    productName: "Garmin Forerunner 245",
    category: "Watches",
    price: 299,
    rating: 4.7,
    imageUrl:
      "https://images.unsplash.com/photo-1703316805113-8e5e2d134b2f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "GPS running watch with advanced performance metrics.",
    favorite: false,
    brand: {
      id: 5,
      name: "Garmin",
      country: "United States",
    },
  },
  {
    id: 7,
    productName: "Nike Air Zoom Pegasus 38",
    category: "Sports",
    price: 120,
    rating: 4.6,
    imageUrl:
      "https://images.unsplash.com/photo-1631883556250-d1858ce1d444?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Comfortable and responsive running shoes.",
    favorite: true,
    brand: {
      id: 6,
      name: "Nike",
      country: "United States",
    },
  },
  {
    id: 8,
    productName: "Adidas Ultraboost 21",
    category: "Sports",
    price: 180,
    rating: 4.8,
    imageUrl:
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "High-performance shoes for running and training.",
    favorite: false,
    brand: {
      id: 7,
      name: "Adidas",
      country: "Germany",
    },
  },
  {
    id: 9,
    productName: "Samsung QLED 4K TV",
    category: "Electronics",
    price: 1299,
    rating: 4.7,
    imageUrl:
      "https://images.unsplash.com/photo-1574974409771-cebec54deb00?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Stunning 4K TV with vibrant colors and smart features.",
    favorite: false,
    brand: {
      id: 2,
      name: "Samsung",
      country: "South Korea",
    },
  },
  {
    id: 10,
    productName: "Sony PlayStation 5",
    category: "Gaming",
    price: 499,
    rating: 4.9,
    imageUrl:
      "https://images.unsplash.com/photo-1668705606819-24f3ba43eefe?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Next-generation gaming console with immersive experiences.",
    favorite: true,
    brand: {
      id: 8,
      name: "Sony",
      country: "Japan",
    },
  },
  {
    id: 11,
    productName: "Google Pixel 6",
    category: "Phones",
    price: 799,
    rating: 4.7,
    imageUrl:
      "https://images.unsplash.com/photo-1721864428881-dbabb9ea0017?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Smartphone with an exceptional camera and pure Android experience.",
    favorite: true,
    brand: {
      id: 9,
      name: "Google",
      country: "United States",
    },
  },
  {
    id: 12,
    productName: "HP Spectre x360",
    category: "Laptops",
    price: 1599,
    rating: 4.6,
    imageUrl:
      "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Convertible laptop with powerful performance and stunning design.",
    favorite: false,
    brand: {
      id: 10,
      name: "HP",
      country: "United States",
    },
  },
  {
    id: 13,
    productName: "Rolex Submariner",
    category: "Watches",
    price: 9500,
    rating: 4.9,
    imageUrl:
      "https://images.unsplash.com/photo-1639006570490-79c0c53f1080?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Iconic luxury watch for diving enthusiasts.",
    favorite: true,
    brand: {
      id: 11,
      name: "Rolex",
      country: "Switzerland",
    },
  },
  {
    id: 14,
    productName: "Fitbit Charge 4",
    category: "Watches",
    price: 149,
    rating: 4.4,
    imageUrl:
      "https://images.unsplash.com/photo-1718309602791-8f3cc83840b7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Fitness tracker with built-in GPS and heart rate monitor.",
    favorite: false,
    brand: {
      id: 12,
      name: "Fitbit",
      country: "United States",
    },
  },
  {
    id: 15,
    productName: "Wilson Evolution Basketball",
    category: "Sports",
    price: 59,
    rating: 4.8,
    imageUrl:
      "https://images.unsplash.com/photo-1587906106416-0bdf2e7fe7c2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Official game basketball with exceptional grip and durability.",
    favorite: true,
    brand: {
      id: 13,
      name: "Wilson",
      country: "United States",
    },
  },
  {
    id: 16,
    productName: "Sony WH-1000XM4",
    category: "Electronics",
    price: 349,
    rating: 4.9,
    imageUrl:
      "https://images.unsplash.com/photo-1614860243518-c12eb2fdf66c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Premium wireless noise-canceling headphones with exceptional sound quality.",
    favorite: true,
    brand: {
      id: 8,
      name: "Sony",
      country: "Japan",
    },
  },
  {
    id: 17,
    productName: "Nintendo Switch",
    category: "Gaming",
    price: 299,
    rating: 4.7,
    imageUrl:
      "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Versatile gaming console for handheld and TV play.",
    favorite: false,
    brand: {
      id: 14,
      name: "Nintendo",
      country: "Japan",
    },
  },
  {
    id: 18,
    productName: "LG OLED 4K TV",
    category: "Electronics",
    price: 1899,
    rating: 4.8,
    imageUrl:
      "https://images.unsplash.com/photo-1701318134576-6100f43c8531?q=80&w=1518&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Premium 4K TV with OLED technology for stunning picture quality.",
    favorite: false,
    brand: {
      id: 15,
      name: "LG",
      country: "South Korea",
    },
  },
  {
    id: 19,
    productName: "Reebok Nano X1",
    category: "Sports",
    price: 130,
    rating: 4.6,
    imageUrl:
      "https://images.unsplash.com/photo-1695459590088-d6fd3cc97cfa?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Cross-training shoes with enhanced stability and comfort.",
    favorite: true,
    brand: {
      id: 16,
      name: "Reebok",
      country: "United States",
    },
  },
  {
    id: 20,
    productName: "ASUS ROG Zephyrus G14",
    category: "Laptops",
    price: 1499,
    rating: 4.7,
    imageUrl:
      "https://images.unsplash.com/photo-1654119895136-6aad918f412c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Powerful gaming laptop with a compact design and high-refresh-rate display.",
    favorite: false,
    brand: {
      id: 17,
      name: "ASUS",
      country: "Taiwan",
    },
  },
  // Add more product objects as needed
];

export default products;
