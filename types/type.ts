export interface Project{
    image?: string,
    logo?: string,
    title: string,
    description: string,
    previewLink?: string,
    gitLink: string,
    techStack: Array<String>
  }

export interface Skills{
  title: string
  techList: Array<String>
}