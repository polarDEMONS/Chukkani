export interface Book {
  id: string;
  title: string;
  author: string;
  rating: number;
  ratingCount: number;
  coverImage: string;
  description: string;
  year: number;
  genre: string[];
  isbn: string;
}

export const mockTeluguBooks: Book[] = [
  {
    id: "1",
    title: "వేయి పడగలు",
    author: "విశ్వనాథ సత్యనారాయణ",
    rating: 4.7,
    ratingCount: 1523,
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
    description: "జ్ఞానపీఠ పురస్కారం పొందిన అద్భుతమైన తెలుగు నవల. చారిత్రక నేపథ్యంలో రచించబడిన ఈ కథ తెలుగు సాహిత్యంలో ఒక మైలురాయి.",
    year: 1951,
    genre: ["Fiction", "Historical", "Classic"],
    isbn: "978-8171820"  },
  {
    id: "2",
    title: "మల్లమ్మ",
    author: "బ్రహ్మశ్రీ చాగంటి కోటేశ్వర రావు",
    rating: 4.8,
    ratingCount: 2134,
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
    description: "ఆధ్యాత్మిక సంస్కరణ గురించి చెప్పే అద్భుతమైన కథ. మల్లమ్మ పాత్ర ద్వారా మనం జీవిత విలువలను నేర్చుకుంటాం.",
    year: 1992,
    genre: ["Spiritual", "Fiction"],
    isbn: "978-8172231"
  },
  {
    id: "3",
    title: "కందుకూరి వీరేశలింగం",
    author: "సంజీవరావు",
    rating: 4.6,
    ratingCount: 890,
    coverImage: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400",
    description: "తెలుగు నవజాగరణ కర్త కందుకూరి వీరేశలింగం పంతులు గారి జీవిత చరిత్ర. సామాజిక సంస్కరణల గురించి అద్భుతమైన వివరణ.",
    year: 1985,
    genre: ["Biography", "History"],
    isbn: "978-8172245"
  },
  {
    id: "4",
    title: "రంగనాయకమ్మ",
    author: "మునిమాణిక్యం నరసింహ రావు",
    rating: 4.5,
    ratingCount: 756,
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400",
    description: "వివాహం, కుటుంబం మరియు సామాజిక బాధ్యతల గురించి చెప్పే శక్తివంతమైన నవల.",
    year: 1905,
    genre: ["Fiction", "Social", "Classic"],
    isbn: "978-8172267"
  },
  {
    id: "5",
    title: "మహాప్రస్థానం",
    author: "శ్రీలక్ష్మీ శోభన",
    rating: 4.4,
    ratingCount: 634,
    coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "ఆధునిక జీవితంలో అంతర్గత శాంతి కోసం చేసే ప్రయాణం గురించిన కథ.",
    year: 1978,
    genre: ["Fiction", "Philosophy"],
    isbn: "978-8172289"
  }
];
