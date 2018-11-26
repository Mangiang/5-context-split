import React, {Component} from 'react';
import LoginForm from './components/LoginForm';
import Button from './components/Button'
import ThemeContext, {themes} from './contexts/ThemeContext';
import MainLayout from './layouts/MainLayout';

class App extends Component {
    toggleTheme() {
        this.setState(state => ({theme: state.theme === themes.dark ? themes.light : themes.dark}))
    };

    state = {
        theme: themes.dark,
        toggleTheme: this.toggleTheme
    };

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                <MainLayout>
                    <Button onClick={this.state.toggleTheme.bind(this)}>Toggle</Button>
                    <LoginForm/>
                </MainLayout>
            </ThemeContext.Provider>
        );
    }
}

export default App;
