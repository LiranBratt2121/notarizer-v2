import React, { useEffect } from 'react';
import { useState } from 'react';
import 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { browserLocalPersistence, getAuth, onAuthStateChanged, setPersistence, signInWithEmailAndPassword } from 'firebase/auth';
import FormSection from '../../components/formSection/FormSection';
import { FormContent } from '../../components/formSection/types';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const auth = getAuth()
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/dashboard');
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [auth, navigate]);

    const handleSubmit = async (formData: Record<string, string>) => {
        setLoading(true);

        const { email, password } = formData;
        try {
            await setPersistence(auth, browserLocalPersistence);
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/dashboard');
        } catch (error) {
            alert('Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const forms: FormContent = [
        [
            {
                name: 'email',
                lable: 'Email Address',
                type: 'email',
                required: true,
            },
            {
                name: 'password',
                lable: 'Password',
                type: 'password',
                required: true
            },
        ]
    ];

    return (
        <>
            <FormSection
                title="Login to Your Account"
                subTitle="Enter your email and password to log in."
                forms={forms}
                handleSubmit={handleSubmit}
            />
            {loading && <p>Loading...</p>}
        </>
    );
};

export default Login;
