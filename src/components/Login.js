import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const Login = () => {
  const context = useContext(AuthContext);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please enter username and password.');
      return;
    }
    setIsLoading(true);
    try {
      await context.login(username, password);
    } catch (e) {
      setIsLoading(false);
      setError('Please enter valid credentials');
      return;
    }
    setIsLoading(false);
    history.push('/notes');
  };

  return isLoading ? (
    <div>
      <img src='loading.gif' alt='loading' className='mx-auto d-block' />
    </div>
  ) : (
    <div className=' d-flex align-items-center h90 justify-content-center'>
      <form onSubmit={handleSubmit} className='login-form'>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          id='username'
          name='username'
          className='form-control'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          name='password'
          className='form-control mb-5'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' className='btn btn-primary btn-lg btn-block-r'>
          Login
        </button>
        {error && <div className='alert alert-danger mt-5'>{error}</div>}
      </form>
    </div>
  );
};

export default Login;
