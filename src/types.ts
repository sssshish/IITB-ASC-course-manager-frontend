//types.ts
export interface Course {
    id: number;
    title: string;
    code: string;
    description: string;
}

export interface CourseInstance {
    id: number;
    year: number;
    semester: number;
    course: Course;
}
