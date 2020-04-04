import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logIn } from '../../redux/actions';
import axios from 'axios';

const SignIn = () => {
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onUpdateEmail = (e) => {
        setEmail(e.target.value);
    };

    const onUpdatePassword = (e) => {
        setPassword(e.target.value);
    };

    const checkInputs = (e) => {
        e.preventDefault();

        axios
            .post(
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCInE-qHBls4TBFXVxLEIfELp0G4gEdreg',
                info
            )

            .then((res) => {
                dispatch(logIn());
                console.log(res);
                alert('SUCCES!');
            })
            .catch((err) => {
                console.log(err);
                alert('ERROR!');
            });
        };
        
        const info = {
            email: email,
            password: password,
            returnSecureToken: true,
        };
        
        console.log(isLogged);
    return (
        <div className='user-forms sign-in'>
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

                    <button type='submit' onClick={checkInputs}>
                        Sign in
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

export default SignIn;
