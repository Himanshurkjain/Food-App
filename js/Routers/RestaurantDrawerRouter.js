import React, { Component } from "react";
import Restaurants from "../components/restaurants";
import { DrawerNavigator } from "react-navigation";
import DrawBar from "../components/DrawBar";
export default (DrawNav = DrawerNavigator(
    {
        Restaurants: { screen: Restaurants }
    },
    {
        contentComponent: props => <DrawBar {...props} />
    }
));
