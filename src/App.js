import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// Switch renders the first matched path
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
  // Preventing JS memory leaks
  unsubscribeFromAuth = null

  // Messaging between app and firebase when any changes happens
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      else {
        this.setState({currentUser: userAuth });
      }
    });
  }

  // LifeCycle method Close the subscrition
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component= {HomePage} />
          <Route path='/shop' component= {ShopPage} />
          <Route path='/signin' component= {SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}
export default App;
