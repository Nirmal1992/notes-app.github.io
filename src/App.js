import React from 'react';
import NoteContainer from './components/NoteContainer';
import Login from './components/Login';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';
import './App.scss';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className='App container my-5'>
          <Switch>
            <Route path='/' exact>
              <Redirect to='/login' />
            </Route>
            <Route path='/login' component={Login} />
            <ProtectedRoute component={NoteContainer} path='/notes' />
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
