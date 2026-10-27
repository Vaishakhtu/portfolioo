import chronova from "@/assets/chronova.jpg";
import interior from "@/assets/interior.jpg";

export const profile = {
  name: "Vaishak T U",
  shortName: "Vaishak",
  headline: "Aspiring Software Tester | Web Developer | Creative Problem Solver",
  location: "Kerala, India",
  email: "",
  github: "",
  linkedin: "",
  instagram: "",
  resumeUrl: "",
  photoUrl: "",
};

export const roles = ["Software Tester", "Web Developer", "Automation Testing Learner", "Creative Developer"];
export const projectCategories = ["All Projects", "Web Development", "Mobile Applications", "Games", "Software Testing"] as const;
export type ProjectCategory = (typeof projectCategories)[number];
export type Project = {
  id: string; name: string; subtitle: string; category: Exclude<ProjectCategory, "All Projects">;
  description: string; technologies: string[]; features: string[]; objective: string;
  problem: string; learning: string[]; image?: string; visual: string;
  status: "Concept" | "Live project" | "Learning project" | "Practice portfolio";
  liveUrl?: string; githubUrl?: string; screenshots: string[];
};

export const projects: Project[] = [
  {
    id: "chronova", name: "CHRONOVA", subtitle: "Premium Watch Shopping App", category: "Mobile Applications",
    description: "A luxury watch shopping application concept focused on premium branding, elegant product presentation, and a modern shopping experience.",
    technologies: ["React Native", "Expo", "TypeScript", "React Navigation", "AsyncStorage"],
    features: ["Luxury black-and-gold interface", "Watch product listings and details", "Shopping cart concept", "Responsive shopping experience", "Reusable navigation components"],
    problem: "How can a mobile shopping experience communicate the craftsmanship and character of luxury watches?",
    objective: "Explore an elegant, product-focused mobile shopping concept.", learning: ["Mobile interface design", "Product presentation", "Navigation and local-storage concepts"],
    image: chronova, visual: "watch", status: "Concept", screenshots: [],
  },
  {
    id: "snake-apple", name: "Snake Apple", subtitle: "A classic, reimagined for the browser", category: "Games",
    description: "A browser-based snake game where players control a snake, collect apples, and aim for a higher score.",
    technologies: ["HTML", "CSS", "JavaScript"], features: ["Interactive snake movement", "Apple collection and scoring", "Keyboard controls", "Game-over handling", "Responsive gameplay interface"],
    problem: "Create an approachable browser experience around the classic snake game.", objective: "Practice interactive gameplay using core web technologies.",
    learning: ["Keyboard interaction", "Game state and scoring", "Browser-based rendering"], visual: "snake", status: "Live project", liveUrl: "https://snakewith.netlify.app/", screenshots: [],
  },
  {
    id: "top-x", name: "TOP X Interior", subtitle: "Spaces that tell a story", category: "Web Development",
    description: "A digital presence concept for an interior design and architecture brand, emphasizing elegant visual presentation and brand identity.",
    technologies: ["HTML", "CSS", "JavaScript"], features: ["Luxury black-and-gold branding", "Responsive layout", "Interior project gallery", "Service presentation", "Contact section"],
    problem: "Translate a physical design aesthetic into a distinctive digital brand.", objective: "Explore a refined interior design website concept.",
    learning: ["Visual hierarchy", "Responsive composition", "Brand-focused web design"], image: interior, visual: "interior", status: "Concept", screenshots: [],
  },
  {
    id: "fortitude", name: "Fortitude Institute", subtitle: "A digital home for learning", category: "Web Development",
    description: "A website concept for an educational institute offering technology and digital marketing learning opportunities.",
    technologies: ["HTML", "CSS", "JavaScript"], features: ["Course information", "About and contact sections", "Responsive navigation", "Student-focused content"],
    problem: "Help prospective students find and understand learning opportunities.", objective: "Explore clear, accessible educational website layouts.",
    learning: ["Information architecture", "Student-focused content", "Responsive navigation"], visual: "education", status: "Concept", screenshots: [],
  },
  {
    id: "selenium", name: "Selenium Automation", subtitle: "Building confidence through testing", category: "Software Testing",
    description: "Browser automation exercises and testing scripts while learning Selenium WebDriver with Java and TestNG.",
    technologies: ["Java", "Selenium", "TestNG"], features: ["Browser interactions", "Web element identification", "Search and login workflow exercises", "TestNG annotations and assertions", "Screenshot capture"],
    problem: "Explore repeatable checks for common web application interactions.", objective: "Practice automation fundamentals in a learning environment.",
    learning: ["WebDriver fundamentals", "Assertions and annotations", "Test execution and reporting"], visual: "automation", status: "Learning project", screenshots: [],
  },
  {
    id: "manual-testing", name: "Manual Testing Practice", subtitle: "A thoughtful approach to quality", category: "Software Testing",
    description: "A practice portfolio for test design, defect identification, and structured quality assurance documentation.",
    technologies: ["Test Cases", "Bug Reports", "SDLC / STLC"], features: ["Test scenarios, cases and data", "Bug reporting", "Test execution results", "Smoke and regression testing", "Boundary Value Analysis"],
    problem: "Develop a systematic approach to finding defects and documenting quality.", objective: "Organize clearly labeled practice tests for anonymized sample applications.",
    learning: ["Structured test design", "Defect documentation", "Boundary value analysis"], visual: "testing", status: "Practice portfolio", screenshots: [],
  },
];

export const skillGroups = [
  { name: "Programming", icon: "code", skills: ["Java", "JavaScript", "HTML5", "CSS3"] },
  { name: "Software Testing", icon: "shield", skills: ["Manual Testing", "Test Case Design", "Test Scenarios", "Bug Reporting", "SDLC and STLC", "Smoke Testing", "Sanity Testing", "Regression Testing", "Retesting", "Boundary Value Analysis"] },
  { name: "Automation Testing", icon: "terminal", skills: ["Selenium WebDriver", "TestNG", "WebDriver automation", "TestNG annotations", "Assertions", "Data-driven testing fundamentals", "Screenshot capture", "Test execution and reporting"] },
  { name: "Tools & Technologies", icon: "tools", skills: ["Git and GitHub", "Chrome DevTools", "VS Code", "Eclipse", "Basic API testing concepts"] },
];

export const journey = [
  { date: "", title: "Starting with the fundamentals", description: "Learning programming fundamentals and building a foundation in logical thinking." },
  { date: "", title: "Discovering the web", description: "Practicing HTML, CSS, and JavaScript to turn ideas into interactive pages." },
  { date: "", title: "From ideas to projects", description: "Exploring web and mobile application projects and user-focused interfaces." },
  { date: "", title: "Developing a quality mindset", description: "Learning manual software testing, test design, and defect reporting." },
  { date: "", title: "Exploring automation", description: "Practicing Java, Selenium WebDriver, and TestNG automation." },
  { date: "", title: "Ready for what's next", description: "Preparing for software testing and web development opportunities." },
];

export function filterProjects(category: ProjectCategory) {
  return category === "All Projects" ? projects : projects.filter(project => project.category === category);
}

export function safeExternalUrl(value?: string): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.href : undefined;
  } catch { return undefined; }
}