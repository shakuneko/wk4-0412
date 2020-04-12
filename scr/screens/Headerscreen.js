import React from "react";
import { StyleSheet,View, FlatList, TouchableOpacity,Image } from 'react-native';
import AlbumDetail from "../components/AlbumDetail";
import albumData from "../json/content.json";
import headerData from "../json/header.json";

const HeaderScreen = ({ navigation }) => {
    return (
<View >
    <View style={styles.frame}>
        <Image style={styles.camera} source={{uri: headerData.HomePage.camera}}/>
        <Image style={styles.sign} source={{uri:headerData.HomePage.sign}}/>
        <TouchableOpacity
                    onPress={() => navigation.push('Detailscreen')}>
                    <Image style={styles.box} 
                    source={{uri: headerData.HomePage.box}}/>
                </TouchableOpacity>
      </View>
      <FlatList
                  data={albumData.albumList}
                  renderItem={({item}) => <AlbumDetail album={item} 
                  navigation={navigation}
                  keyExtractor={item => item.title}
                  />}
        />
        <View style={styles.frame4}>
        <Image style={styles.icon1} source={{uri: headerData.HomePage.home}}/>
        <Image style={styles.icon2} source={{uri: headerData.HomePage.search}}/>
        <Image style={styles.icon3} source={{uri: headerData.HomePage.add2}}/>
        <Image style={styles.icon4} source={{uri: headerData.HomePage.like}}/>
        <Image style={styles.icon5} source={{uri: headerData.HomePage.ii}}/>
        </View>
    </View>
      );
    };

    const styles = StyleSheet.create({
        frame: {
            flexDirection:'row',
            borderBottomColor:'#EEEEEE',
            borderBottomWidth:1.5,
            justifyContent: 'space-around',
            backgroundColor:'#FAFAFA',
            width:500,
            height:100,
          },
          camera: {
            width:27,
            height:27,
            top:62,
            left:-35
            
          },
          sign: {
            width:120,
            height:40,
            top:55,
            left:-30
          },
          box: {
            width:50,
            height:50,
            top:50,
            left:-42
          },
        frame4: {
            flexDirection:'row',
            borderTopColor:'#EEEEEE',
            borderTopWidth:1.5,
            justifyContent: 'flex-start',
            backgroundColor:'#FAFAFA',
            width:500,
            height:100,
            top:-145
          },
          icon1: {
            width:75,
            height:75,
            left:5,
            top:-18
          },
          icon2: {
            width:23,
            height:23,
            left:35,
            top:10
          },
          icon3: {
            width:23,
            height:23,
            left:95,
            top:10
          },
          icon4: {
            width:23,
            height:23,
            left:155,
            top:10
          },
          icon5: {
            width:23,
            height:23,
            left:215,
            top:10
          },
});

export default HeaderScreen;
