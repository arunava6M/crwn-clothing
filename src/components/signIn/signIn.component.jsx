import React from 'react';
import FormInput from '../form-input/form-input.component';
import './signIn.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.util';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        });
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }


    render() {
        return (
            <div className='signin'>
                <h2>Already have an account ?</h2>
                <span>Sign In with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' label='Email' handleChange={this.handleChange} value={this.state.email} />
                    <FormInput name='password' type='password' label='Password' handleChange={this.handleChange} value={this.state.password} />
                    <div className='buttons'>
                        <CustomButton type='submit' >
                            Sign In
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                            Sign In with Google
                        </CustomButton>
                    </div>


                </form>
            </div>
        );
    }
};



export default SignIn;