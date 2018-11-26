import React, {Component} from 'react';
import LoginForm from './components/LoginForm';
import UserProfile from './components/UserProfile';
import Button from './components/Button'
import ThemeContext, {themes} from './contexts/ThemeContext';
import UserContext, {userDatas} from './contexts/UserContext';
import MainLayout from './layouts/MainLayout';

class App extends Component {
    toggleTheme = () => {
        this.setState(state => (
            {
                currentTheme:
                    {
                        theme: state.currentTheme.theme === themes.dark ? themes.light : themes.dark,
                        toggleTheme: state.currentTheme.toggleTheme
                    }
            }));
    };

    logUser = (username) => {
        this.setState(state => ({
            currentUser:
                {
                    username: username,
                    isLoggedIn: true,
                    toggleTheme: state.currentUser.toggleTheme,
                    logUser: state.currentUser.logUser
                }
        }));
    };

    state = {
        currentTheme: {
            theme: themes.dark,
            toggleTheme: this.toggleTheme
        },
        currentUser: {
            user: userDatas.username,
            isLoggedIn: userDatas.isLoggedIn,
            logUser: this.logUser
        }
    };

    render() {
        return (
            <ThemeContext.Provider value={this.state.currentTheme}>
                <UserContext.Provider value={this.state.currentUser}>
                    <MainLayout>
                        <div style={{position: 'fixed', left: 10, top: 0}}>
                            <Button onClick={this.state.currentTheme.toggleTheme.bind(this)}>Toggle</Button>
                        </div>
                        {
                            !this.state.currentUser.isLoggedIn ?
                                <LoginForm onSubmit={(username, password) => this.logUser(username)}/> :
                                <UserProfile/>
                        }
                    </MainLayout>
                </UserContext.Provider>
            </ThemeContext.Provider>
        );
    }

    b
}

export default App;
