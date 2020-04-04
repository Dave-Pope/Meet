import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repPassword, setRepPassword] = useState('');

    const onUpdateEmail = (e) => {
        setEmail(e.target.value);
    };

    const onUpdatePassword = (e) => {
        setPassword(e.target.value);
    };

    const onUpdateRepPassword = (e) => {
        setRepPassword(e.target.value);
    };

    const checkInputs = (e) => {
        const password = document.getElementById('password').value;
        const repPassword = document.getElementById('repPassword').value;

        if (password === repPassword) {
            axios
                .post(
                    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCInE-qHBls4TBFXVxLEIfELp0G4gEdreg',
                    info
                )

                .then((res) => {
                    console.log(res);
                    alert('SUCCES!');
                })
                .catch((err) => {
                    console.log(err);
                    alert('ERROR!');
                });
        } else {
            alert('ERROR! Passwords do not match.');
        }
    };

    const info = {
        email: email,
        password: password,
        returnSecureToken: true,
    };

    return (
        <div className='user-forms sign-up'>
            <div className='background'>
                <img src={require('../../assets/images/forms-background.jpg')} alt='' />
            </div>

            <div className='cnv'>
                <h1>meet.</h1>

                <form>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={email}
                        onChange={onUpdateEmail}
                        placeholder='you@example.com'
                    />
                    <input
                        type='password'
                        id='password'
                        name='password'
                        value={password}
                        onChange={onUpdatePassword}
                        placeholder='Password'
                    />
                    <input
                        type='password'
                        id='repPassword'
                        name='repPassword'
                        value={repPassword}
                        onChange={onUpdateRepPassword}
                        placeholder='Repeat password'
                    />
                    <button type='submit' onClick={checkInputs}>
                        Sign up
                    </button>
                </form>

                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, soluta
                    veritatis molestias consequatur sit molestiae.
                </p>
            </div>
        </div>
    );
};

export default SignUp;
