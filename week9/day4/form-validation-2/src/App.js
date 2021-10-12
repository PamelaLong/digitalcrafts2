import Login from './components/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Account from './components/Account';
import Garage from './components/Garage';
import Dashboard from './components/Dashboard';
// import Body from './components/Home';
// import ErrorPage from './components/ErrorPage';
// import Redirect from './components/ErrorPage';
import { MainContainer } from './styled-components/AppStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { useState } from 'react';



function App() {
  // const [viewSidebar, setViewSidebar] = useState(true);
// const [loggedIn, setLoggedIn] = useState(false);
// const register = true;
//only goes to dashboard when someone is logged in

// const user = JSON.parse(localStorage.getItem("supabase.auth.token"));
  return (
    <Router>
      <Switch>

      <Route path="/Login">
          <Login/>
        </Route>

      <MainContainer>
        <Header/>
        <Sidebar/>
        
        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/Dashboard">
          <Dashboard />
        </Route>
        
        <Route path="/Account">
          <Account/>
        </Route>
        
        <Route path="/Garage">
          <Garage/>
        </Route>

        {/* <Route path="*">
          <Redirect to="/errorpage" />
        </Route>
        <Route path="/errorpage">
          <ErrorPage />
        </Route> */}
      
      </MainContainer>
      </Switch>
      </Router>
    
  );
}

export default App;
