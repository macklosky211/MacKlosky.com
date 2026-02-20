"use client"
import { useState } from "react";
import posthog from "posthog-js";

export function TitleCard() {
    const [MacButtonText, setMacButtonText] = useState("Mac");
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*_=()[]{}<>?`~".split("");

    return (
        <>
            <section id="TitleCard" className="flex flex-col items-center justify-center h-screen bg-linear-to-b from-transparent from-5% to-primary-blue-500 text-primary-blue-50 text-shadow-lg cursor-default overflow-hidden">
                <div className="grow-in">
                    <h1 className="text-center text-6xl max-sm:text-4xl font-bold">Samuel <span className="hover:text-primary-purple-400 duration-300 select-none cursor-pointer"
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
                        }}>{MacButtonText}</span> Klosky</h1>
                    <h2 className="text-center text-5xl max-sm:text-3xl my-5 font-semibold">Software Engineer</h2>
                    <h3 className="text-center text-3xl max-sm:text-sm max-sm:space-x-1 space-x-4 flex text-primary-blue-50">
                        <a target="_blank" href="https://www.linkedin.com/in/samuelklosky/" className="hover:text-primary-purple-400 duration-300" 
                            onClick={() => posthog.capture('social_link_clicked', { platform: 'linkedin', url: 'https://www.linkedin.com/in/samuelklosky/' })}
                            >
                            in/samuelklosky
                        </a>
                        <p className="max-sm:hidden">
                            |
                        </p>
                        <a target="_blank" href="mailto:macklosky21@gmail.com" className="hover:text-primary-purple-400 duration-300" 
                            onClick={() => posthog.capture('social_link_clicked', { platform: 'email', url: 'mailto:macklosky21@gmail.com' })}
                            >
                            macklosky21@gmail.com
                        </a>
                        <p className="max-sm:hidden">
                            |
                        </p>
                        <a target="_blank" href="https://github.com/macklosky211/" className="hover:text-primary-purple-400 duration-300" 
                            onClick={() => posthog.capture('social_link_clicked', { platform: 'github', url: 'https://github.com/macklosky211/' })}
                            >
                            git/macklosky211
                        </a>
                    </h3>
                    <h3 className="text-center text-3xl mt-5 max-sm:text-sm text-primary-blue-50 hover:text-primary-purple-400 duration-300"><a href="/pdfs/Samuel_Klosky_Resume.pdf" target="_self" onClick={() => posthog.capture('resume_downloaded')}>RESUME</a></h3>
                </div>
                <button type="button" className="large-caret font-[--font-mono] text-primary-blue-50 hover:text-primary-purple-400 hover:scale-105 duration-300 transition-transform" onClick={() => {
                    posthog.capture('scroll_to_projects_clicked');
                    document.getElementById("ProjectSection")?.scrollIntoView({ behavior: "smooth" });
                }}><span className="hidden">Mobile Visibility Fix</span></button>

            </section>
        </>
    );
}