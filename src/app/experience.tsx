import ExperienceCard from "./experience_card";

export default function Experience() {
    const experiences = [
        {
            date: "2024 — Present",
            title: "Software Developer",
            company: "Your Company",
            description: "Description of your current role and key achievements...",
            link: "#",
            tags: ["React", "TypeScript", "Node.js"]
        },
                {
            date: "2024 — Present",
            title: "Software Developer",
            company: "Your Company",
            description: "Description of your current role and key achievements...",
            link: "#",
            tags: ["React", "TypeScript", "Node.js"]
        },
                {
            date: "2024 — Present",
            title: "Software Developer",
            company: "Your Company",
            description: "Description of your current role and key achievements...",
            link: "#",
            tags: ["React", "TypeScript", "Node.js"]
        },
                {
            date: "2024 — Present",
            title: "Software Developer",
            company: "Your Company",
            description: "Description of your current role and key achievements...",
            link: "#",
            tags: ["React", "TypeScript", "Node.js"]
        },
        // Add more experiences based on your CV
    ];

    return (
        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            </div>
            <div>
                {experiences.map((experience, index) => (
                    <ExperienceCard
                        key={index}
                        date={experience.date}
                        title={experience.title}
                        company={experience.company}
                        description={experience.description}
                        link={experience.link}
                        tags={experience.tags}
                    />
                ))}
            </div>
        </section>
    );
}