import React, { useEffect } from "react";
import Header from "./Header";
import Home from "pages/Home";
import Checkout from "pages/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "pages/Login";
import { useStateValue } from "./StateProvider";
import Navbar from './Navbar';
import Girl from "../Category/Girl";
import Man from "../Category/Man";
import Electronics from "../Category/Electronics";
import Food from "../Category/Food";

function App() {
  const [{}, dispatch] = useStateValue();
  /*  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("사용자는 다음과 같습니다", authUser);
      if (authUser) {
        //유저가 방금 로그인하거나 이미 한상태
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //사용자가 로그아웃 되었을때
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
      
    });
  }, []); 
} */
  return (

    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">

            <Home />
          </Route>

          <Route path="/checkout">

            <Checkout />
          </Route>
          <Route path="/Man" component={Man}/>
          <Route path="/Girl" component={Girl}/>
          <Route path="/grocery" component={Food}/>
          <Route path="/Electronics" component={Electronics}/>
        </Switch>
      </div>
      {/*<Navbar />*/}
      {/*<Switch>*/}
      {/*  <Route path="/" exact component={Home} />*/}
      {/*  <Route path="/Man" component={Man} />*/}
      {/*  <Route path="/Girl" component={Girl} />*/}
      {/*  <Route path="/grocery" component={Food} />*/}
      {/*  <Route path="/Electronics" component={Electronics} />*/}
      {/*</Switch>*/}
    </Router>


  );
}

export default App;
