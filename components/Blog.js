import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { getBlogs, deleteBlogs } from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash'
import { TouchableHighlight } from 'react-native-gesture-handler';

class Blogs extends React.Component {

  componentDidMount() {
    this.props.getBlogs()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Blog Screen</Text>
        <FlatList style={{ width: '100%' }}
          data={this.props.listOfBlogs}
          keyExtractor={(item) => item.key}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={{ elevation: 8, marginBottom: 15, borderRadius: 15, backgroundColor: '#575FCF', padding: 20 }}>
                <Text style={{ fontSize: 15, lineHeight: 15, color: "#fff", fontWeight: 'bold' }}>{item.title}</Text>
                <Text style={{ fontSize: 10, lineHeight: 15, color: '#fff' }}>{item.content}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 25 }}>
                  <TouchableHighlight onPress= {() => this.props.navigation.navigate('Edit', {...item})}>
                    <View style={{marginRight:15}}>
                      <Text>View</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={deleteBlogs(item.key)}>
                    <View>
                      <Text>Delete</Text>
                    </View>
                  </TouchableHighlight>
                </View>
              </View>
            )
          }} />
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
    padding: 10
  },
});


function mapStateToProps(state) {

  const listOfBlogs = _.map(state.blogsList.blogsList, (val, key) => {
    return {
      ...val,
      key: key
    }
  })

  return {
    listOfBlogs
  }
}

export default connect(mapStateToProps, { getBlogs, deleteBlogs })(Blogs);