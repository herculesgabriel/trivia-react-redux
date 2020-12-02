import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const { avatarUrl, userName } = useSelector((state) => state.user);
  const { score } = useSelector((state) => state.session);

  return (
    <header>
      <img data-testid="header-profile-picture" src={avatarUrl} alt="avatar" />
      <h1 data-testid="header-player-name">Nome: {userName}</h1>
      <h2 data-testid="header-score">{score}</h2>
    </header>
  );
};

export default Header;
