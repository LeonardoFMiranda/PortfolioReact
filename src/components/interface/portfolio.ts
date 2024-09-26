export interface Project {
    name: string;
    description: string;
    url: string;
    githubUrl: string;
    image: string;
    tech: string[];
}

export interface MyPortfolio {
    projects: Project[];
}
