import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/signInSignUpPage/signInSignUpPage.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { SetCurrentUser } from './redux/user/user.actions';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const { SetCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          SetCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      }
      SetCurrentUser(userAuth);

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' render={() => this.props.currentUser ? <Redirect to='/' /> : (<SignInSignUpPage/>)} />
        </Switch>

      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProp = dispatch => ({
  SetCurrentUser: user => dispatch(SetCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProp)(App);
