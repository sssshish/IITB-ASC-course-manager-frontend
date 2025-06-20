// CourseInstanceForm.tsx
import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import api from '../api';
import { type Course } from '../types';

export default function CourseInstanceForm() {
    const [form, setForm] = useState({ year: '', semester: '', course: '' });
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        api.get('courses/').then((res) => setCourses(res.data));
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await api.post('instances/', {
                year: parseInt(form.year),
                semester: parseInt(form.semester),
                course_id: parseInt(form.course),
            });
            alert('Instance created');
            setForm({ year: '', semester: '', course: '' });
        } catch (err) {
            alert('Error creating instance');
            console.error(err);
        }
    };

    return (
        <section className="container">
            <form className="styled-form" onSubmit={handleSubmit}>
                <select name="course" value={form.course} onChange={handleChange} required>
                    <option value="">Select course</option>
                    {courses.map(course => (
                        <option key={course.id} value={course.id}>
                            {course.title} ({course.code})
                        </option>
                    ))}
                </select>
                <input
                    name="year"
                    placeholder="Year"
                    value={form.year}
                    onChange={handleChange}
                    required
                />
                <input
                    name="semester"
                    placeholder="Semester"
                    value={form.semester}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add instance</button>
            </form>
        </section>
    );
}


// import { useState, type ChangeEvent, type FormEvent } from 'react';
// import api from '../api';

// export default function CourseInstanceForm() {
//     const [form, setForm] = useState({
//         year: '',
//         semester: '',
//         course: '',
//     });

//     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//             await api.post('instances/', {
//                 year: parseInt(form.year),
//                 semester: parseInt(form.semester),
//                 course: parseInt(form.course),
//             });
//             alert('Instance created');
//         } catch (error) {
//             console.error('Error creating instance:', error);
//             alert('Failed to create instance');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 name="year"
//                 type="number"
//                 placeholder="Year"
//                 onChange={handleChange}
//                 required
//             />
//             <input
//                 name="semester"
//                 type="number"
//                 placeholder="Semester"
//                 onChange={handleChange}
//                 required
//             />
//             <input
//                 name="course"
//                 type="number"
//                 placeholder="Course ID"
//                 onChange={handleChange}
//                 required
//             />
//             <button type="submit">Create Instance</button>
//         </form>
//     );
// }
