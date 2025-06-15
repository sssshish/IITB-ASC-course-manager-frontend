//CourseInstanceList.tsx
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
        <div>
            <h2>Course Instances</h2>
            <input name="year" placeholder="Year" onChange={e => setForm({ ...form, year: e.target.value })} />
            <input name="semester" placeholder="Semester" onChange={e => setForm({ ...form, semester: e.target.value })} />
            <button onClick={fetchInstances}>Fetch</button>
            <ul>
                {instances.map(i => (
                    <li key={`${i.course.id}-${i.year}-${i.semester}`}>
                        <Link to={`/instances/${i.year}/${i.semester}/${i.course.id}`}>
                            {i.course.title} ({i.course.code}) - Year: {i.year}, Sem: {i.semester}
                        </Link>
                        <button onClick={() => deleteInstance(i)}>Delete</button>
                    </li>
                ))}
            </ul>

        </div>
    );
}
