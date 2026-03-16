import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Gandharva Hardikar",
  initials: "GH",
  url: "https://gandharvahardikar.github.io",
  location: "Dhule, India",
  locationLink: "https://www.google.com/maps/place/dhule",

  // Desrciptionnnnnnn
  description: (
  <>
    Engineer, Active on{" "}
    <a
      href="https://x.com/heygandharva"
      target="_blank"
      rel="noopener noreferrer"
      className="underline"
    >
      Twitter
    </a>
    .
  </>
),


  summary: `
  <p>started early. fell into ML and never looked back.</p>
  <p>self-taught by breaking things, following sparks, and hyperfocusing at 2am on problems nobody asked me to solve.</p>
  <p>i build things that make life less annoying. ground-level problems. real friction. actual fixes.</p>
  <p>ADHD brain. either fully in, or not at all. turns out that's useful in engineering.</p>
  <p>i work well alone. i work better with the right people.</p>
  <p>when i'm not coding, i'm in the gym, on a bike, in a kitchen, on a court, or lost on a road somewhere.</p>
  <p>the common thread? learn it. break it. leverage it. repeat.</p>
  <p>final year. ready to ship real things with real teams. open to entry-level roles.</p>
  <p>this portfolio isn't a resume. it's just me, rendered in HTML.</p>
  `,
  work: [] as Array<{
    company: string;
    href?: string;
    badges?: string[];
    location?: string;
    title: string;
    logoUrl: string;
    start: string;
    end?: string;
    description: string;
  }> ,

  /*openSource: [] as Array<{
    title: string;
    href: string;
    dates?: string;
    active?: boolean;
    description: string;
    technologies: string[];
    links: Array<{ type: string; href: string; icon: JSX.Element }>;
    image?: string;
    video?: string;
  }> ,*/
  
  avatarUrl: "/batman.png",

  //SKILLS

  skills: [
  "Python",
  "TypeScript",
  "React",
  "FastAPI",
  "Node.js",
  "C",
  "C++",
  "MongoDB",
  "MySQL",
  "Supabase",
  "Git",
  "GitHub",
  "PyTorch",
  "TensorFlow",
  "OpenCV",
  "Tailwind CSS",
  "Firebase",
  "Netlify",
  "OAuth",
  "Vercel",
  "NumPy",
  "Pandas",
  "Plotly",
  "scikit-learn",
  "SciPy",
  "MLflow",
  "Arduino",
  "Canva",
  "CUDA",
  "NPM",
  "JWT",
],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
   contact: {
     email: "gandharva.hardikar@gmail.com",
     tel: "+917972396739",
      social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/gandharvahardikar",
          icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/gandharvahardikar",
          icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/heygandharva",
          icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@gandharvaa",
          icon: Icons.youtube,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:gandharva.hardikar@gmail.com",
          icon: Icons.email,

        navbar: true,
      },
    },
    },

  /*work: [
    {
      company: "OpenClip",
      href: "https://openclip.app/",
      badges: [],
      location: "UAE",
      title: "Software Engineer",
      logoUrl: "/OpenClipLogo.jpg",
      start: "November 2025",
      end: "Present",
      description:
        "Engineered the rendering pipeline for OpenClip to efficiently visualize AI-generated video segments within a web environment. Integrating a robust Discord bot microservice to facilitate seamless bi directional communication between the application backend and user communities ",
    },
  ], 
  */


  education: [
    {
      school: "Dr. Babasaheb Ambedkar Technological University, Lonere",
      href: "https://dbatu.ac.in/",
      degree: "B.Tech in Computer Engineering",
      logoUrl: "/dbatu.jpeg",
      start: "2022",
      end: "2026",
    },
  ],


  //PROJECTS
  projects: [
    {
  title: "Classical ML Algorithms",
  href: "https://github.com/gandharvahardikar/Portfolio-of-ML-Implementations",
  dates: "",
  active: true,
  description:
    "A collection of Jupyter Notebook implementations of classical machine learning algorithms from scratch — including Decision Trees, SVMs, and KNN. Built to deeply understand the math and logic behind each model.",
  technologies: [
    "Python",
    "scikit-learn",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Jupyter",
  ],
  links: [
    {
      type: "Source",
      href: "https://github.com/gandharvahardikar/Portfolio-of-ML-Implementations",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "",
  video: "",
}, 
    /// 2
    {
      title: "Personal Portfolio Website",
      href: "https://github.com/gandharvahardikar/heygandharva",
      dates: "",
      active: true,
      description:
        "Personal portfolio website showcasing projects, open source contributions, and professional experience.",
      technologies: [
      "Next.js",
       "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
     ],

      links: [
        {
          type: "Source",
          href: "https://github.com/gandharvahardikar/heygandharva",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },

    {
      title: "PlanSphere AI",
      href: "https://github.com/gandharvahardikar/plansphere-ai",
      dates: "",
      active: true,
      description:
        "An innovative platform that makes the travel planning process less complex and smarter with the usage of artificial intelligence.",
      technologies: [
      "React 19",
       "TypeScript",
      "Tailwind CSS",
      "Google Gemini",
      "Vite",
      "Lucide",
     "Recharts",
     ],

      links: [
        {
          type: "Source",
          href: "https://github.com/gandharvahardikar/plansphere-ai",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Copyright",
          href: "https://drive.google.com/file/d/1Y4LGD26J3F7fuEVt2_h6QNrsV2ox3d6w/view?usp=sharing",
          icon: <Icons.copyright className="size-3" />,
        }
      ],
      image: "",
      video: "",
    },
    

 
],




////OPENN SOURCEEEEEEEEEE
  openSource: [
    {
      title: "Zero Email Client",
      href: "https://github.com/tanayyo1/Zero",
      dates: "",
      active: true,
      description:
        "Contributing to Mail0's Zero, an open source, privacy focused email client. Exploring self-hosting setup and email UX improvements.",
      technologies: ["TypeScript", "React", "Electron", "Node.js"],
      links: [
        {
          type: "My Fork",
          href: "https://github.com/tanayyo1/Zero",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Upstream",
          href: "https://github.com/Mail-0/Zero",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Cal.com",
      href: "https://github.com/tanayyo1/cal.com",
      dates: "",
      active: true,
      description:
        "Contributing to Cal.com, the open source Calendly alternative. Working on scheduling infrastructure and calendar integrations.",
      technologies: ["TypeScript", "Next.js", "Prisma", "tRPC"],
      links: [
        {
          type: "My Fork",
          href: "https://github.com/tanayyo1/cal.com",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Upstream",
          href: "https://github.com/calcom/cal.com",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Rocket.Chat",
      href: "https://github.com/tanayyo1/Rocket.Chat",
      dates: "",
      active: true,
      description:
        "Contributing to Rocket.Chat, open source team communication platform. Exploring real time messaging and enterprise collaboration features.",
      technologies: ["TypeScript", "Meteor", "React", "MongoDB"],
      links: [
        {
          type: "My Fork",
          href: "https://github.com/tanayyo1/Rocket.Chat",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Upstream",
          href: "https://github.com/RocketChat/Rocket.Chat",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],


  /// HACKATHONS
  hackathons: [
    {
      title: "INIT HACKS 2023",
      dates: "2023",
      location: "Dhule, Maharashtra",
      project: "Token Rashan",
      description: "Blockchain-based E-Token QR Ration Distribution System aimed at improving transparency, reducing fraud, and streamlining the Public Distribution System (PDS) in India.",
      image: "inithacks2023.jpg",
      links: [],
    },
  ],
} as const;
