import React from 'react';
import ThemeContext from '../contexts/ThemeContext';
import UserContext from "../contexts/UserContext";

const UserProfile = () => (
    <ThemeContext.Consumer>
        {theme => (
            <UserContext.Consumer>
                {user => (
            <div>
                <div>
                    <label style={{color: theme.textColor}}>
                        username
                    </label>
                    <label>{user.username}</label>
                </div>

                <div>
                    <label htmlFor="password" style={{color: theme.textColor}}>
                        password
                    </label>
                    <label>**************</label>
                </div>
            </div>
                )}
            </UserContext.Consumer>)}
    </ThemeContext.Consumer>
);

export default UserProfile;
