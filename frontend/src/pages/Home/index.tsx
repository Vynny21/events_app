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
import homeImage from '../../assets/home-image/interact.gif';

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
      <img src={homeImage} alt="home-image" />
    </Container>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);