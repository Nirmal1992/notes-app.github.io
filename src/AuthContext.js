import React, { Component } from 'react';

const AuthContext = React.createContext();

class AuthProvider extends Component {
  state = { isAuth: false };

  login = (username, password) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (username === 'admin' && password === 'admin') {
          this.setState({ isAuth: true });
          res({ status: 200 });
        }
        rej({ status: 403 });
      }, 1000);
    });
  };

  logout = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.setState({ isAuth: false });
        res({ status: 200 });
      }, 1000);
    });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          login: this.login,
          logout: this.logout
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer, AuthContext };
