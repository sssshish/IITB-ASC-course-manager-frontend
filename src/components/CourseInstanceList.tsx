// CourseInstanceList.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import type { CourseInstance } from '../types';

export default function CourseInstanceList() {
    const [form, setForm] = useState({ year: '', semester: '' });
    const [instances, setInstances] = useState<CourseInstance[]>([]);

    const fetchInstances = async () => {
        const { year, semester } = form;
        const res = await api.get(`instances/${year}/${semester}/`);
        setInstances(res.data);
    };

    const deleteInstance = async (inst: CourseInstance) => {
        await api.delete(`instances/${inst.year}/${inst.semester}/${inst.course.id}/`);
        setInstances(instances.filter(i => i.course.id !== inst.course.id));
    };

    return (
        <section className="container">
            <h2>Course Instances</h2>
            <form className="styled-form" onSubmit={e => { e.preventDefault(); fetchInstances(); }}>
                <input name="year" placeholder="Year" onChange={e => setForm({ ...form, year: e.target.value })} />
                <input name="semester" placeholder="Semester" onChange={e => setForm({ ...form, semester: e.target.value })} />
                <button type="submit">List instances</button>
            </form>

            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Course Title</th>
                        <th>Year-Sem</th>
                        <th>Code</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {instances.map(i => (
                        <tr key={`${i.course.id}-${i.year}-${i.semester}`}>
                            <td>{i.course.title}</td>
                            <td>{i.year}-{i.semester}</td>
                            <td>{i.course.code}</td>
                            <td>
                                <Link to={`/instances/${i.year}/${i.semester}/${i.course.id}`} className="icon-button">🔍</Link>
                                <button onClick={() => deleteInstance(i)} className="icon-button">🗑️</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
