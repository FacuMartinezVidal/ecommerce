"use client";
import React, {useState} from "react";
import {
    Navbar as NextUINavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@nextui-org/navbar";
import {Button} from "@nextui-org/button";
import {Kbd} from "@nextui-org/kbd";
import {Link} from "@nextui-org/link";
import {Input} from "@nextui-org/input";
import {link as linkStyles} from "@nextui-org/theme";
import {siteConfig} from "@/config/site";
import NextLink from "next/link";
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@nextui-org/modal";
import clsx from "clsx";
import {usePathname} from "next/navigation";
import {ThemeSwitch} from "@/components/theme-switch";
import {CartIcon, InstagramIcon, LockIcon, Logo, MailIcon, SearchIcon, TwitterIcon} from "@/components/icons";
import {Avatar, Checkbox, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";


export const Navbar = () => {
    const path = usePathname();
    const isActive = (href: string) => path === href;

    const searchInput = (
        <Input
            aria-label="Search"
            classNames={{
                inputWrapper: "bg-default-100",
                input: "text-sm",
            }}
            endContent={
                <Kbd className="hidden lg:inline-block" keys={["command"]}>
                    K
                </Kbd>
            }
            labelPlacement="outside"
            placeholder="Search..."
            startContent={<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0"/>}
            type="search"
        />
    );

    const [isLogin, setIsLogin] = useState(false);

    const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure();
    const disclosure = useDisclosure();

    const handlerLogin = () => {
        setIsLogin(!isLogin);
        onClose();
    };

    return (
        <NextUINavbar
            maxWidth="xl"
            position="sticky"
            classNames={{
                item: [
                    "flex",
                    "relative",
                    "h-full",
                    "items-center",
                    "data-[active=true]:after:content-['']",
                    "data-[active=true]:after:absolute",
                    "data-[active=true]:after:bottom-0",
                    "data-[active=true]:after:left-0",
                    "data-[active=true]:after:right-0",
                    "data-[active=true]:after:h-[2px]",
                    "data-[active=true]:after:rounded-[2px]",
                    "data-[active=true]:after:bg-gradient-to-r from-[#FF1CF7] to-[#b249f8]",
                ],
            }}
        >
            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <NextLink className="flex justify-start items-center gap-1" href="/">
                        <Logo/>
                        <p className="font-bold text-inherit">ECOMMERCE</p>
                    </NextLink>
                </NavbarBrand>
                <ul className="hidden lg:flex gap-4 justify-start ml-2">
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href} isActive={isActive(item.href)}>
                            <NextLink
                                className={clsx(
                                    linkStyles({color: "foreground"}),
                                    isActive(item.href)
                                        ? "text-default-500 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] to-[#b249f8] active"
                                        : ""
                                )}
                                href={item.href}
                                aria-current="page"
                            >
                                {item.label}
                            </NextLink>
                        </NavbarItem>
                    ))}
                </ul>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
                <NavbarItem className="hidden sm:flex gap-2">
                    <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
                        <InstagramIcon className="text-default-500"/>
                    </Link>
                    <Link isExternal href={siteConfig.links.discord} aria-label="Discord">
                        <TwitterIcon className="text-default-500"/>
                    </Link>
                    <ThemeSwitch/>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
                <NavbarItem className="hidden md:flex">
                    {path !== "/auth/register" && !isLogin ? (
                        <>
                            <Button className="font-bold" variant="flat" onPress={onOpen}>
                                Log in
                            </Button>
                            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
                                <ModalContent>
                                    {(onClose) => (
                                        <>
                                            <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                                            <ModalBody>
                                                <Input
                                                    autoFocus
                                                    endContent={<MailIcon
                                                        className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>}
                                                    label="Email"
                                                    placeholder="Enter your email"
                                                    variant="bordered"
                                                />
                                                <Input
                                                    endContent={<LockIcon
                                                        className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>}
                                                    label="Password"
                                                    placeholder="Enter your password"
                                                    type="password"
                                                    variant="bordered"
                                                />
                                                <div className="flex py-2 px-1 justify-between">
                                                    <Checkbox
                                                        classNames={{
                                                            label: "text-small",
                                                        }}
                                                    >
                                                        Remember me
                                                    </Checkbox>
                                                    <Link color="primary" href="#" size="sm">
                                                        Forgot password?
                                                    </Link>
                                                </div>
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button color="default" variant="flat" onPress={onClose}>
                                                    Close
                                                </Button>
                                                <Button
                                                    className="font-bold bg-gradient-to-r from-[#FF1CF7] to-[#b249f8]"
                                                    variant="shadow" onPress={handlerLogin}>
                                                    Log in
                                                </Button>
                                            </ModalFooter>
                                        </>
                                    )}
                                </ModalContent>
                            </Modal>
                        </>
                    ) : (
                        <>
                            <Button className="font-bold bg-gradient-to-r from-[#FF1CF7] to-[#b249f8] mr-4"
                                    variant="shadow"
                            >
                                <CartIcon heigt="1.8rem" width="1.8rem"/>
                            </Button>
                            <Dropdown placement="bottom-end">
                                <DropdownTrigger>
                                    <Avatar
                                        isBordered
                                        as="button"
                                        className="transition-transform"
                                        color="secondary"
                                        name="Jason Hughes"
                                        size="sm"
                                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                    />
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Profile Actions" variant="flat">
                                    <DropdownItem key="profile" className="h-14 gap-2">
                                        <p className="font-semibold">Signed in as</p>
                                        <p className="font-semibold">zoey@example.com</p>
                                    </DropdownItem>
                                    <DropdownItem key="settings"><NextLink href="/profile">My
                                        profile</NextLink></DropdownItem>
                                    <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                                    <DropdownItem key="logout" color="danger">
                                        <button onClick={handlerLogin}>
                                            Log Out
                                        </button>

                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>


                        </>

                    )}
                </NavbarItem>
                <NavbarItem className="hidden md:flex">
                    {path !== "/auth/register" && !isLogin ? (
                        <Button
                            as={NextLink}
                            className="font-bold bg-gradient-to-r from-[#FF1CF7] to-[#b249f8]"
                            href="/auth/register"
                            color="default"
                            variant="shadow"
                        >
                            Sign up
                        </Button>
                    ) : null}
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
                <Link isExternal href={siteConfig.links.twitter} aria-label="Instagram">
                    <InstagramIcon className="text-default-500"/>
                </Link>
                <Link isExternal href={siteConfig.links.instagram} aria-label="Twitter">
                    <TwitterIcon className="text-default-500"/>
                </Link>
                <ThemeSwitch/>
                <NavbarMenuToggle/>
            </NavbarContent>

            <NavbarMenu>
                {searchInput}
                <div className="mx-4 mt-2 flex flex-col gap-2">
                    {siteConfig.navMenuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            {index < 3 && (
                                <NextLink href={item.href}>
                                    <Link className="text-default-white">
                                        <span className="text-lg">{item.label}</span>
                                    </Link>
                                </NextLink>
                            )}
                            {index === 3 && !isLogin ? (
                                <>
                                    <NextLink className="font-bold" onClick={disclosure.onOpen} href="/auth/login">
                                        Log in
                                    </NextLink>
                                </>
                            ) : null}
                            {index === 4 && !isLogin ? (
                                <NextLink href="/auth/register">
                                    <Link
                                        className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] to-[#b249f8]">
                                        <span className="text-lg">Sign up</span>
                                    </Link>
                                </NextLink>
                            ) : null}
                        </NavbarMenuItem>
                    ))}
                    {
                        isLogin && (
                            <NavbarItem>
                                <NextLink href="/">
                                    <Link onClick={handlerLogin}
                                          className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] to-[#b249f8]">
                                        <span className="text-lg">Log out</span>
                                    </Link>
                                </NextLink>
                            </NavbarItem>
                        )
                    }
                    
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
};
