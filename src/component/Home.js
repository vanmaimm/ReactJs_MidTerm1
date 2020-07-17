import React, { Component } from "react";
import "./hotel.css";
import Room from "./Room";
class Home extends Component {
  onBookCliked(room) {
    return (event) => {
      alert("Bạn đã đặt phòng " + room.name + " thành công!");
    };
  }
  render() {
    let rooms = JSON.parse(localStorage.getItem("rooms"));
    // console.log(rooms);
    return (
      <div className="Room">
        {rooms.map((room, key) => (
          <Room key={key} room={room} onClick={this.onBookCliked(room)} />
        ))}
      </div>
    );
  }
}

export default Home;
