import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CommentItem = ({username,comment}) => {
    return (
        <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.username} >{username}</Text>
        <TouchableOpacity >
            <Text>•••</Text>
          </TouchableOpacity>
        </View>
        <Text>{comment}</Text>
        </View>
    )
}

export default CommentItem

const styles = StyleSheet.create({
    container:{
        marginBottom:30,
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    username:{
        fontWeight: 'bold',
        marginBottom:5
    }
})
