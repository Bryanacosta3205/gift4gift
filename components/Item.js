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

const Item = ({userName, title, publishedDate}) => {
  const handleMenu = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Delete', 'Details', 'Make offer', 'Edit'],
        cancelButtonIndex: 0,
        destructiveButtonIndex: 1,
      },
      buttonIndex => {
        switch (buttonIndex) {
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
    <View style={styles.wrapper}>
      <View>
        <View style={styles.headerWrapper}>
          <View style={styles.header}>
            <Image
              style={styles.headerProfileImage}
              source={require('../images/profile.png')}
            />
            <Text style={styles.headerUserName}>{userName}</Text>
          </View>
          <TouchableOpacity onPress={handleMenu}>
            <Text>•••</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Image style={styles.image} source={require('../images/book.png')} />
        {/*         <Image style={{width: 380, height: 400}} source={ {uri:'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'}  } />*/}
        <View style={styles.footer}>
          <MaterialCommunityIcons name="heart" size={20} color={'red'} />
          <Text style={styles.publishedDate}>{publishedDate}</Text>
        </View>
        <Text style={styles.reactions}>
          Bryan and 307 others are interested
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 30,
    borderRadius: 10,
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
  image: {width: 380, height: 270, borderRadius: 5},
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
