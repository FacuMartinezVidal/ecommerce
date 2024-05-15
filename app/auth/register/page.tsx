"use client";
import React, {useMemo, useState} from "react";
import {useRouter} from "next/navigation";
import {Button, Input} from "@nextui-org/react";
import {EyeFilledIcon, EyeSlashFilledIcon} from "@/components/icons";
import {title} from "@/components/primitives"; // Ensure these imports are correct

interface FormData {
    name: string;
    lastName: string;
    password: string;
    email: string;
}

const RegistrationForm = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const router = useRouter();
    const [value, setValue] = useState<FormData>({name: "", lastName: "", password: "", email: ""});

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
        <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-xl text-center">
                <h1 className={title()}>
                    Join <span
                    className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] to-[#b249f8]">Us!</span>
                </h1>
            </div>
            <div style={{display: "grid", placeItems: "center"}}>
                <form onSubmit={handleSubmit} style={{width: "400px"}} className="p-4 mt-2 bg-transparent">
                    <Input
                        name="name"
                        isRequired
                        value={value.name}
                        type="text"
                        label="Name"
                        className="text-white mt-2"
                        variant="bordered"
                        fullWidth
                        onChange={handleChange}
                    />
                    <Input
                        name="lastName"
                        isRequired
                        value={value.lastName}
                        type="text"
                        label="Last Name"
                        className="text-white mt-5"
                        variant="bordered"
                        fullWidth
                        onChange={handleChange}
                    />
                    <Input
                        name="email"
                        isRequired
                        value={value.email}
                        type="email"
                        label="Email"
                        className="text-white mt-5"
                        variant="bordered"
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
                        variant="bordered"
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
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
