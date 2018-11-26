import React, {Component} from 'react';
import ThemeContext from '../contexts/ThemeContext';
import UserContext from '../contexts/UserContext';
import Button from './Button';

export default class LoginForm extends Component {
    username = undefined;
    password = undefined;

    usernameRefHandler(node){
       if (node && !this.username)
           this.username = node;
    }

    passwordRefHandler(node){
        if (node && !this.password)
            this.password = node;
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {theme => (
                            <div>
                                <div>
                                    <label htmlFor="username" style={{color: theme.textColor}}>
                                        username
                                    </label>
                                    <input name="username" id="username" ref={this.usernameRefHandler.bind(this)}/>
                                </div>

                                <div>
                                    <label htmlFor="password" style={{color: theme.textColor}}>
                                        password
                                    </label>
                                    <input name="password" id="password" ref={this.passwordRefHandler.bind(this)}/>
                                </div>

                                <Button
                                    backgroundColor={theme.linkColor}
                                    textColor={theme.backgroundColor}
                                    onClick={() => this.props.onSubmit(this.username.value, this.password.value)}
                                >
                                    login
                                </Button>
                            </div>
                        )}
            </ThemeContext.Consumer>
        );
    }
}
