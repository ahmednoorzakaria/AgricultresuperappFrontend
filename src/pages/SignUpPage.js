import React, { useState } from 'react';

function SignUp() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        profile_picture: "https://cdn-icons-png.flaticon.com/512/3319/3319220.png",
        username: '',
        email: '',
        password: '',
        confirm_password: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.first_name });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

return (
    <form onSubmit={handleSubmit}>
        <input type="first_name" name="first_name" onChange={handleChange} placeholder="First Name" required />
        <input type="last_name" name="last_name" onChange={handleChange} placeholder="Last Name" required />
        <input type="username" name="username" onChange={handleChange} placeholder="UserName" required />
        <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
        <input type="password" name="password" onChange={handleChange} placeholder="Password" required />
        <input type="password" name="password" onChange={handleChange} placeholder="Confirm Password" required />
        <button type="submit">Sign Up</button>
    </form>
   );
}
export default SignUp;