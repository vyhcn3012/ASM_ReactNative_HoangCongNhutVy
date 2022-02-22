import React,{useState,useContext} from 'react'
import { View, Text,StyleSheet,Image,TextInput,Pressable,KeyboardAvoidingView,ScrollView, ToastAndroid } from 'react-native'

import { UserContext } from '../UserContext';
export const Login = (props) => {
    const {navigation}=props;
    const {onLogin}=useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const onLoginPress= async () =>{
        const res=await onLogin(email,password);
        console.log('onLoginPress',res)
        if(res==false){
            ToastAndroid.show('Login failed',ToastAndroid.TOP);
        }
    }

    return (
        
        //<KeyboardAvoidingView>
            
            <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
           
                <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../../../assets/images/background.png')}/>
                </View>
                <View style={styles.plantaContainer}>
                    <Text style={styles.planta}>Planta</Text>
                </View>

                <View style={styles.sloganContainer}>
                    <Text style={styles.slogan}>Mua sắm và trải nghiệm sản phẩm cây trồng cùng phụ kiện độc đáo duy nhất tại Việt Nam</Text>
                </View>

                <View style={styles.formContainer}>
                    {/* <Image style={styles.searchIcon} source={require('../../../assets/images/login.png')}></Image> */}
                    <TextInput value={email} onChangeText={setEmail} placeholder='Email' style={styles.textInput}/>
                    <TextInput value={password} onChangeText={setPassword} placeholder='Password' style={styles.textInput} secureTextEntry/>
                    <Pressable
                    onPress={onLoginPress}
                    style={styles.button}>
                        <Text style={styles.login}>Đăng nhập</Text>
                    </Pressable>
                </View>
                <View style={styles.registerContainer}>
                    
                    <Text style={styles.register}
                    onPress={() => navigation.navigate('Register')}>Đăng ký</Text>
                </View>
                </View>
            </ScrollView>
       // </KeyboardAvoidingView>
    )
}

export default Login
const styles = StyleSheet.create({
    register:{
       fontWeight:'500',
       fontSize:16,
       lineHeight:20,
       borderBottomColor:'black',
       borderBottomWidth:1.5,
    },
    registerContainer:{
      alignItems:'center',
      marginTop:11,
    },

    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    login:{
        color:'white',
        fontWeight:'500',
        lineHeight:22,
        fontSize:16,
    },
    button:{
        width:'100%',
        height:50,
        backgroundColor:'#7D7B7B',
        borderRadius:8,
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
    },
    textInput:{
        height:33,
        lineHeight:20,
        borderBottomColor:'#ABABAB',
        borderBottomWidth:1.5,
        marginVertical:4,
    },
    formContainer:{
        paddingHorizontal:32,
        marginTop:10,
    },



    slogan:{
        fontSize:14,
        lineHeight:26,
    },
    sloganContainer:{
        paddingHorizontal:24,
        marginTop:16,
    },


    container:{
        width:'100%',
        height:'100%',
    },
    image:{
        width:'100%',
        height:'100%',
    },
    imageContainer:{
        width:'100%',
        height:391,
    },
    planta:{
        color:'#007537',
        fontSize:35,
        fontWeight:'bold',
    },
    plantaContainer:{
        alignItems:'center',
        marginTop:28,
    },





})