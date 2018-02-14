import React, { Component } from "react";
import { connect } from "react-redux";
import {
    Container,
    Header,
    Title,
    Content,
    ListItem,
    CheckBox,
    Text,
    Body
} from "native-base";

import styles from "./styles";

class Allergies extends Component {

    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Title>Allergies</Title>
                </Header>
                <Content>
                    <ListItem>
                        <CheckBox checked={true} />
                        <Body>
                        <Text>Milk</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={true} />
                        <Body>
                        <Text>Kiwi</Text>
                        </Body>
                    </ListItem>
                    <ListItem>
                        <CheckBox checked={false} />
                        <Body>
                        <Text>Oranges</Text>
                        </Body>
                    </ListItem>
                </Content>

            </Container>
        );
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer())
    };
}

const mapStateToProps = state => ({
    allergies: state.list.list
});

export default connect(mapStateToProps, bindAction)(Allergies);
