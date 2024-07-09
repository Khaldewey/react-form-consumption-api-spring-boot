import React, { useState } from 'react';
import './styles.css'
const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/api/form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            setFormData({
                name: '',
                email: '',
                message: ''
            });
            alert('Form submitted successfully!');

        } else {
            alert('Error submitting form');
        }
    };

    return (
        <>
      
        <form onSubmit={handleSubmit}>
            <h1>Contato</h1>
            <div>
                <label>Nome</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
                <label>E-mail</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Mensagem</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required />
            </div>
            <button type="submit">Enviar</button>
        </form>
        </>
    );
};

export default Form;