import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Title from '../components/Title'
const Result = ({navigation,route}) => {
    const {score}=route.params
  const ResultBanner=score>40?"https://cdni.iconscout.com/illustration/premium/thumb/men-celebrating-victory-4587301-3856211.png":"https://cdni.iconscout.com/illustration/premium/preview/payment-failure-4320184-3598819.png"
  return (
    <View style={styles.container}>
    <Title titleText='RESULTS'/>
    <Text style={styles.scoreText}>{score}</Text>
    <View style={styles.bannerContainer}>
    <Image source={{uri:ResultBanner}} style={styles.banner} resizeMode='contain'/>
    </View>
    <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={styles.button}>
        <Text style={styles.buttonText}>GO TO HOME</Text>
    </TouchableOpacity>
   </View>
  );
}




export default Result;

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
    },
    scoreText:{
        fontSize:24,
        fontWeight:'800',
        alignSelf:'center'
    }
})