'use client';
import React, {useEffect, useState} from "react";
import {Card, CardBody, CardFooter, Image, Skeleton} from "@nextui-org/react";
import NextLink from "next/link";

export default function ProductsCard() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simula una demora en la carga
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const list = [
        {
            id: 1,
            title: "McBook Pro",
            img: "https://metajuego1.com/assets/uploads/product_YGcT5wda6HCOPmE137x9.jpg",
            price: "$5.50",
        },
        {
            id: 2,
            title: "Iphone 15 Pro Max",
            img: "https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2023/12/iPhone15_Plus_Pink_PDP_Image_Position-1__MXLA.jpg",
            price: "$3.00",
        },
        {
            id: 3,
            title: "Ipad Air",
            img: "https://maximstore.com/wp-content/uploads/2022/06/iPad_Air_Wi-Fi_Purple_PDP_Image_Position-1b_MXLA.jpg",
            price: "$10.00",
        },
        {
            id: 4,
            title: "Apple Watch Se",
            img: "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mrf63tua-apple-watch-ultra-2-gpscellular-49mm-titanium--638304993326975900.jpg",
            price: "$5.30",
        },
        {
            id: 5,
            title: "Apple Pencil",
            img: "https://www.macstation.com.ar/img/productos/3124-mqly3be-a.jpg",
            price: "$15.70",
        },
        {
            id: 6,
            title: "Mac Studio",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3_e482_ibDso5fkzTxtNKNbBqEUtKcIfL7iTupGfZQHB5oeLziYufAzjisXmKnQWVtNY&usqp=CAU",
            price: "$8.00",
        },
        {
            id: 7,
            title: "Vision Pro",
            img: "https://www.apple.com/newsroom/images/media/introducing-apple-vision-pro/Apple-WWDC23-Vision-Pro-glass-230605.jpg.news_app_ed.jpg",
            price: "$7.50",
        },
        {
            id: 8,
            title: "Airpods Pro",
            img: "https://cdn-ipoint.waugi.com.ar/25135-large_default/apple-airpods-pro-2da-generacion.jpg",
            price: "$12.20",
        },
    ];

    return (
        <div className="lg:gap-10 gap-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-16 py-0 lg:p-0">
            {list.map((item, index) => (
                <NextLink href={`/products/${item.id}`} key={index}>
                    <Card shadow="sm" key={index} isPressable className="w-full h-auto">
                        <CardBody className="overflow-visible p-0">
                            {loading ? (
                                <Skeleton className="h-64 w-full"/>
                            ) : (
                                <Image
                                    shadow="sm"
                                    radius="lg"
                                    width="100%"
                                    alt={item.title}
                                    className="object-cover h-64 w-full"
                                    src={item.img}
                                />
                            )}
                        </CardBody>
                        <CardFooter className="text-small justify-between">
                            {loading ? (
                                <Skeleton className="h-4 w-3/4"/>
                            ) : (
                                <b>{item.title}</b>
                            )}
                            {loading ? (
                                <Skeleton className="h-4 w-1/4"/>
                            ) : (
                                <p className="text-default-500 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] to-[#b249f8]">
                                    {item.price}
                                </p>
                            )}
                        </CardFooter>
                    </Card>
                </NextLink>

            ))}
        </div>
    );
}
