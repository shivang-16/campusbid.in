"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { TypewriterEffectSmoothDemo } from "./typewriter";
import Footer from "@/components/footer";

export function HeroHighlightDemo() {

    const data = [
        {
            title: "Anonymous Posts",
            content: (
                <div>
                    <div>
                        <Image
                            src="/assets/land1.png"
                            alt="startup template"
                            width={500}
                            height={700}
                            className="rounded-lg object-cover h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "College Networks",
            content: (
                <div>
                    <div>
                        <Image
                            src="https://assets.aceternity.com/pro/hero-sections.png"
                            alt="hero template"
                            width={500}
                            height={700}
                            className="rounded-lg object-cover h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Spill with Friends",
            content: (
                <div>
                    <div>
                        <Image
                            src="https://assets.aceternity.com/pro/hero-sections.png"
                            alt="hero template"
                            width={500}
                            height={700}
                            className="rounded-lg object-cover h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        }, {
            title: "Project Ranking",
            content: (
                <div>
                    <div>
                        <Image
                            src="https://assets.aceternity.com/pro/hero-sections.png"
                            alt="hero template"
                            width={500}
                            height={700}
                            className="rounded-lg object-cover h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Freelancing",
            content: (
                <div>
                    <div>
                        <Image
                            src="https://assets.aceternity.com/templates/startup-4.webp"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },

    ];

    return (
        <HeroHighlight containerClassName="group">
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white w-full leading-relaxed lg:leading-snug text-center mx-auto"
            >
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-gray-300">Discover Our Features.</p>
                <div className="relative w-full">
                    <Timeline data={data} />
                </div>
                <div className="relative w-full h-auto overflow-hidden">
                    <TypewriterEffectSmoothDemo />
                </div>
                <div className="relative w-full h-auto overflow-hidden">
                    <Footer />
                </div>
            </motion.h1>
        </HeroHighlight>
    );
    
}
