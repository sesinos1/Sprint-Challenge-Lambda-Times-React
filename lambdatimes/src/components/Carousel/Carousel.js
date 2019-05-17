import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount(){

  }

  leftClick = () => {

  }

  rightClick = () => {

  }

  selectedImage = () => {
    return <img src={} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}
// this is my Carousel now attempting to convert for vanilla to react
// class Carousel {
//   constructor(carousel) {
//     this.carousel = carousel;
//     this.lbtn = this.carousel.querySelector('.left-button');
//     this.rbtn = this.carousel.querySelector('.right-button');
//     this.img = this.carousel.querySelectorAll('img');
//     this.prevImg = this.currentIndex;
//     this.zero = zero;
//     this.one = one;
//     this.two = two;
//     this.three = three;
//     this.four = four;
//     this.currentIndex = 0;      
//     this.zero.addEventListener('click', () => {this.currentIndex = 0, this.changeImg()})
//     this.one.addEventListener('click', () => {this.currentIndex = 1, this.changeImg()})
//     this.two.addEventListener('click', () => {this.currentIndex = 2, this.changeImg()})
//     this.three.addEventListener('click', () => {this.currentIndex = 3, this.changeImg()})
//     this.four.addEventListener('click', () => {this.currentIndex = 4, this.changeImg()})
//     this.lbtn.addEventListener('click', () => {this.leftButton() })
//     this.rbtn.addEventListener('click', () => {this.rightButton() })
//     this.img.forEach(x => (x.style.display = "none"))
//     this.img[this.currentIndex].style.display = "block";
//   }

//   leftButton() {
//     this.img.forEach(x => (x.style.display = "none"));
//     if (this.currentIndex == this.img.length - 1) {
//       this.currentIndex = 0;
//       this.img[this.currentIndex].style.display = "block";
//     } else {
//       this.currentIndex++;
//       this.img[this.currentIndex].style.display = "block";
//     }
//   }
//   rightButton() {
//     this.img.forEach(x => (x.style.display = "none"));
//     if (this.currentIndex === 0) {
//       this.currentIndex = this.img.length - 1;
//       this.img[this.currentIndex].style.display = "block";
//     } else {
//       this.currentIndex--;
//       this.img[this.currentIndex + 1].style.display = "block";
//     }
//   }
//   changeImg() {
//     this.img.forEach(x => (x.style.display = "none"));
//     this.img[this.currentIndex].style.display = "block"
//   }
// }


// let carousel = document.querySelector('.carousel');
// let zero = document.querySelector('.index0')
// let one = document.querySelector('.index1')
// let two = document.querySelector('.index2')
// let three = document.querySelector('.index3')
// let four = document.querySelector('.index4')
// new Carousel(carousel);