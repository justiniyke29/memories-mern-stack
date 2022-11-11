import React from 'react';
import { Container} from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from './components/Navbar/Navbar'; 
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
  const Google_OAuth_ClientId = process.env.REACT_APP_Google_OAuth_ClientId;
  return  (
    <BrowserRouter>
      <Container maxWidth='lg'>
      <GoogleOAuthProvider clientId ={Google_OAuth_ClientId} >
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