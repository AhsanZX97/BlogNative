import React, { Component } from 'react'
import { Text, View, StyleSheet, Platform, StatusBar ,TextInput, Button} from 'react-native'

export default class Post extends Component {

    state = {
        title: "",
        content: ""
    }

    submit = () => {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text> Post </Text>
                <TextInput placeholder="title"
                    style={{ marginTop: 20, height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={title => this.setState({ title })}
                    value={this.state.title} />
                <TextInput placeholder="content"
                    style={{ marginTop: 20, height: 90, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={content => this.setState({ content })}
                    value={this.state.content} />
                    <Button title= "Submit" onPress ={this.submit} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0
    },
});
