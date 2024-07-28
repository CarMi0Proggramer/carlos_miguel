/// <reference types="astro/client" />

type Project = {
    title: string,
    body: string,
    image: string,
    repository: string,
    preview?: string,
    skills: SkillData[]
}

type SkillData = {
    name: string,
    path: string
}