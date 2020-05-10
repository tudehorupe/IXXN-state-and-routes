import React from 'react';
import curDot from "cursor-dot";
// import "./App.css";
// import curDot from "cursor-dot";

export default function Home() {



const $ = s => document.querySelector(s);

const cursor = curDot({
  easing: 4
});

cursor.over(".title", {
  background: "#fff"
});

cursor.over(".react1", {
  borderColor: "rgba(255,255,255,.38)"
});

cursor.over(".react2", {
  scale: 0.5,
  background: "#fff"
});

cursor.over($(".react3"), {
  scale: 1.4,
  background: "#faa2c1",
  borderColor: "transparent"
});
    
    
    return (
         <div class="">
            <curDot />

            <div class="title">
              Lorem ipsum dolor sit amet.
            </div>
          </div>
    )

    
}
