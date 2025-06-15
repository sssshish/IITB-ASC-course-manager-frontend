//CourseForm.tsx
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
        } catch (error) {
            console.error('Failed to create course:', error);
            alert('Error creating course');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Course</h2>
            <input
                name="title"
                placeholder="Title"
                onChange={handleChange}
                required
            />
            <input
                name="code"
                placeholder="Code"
                onChange={handleChange}
                required
            />
            <textarea
                name="description"
                placeholder="Description"
                onChange={handleChange}
                required
            />
            <button type="submit">Create Course</button>
        </form>
    );
}
