// CourseForm.tsx
import { useState, type ChangeEvent, type FormEvent } from 'react';
import api from '../api';

export default function CourseForm() {
    const [form, setForm] = useState({
        title: '',
        code: '',
        description: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await api.post('courses/', form);
            alert('Course created');
            setForm({ title: '', code: '', description: '' });
        } catch (error) {
            console.error('Failed to create course:', error);
            alert('Error creating course');
        }
    };

    return (
        <section className="container">
            <form className="styled-form" onSubmit={handleSubmit}>
                <input
                    name="title"
                    placeholder="Course title"
                    value={form.title}
                    onChange={handleChange}
                    required
                />
                <input
                    name="code"
                    placeholder="Course code"
                    value={form.code}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Course description"
                    value={form.description}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add course</button>
            </form>
        </section>
    );
}
