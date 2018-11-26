import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
import ThemeContext, { themes } from './contexts/ThemeContext';
import MainLayout from './layouts/MainLayout';

class App extends Component {
  state = {
    theme: themes.dark,
    toggleTheme: this.toggleTheme
  };

  toggleTheme = () => {};

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <MainLayout>
          <LoginForm />
        </MainLayout>
      </ThemeContext.Provider>
    );
  }
}

export default App;
