"use client"
import { useState } from "react";
import posthog from "posthog-js";
import Image from "next/image";

export function TitleCard() {
    const [MacButtonText, setMacButtonText] = useState("Mac");
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*_=()[]{}<>?`~".split("");

    return (
        <>
            <section id="TitleCard" className="flex flex-col items-center justify-center h-screen bg-linear-to-b from-transparent from-5% to-primary-blue-500 text-primary-white-100 text-shadow-lg cursor-default overflow-hidden">
                <div className="grow-in">
                    <h1 className="text-center text-6xl max-sm:text-4xl font-bold">
                        Samuel&nbsp;
                        <span className="hover:text-primary-purple-400 duration-300 select-none cursor-pointer"
                            onClick={() => {
                                posthog.capture('name_scrambler_clicked');

                                let iteration = 0;
                                const original_text = "Mac";
                                const current_text = MacButtonText.split("");
                                const max_iterations = 50;
                                const index_interval = (max_iterations / original_text.length);

                                const interval = setInterval(() => {
                                    const randomValues = current_text.map(
                                        (val, index) => {

                                            if (iteration >= index * index_interval) {
                                                return original_text[index];
                                            }

                                            return alphabet[Math.floor(Math.random() * alphabet.length)]
                                        }
                                    ).join("");

                                    setMacButtonText(randomValues);
                                    iteration += 1;

                                    if (iteration > max_iterations) {
                                        clearInterval(interval);
                                    }

                                }
                                    , 30);
                            }}>
                            {MacButtonText}
                        </span>
                        &nbsp;Klosky
                    </h1>
                    <h2 className="text-center text-5xl max-sm:text-3xl my-5 font-semibold">Software Engineer</h2>
                    <h2 className="text-center text-5xl max-sm:text-sm max-sm:space-x-1 space-x-5 flex flex-row justify-center text-primary-blue-50">
                        <a target="_blank" href="https://www.linkedin.com/in/samuelklosky/" className="hover:text-primary-purple-400 duration-300 group flex items-center space-x-2" 
                            onClick={() => posthog.capture('social_link_clicked', { platform: 'linkedin', url: 'https://www.linkedin.com/in/samuelklosky/' })}
                            >
                            <span className="flex flex-row text-3xl duration-900 overflow-hidden max-w-0 group-hover:max-w-xs max-sm:hidden transition-all ">
                                <span className="delay-50">i</span>
                                <span className="delay-60">n</span>
                                <span className="delay-70">/</span>
                                <span className="delay-80">S</span>
                                <span className="delay-90">a</span>
                                <span className="delay-100">m</span>
                                <span className="delay-110">u</span>
                                <span className="delay-120">e</span>
                                <span className="delay-130">l</span>
                                <span className="delay-140">K</span>
                                <span className="delay-150">l</span>
                                <span className="delay-160">o</span>
                                <span className="delay-170">s</span>
                                <span className="delay-180">k</span>
                                <span className="delay-190">y</span>
                            </span>
                            <Image
                                src="/images/InBug-White.png"
                                alt="LinkedIn Icon"
                                width={64}
                                height={64}
                                className="w-[1em] h-[1em] max-sm:h-[3em] max-sm:w-[3em] inline-block duration-300 hover:scale-110 active:scale-105"
                            />
                        </a>
                        
                        <a target="_blank" href="mailto:macklosky21@gmail.com" className="hover:text-primary-purple-400 duration-300 group flex items-center" 
                            onClick={() => posthog.capture('social_link_clicked', { platform: 'email', url: 'mailto:macklosky21@gmail.com' })}
                            >
                            <span className="flex flex-row text-3xl duration-900 overflow-hidden max-w-0 group-hover:max-w-xs max-sm:hidden transition-all ">
                                <span className="delay-50">M</span>
                                <span className="delay-60">a</span>
                                <span className="delay-70">c</span>
                                <span className="delay-80">K</span>
                                <span className="delay-90">l</span>
                                <span className="delay-100">o</span>
                                <span className="delay-110">s</span>
                                <span className="delay-120">k</span>
                                <span className="delay-130">y</span>
                            </span>
                            <Image
                                src="/images/mail_icon.svg"
                                alt="Email Icon"
                                width={64}
                                height={64}
                                className="w-[1em] h-[1em] max-sm:h-[3em] max-sm:w-[3em] inline-block delay-350 duration-300 group-hover:opacity-0 group-hover:w-0 group-hover:-translate-y-10 active:scale-105"
                            />
                            <span className="flex flex-row text-3xl duration-900 overflow-hidden max-w-0 group-hover:max-w-xs max-sm:hidden transition-all ">
                                <span className="delay-50">@</span>
                                <span className="delay-60">g</span>
                                <span className="delay-70">m</span>
                                <span className="delay-80">a</span>
                                <span className="delay-90">i</span>
                                <span className="delay-100">l</span>
                                <span className="delay-110">.</span>
                                <span className="delay-120">c</span>
                                <span className="delay-130">o</span>
                                <span className="delay-140">m</span>
                            </span>
                        </a>
                        
                        <a target="_blank" href="https://github.com/macklosky211/" className="hover:text-primary-purple-400 duration-300 group flex items-center space-x-2" 
                            onClick={() => posthog.capture('social_link_clicked', { platform: 'github', url: 'https://github.com/macklosky211/' })}
                            >
                            <Image
                                src="/images/GitHub_Invertocat_White.svg"
                                alt="Github Icon"
                                width={64}
                                height={64}
                                className="w-[1em] h-[1em] max-sm:h-[3em] max-sm:w-[3em] inline-block duration-300 hover:scale-110 active:scale-105"
                            />
                            <span className="flex flex-row text-3xl duration-900 overflow-hidden max-w-0 group-hover:max-w-xs max-sm:hidden transition-all ">
                                <span className="delay-50">g</span>
                                <span className="delay-60">i</span>
                                <span className="delay-70">t</span>
                                <span className="delay-80">/</span>
                                <span className="delay-90">M</span>
                                <span className="delay-100">a</span>
                                <span className="delay-110">c</span>
                                <span className="delay-120">K</span>
                                <span className="delay-130">l</span>
                                <span className="delay-140">o</span>
                                <span className="delay-150">s</span>
                                <span className="delay-160">k</span>
                                <span className="delay-170">y</span>
                                <span className="delay-180">2</span>
                                <span className="delay-190">1</span>
                                <span className="delay-200">1</span>
                            </span>
                        </a>
                    </h2>
                    <h2 className="text-center text-3xl mt-5 max-sm:text-2xl text-primary-blue-50 hover:text-primary-purple-400 duration-300"><a href="/pdfs/Samuel_Klosky_Resume.pdf" target="_self" onClick={() => posthog.capture('resume_downloaded')}>RESUME</a></h2>
                </div>
                <button type="button" className="large-caret font-[--font-mono] text-primary-blue-50 hover:text-primary-purple-400 hover:scale-105 duration-300 transition-transform" onClick={() => {
                    posthog.capture('scroll_to_projects_clicked');
                    document.getElementById("ProjectSection")?.scrollIntoView({ behavior: "smooth" });
                }}><span className="hidden">Mobile Visibility Fix</span></button>

            </section>
        </>
    );
}