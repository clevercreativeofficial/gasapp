interface Props {
  id: number;
  name: string;
  price: number;
  images: string[];
  seller: string;
  place: string;
}

export const getProducts: Props[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 120,
    images: [
      "https://images.unsplash.com/photo-1585298723682-7115561c51b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    seller: "AudioTech Store",
    place: "New York, USA",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 850,
    images: [
      "https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1596896639823-da416a9d3960?q=80&w=684&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    seller: "TechWorld",
    place: "San Francisco, USA",
  },
  {
    id: 3,
    name: "Gaming Laptop",
    price: 1450,
    images: [
      "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1628115367019-607aedaee62a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    seller: "GameHub",
    place: "Berlin, Germany",
  },
  {
    id: 4,
    name: "Digital Camera",
    price: 600,
    images: [
      "https://images.unsplash.com/photo-1536632087471-3cf3f2986328?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1536632155857-9c7dba77c29d?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    seller: "PhotoPro",
    place: "London, UK",
  },
  {
    id: 5,
    name: "Smart Watch",
    price: 220,
    images: [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1549482199-bc1ca6f58502?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    seller: "GadgetHub",
    place: "Paris, France",
  },
  {
    id: 6,
    name: "4K TV",
    price: 950,
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1675752520719-80ea26a3fa8a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    seller: "VisionElectronics",
    place: "Rome, Italy",
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 80,
    images: [
      "https://images.unsplash.com/photo-1542193810-9007c21cd37e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1621266034770-74d35534f9ae?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    seller: "SoundWave",
    place: "Madrid, Spain",
  },
  {
    id: 8,
    name: "Mechanical Keyboard",
    price: 130,
    images: [
      "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1664699099313-77683fc43355?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    seller: "KeyMasters",
    place: "Tokyo, Japan",
  },
  {
    id: 9,
    name: "Drone",
    price: 700,
    images: [
      "https://images.unsplash.com/photo-1521405924368-64c5b84bec60?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1499708544652-0e4c43899071?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    seller: "SkyVision",
    place: "Sydney, Australia",
  },
  {
    id: 10,
    name: "Fitness Tracker",
    price: 150,
    images: [
      "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    seller: "FitLife",
    place: "Toronto, Canada",
  },
];
