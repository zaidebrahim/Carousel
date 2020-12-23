import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Carousel from "./components/carousel/carousel.component";

const bannerData = [
  {
    id: 1,
    name: "Burger King",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Burger_King_logo.svg/1200px-Burger_King_logo.svg.png",
  },
  {
    id: 2,
    name: "KFC",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
  },
  {
    id: 3,
    name: "Dominos",
    imageUrl:
      "https://img.etimg.com/thumb/width-640,height-480,imgsize-80666,resizemode-1,msid-65466637/industry/cons-products/food/dominos-may-part-ways-with-coca-cola-in-india-rope-in-pepsi/dominos-agencies.jpg",
  },
  {
    id: 4,
    name: "Burger King",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Burger_King_logo.svg/1200px-Burger_King_logo.svg.png",
  },
  {
    id: 5,
    name: "KFC",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
  },
  {
    id: 6,
    name: "Dominos",
    imageUrl:
      "https://img.etimg.com/thumb/width-640,height-480,imgsize-80666,resizemode-1,msid-65466637/industry/cons-products/food/dominos-may-part-ways-with-coca-cola-in-india-rope-in-pepsi/dominos-agencies.jpg",
  },
  {
    id: 7,
    name: "Burger King",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Burger_King_logo.svg/1200px-Burger_King_logo.svg.png",
  },
  {
    id: 8,
    name: "KFC",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
  },
  {
    id: 9,
    name: "Dominos",
    imageUrl:
      "https://img.etimg.com/thumb/width-640,height-480,imgsize-80666,resizemode-1,msid-65466637/industry/cons-products/food/dominos-may-part-ways-with-coca-cola-in-india-rope-in-pepsi/dominos-agencies.jpg",
  },
  {
    id: 10,
    name: "KFC",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
  },
  {
    id: 11,
    name: "Dominos",
    imageUrl:
      "https://img.etimg.com/thumb/width-640,height-480,imgsize-80666,resizemode-1,msid-65466637/industry/cons-products/food/dominos-may-part-ways-with-coca-cola-in-india-rope-in-pepsi/dominos-agencies.jpg",
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel data={bannerData} />
      </div>
    );
  }
}

export default App;
