import React from 'react';
import { connect } from 'react-redux';

const Header = (props) => {
    return (<header>
        <img data-testid="header-profile-picture" src={props.avatarUrl} alt="" />
        <h1 data-testid="header-player-name">Nome: {props.userName}</h1>
        <h2 data-testid="header-score" >Placar: {props.score}</h2>
    </header>)
}

const mapStateToProps = (state) => ({
    avatarUrl: state.user.avatarUrl,
    userName: state.user.userName,
    score: state.session.score,
})

export default connect(mapStateToProps)(Header)