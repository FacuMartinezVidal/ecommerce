import {title} from "@/components/primitives";
import HomeCard from "@/components/home-card";

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block w-full max-w-4xl text-center justify-center">
                <h1 className={title()}>
                    <div className="inline-block">
                        My Beautiful&nbsp;
                    </div>
                </h1>
                <h1 className={title()}>
                    <span
                        className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF1CF7] to-[#b249f8]">Ecommerce</span>.
                </h1>
                {/*<h2 className={subtitle({class: "mt-4"})}>*/}
                {/*    Beautiful, fast and modern React UI library.*/}
                {/*</h2>*/}
            </div>

            <HomeCard/>
        </section>
    );
}
