import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking ,ScrollView} from "react-native";


const AlbumDetail = ({ album,navigation}) => {
    return (
      
      <View style={styles.frame}>
    <View style={styles.frame2}>
      <View style={styles.circle}>
        <Image style={styles.i} source={{uri:album.i}}/>
        <Image style={styles.p1} source={{uri:album.p1}}/>
        <Image style={styles.p2} source={{uri:album.p2}}/>
        <Image style={styles.p3} source={{uri:album.p3}}/>
        <Image style={styles.p4} source={{uri:album.p4}}/>
      </View>
      <View style={styles.word}>
    <Text style={styles.ww}>{album.w1}</Text>
        <Text style={styles.e}>      </Text>
        <Text style={styles.w}>{album.w2}</Text>
        <Text style={styles.e}>      </Text>
        <Text style={styles.w}>{album.w3}</Text>
        <Text style={styles.e}>     </Text>
        <Text style={styles.w}>{album.w4}</Text>
        <Text style={styles.e}>   </Text>
        <Text style={styles.w}>{album.w5}</Text>
      </View>
    </View>
      <View style={styles.frame3}>
      <View style={styles.line}>
        <Image style={styles.p5} source={{uri: album.image}}/>
        <Text style={styles.w1}> {album.id}</Text>
        <Image style={styles.p6} source={{uri: album.more}}/>
        </View>
        <Image style={styles.context} source={{uri: album.main_img}}/>
        <View style={styles.line}>
          <Image style={styles.p7} source={{uri: album.like}}/>
          <Image style={styles.p8} source={{uri: album.message}}/>
          <Image style={styles.p9} source={{uri: album.box}}/>
          <Text style={styles.e}>                                                                   </Text>
          <Image style={styles.p7} source={{uri:album.mark}}/>
        </View>
            <Text style={styles.w2}>{album.likes}</Text>
            <Text style={styles.w2}>{album.ww1}</Text>
            <Text style={styles.w2}>{album.ww2}</Text>
            <Text style={styles.w2}>{album.ww3}</Text>
            <Text style={styles.w6}>{album.ww4}</Text>
            <Text style={styles.w3}>{album.ww5}</Text>
            <Text style={styles.w4}>{album.ww6}</Text>
            <View style={styles.line}>
            <Image style={styles.ii} source={{uri: album.me}}/>
            <Text style={styles.w5}>{album.ww7}</Text>
            </View>
            </View>  
        </View>  
      
  );
};

const styles = StyleSheet.create({
  frame: {
    flex:1,
    backgroundColor:'#fff',
    width:500,
    height:650,
    
  },
  frame2: {
    backgroundColor:'#FFFFFF',
    width:500,
  },
  frame3: {
    justifyContent: 'flex-start',
    width:500,
    height:625,
    top:-650
  },
  circle: {
    flexDirection:'row',
    left:-30,

  },
  i: {
    width:75,
    height:75,
    top:7,
    left:40,
  },
  p1: { 
    width:90,
    height:100,
    left:40,
    top:-5
  },
  p2: { 
    width:90,
    height:100,
    left:30,
    top:-5
  },
  p3: { 
    width:90,
    height:100,
    left:20,
    top:-5
  },
  p4: { 
    width:90,
    height:100,
    left:10,
    top:-5
  },
  word: {
    flexDirection:'row',
    left:8,
    top:-17
  },
  ww: {
    color:'#818181',
    fontSize:12,
    left:0,
    fontFamily:'sans-serif',
  },
  w: {
    fontSize:12,
    left:-7,
    fontFamily:'sans-serif',
  },
  
  line: {
    flexDirection:'row',
    
  },
  p5: {
    width:60,
    height:60,
  },
  w1: {
    fontSize:14,
    fontFamily:'sans-serif-medium',
    top:20,
    left:-3

  },
  context: {
    width:413,
    height:350,
    
  },
p6: {
  width:20,
  height:25,
  top:20,
  left:180
},
p7: {
  width:27,
  height:27,
  left:15,
  top:6
},
p8: {
  width:24,
  height:24,
  left:30,
  top:6
},
p9: {
  width:53,
  height:53,
  top:-15,
  left:30,
  top:-8
},
w2: {
  fontSize:14,
  fontFamily:'sans-serif-medium',
  top:-20,
  left:15
},
w3: {
  color:'#818181',
  fontSize:10,
  fontFamily:'sans-serif',
  top:-18,
  left:15
},
w4: {
  fontSize:10,
  fontFamily:'sans-serif',
  top:-33,
  left:60
},
ii: {
  width:35,
  height:35,
  top:-27,
  left:10
},
w5: {
  color:'#C8C8C8',
  fontSize:12,
  fontFamily:'sans-serif',
  top:-18,
  left:20
},
w6: {
  color:'#063A69',
  fontSize:14,
  fontFamily:'sans-serif-medium',
  top:-20,
  left:15
},

});

 export default AlbumDetail;