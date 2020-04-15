import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default class Blogs extends React.Component {
    render() {
        return (
            <View style={styles.container}>
              <Text>Blog Screen</Text>
              <Button title = "Go To Edit" onPress={() => this.props.navigation.navigate('Edit')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
