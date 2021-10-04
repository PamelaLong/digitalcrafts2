import Form from './components/Form';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import ErrorPage from './components/ErrorPage';
import { Redirect } from './components/ErrorPage';
import { MainContainer } from './styled-components/AppStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [viewSidebar, setViewSidebar] = useState(true);
  
  return (
    <Router>
      <Switch>
      <MainContainer>
        <Header viewSidebar={viewSidebar} setViewSidebar={setViewSidebar} /><Sidebar viewSidebar={viewSidebar}/>
        <Sidebar/>
        
        <Route path="/form">
          <Form/>
        </Route>
        
        <Route exact path="/">
          <Home/>
        </Route>
        
        <Route path="/Dashboard">
          <Dashboard />
        </Route>

        <Route path="*">
          <Redirect to="/errorpage" />
        </Route>
        <Route path="/errorpage">
          <ErrorPage />
        </Route>
        
      </MainContainer>
      </Switch>
      </Router>
    
  );
}

export default App;
