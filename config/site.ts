export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Ecommerce",
    description: "Make beautiful websites regardless of your design experience.",
    navItems: [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Products",
            href: "/products",
        },
        {
            label: "About",
            href: "/about",
        }
    ],
    navMenuItems: [
        {
            label: "Profile",
            href: "/profile",
        },
        {
            label: "Products",
            href: "/products",
        },
        {
            label: "Logout",
            href: "/logout",
        },
    ],
    links: {
        github: "https://github.com/nextui-org/nextui",
        twitter: "https://twitter.com/getnextui",
        instagram: "https://instagram.com/nextuiorg",
        docs: "https://nextui.org",
        discord: "https://discord.gg/9b6yyZKmH4",
        sponsor: "https://patreon.com/jrgarciadev"
    },
};
