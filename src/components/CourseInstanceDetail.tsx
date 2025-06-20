// CourseInstanceDetail.tsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../api';
import { type CourseInstance } from '../types';

export default function CourseInstanceDetail() {
    const { year, semester, id } = useParams();
    const [instance, setInstance] = useState<CourseInstance | null>(null);

    useEffect(() => {
        api.get(`instances/${year}/${semester}/${id}/`).then(res => setInstance(res.data));
    }, [year, semester, id]);

    if (!instance) return <div className="container">Loading...</div>;

    return (
        <section className="container">
            <h2>Course Instance</h2>
            <p><strong>Course Title:</strong> {instance.course.title}</p>
            <p><strong>Course Code:</strong> {instance.course.code}</p>
            <p><strong>Description:</strong> {instance.course.description}</p>
            <p><strong>Course ID:</strong> {instance.course.id}</p>
            <p><strong>Year:</strong> {instance.year}</p>
            <p><strong>Semester:</strong> {instance.semester}</p>
        </section>
    );
}
