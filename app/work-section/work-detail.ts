export type WorkDetailProps = {
    id: number;
    company: string;
    role: string;
    duration: string;
    techStack: string[];
    description: string;
    image: string;
  };
  
  export const workDetails: WorkDetailProps[] = [
      {
          id: 1,
          company: "Mobilist Bilişim A.Ş",
          role: "Flutter Developer",
          duration: "Nov 2023 - Present",
          techStack: ["Flutter", "Dart", "Riverpod", "Bloc", "Kotlin", "Compose", "Firebase", "Supabase"],
          description: "Developed and maintained multiple Flutter applications including Parakolay, Amber, Kerim Çelik, and Velox. Implemented deep links, universal links, and integrated various APIs. Used Riverpod for state management and created custom navigation solutions.",
          image: "/images/mobilist.jpg",
      },
      {
          id: 2,
          company: "AppTec360",
          role: "Android Developer",
          duration: "Oct 2023 - Oct 2023",
          techStack: ["Android", "Kotlin", "Java"],
          description: "Conducted market analysis for parental control applications and compared enterprise and native implementations for parental control apps.",
          image: "/images/apptec360.jpg",
      },
      {
          id: 3,
          company: "Intertech",
          role: "Android Developer",
          duration: "Sep 2022 - Aug 2023",
          techStack: ["Android", "Kotlin", "Java", "Flutter", "Riverpod", "GetX"],
          description: "Led Android 13 migration, developed and maintained Java/Kotlin code, translated designs to code, and reconstructed a Flutter app from GetX to Riverpod. Added new features and resolved bugs to maintain app integrity.",
          image: "/images/intertech.jpg",
      },
      {
          id: 4,
          company: "Intertech",
          role: "Blockchain Developer Intern",
          duration: "Aug 2022 - Sep 2023",
          techStack: ["Solidity", "Ethereum", "Hardhat", "Truffle", "Flutter"],
          description: "Created smart contracts on Ethereum chain for cryptocurrency savings, implemented unit tests with Hardhat/Truffle, and participated in internal Flutter projects using agile methodology.",
          image: "/images/intertech.jpg",
      },
      {
          id: 5,
          company: "Mobven",
          role: "Android Developer Intern",
          duration: "Jan 2022 - Feb 2022",
          techStack: ["Android", "Kotlin", "XML"],
          description: "Developed a native Kotlin-based Android app from scratch, translated designs into high-quality code, and adapted the latest Android development trends.",
          image: "/images/mobven.jpg",
      }
  ];