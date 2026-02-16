"use client";
import Image from "next/image";
import { ProjectLinks } from "./ProjectLinks";

type ProjectPreviewCardProps = {
    project_name: string;
    project_description?: string | React.ReactNode;
    project_description_subtext?: string;
    image_url?: string;
    project_link?: string;
    github_link?: string;
    technologies?: Technology[];
}

type Technology = {
    name: string;
    bg_color?: string;
    txt_color?: string;
}

export function ProjectPreviewCard(props: ProjectPreviewCardProps) {
    return (
        <div className="bg-primary-blue-600 w-full max-w-sm h-auto overflow-hidden 
            card-border border border-primary-blue-600 rounded-lg
            shadow-[5px_5px_5px_5px] shadow-primary-blue-700 
            hover:shadow-[0px_0px_5px_5px] hover:scale-115
            scroll-dramatic-grow-in  duration-300
            flex flex-col flex-wrap
            "
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
                <h2 className="text-2xl font-bold text-primary-blue-50 mb-3">
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
                                    className="border border-primary-blue-900 rounded-md p-2 transition-opacity duration-200 cursor-default hover:brightness-110 "
                                >
                                    <p
                                        className="text-xs font-bold"
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
                {props.project_description && (
                    <p className="text-primary-blue-100 text-base mb-2 leading-relaxed">
                        {props.project_description}
                    </p>
                )}

                {props.project_description_subtext && (
                    <p className="text-primary-blue-200 text-sm mb-2 leading-relaxed">
                        {props.project_description_subtext}
                    </p>
                )}

                {/* Links Section */}
                <ProjectLinks
                    project_name={props.project_name}
                    project_link={props.project_link}
                    github_link={props.github_link}
                />
            </div>
        </div>
    );

}