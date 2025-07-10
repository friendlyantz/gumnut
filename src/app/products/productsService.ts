export interface Product {
  id: string;
  title: string;
  titleRu: string;
  imgSrc: string;
  description: string;
  descriptionRu: string;
  price: number;
  category: string;
}

export class ProductsService {
  private products: Product[] = [
    {
      id: "1",
      title: "Neural Interface",
      titleRu: "НЕЙРОИНТЕРФЕЙС",
      // imgSrc: "/images/neural_interface.png",
      imgSrc: "/images/neural_interface_2.png",
      description: "Direct brain-computer interface for enhanced productivity",
      descriptionRu: "Прямой интерфейс мозг-компьютер для повышения продуктивности",
      price: 2999.99,
      category: "cybernetics",
    },
    {
      id: "2",
      title: "Quantum Processor",
      titleRu: "КВАНТОВЫЙ ПРОЦЕССОР",
      imgSrc: "/images/quantum_processor.png",
      description: "Next-gen quantum computing unit with infinite processing power",
      descriptionRu: "Квантовый вычислительный блок нового поколения с бесконечной мощностью",
      price: 4999.99,
      category: "hardware",
    },
    {
      id: "3",
      title: "Plasma Sword",
      titleRu: "ПЛАЗМЕННЫЙ МЕЧ",
      imgSrc: "/images/plasma_sword.png",
      description: "High-energy plasma blade for personal defense",
      descriptionRu: "Высокоэнергетическое плазменное лезвие для личной защиты",
      price: 1899.99,
      category: "weapons",
    },
    {
      id: "4",
      title: "Holographic Display",
      titleRu: "ГОЛОГРАФИЧЕСКИЙ ДИСПЛЕЙ",
      imgSrc: "/images/holographic_display.png",
      description: "3D holographic projection system with gesture control",
      descriptionRu: "Система 3D голографической проекции с жестовым управлением",
      price: 3499.99,
      category: "display",
    },
    {
      id: "5",
      title: "Cyber Arm",
      titleRu: "КИБЕР РУКА",
      imgSrc: "/images/cyber_arm.png",
      description: "Titanium cybernetic arm replacement with enhanced strength",
      descriptionRu: "Титановая кибернетическая замена руки с увеличенной силой",
      price: 8999.99,
      category: "cybernetics",
    },
    {
      id: "6",
      title: "Data Chip",
      titleRu: "ЧИП ДАННЫХ",
      imgSrc: "/images/data_chip.png",
      description: "Encrypted memory chip containing classified information",
      descriptionRu: "Зашифрованный чип памяти с секретной информацией",
      price: 599.99,
      category: "data",
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: string): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
