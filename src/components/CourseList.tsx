//CourseList.tsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import type { Course } from '../types';

export default function CourseList() {
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        api.get('courses/').then(res => setCourses(res.data));
    }, []);

    const deleteCourse = async (id: number) => {
        await api.delete(`courses/${id}/`);
        setCourses(courses.filter(c => c.id !== id));
    };

    return (
        <div>
            <h2>Courses</h2>
            <ul>
                {courses.map(c => (
                    <li key={c.id}>
                        <Link to={`/course/${c.id}`}>{c.title}</Link>
                        <button onClick={() => deleteCourse(c.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
