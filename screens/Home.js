import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Title from '../components/Title'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
     <Title/>
     <View style={styles.bannerContainer}>
     <Image source={require('../images/Bc.png')} style={styles.banner} resizeMode='contain'/>
     </View>
     <TouchableOpacity onPress={()=>navigation.navigate('Quiz')} style={styles.button}>
         <Text style={styles.buttonText}>Start</Text>
     </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    banner:{
        height:300,
        width:'100%'
    },
    bannerContainer:{
        justifyContent:'center',
        alignContent:'center',
        flex:1

        
    },
    container:{
        paddingTop:40,
        paddingHorizontal:20,
        height:'100%'
    },
    button:{
        width:'100%',
        backgroundColor:'#1A759F',
        padding:20,
        borderRadius:16,
        alignItems:'center',
        marginBottom:30
    },
    buttonText:{
        fontSize:16,
        fontWeight:'600',
        color:'#fff'
    }
})