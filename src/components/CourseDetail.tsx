// CourseDetail.tsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../api';
import { type Course } from "../types";

export default function CourseDetail() {
    const { id } = useParams();
    const [course, setCourse] = useState<Course | null>(null);

    useEffect(() => {
        api.get(`courses/${id}/`).then(res => setCourse(res.data));
    }, [id]);

    if (!course) return <div>Loading...</div>;

    return (
        <section className="container">
            <div>
                <h2>{course.title}</h2>
                <p><b>Code:</b> {course.code}</p>
                <p><b>Description:</b> {course.description}</p>
            </div>
        </section>

    );
}
