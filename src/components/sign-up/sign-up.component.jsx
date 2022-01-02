import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, createUserProfileDocument, createUserWithEmailAndPassword} from "../../firebase/firebase.utils";

import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(props){
        super();
        this.state = {
            displayName : '',
            password : '',
            confirmPassword : '',
            email : ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("Passwords don't match");
            return;
        }

        try{
            const {user} = await createUserWithEmailAndPassword(auth, email, password);
            const userAuth = {...user, displayName};
            console.log('Firebase auth response: '+user);
            console.log(userAuth);
            await createUserProfileDocument(userAuth);

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
              });
        }
        catch(e){
            console.error("Error: "+e);
        }
    }

    handleChannge = event => {
        const {name, value} = event.target;
        this.setState({[name] : value});
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput
                        type = 'email'
                        label = 'Email'
                        name = 'email'
                        value = {email}
                        handleChange = {this.handleChannge}
                        required
                    />
                    <FormInput
                        type = 'text'
                        label = 'Name'
                        name = 'displayName'
                        value = {displayName}
                        handleChange = {this.handleChannge}
                        required
                    />
                    <FormInput
                        type = 'password'
                        label = 'Password'
                        name = 'password'
                        value = {password}
                        handleChange = {this.handleChannge}
                        required
                    />
                    <FormInput
                        type = 'password'
                        label = 'Confirm password'
                        name = 'confirmPassword'
                        value = {confirmPassword}
                        handleChange = {this.handleChannge}
                        required
                    />
                    <CustomButton type = 'Submit'> SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;