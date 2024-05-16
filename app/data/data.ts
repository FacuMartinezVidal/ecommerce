interface Product {
    id: number;
    title: string;
    img: string;
    price: string;
    description: string;
    category: string[];
}

interface List {
    data: Product[];

}


export const data: Product[] = [
    {
        id: 1,
        title: "MacBook Pro",
        img: "https://metajuego1.com/assets/uploads/product_YGcT5wda6HCOPmE137x9.jpg",
        price: "$5.50",
        description: "El nuevo MacBook Pro 2024 redefine lo que es posible en un portátil. Con un diseño elegante y robusto, este dispositivo combina la última tecnología con una experiencia de usuario incomparable.",
        category: ["Laptop", "Apple", "Electronics"]
    },
    {
        id: 2,
        title: "iPhone 15 Pro Max",
        img: "https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2023/12/iPhone15_Plus_Pink_PDP_Image_Position-1__MXLA.jpg",
        price: "$3.00",
        description: "El iPhone 15 Pro Max ofrece un rendimiento sin igual con su chip A15 Bionic y un diseño impresionante.",
        category: ["Phone", "Apple", "Electronics"]
    },
    {
        id: 3,
        title: "iPad Air",
        img: "https://maximstore.com/wp-content/uploads/2022/06/iPad_Air_Wi-Fi_Purple_PDP_Image_Position-1b_MXLA.jpg",
        price: "$10.00",
        description: "El iPad Air es ligero, potente y versátil, perfecto para cualquier tarea diaria.",
        category: ["Tablet", "Apple", "Electronics"]
    },
    {
        id: 4,
        title: "Apple Watch SE",
        img: "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mrf63tua-apple-watch-ultra-2-gpscellular-49mm-titanium--638304993326975900.jpg",
        price: "$5.30",
        description: "El Apple Watch SE ofrece características avanzadas de salud y fitness a un precio asequible.",
        category: ["Watch", "Apple", "Electronics"]
    },
    {
        id: 5,
        title: "Apple Pencil",
        img: "https://www.macstation.com.ar/img/productos/3124-mqly3be-a.jpg",
        price: "$15.70",
        description: "El Apple Pencil es el compañero perfecto para tu iPad, ofreciendo precisión y sensibilidad incomparables.",
        category: ["Accessory", "Apple", "Electronics"]
    },
    {
        id: 6,
        title: "Mac Studio",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-studio-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684345161143",
        price: "$8.00",
        description: "El Mac Studio es una potente estación de trabajo para profesionales creativos, con un rendimiento sin igual.",
        category: ["Desktop", "Apple", "Electronics"]
    },
    {
        id: 7,
        title: "Vision Pro",
        img: "https://www.apple.com/newsroom/images/media/introducing-apple-vision-pro/Apple-WWDC23-Vision-Pro-glass-230605.jpg.news_app_ed.jpg",
        price: "$7.50",
        description: "El Vision Pro combina realidad aumentada y virtual para ofrecer una experiencia inmersiva inigualable.",
        category: ["Headset", "Apple", "Electronics"]
    },
    {
        id: 8,
        title: "AirPods Pro",
        img: "https://cdn-ipoint.waugi.com.ar/25135-large_default/apple-airpods-pro-2da-generacion.jpg",
        price: "$12.20",
        description: "Los AirPods Pro ofrecen una experiencia de audio superior con cancelación activa de ruido y un ajuste cómodo.",
        category: ["Accessory", "Apple", "Electronics"]
    }
];