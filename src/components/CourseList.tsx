// CourseList.tsx
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
        <section className="container">
            <h2>Course List</h2>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Course Title</th>
                        <th>Code</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => (
                        <tr key={course.id}>
                            <td>{course.title}</td>
                            <td>{course.code}</td>
                            <td>
                                <Link to={`/course/${course.id}`} className="icon-button">🔍</Link>
                                <button onClick={() => deleteCourse(course.id)} className="icon-button">🗑️</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
