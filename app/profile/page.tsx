"use client";
import {Button, Card, CardBody, Image, Input} from '@nextui-org/react';
import {title} from "@/components/primitives";
import React, {useMemo, useState} from "react";
import {useRouter} from "next/navigation";
import {EyeFilledIcon, EyeSlashFilledIcon} from "@/components/icons";


interface FormData {
    name: string;
    lastName: string;
    password: string;
    email: string;
}

export default function ProfileForm() {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const router = useRouter();
    const [value, setValue] = useState<FormData>({
        name: "Jhon",
        lastName: "Doe",
        password: "mysecretpassword",
        email: "jhondoe@mail.com"
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Implement actual form submission logic here
        // For now, just redirect
        router.push('/');
    };

    const validateEmail = (email: string) => {
        // Simple email regex check
        return email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    };

    const isInvalid = useMemo(() => {
        return value.email !== "" && !validateEmail(value.email);
    }, [value.email]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value: newValue} = e.target;
        setValue(prev => ({
            ...prev,
            [name]: newValue
        }));
    };
    return (

        <div className="flex flex-col items-center justify-center p-0 ">
            <div className="inline-block w-full max-w-4xl text-center justify-center mb-3">
                <h1 className={title()}>
                    <div className="inline-block">
                        My &nbsp;
                    </div>
                </h1>
                <h1 className={title()}>
                    <span
                        className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] to-[#b249f8]">Profile</span>
                </h1>
                {/*<h2 className={subtitle({class: "mt-4"})}>*/}
                {/*    Beautiful, fast and modern React UI library.*/}
                {/*</h2>*/}
            </div>
            <Card className="max-w-md p-5 ">
                <CardBody className="flex flex-col items-center">
                    <Image
                        className="rounded-full w-36 h-36"
                        src="https://nextui.org/images/hero-card.jpeg"
                        alt="Profile Picture"
                    />
                    <form style={{width: "300px"}}>
                        <Input
                            name="name"
                            defaultValue="Jhon"
                            type="text"
                            label="Name"
                            variant="underlined"
                            className="text-white mt-2"
                            fullWidth
                            onChange={handleChange}
                        />
                        <Input
                            name="lastName"
                            defaultValue="Doe"
                            isRequired
                            value={value.lastName}
                            type="text"
                            label="Last Name"
                            className="text-white mt-5"
                            variant="underlined"
                            fullWidth
                            onChange={handleChange}
                        />
                        <Input
                            name="email"
                            defaultValue="jhondoe@gmail.com"
                            value={value.email}
                            type="email"
                            label="Email"
                            className="text-white mt-5"
                            variant="underlined"
                            isInvalid={isInvalid}
                            color={isInvalid ? "warning" : "default"}
                            onChange={handleChange}
                            fullWidth

                        />
                        <Input
                            name="password"
                            isRequired
                            value={value.password}
                            label="Password"
                            className="text-white mt-5"
                            variant="underlined"
                            type={isVisible ? "text" : "password"}
                            onChange={handleChange}
                            fullWidth
                            endContent={
                                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                    {isVisible ? (
                                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
                                    ) : (
                                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
                                    )}
                                </button>
                            }
                        />
                        <Button type="submit"
                                className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-[#FF1CF7] to-[#b249f8]"
                                variant="shadow"
                        >
                            Save
                        </Button>
                    </form>

                </CardBody>
            </Card>
        </div>
    );
}
