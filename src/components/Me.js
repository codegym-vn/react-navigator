import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { me } from '../data';

class Me extends Component {
    render() {
        return (
            <ScrollView>
                <Tile
                    imageSrc={{ uri: this.props.picture.large}}
                    featured
                    title={`${this.props.name.first.toUpperCase()} ${this.props.name.last.toUpperCase()}`}
                    caption={this.props.email}
                />

                <List>
                    <ListItem
                        title="Email"
                        rightTitle={this.props.email}
                        hideChevron
                    />
                    <ListItem
                        title="Phone"
                        rightTitle={this.props.phone}
                        hideChevron
                    />
                </List>

                <List>
                    <ListItem
                        title="Username"
                        rightTitle={this.props.login.username}
                        hideChevron
                    />
                </List>

                <List>
                    <ListItem
                        title="Birthday"
                        rightTitle={this.props.dob}
                        hideChevron
                    />
                    <ListItem
                        title="City"
                        rightTitle={this.props.location.city}
                        hideChevron
                    />
                </List>
            </ScrollView>
        );
    }
}

Me.defaultProps = { ...me };

export default Me;