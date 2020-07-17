import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import CreateRoom from "./component/CreateRoom";
class App extends React.Component {
  constructor() {
    super();
    this.rooms = [
      {
        id: 1,
        name: "2 giường đôi lớn",
        typeroom: "Phòng family",
        number: "4 người lớn",
        area: "45m2",
        price: 1500000,
        oldPrice: 1400000,
      },
      {
        id: 2,
        name: "1 giường kingsize",
        typeroom: "Phòng cá nhân",
        number: "1-2 người lớn",
        area: "20m2",
        price: 450000,
        oldPrice: 500000,
      },
    ];
    localStorage.setItem("rooms", JSON.stringify(this.rooms));
  }
  render() {
    return (
      <Router>
        <ul>
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/addRoom">Thêm Phòng</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} exact />
          <Route path="/addRoom" component={CreateRoom} />
        </Switch>
      </Router>
    );
  }
}

export default App;
