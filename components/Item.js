import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ActionSheetIOS,
  TouchableOpacity,
  Alert,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SQLite from 'react-native-sqlite-storage';
const db = SQLite.openDatabase({name: 'mydata'});

const Item = ({onPress,id,userName, title, publishedDate,imageUrl,profilePicture}) => {
  
  const handleMenu = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Delete', 'Details', 'Make offer', 'Edit'],
        cancelButtonIndex: 0,
        destructiveButtonIndex: 1,
      },
      buttonIndex => {
        switch (buttonIndex) {
          case 1:
            Alert.alert('Delete post?','This post will be deleted',[{
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => (
              db.transaction(tx => {
                tx.executeSql(
                  'DELETE FROM Article WHERE id = ?',
                  [id],
                  (tx, result) => {
                    if (result.rowsAffected.length === 0) {
                      console.log('No se actualizaron los datos. Intente de nuevo')
                      return;
                    }
                  },
                  error => console.log(error),
                );
              })
            ), style:'destructive' }])
            break;
          case 2:
            Alert.alert('Details', 'You press the details button');
            break;

          default:
            break;
        }
      },
    );
  };

  return (
    <View style={styles.wrapper} >
      <View >
        <View style={styles.headerWrapper}>
          <View style={styles.header}>
            <Image
              style={styles.headerProfileImage}
              source={{uri:profilePicture}}
            />
            <Text style={styles.headerUserName}>{userName}</Text>
          </View>
          <TouchableOpacity onPress={handleMenu}>
            <Text>•••</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Image style={styles.image} source={{uri:imageUrl}}  />
        {/*         <Image style={{width: 380, height: 400}} source={ {uri:'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'}  } />*/}
        <View style={styles.footer}>
          <MaterialCommunityIcons onPress={onPress} name="comment-outline" size={20} color={'gray'} />
          <Text style={styles.publishedDate}>{publishedDate}</Text>
        </View>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 10,
    backgroundColor:'white',
    maxWidth:'100%'
  },
  headerWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
    marginLeft: 5,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    justifyContent: 'space-between',
  },
  header: {flexDirection: 'row', alignItems: 'center'},
  headerUserName: {fontWeight: 'bold'},
  headerProfileImage: {width: 20, height: 20, marginRight: 5},
  title: {margin: 5, color: '#1597BB', fontWeight: 'bold'},
  image: {maxWidth: '100%', height: 270, minWidth: 380},
  publishedDate: {
    fontSize: 11,
  },
  reactions: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default Item;
