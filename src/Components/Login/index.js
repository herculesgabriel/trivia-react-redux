import React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { clickJogar } from '../../Redux/actions/user'
import { Redirect } from 'react-router-dom'

const Login = (props) => {
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

        <button type="button" onClick={() => {
          props.clickJogar(name, email)
          setRedirect(true)
        }} disabled={invalidInputs} data-testid="btn-play">
          Jogar
        </button>
        {redirect && <Redirect to="/jogo" />}
      </form>
    </div>
  );
};


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  clickJogar: (name, email) => dispatch(clickJogar(name, email)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
