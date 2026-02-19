"use client";
import Image from "next/image";
import { ProjectLinks } from "./ProjectLinks";
import { ReactNode, useEffect, useRef, useState } from "react";
import posthog from "posthog-js";

type ProjectPreviewCardProps = {
    project_name: string;
    image_url?: string;
    project_link?: string;
    github_link?: string;
    technologies?: Technology[];
    preview_content : {
        project_description?: string | ReactNode;
        project_description_subtext?: string;
    },
    expanded_content : {
        subtitle_description ?: string | ReactNode;
        project_description?: string | ReactNode;
    }
}

type Technology = {
    name: string;
    bg_color?: string;
    txt_color?: string;
}

export function ProjectPreviewCard(props: ProjectPreviewCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const previewRef = useRef<HTMLDivElement>(null);
    
    useEffect(
        () => {
            document.body.style.overflow = isExpanded ? 'hidden' : 'unset';

            return () => {document.body.style.overflow = 'unset'; };
        }, [isExpanded]
    );

    return (
        <>
            <div ref={previewRef} className="h-full w-full">
                <div className={`duration-600 transition-all h-full w-full ${isExpanded ? "scale-0 pointer-events-none" : "scale-100"}`}>
                    {PreviewCard(props)}
                </div>
                <div className={`fixed origin-center inset-0 w-screen mx-auto h-screen z-10 transition-all duration-600 ${isExpanded ? "scale-100" : "scale-0 pointer-events-none"}`}>
                    {ExpandedCard(props)}
                </div>
            </div>
        </>
    )
    
    function PreviewCard(props: ProjectPreviewCardProps) {
        return (
            <div className={`
                bg-primary-blue-600 w-full max-w-sm max-sm:max-w-xs min-h-96 h-full overflow-hidden 
                card-border rounded-lg mx-auto 
                shadow-[10px_10px_5px_5px] shadow-primary-blue-700 
                hover:shadow-[5px_5px_5px_5px] hover:scale-115
                hover:ring-4 hover:ring-primary-purple-500
                scroll-dramatic-grow-in  duration-300 transition-all
                flex flex-col flex-wrap cursor-pointer
                active:scale-95
                `}
                onClick={() => {
                    setIsExpanded(true);
                    posthog.capture('project_card_expanded', {project_name: props.project_name});
                }}
            >
                {/* Image Section */}
                {props.image_url && (
                    <div className="w-full h-56 overflow-hidden bg-primary-blue-900 relative">
                        <Image
                            src={props.image_url}
                            alt={props.project_name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover hover:scale-105 transition-transform duration-300"
                            priority={false}
                            unoptimized
                            placeholder="empty"
                        />
                    </div>
                )}
    
                {/* Content Section */}
                <div className="flex flex-col grow p-6">
                    {/* Title */}
                    <h2 className="text-2xl font-[--font-large] font-bold text-primary-blue-50 mb-3">
                        {props.project_name}
                    </h2>
    
                    {/* Technologies Section */}
                    {props.technologies && props.technologies.length > 0 && (
                        <div className="mb-4">
                            <div className="flex flex-wrap gap-2">
                                {props.technologies.map((tech, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            backgroundColor: tech.bg_color || 'var(--primary-blue-500)'
                                        }}
                                        className="border border-primary-blue-900 rounded-md p-2 align-middle transition-opacity duration-200 cursor-default hover:brightness-110 "
                                    >
                                        <p
                                            className="text-xs align-middle font-bold"
                                            style={{ color: tech.txt_color || 'var(--primary-blue-100)' }}
                                        >
                                            {tech.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
    
                    {/* Description */}
                    {props.preview_content.project_description && (
                        <p className="text-primary-blue-100 text-lg mb-2 leading-relaxed">
                            {props.preview_content.project_description}
                        </p>
                    )}
    
                    {props.preview_content.project_description_subtext && (
                        <p className="text-primary-blue-200 text-base mb-4 leading-relaxed">
                            {props.preview_content.project_description_subtext}
                        </p>
                    )}
    
                    {/* Links Section */}
                    <div className="mt-auto">
                        <ProjectLinks
                            project_name={props.project_name}
                            project_link={props.project_link}
                            github_link={props.github_link}
                        />
                    </div>
                </div>
            </div>
        );
    }
    
    function ExpandedCard(props: ProjectPreviewCardProps) {
        return (
            <>
                {/* Background elements */}
                {/* <div className="fixed inset-0 transition-all duration-300 delay-600 bg-primary-blue-600 pointer-events-none"></div> */}
                <div className={`fixed inset-0 transition-all duration-200 bg-linear-to-b from-primary-blue-300 to-primary-blue-500 pointer-events-none`}></div>

                {/* Foreground Elements - This contains everything and is scrollable */}
                <div className="fixed inset-0 overflow-y-auto overflow-x-clip z-10">
                    
                    {/* Back Button */}
                    <button onClick={() => { 
                        setIsExpanded(false); 
                        posthog.capture('close_expanded_view_button', {project_name: props.project_name});
                    }}
                        className="fixed left-5 top-2 z-20
                                flex items-center justify-center
                                w-12 h-12 rounded-xl
                                bg-primary-blue-100 border-2 border-white
                                text-white font-bold text-xl
                                shadow-lg hover:shadow-xl
                                transition-all duration-300 ease-out
                                hover:brightness-110 hover:scale-105 hover:-translate-x-0.5
                                active:scale-95
                                cursor-pointer">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>

                    {/* Main Container */}
                    <div className="flex flex-col max-w-7xl mx-auto h-fit my-5 gap-4 px-4 max-sm:mt-15">
                        {/* Top Row: Title/Summary and Image/Buttons */}
                        <div className="flex flex-row items-start gap-4 max-sm:flex-col">
                            {/* Left Half - Title and Summary */}
                            <div className="w-1/2 flex flex-col max-sm:w-full max-sm:contents">
                                <h1 className="w-full text-4xl max-sm:text-xl text-center underline font-bold text-primary-blue-50 max-sm:order-1">
                                    {props.project_name}
                                </h1>
                                <div className="w-full min-h-32 p-4 text-xl max-sm:order-5 text-primary-blue-100">
                                    {props.expanded_content.subtitle_description}
                                </div>
                            </div>

                            {/* Right Half - Image and Buttons */}
                            <div className="w-1/2 flex flex-col gap-2 max-sm:w-full max-sm:contents">
                                {props.image_url && (
                                    <div className="w-full h-56 overflow-hidden bg-primary-blue-900 relative rounded-lg max-sm:order-2">
                                        <Image
                                            src={props.image_url}
                                            alt={props.project_name}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover hover:scale-105 transition-transform duration-300"
                                            priority={false}
                                            unoptimized
                                            placeholder="empty"
                                        />
                                    </div>
                                )}

                                {/* Technologies Section */}
                                {props.technologies && props.technologies.length > 0 && (
                                    <div className=" max-sm:order-3">
                                        <div className="flex flex-wrap gap-2">
                                            {props.technologies.map((tech, index) => (
                                                <div
                                                    key={index}
                                                    style={{
                                                        backgroundColor: tech.bg_color || 'var(--primary-blue-500)'
                                                    }}
                                                    className="border border-primary-blue-900 rounded-md p-2 transition-opacity duration-200 cursor-default hover:brightness-110"
                                                >
                                                    <p
                                                        className="text-base font-bold"
                                                        style={{ color: tech.txt_color || 'var(--primary-blue-100)' }}
                                                    >
                                                        {tech.name}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="max-sm:order-4 max-sm:w-full">
                                    <ProjectLinks
                                        project_name={props.project_name}
                                        project_link={props.project_link}
                                        github_link={props.github_link}
                                        is_expanded={true}
                                    />
                                </div>

                            </div>
                        </div>

                        {/* Description Box - Full Width */}
                        <div className="w-full min-h-96 p-6 pb-20 text-primary-blue-100 text-xl">
                            {props.expanded_content.project_description || "Project description goes here..."}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

interface PreviewCardLinkProps {
    href: string
    target: string
    children: ReactNode
}

export function PreviewCardLink(props: PreviewCardLinkProps) {
    return (
        <a className="text-white italic hover:underline" href={props.href} target={props.target} 
        onClick={(e) => { 
            e.stopPropagation();
            posthog.capture('preview_card_link_clicked', {url: props.href}); 
        }}>
            {props.children}
        </a>
    );
}