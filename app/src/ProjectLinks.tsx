"use client"
import posthog from "posthog-js";

type ProjectLinksProps = {
  project_name: string;
  project_link?: string;
  github_link?: string;
  is_expanded?: boolean | null;
}

export function ProjectLinks({ project_name, project_link, github_link, is_expanded }: ProjectLinksProps) {
  return (
    <div className="flex gap-2 text-base leading-7">
      {/* Live Project Link */}
      {project_link && (
        <a
          href={project_link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-primary-purple-400 hover:bg-primary-purple-300 text-primary-white-100 hover:scale-105
            border border-primary-blue-900 font-semibold py-2 px-3 rounded-md text-center 
            transition-all duration-300 active:scale-95 w-2/5"
          onClick={(e) => {
            e.stopPropagation();
            posthog.capture('project_link_clicked', { project_name, url: project_link });
          }}
          onMouseDown={(e) => e.stopPropagation()}
        >
          Live <span className="max-sm:hidden">Project</span>
        </a>
      )}

      {/* Github Link */}
      {github_link && (
        <a
          href={github_link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-primary-purple-400 hover:bg-primary-purple-300 text-primary-white-100 hover:scale-105
            border border-primary-blue-900 font-semibold py-2 px-3 rounded-md text-center align-bottom
            transition-all duration-300 active:scale-95 w-2/5"
          onClick={(e) => {
            e.stopPropagation();
            posthog.capture('github_link_clicked', { project_name, url: github_link });
          }}
          onMouseDown={(e) => e.stopPropagation()}
        >
          Github
        </a>
      )}

      {!is_expanded && (
        <div 
          className="flex-none bg-primary-purple-400 hover:bg-primary-purple-300 text-primary-white-100 hover:scale-105
            border border-primary-blue-900 font-semibold py-2 px-3 rounded-md text-center 
            transition-all duration-300 active:scale-95 w-1/5"
          >
            &#10530;
        </div>
      )}

    </div>
  );
}
