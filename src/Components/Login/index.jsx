import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom';

import { clickJogar } from '../../Redux/actions/user';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [invalidInputs, setInvalidInputs] = useState(true);
  const [redirect, setRedirect] = useState(false);

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
          onClick={() => {
            dispatch(clickJogar(name, email));
            setRedirect(true);
          }}
        >
          Jogar
        </button>
        {redirect && <Redirect to="/game" />}

      </form>

      <button
        data-testid="btn-settings"
        onClick={() => history.push('/settings')}
      >
        Settings
      </button>
      <Link to="/ranking" data-testid="btn-ranking">Ver Ranking</Link>
    </div>
  );
};

export default Login;
