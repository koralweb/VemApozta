import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import pageList from '../pageList';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const renderMenuItems = () => {
    const navigation = useNavigation();

    return pageList
      .filter(el => el.showOnMenu)
      .map(screen => (
        <TouchableOpacity
          key={screen.name}
          onPress={() => navigation.push(screen.name)}>
          <Text style={styles.itemText}>{screen.title}</Text>
        </TouchableOpacity>
      ));
  };

  return (
    <ImageBackground source={require('../assets/img/bg.png')} style={{flex: 1}}>
      <View style={styles.cont}>
        <Image
          source={require('../assets/img/clouds.png')}
          style={styles.clouds}
        />
        <View style={styles.mainContentBlock}>
          <View style={styles.mainBlock}>{renderMenuItems()}</View>
        </View>
        <Image
          source={require('../assets/img/clouds.png')}
          style={styles.clouds}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    position: 'relative',
    paddingTop: 40,
    paddingBottom: 20,
  },
  clouds: {
    width: 1397 / 3,
    height: 205 / 3,
  },
  mainContentBlock: {
    flex: 1,
  },
  mainBlock: {
    marginTop: 'auto',
    marginBottom: 'auto',
    width: Dimensions.get('window').width + 80,
    height: Dimensions.get('window').width + 80,
    backgroundColor: '#f4b854',
    borderRadius: Dimensions.get('window').width + 80 / 2,
    marginLeft: 30,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 120,
    borderWidth: 15,
    borderColor: '#FFFF71',
  },
  itemText: {
    color: '#760B0B',
    fontSize: 30,
    fontWeight: '700',
  },
});

export default HomeScreen;
