import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [invalidInputs, setInvalidInputs] = useState(true);

  useEffect(() => {
    if (name.length > 0 && email.length > 0) setInvalidInputs(false);
  }, [name, email]);

  return (
    <div>
      <h1>Login</h1>

      <form>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={({ target }) => setName(target.value)}
            data-testid="input-player-name"
          />
        </label>

        <label htmlFor="email">
          E-mail
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            data-testid="input-gravatar-email"
          />
        </label>

        <button
          type="button"
          disabled={invalidInputs}
          data-testid="btn-play"
        >
          Jogar
        </button>
      </form>

      <button
        data-testid="btn-settings"
        onClick={() => history.push('/settings')}
      >
        Settings
      </button>
    </div>
  );
};

export default Login;
