import React, { Component } from "react";
import "./hotel.css";

class CreateRoom extends Component {
  constructor() {
    super();
    this.typerooms = [
      {
        name: "Phòng family",
      },
      {
        name: "Phòng cá nhân",
      },
    ];
    localStorage.setItem("typerooms", JSON.stringify(this.typerooms));
  }
  onAddRoom(event) {
    event.preventDefault();
    let id = event.target["id"].value;
    let name = event.target["name"].value;
    let typeroom = event.target["typeroom"].value;
    let number = event.target["number"].value;
    let area = event.target["area"].value;
    let price = event.target["price"].value;
    let oldPrice = event.target["oldPrice"].value;
    let room = {
      id: id,
      name: name,
      typeroom: typeroom,
      number: number,
      area: area,
      price: price,
      oldPrice: oldPrice,
    };

    let rooms = JSON.parse(localStorage.getItem("rooms"));
    if (!rooms) {
      rooms = [];
    }
    rooms.push(room);
    localStorage.setItem("rooms", JSON.stringify(rooms));
    console.log(rooms);
    alert("Bạn đã thêm 1 phòng");
  }

  render() {
    let typerooms = JSON.parse(localStorage.getItem("typerooms"));
    return (
      <form className="AddRoom" onSubmit={this.onAddRoom}>
        <h3>Add Room</h3>
        <input type="text" name="id" placeholder="id" required/>
        <input type="text" name="name" placeholder="Tên phòng" required/>
        <select name="typeroom" id="typeroom">
          {typerooms.map((name) => (
            <option value={name.name}>{name.name}</option>
          ))}
        </select>
        <input type="text" name="number" placeholder="Số lượng người" />
        <input type="text" name="area" placeholder="Diện tích" />
        <input type="text" name="price" placeholder="Giá" required/>
        <input type="text" name="oldPrice" placeholder="Giá cũ" />
        <button className="add">Add</button>
      </form>
    );
  }
}
export default CreateRoom;
