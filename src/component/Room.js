import React, { Component } from "react";
import "./hotel.css";

class Room extends Component {
  render() {
    const { room, onClick } = this.props;
    return (
      <div>
        <h4>{room.name}</h4>
        <table>
          <tr>
            <td>PHÒNG</td>
            <td>{room.typeroom}</td>
          </tr>
          <tr>
            <td>CHỖ NGHỈ</td>
            <td>{room.number}</td>
          </tr>
          <tr>
            <td>KÍCH THƯỚC</td>
            <td>{room.area}</td>
          </tr>
          <tr>
            <td>GIÁ PHÒNG</td>
            <td>{room.price}</td>
          </tr>
          {room.oldPrice && (
            <tr>
              <td>GIÁ CŨ</td>
              <td>{room.oldPrice}</td>
            </tr>
          )}
          <tr>
            <td>XEM</td>
            <td>
              <button onClick={onClick}>Đặt phòng</button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
export default Room;
