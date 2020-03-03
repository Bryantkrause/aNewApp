import React from 'react';
import { Container } from '@material-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ReportPage from './pages/ReportPage'


function App(props) {


  return (
    <Container>
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ ReportPage } {...props} />
          </Switch>
      </BrowserRouter>
    </Container>
  )

  
}

export default App
