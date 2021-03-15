

import React from "react"
import { Container } from 'react-bootstrap';
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import HomeScreen from "./Screens/HomeScreen.js"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ProductScreen from "./Screens/ProductScreen.js"

function App() {
  return (

   <Router>
   <Header/>
    <main className="py-3">
      <Container>
        <Route path="/" component={HomeScreen} exact/>
        <Route path="/product/:id" component={ProductScreen} />
      </Container>
    </main>
    <Footer/>
  </Router>
  );
}

export default App;
