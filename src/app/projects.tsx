import ProjectCard from "./project_card";

export default function Projects() {
    const projects = [
        {
            title: "Build a Spotify Connected App",
            description: "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
            image: "/api/placeholder/200/120", // You'll need to add actual project images
            link: "https://github.com/your-username/spotify-app",
            tags: ["React", "Node.js", "Spotify API", "Express"],
        },
        {
            title: "Spotify Profile",
            description: "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
            image: "/api/placeholder/200/120",
            link: "https://github.com/your-username/spotify-profile",
            tags: ["React", "Express", "Spotify API", "Heroku"],
            stats: {
                stars: 696
            }
        },
        {
            title: "Halcyon Theme",
            description: "Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
            image: "/api/placeholder/200/120",
            link: "https://github.com/your-username/halcyon-theme",
            tags: ["VS Code", "Theme", "Sublime Text"],
            stats: {
                installs: "100k+ Installs"
            }
        },
        {
            title: "brittanychiong.com (v4)",
            description: "An old portfolio site built with Gatsby with 6k+ stars and 3k+ forks.",
            image: "/api/placeholder/200/120",
            link: "https://github.com/your-username/portfolio-v4",
            tags: ["Gatsby", "Styled Components", "Netlify"],
            stats: {
                stars: 8070
            }
        }
    ];

    return (
        <>
            <div>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                        tags={project.tags}
                        stats={project.stats}
                    />
                ))}
            </div>
            
            {/* View Full Project Archive Link */}
            <div className="mt-12">
                <a 
                    className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold group" 
                    aria-label="View Full Project Archive" 
                    href="/archive"
                >
                    <span>
                        <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                            View Full Project Archive
                        </span>
                        <span className="whitespace-nowrap">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 20 20" 
                                fill="currentColor" 
                                className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" 
                                aria-hidden="true"
                            >
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
                            </svg>
                        </span>
                    </span>
                </a>
            </div>
        </>
    );
}