import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      * {
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
      }

      body {
        background: black;

      }
      footer, nav{
    background: silver;

    display: flex;
        ul{
            display: flex;

            align-items: center;
            width: 70%;
            justify-content: space-evenly;
            list-style: none;
            margin: auto;
            vertical-align: middle;
            li {
                flex: flex;
                a{
                    text-decoration: none;
                }
            }
        }
      }
      /* .offer {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .plan {
        padding: 2.5rem;
        margin: 12px;
        background-color: #252226;
        border-radius: 8px;
        text-align: center;
        overflow: hidden;
        color: #c0c0c0;
      }
      .plan h2 {
        margin-bottom: 10px;
        font-size: 1.3rem;
      }
      .plan .price {
        margin-bottom: 1rem;
        font-size: 1.7rem;
      }
      .plan ul.details {
        list-style: none;
        text-align: left;
      }
      .plan ul.details li {
        margin: 8px;
      }
      .plan .fas {
        margin-right: 4px;
      }
      .plan li .fa-check {
        color: rgb(141, 221, 21);
      }
      .plan li .fa-times {
        color: rgb(255, 37, 8);
      }
      .plan a {
        display: block;
        margin-top: 1.5rem;
        padding: 11px 32px;
        color: white;
        background-color: #3e672d;
        border-radius: 8px;
        font-size: 1.1rem;
        text-align: center;
      }
      .plan.top {
        border: 2px solid #6ab04c;
      }
      .listing-badges {
        position: relative;
      }
      .plan.top span {
        position: absolute;
        background-color: #6ab04c;
        width: 130px;
        left: -74px;
        top: -20px;
        transform: rotate(-45deg);
        padding: 4px;
        color: white;
        font-size: 1.1rem;
      } */
`;

export default GlobalStyle;
