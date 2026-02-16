"use client"
import posthog from "posthog-js";

type ProjectLinksProps = {
  project_name: string;
  project_link?: string;
  github_link?: string;
}

export function ProjectLinks({ project_name, project_link, github_link }: ProjectLinksProps) {
  return (
    <div className="flex gap-2 mt-auto pt-2">
      {/* Live Project Link */}
      {project_link && (
        <a
          href={project_link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-primary-blue-500 hover:bg-primary-blue-400 text-primary-blue-900 
            border border-primary-blue-900 font-semibold py-2 px-3 rounded-md text-center text-xs 
            transition-all duration-300 active:scale-95"
          onClick={() => posthog.capture('project_link_clicked', { project_name, url: project_link })}
        >
          Live Project
        </a>
      )}

      {/* Github Link */}
      {github_link && (
        <a
          href={github_link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-primary-blue-400 hover:bg-primary-blue-300 text-primary-blue-900
            border border-primary-blue-900 font-semibold py-2 px-3 rounded-md text-center text-xs 
            transition-all duration-300 active:scale-95"
          onClick={() => posthog.capture('github_link_clicked', { project_name, url: github_link })}
        >
          Github
        </a>
      )}
    </div>
  );
}
