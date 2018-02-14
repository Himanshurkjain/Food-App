import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import DrawBar from "../DrawBar";
import { DrawerNavigator, NavigationActions } from "react-navigation";
import Restaurants from "../restaurants";
import Allergies from "../allergies";

import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Footer,
  FooterTab
} from "native-base";

import { Grid, Row } from "react-native-easy-grid";
import { setIndex } from "../../actions/list";
import { openDrawer } from "../../actions/drawer";
import styles from "./styles";

class Home extends Component {


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

    switchScreen(index) {
        this.setState({index: index})
    }

  render() {

      let AppComponent = null;

      if (this.state.index == 0) {
          AppComponent = Allergies
      } else {
          AppComponent = Restaurants
      }

    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
                transparent
                onPress={() => {
                  DrawerNav.dispatch(
                    NavigationActions.reset({
                      index: 0,
                      actions: [NavigationActions.navigate({ routeName: "Home" })]
                    })
                  );
                  DrawerNav.goBack();
                }}
            >
              <Icon active name="power" />
            </Button>
          </Left>

          <Body>
            <Title>Home</Title>
          </Body>
        <Right>
        </Right>
        </Header>



          <AppComponent/>

          <Footer>
              <FooterTab>
                  <Button vertical onPress={() => this.switchScreen(0)} active >
                      <Icon name="person" />
                      <Text>Allergies</Text>
                  </Button>
                  <Button vertical onPress={() => this.switchScreen(1)}>
                      <Icon name="apps" />
                      <Text>Restaurants</Text>
                  </Button>
              </FooterTab>
          </Footer>

      </Container>
    );
  }
}

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

const HomeSwagger = connect(mapStateToProps, bindAction)(Home);
const DrawNav = DrawerNavigator(
  {
    Home: { screen: HomeSwagger }
  },
  {
    contentComponent: props => <DrawBar {...props} />
  }
);
const DrawerNav = null;
DrawNav.navigationOptions = ({ navigation }) => {
    DrawerNav = navigation;
    return {
        header: null
    };
};
export default DrawNav;
