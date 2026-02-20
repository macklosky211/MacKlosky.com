"use client";
import posthog from "posthog-js";

export default function Footer() {
    return (
        <>
            <section className="h-auto py-10 border-t border-primary-blue-300/80 bg-linear-to-b from-primary-blue-500 to-primary-blue-300 text-primary-blue-100">
                <div className="flex flex-row items-center w-full h-full text-center text-3xl font-(--font-syne) text-primary-blue-50 max-sm:flex-col max-sm:space-y-5">
                    {/* Left Third - Email */}
                    <div className="flex-1 underline hover:text-primary-purple-400 duration-300 hover:scale-105 active:scale-95">
                        <a target="_blank" href="mailto:macklosky21@gmail.com"  
                            onClick={() => posthog.capture('social_link_clicked', { platform: 'email', url: 'mailto:macklosky21@gmail.com' })
                            }>
                            MacKlosky21@gmail.com
                        </a>
                    </div>
                    
                    {/* Center Section - Name */}
                    <div className="flex-2 text-5xl -rotate-z-1">
                        Samuel Mac Klosky
                    </div>

                    {/* Right Third - Back to top button */}
                    <div className="underline flex-1 cursor-pointer hover:text-primary-purple-400 duration-300 hover:scale-105 active:scale-95">
                        <span onClick={() => {
                            posthog.capture('scroll_to_top_clicked');
                            document.getElementById("TitleCard")?.scrollIntoView({ behavior: "smooth" });
                        }}>
                            Back to Top
                        </span>
                    </div>
                </div>

            </section>
        </>
    );
}