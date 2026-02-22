"use client";
import posthog from "posthog-js";

export default function Footer() {
    return (
        <>
            <section className="h-auto py-10 border-t border-primary-blue-300/80 bg-linear-to-b from-primary-blue-500 to-primary-blue-300/30 text-primary-white-200">
                <div className="flex flex-row items-center w-full h-full text-center text-3xl text-shadow-lg max-sm:flex-col max-sm:space-y-5">
                    {/* Left Third - Email */}
                    <h2 className="flex-1 underline hover:text-primary-purple-400 duration-300 hover:scale-105 active:scale-95">
                        <a target="_blank" href="mailto:macklosky21@gmail.com"  
                            onClick={() => posthog.capture('social_link_clicked', { platform: 'email', url: 'mailto:macklosky21@gmail.com' })
                            }>
                            MacKlosky21@gmail.com
                        </a>
                    </h2>
                    
                    {/* Center Section - Name */}
                    <h1 className="flex-2 text-5xl text-primary-white-100 -rotate-z-1 font-bold hover:rotate-z-0 active:scale-105 duration-300 hover:cursor-pointer active:rotate-x-360 hover:text-primary-purple-400">
                        Samuel Mac Klosky
                    </h1>

                    {/* Right Third - Back to top button */}
                    <h2 className="underline flex-1 cursor-pointer hover:text-primary-purple-400 duration-300 hover:scale-105 active:scale-95">
                        <span onClick={() => {
                            posthog.capture('scroll_to_top_clicked');
                            document.getElementById("TitleCard")?.scrollIntoView({ behavior: "smooth" });
                        }}>
                            Back to Top
                        </span>
                    </h2>
                </div>

            </section>
        </>
    );
}