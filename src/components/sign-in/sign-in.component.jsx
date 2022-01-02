import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle, signInWithEmailAndPassword, auth} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();

        const {email, password} = this.state;

        try{
            await signInWithEmailAndPassword(auth, email, password);
            this.setState({
                email: '',
                password: ''
            })
        }
        catch(e){
            console.error(e);
        }

    }

    handleChange = (event) =>{
        const {value, name} = event.target;

        this.setState({
            [name]: value
        })
    }    

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" label="email" name="email" value={this.state.email} onChange={this.handleChange} required/>
                    <FormInput type="password" label="password" name="password" value={this.state.password} onChange={this.handleChange} required/>
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>

                    </div>
                 </form>
            </div>
        )
    }
}

export default SignIn;