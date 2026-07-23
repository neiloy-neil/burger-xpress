export type Location = {
  id: string;
  name: string;
  address: string;
  area: string;
  phone: string;
  hours: string;
  mapUrl: string;
  foodpandaUrl?: string;
  munchiesUrl?: string;
  whatsappNumber: string;
};

export const LOCATIONS: Location[] = [
  {
    id: "dhanmondi",
    name: "Dhanmondi Branch",
    area: "Dhanmondi",
    address: "House 12, Road 4, Dhanmondi, Dhaka 1205",
    phone: "+880 1XXX-XXXXXX",
    hours: "12:00 PM – 11:00 PM",
    mapUrl: "https://maps.google.com/?q=Dhanmondi+Dhaka",
    foodpandaUrl: "https://www.foodpanda.com.bd",
    whatsappNumber: "8801XXXXXXXXX",
  },
  {
    id: "uttara",
    name: "Uttara Branch",
    area: "Uttara",
    address: "House 5, Sector 11, Uttara, Dhaka 1230",
    phone: "+880 1XXX-XXXXXX",
    hours: "12:00 PM – 11:00 PM",
    mapUrl: "https://maps.google.com/?q=Uttara+Dhaka",
    foodpandaUrl: "https://www.foodpanda.com.bd",
    whatsappNumber: "8801XXXXXXXXX",
  },
  {
    id: "mirpur",
    name: "Mirpur 10 Branch",
    area: "Mirpur",
    address: "Block C, Section 10, Mirpur, Dhaka 1216",
    phone: "+880 1XXX-XXXXXX",
    hours: "12:00 PM – 11:00 PM",
    mapUrl: "https://maps.google.com/?q=Mirpur+10+Dhaka",
    foodpandaUrl: "https://www.foodpanda.com.bd",
    whatsappNumber: "8801XXXXXXXXX",
  },
  {
    id: "baily-road",
    name: "Baily Road Branch",
    area: "Baily Road",
    address: "Baily Road, Ramna, Dhaka 1000",
    phone: "+880 1XXX-XXXXXX",
    hours: "12:00 PM – 11:30 PM",
    mapUrl: "https://maps.google.com/?q=Baily+Road+Dhaka",
    foodpandaUrl: "https://www.foodpanda.com.bd",
    whatsappNumber: "8801XXXXXXXXX",
  },
  {
    id: "banani",
    name: "Banani Branch",
    area: "Banani",
    address: "Road 11, Block F, Banani, Dhaka 1213",
    phone: "+880 1XXX-XXXXXX",
    hours: "12:00 PM – 12:00 AM",
    mapUrl: "https://maps.google.com/?q=Banani+Dhaka",
    foodpandaUrl: "https://www.foodpanda.com.bd",
    munchiesUrl: "https://www.munchies.com.bd",
    whatsappNumber: "8801XXXXXXXXX",
  },
  {
    id: "mohammadpur",
    name: "Mohammadpur Branch",
    area: "Mohammadpur",
    address: "Mohammadpur Housing Estate, Dhaka 1207",
    phone: "+880 1XXX-XXXXXX",
    hours: "12:00 PM – 11:00 PM",
    mapUrl: "https://maps.google.com/?q=Mohammadpur+Dhaka",
    whatsappNumber: "8801XXXXXXXXX",
  },
  {
    id: "badda",
    name: "Badda Branch",
    area: "Badda",
    address: "Gulshan Link Road, Badda, Dhaka 1212",
    phone: "+880 1XXX-XXXXXX",
    hours: "12:00 PM – 11:00 PM",
    mapUrl: "https://maps.google.com/?q=Badda+Dhaka",
    whatsappNumber: "8801XXXXXXXXX",
  },
];
