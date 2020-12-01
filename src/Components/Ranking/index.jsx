import React from 'react';
import { Link } from 'react-router-dom';

const Ranking = () => {
  return (
    <div>
      <h1 data-testid="ranking-title">Ranking</h1>
      <Link data-testid="btn-go-home" to="/">Ir para o início</Link>
    </div>
  )
}

export default Ranking;
