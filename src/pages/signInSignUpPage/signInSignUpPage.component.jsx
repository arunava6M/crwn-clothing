import React from 'react';
import './signInSignUpPage.styles.scss';
import SignIn from '../../components/signIn/signIn.component';
import SignUp from '../../components/sign-up/sign-up.component';

const signInSignUpPage = () => (
    <div className='signInSignUp'>
        
        <SignIn />
        
        <SignUp />
    </div>
);

export default signInSignUpPage;