//CourseInstanceDetail.tsx
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

    if (!instance) return <div>Loading...</div>;

    return (
        <div>
            <h2>Course Instance</h2>
            <p><b>Course Title:</b> {instance.course.title}</p>
            <p><b>Course Code:</b> {instance.course.code}</p>
            <p><b>Description:</b> {instance.course.description}</p>
            <p><b>Course ID:</b> {instance.course.id}</p>
            <p><b>Year:</b> {instance.year}</p>
            <p><b>Semester:</b> {instance.semester}</p>
        </div>
    );
}
