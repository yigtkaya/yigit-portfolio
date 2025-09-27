import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
    stats?: {
        stars?: number;
        installs?: string;
    };
}

export default function ProjectCard({ title, description, image, link, tags, stats }: ProjectCardProps) {
    return (
        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 mb-12">
            {/* The faded background effect on hover */}
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

            {/* Project Image */}
            <div className="z-10 mb-2 mt-1 sm:col-span-2">
                <Image 
                    src={image} 
                    alt={title}
                    width={200}
                    height={120}
                    className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 w-full h-auto"
                />
            </div>

            <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                        <a 
                            href={link} 
                            className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span className="inline-flex items-center">
                                {title}
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 20 20" 
                                    fill="currentColor" 
                                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1" 
                                    aria-hidden="true"
                                >
                                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                </svg>
                            </span>
                        </a>
                    </div>
                </h3>
                
                <p className="mt-2 text-sm leading-normal text-slate-400">{description}</p>
                
                {/* Stats */}
                {stats && (
                    <div className="mt-2 flex items-center text-xs text-slate-400">
                        {stats.stars && (
                            <div className="flex items-center mr-4">
                                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                {stats.stars.toLocaleString()}
                            </div>
                        )}
                        {stats.installs && (
                            <div className="flex items-center">
                                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                {stats.installs}
                            </div>
                        )}
                    </div>
                )}
                
                <ul className="mt-2 flex flex-wrap">
                    {tags.map((tag) => (
                        <li key={tag} className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                {tag}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}