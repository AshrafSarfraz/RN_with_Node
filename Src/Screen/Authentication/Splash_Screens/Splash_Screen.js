import { View, Text, StyleSheet, Image,Button, TouchableOpacity } from 'react-native'
import React from 'react'



const Splash_Screen=({navigation}) => {
  
setTimeout(() => {
   navigation.navigate('Signup')
}, 3000);

  return (
    <View style={styles.Main_Container} >
      <View  style={styles.Body} >
      </View>
      <View  style={styles.Footer} >
      <Text  style={styles.Gift} >In a world with limitless opportunities</Text>
      </View>
      
    </View>
  )
}

export default Splash_Screen

    const styles=StyleSheet.create({
    Main_Container:{
        flex:1,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center'
    },
      Body:{
        flex:0.85,
        alignItems:'center',
        justifyContent:"center",
        width:'100%'
      },
    Logo_Img:{
      width:'70%',
      height:'90%',
      resizeMode:'contain'
    },
    Footer:{
     flex:0.1,
     justifyContent:'flex-end',
     alignItems:'center',
     width:"85%"

    },
    Gif_Img:{
      width:50,height:60,
    },
    Gift:{
      fontSize:14,
      lineHeight:20,
      textAlign:'center',
      color:'white',
      width:"100%",
      fontFamily:'',
      fontWeight:"600"
    }
    }
    )