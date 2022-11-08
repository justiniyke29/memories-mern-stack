import React from 'react';
import { Container} from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from './components/Navbar/Navbar'; 
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
  //const Google_OAuth_ClientId = process.env.Google_OAuth_ClientId;
  return  (
    <BrowserRouter>
      <Container maxWidth='lg'>
      <GoogleOAuthProvider clientId = '473004543329-qkk9u4p3mtrpjght3dc7qq1f71jr542b.apps.googleusercontent.com' >
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/auth' exact component={Auth} />
        </Switch>
        </GoogleOAuthProvider>
      </Container>
    </BrowserRouter>

  )
}

export default App