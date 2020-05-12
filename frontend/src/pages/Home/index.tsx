import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { User } from '../../store/ducks/users/types';
import { ApplicationState } from '../../store';

import * as UsersActions from '../../store/ducks/users/actions';

//Styles
import { Container } from './styles';

//Components

//Images
import homeImage from '../../assets/home-image/tickets-events.gif';

/* Tipagens de funções e estados do redux */
interface StateProps {
  users: User[]
}

interface DispatchProps {
  loadUsersRequest(): void
}

interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps

const mapStateToProps = (state: ApplicationState) => ({
  user: state.users.data,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(UsersActions, dispatch)

const Home = (/* props: Props */) => {

/*   useEffect(() => {
    const { loadUsersRequest } = props
    loadUsersRequest()
  }); */

  /* const { users } = props; */

  return(
    <Container>
      <h1>Events</h1>
      <input type="text" placeholder="Password"/>
      <input type="text" placeholder="Username"/>
      <img src={homeImage} alt="home-image" />
      <button>Sign Up</button>
      <button>Sign In</button>
      <section>
        Uma plataforma de interação entre os
        usuários que desejam <br /> participar de eventos e 
        e desenvolver eventos como hackatons <br /> e outros, 
        compartilhar experiências e aprender também, 
        da melhor <br /> e mais divertida maneira possível! Tudo preparado pra você!
      </section>
    </Container>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);