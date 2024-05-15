import {subtitle, title} from "@/components/primitives";

export default function AboutPage() {
    return (
        <div>
            <div className="inline-block w-full max-w-4xl text-center justify-center">
                <h1 className={title()}>
                    <div className="inline-block">
                        About&nbsp; <span
                        className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] to-[#b249f8]">Us</span>
                    </div>
                </h1>
                {/*<h2 className={subtitle({class: "mt-4"})}>*/}
                {/*    Beautiful, fast and modern React UI library.*/}
                {/*</h2>*/}
            </div>
            <p className={subtitle({class: "mt-4 text-center max-w-2xl"})}>
                Welcome to our e-commerce platform, your number one source for all things [products]. We are dedicated
                to
                providing you the very best of [product categories], with an emphasis on quality, customer service, and
                uniqueness.
                Founded in [year] by [founder], our company has come a long way from its beginnings in [starting
                location]. When [founder] first started out, their passion for [brand message] drove them to start their
                own business.
                We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or
                comments, please dont hesitate to contact us.
            </p>
        </div>
    );
}
