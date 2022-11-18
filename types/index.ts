interface Project {
    id: number
    projectName: string
    students: Student[]
    videoUrl: string
    repositoryUrl: string
}

interface Student {
    id: string
    name: string
    department: string
}

export type { Project }
