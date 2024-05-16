"use client";
import {Button, Card, CardBody, CardFooter, CardHeader, Chip, Image} from "@nextui-org/react";
import {usePathname} from "next/navigation";
import React from "react";
import NextLink from "next/link";
import {data} from "../../data/data";


export default function Page() {
    const params: string = usePathname();
    const id: number = Number(params.split("/")[2])
    return (
        <div className="w-full max-w-4xl mx-auto lg:p-4 lg:py-28 ">
            <Card
                className="p-5 flex flex-col lg:flex-row lg:items-stretch space-y-4 lg:space-y-2 lg:space-x-4 min-h-full">
                <div className="w-full lg:w-1/3">
                    <Image
                        className="object-cover w-full h-full rounded-lg mt-1"
                        src={data[id - 1].img}
                        alt="Product Image"
                    />
                </div>
                <div className="flex flex-col w-full lg:w-2/3 h-full">
                    <CardHeader className="flex-grow">
                        <h1 className="text-3xl font-bold text-center lg:text-left">{data[id - 1].title}</h1>
                    </CardHeader>
                    <CardBody className=" lg:text-left text-left">
                        <p className="text-lg">{data[id - 1].description}</p>
                    </CardBody>
                    <CardFooter
                        className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row lg:justify-between lg:items-center w-full mt-16">
                        <div className="flex flex-raw justify-center lg:justify-start space-x-2 mb-2 lg:mb-0">
                            {data[id - 1].category.map((category, index) => (
                                <Chip key={index} color="default" size="lg">
                                    {category}
                                </Chip>
                            ))}
                        </div>
                        <div
                            className="flex sm:flex-row lg:flex-row items-center space-y-0 lg:space-y-0 gap-20 lg:gap-2 lg:space-x-4">
                            <Button
                                as={NextLink}
                                className="font-bold"
                                href="/auth/register"
                                color="default"
                                variant="flat"
                            >
                                {data[id - 1].price}
                            </Button>
                            <Button
                                as={NextLink}
                                className="font-bold bg-gradient-to-r from-[#FF1CF7] to-[#b249f8]"
                                href="/auth/register"
                                color="default"
                                variant="shadow"
                            >
                                Add to Cart
                            </Button>
                        </div>
                    </CardFooter>
                </div>
            </Card>
        </div>
    )
}