import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import {
    Container,
    Header,
    Title,
    Content,
    Text, Left, Right, Body, Icon, Button
} from "native-base";

import { Grid, Row } from "react-native-easy-grid";
import {connect} from "react-redux";
import {setIndex} from "../../actions/list";
import {BlankPage} from "../../components/blankPage/"
import {openDrawer} from "../../actions/drawer";
import {StackNavigator} from "react-navigation";
import DrawBar from "../DrawBar";

const App = StackNavigator({
    BlankPage: { screen: BlankPage },
});

class Restaurants extends Component {

    constructor(props) {
        super(props)
        this.state = {index: 0} // default screen index
    }

    static navigationOptions = {
        header: null
    };
    static propTypes = {
        name: React.PropTypes.string,
        setIndex: React.PropTypes.func,
        list: React.PropTypes.arrayOf(React.PropTypes.string),
        openDrawer: React.PropTypes.func
    };


    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Content>
            <Grid>
                {this.props.list.map((item, i) => (
                    <Row key={i}>
                    <TouchableOpacity
                    onPress={() =>
                navigate("BlankPage", {
                        name: { item }
                    })}
                >
                <Text>{item}</Text>
                </TouchableOpacity>
                </Row>
                ))}
            </Grid>
                </Content>
            </Container>
        );
    }
}
const RestSwagger = connect(mapStateToProps, bindAction)(Restaurants);

function bindAction(dispatch) {
    return {
        setIndex: index => dispatch(setIndex(index)),
        openDrawer: () => dispatch(openDrawer())
    };
}

const mapStateToProps = state => ({
    name: state.user.name,
    list: state.list.list
});



export default RestSwagger;