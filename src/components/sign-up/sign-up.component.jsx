import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';


class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName:'',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit=async event=>{
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert("password doesn't match");
            return;
        }

        try{
            const {user} =await auth.createUserWithEmailAndPassword(email,password)

            await createUserProfileDocument(user,{displayName});
            this.setState(
                {
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }
            );
        }catch(error){
            console.log(error);
        }

    }

    handleChange=event=>{
        const {name,value} = event.target;
        this.setState(
            {[name]:value}
        );
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='signUp'>
                <h2 classsName='title'>
                    I do not have an account
                </h2>
                <span> Sign Up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>

                <FormInput name='displayName' 
                type='text' 
                label='Display Name' 
                onChange={this.handleChange} 
                value={displayName} />

                <FormInput name='email' 
                type='email' 
                label='Email' 
                onChange={this.handleChange} 
                value={email} />

                <FormInput name='confirmPassword' 
                type='password' 
                label='Confirm Password' 
                onChange={this.handleChange} 
                value={confirmPassword} />

                <FormInput name='password' 
                type='password' 
                label='Password' 
                onChange={this.handleChange} 
                value={password} />

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
} ;

export default SignUp;