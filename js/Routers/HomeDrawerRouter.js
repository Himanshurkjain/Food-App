import React, { Component } from "react";
import Home from "../components/home/";
import Restaurants from "../components/restaurants";
import { DrawerNavigator } from "react-navigation";
import DrawBar from "../components/DrawBar";
export default (DrawNav = DrawerNavigator(
  {
    Home: { screen: Home },
  },
  {
    contentComponent: props => <DrawBar {...props} />
  }
));
