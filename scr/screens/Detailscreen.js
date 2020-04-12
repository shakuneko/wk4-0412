import React from 'react';
import { StyleSheet,View, TouchableOpacity,Image,Text} from 'react-native';
import headerData from "../json/header.json";

const DetailScreen = ({navigation}) => {
return(
        
    <View style={styles.all}>
            <View style={styles.headerContentStyle}>
            <View style={styles.detail1}>
                   <TouchableOpacity
                       onPress={() => navigation.goBack()}>
                       <Image style={styles.back} source={{uri: headerData.MessagePage.back}}/>
                   </TouchableOpacity>
                <Text style={styles.w1}>{headerData.MessagePage.myname}</Text>
                <Image style={styles.down} source={{uri: headerData.MessagePage.down}}/>
                <Image style={styles.video} source={{uri: headerData.MessagePage.video}}/>
                <Image style={styles.pen} source={{uri: headerData.MessagePage.pen}}/>
            </View>
        </View>
    <View style={styles.detail2}>
      <View style={styles.frame}>
      <Image style={styles.gsearch} source={{uri: headerData.search.gsearch}}/>
      <Text style={styles.w2}>{headerData.search.w1}</Text>
      </View>
      <Text style={styles.w3}>{headerData.search.w2}</Text>
    </View>
    <View style={styles.detail3}>
      <Image style={styles.p1} source={{uri: headerData.f1.picture}}/>
      <Text style={styles.w4}>{headerData.f1.id}</Text>
      <Text style={styles.w5}>{headerData.f1.w}</Text>
      <Image style={styles.camera} source={{uri: headerData.f1.camera}}/>
    </View>
    <View style={styles.detail3}>
      <Image style={styles.p1} source={{uri: headerData.f2.picture}}/>
      <Text style={styles.w4}>{headerData.f2.id}</Text>
      <Text style={styles.w5}>{headerData.f2.w}</Text>
      <Image style={styles.camera} source={{uri: headerData.f1.camera}}/>
    </View>
    <View style={styles.detail3}>
      <Image style={styles.p1} source={{uri: headerData.f3.picture}}/>
      <Text style={styles.w4}>{headerData.f3.id}</Text>
      <Text style={styles.w5}>{headerData.f3.w}</Text>
      <Image style={styles.camera} source={{uri: headerData.f1.camera}}/>
    </View>
    <View style={styles.detail3}>
      <Image style={styles.p1} source={{uri: headerData.f4.picture}}/>
      <Text style={styles.w4}>{headerData.f4.id}</Text>
      <Text style={styles.w5}>{headerData.f4.w}</Text>
      <Image style={styles.camera2} source={{uri: headerData.f1.camera}}/>
    </View>
    <View style={styles.detail3}>
      <Image style={styles.p1} source={{uri: headerData.f5.picture}}/>
      <Text style={styles.w4}>{headerData.f5.id}</Text>
      <Text style={styles.w6}>{headerData.f5.w}</Text>
      <Image style={styles.camera} source={{uri: headerData.f1.camera}}/>
    </View>
    <View style={styles.detail3}>
      <Image style={styles.p1} source={{uri: headerData.f6.picture}}/>
      <Text style={styles.w4}>{headerData.f6.id}</Text>
      <Text style={styles.w6}>{headerData.f6.w}</Text>
      <Image style={styles.camera} source={{uri: headerData.f1.camera}}/>
    </View>
    <View style={styles.detail4}>
    <Image style={styles.bcamera} source={{uri: headerData.search.bcamera}}/>
      <Text style={styles.w7}>{headerData.search.w3}</Text>

    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  
  all:{
    flex:1,
    backgroundColor:"#fff",
   

  },
  
  detail1: {
    flexDirection:'row',
    borderBottomColor:'#EEEEEE',
    borderBottomWidth:1.5,
    justifyContent: 'flex-start',
    backgroundColor:'#FAFAFA',
    width:500,
    height:100,
    
    
  },
  back: {
    width:30,
    height:50,
    top:50,
    left:20
  },
  w1: {
    fontSize:18,
    fontFamily:'sans-serif-medium',
    top:59,
    left:40
  },
  down: {
    width:20,
    height:20,
    top:64,
    left:45
  },
  video: {
    width:30,
    height:30,
    top:58,
    left:180
  },
  pen: {
    width:25,
    height:25,
    top:58,
    left:195
  },
  frame: {
    width:370,
    height:40,
    top:15,
    left:20,
    borderTopWidth:0.7,
    borderLeftWidth:0.7,
    borderRightWidth:0.7,
    borderBottomWidth:0.7,
    borderRadius:10,
    borderColor:'#CCCCCC',
  },
  gsearch: {
    width:30,
    height:30,
    top:5,
    left:5,
  },
  w2: {
    fontSize:16,
    fontFamily:'sans-serif',
    color:'#A9A9A9',
    top:-23,
    left:43,
  },
  w3: {
    fontSize:16,
    top:35,
    left:23,
  },
  detail3: {
    flexDirection:'row',
    top:45,
    left:23,
    marginTop:15
  },
  p1: {
    width:60,
    height:60,
  },
  
  w4: {
    top:5,
    left:15
  },
  w5: {
    top:30,
    left:-95
  },
  camera: {
    width:27,
    height:27,
    left:48,
    top:15
  },
  camera2: {
    width:27,
    height:27,
    left:50,
    top:15
  },
  
  p2: {
    width:85,
    height:85,
    left:-10,
    top:-10
  },
  w6: {
    top:30,
    left:-105,
    color:'#B2B2B2',
  },
  camera2: {
    width:27,
    height:27,
    left:40,
    top:10

  },
   detail4: {
        flexDirection:'row',
        borderTopColor:'#EEEEEE',
        borderTopWidth:1.5,
        justifyContent: 'center',
        backgroundColor:'#FAFAFA',
        width:500,
        height:100,
        top:175
  },
   bcamera: {
    width:35,
    height:35,
    top:6,
    left:-60
   },
  w7: {
    color:"#0494FC",
    top:15,
    left:-50


  }

});

export default DetailScreen;
