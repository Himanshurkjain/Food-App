import React, { Component } from "react";
import Login from "../components/login/";
import Home from "../components/home/";
import BlankPage from "../components/blankPage";
import HomeDrawerRouter from "./HomeDrawerRouter";
import RestaurantDrawerRouter from "./RestaurantDrawerRouter"
import { StackNavigator } from "react-navigation";
import Restaurants from "../components/restaurants";
HomeDrawerRouter.navigationOptions = ({ navigation }) => ({
    header: null
});
RestaurantDrawerRouter.navigationOptions = ({ navigation }) => ({
    header: null
});

export default (StackNav = StackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
  BlankPage: { screen: BlankPage },
  Restaurants: { screen: Restaurants }
}));
