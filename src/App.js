import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react'
import Checkout from './Checkout';
import Login from "./Login";
import Payment from './Payment';
import Orders from './Orders';
import { auth, db } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  "pk_test_rQwydFHO6L1P099hhPUIlTCr00zAp2Ojjx"
);

function App() {

  const [profile, setProfile] = useState([]);
  const [products, setProducts] = useState([]);
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {


    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      // user is logged in
      dispatch({
        type: "SET_USER",
        user: authUser ? authUser : null
      })
    })

    return () => {
      // any cleanup
      unsubscribe()
    }
  }, [])

  useEffect(() => {
    if (user && profile) {
      db.collection('users').doc(user?.uid).collection('profile')
        .onSnapshot(snapshot => (
          setProfile(snapshot.docs.map(doc => doc.data()))
        ))
    }
    else
      setProfile([])

    if (user && products) {
      db.collection('products').doc().collection('products')
        .onSnapshot(snapshot => (
          setProducts(snapshot.docs.map(doc => doc.data()))
        ))
    }
    else
      setProducts([])
  }, [user])

  useEffect(() => {
    dispatch({
      type: "SET_PROFILE",
      userName: profile[0],
    });
  }, [profile])

  console.log(products)


  return (
    <Router>
    <div className="app">
    
    <Switch>
      <Route path="/orders">
        <Header />
        <Orders />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/checkout">
        <Header/>
        <Checkout />
      </Route>
      <Route path="/payment">
        <Header/>
        <Elements stripe={promise}>
          <Payment />
        </Elements>
        <Home />
      </Route>
    </Switch>
    </div> 
    </Router>
  );
}

export default App;
