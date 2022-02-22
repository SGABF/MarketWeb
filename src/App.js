import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

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
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
