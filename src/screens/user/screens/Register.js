import React,{useState, useContext} from 'react'
import { View, Text,StyleSheet,Image,TextInput,Pressable,KeyboardAvoidingView,ScrollView, ToastAndroid } from 'react-native'
import { UserContext } from '../UserContext';

export const Register = (props) => {
    const {navigation}=props;

    const {onRegister}= useContext(UserContext);
    const [email, setEmail] = useState('phuc@gmail.com');
    const [password, setPassword] = useState('123');
    const [confirmPassword, setConfirmPassword] = useState('123');

    const register = async () =>{
        if (confirmPassword.trim() == password.trim()) {
            const res=await onRegister(email,password);
            if(res==true){
                ToastAndroid.show('Đăng ký thành công',ToastAndroid.BOTTOM);
                navigation.goBack();
            }else{
                ToastAndroid.show('Tài khoản đã tồn tại',ToastAndroid.BOTTOM);
            }
        }else{
            ToastAndroid.show('Mật khẩu không trùng khớp',ToastAndroid.BOTTOM);
        }
    }

    return (
        <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
             <View style={styles.plantaContainer}>
                <Text style={styles.planta}>Planta</Text>
             </View>
             <View style={styles.sloganContainer}>
                <Text style={styles.slogan}>Mua sắm và trải nghiệm dịch vụ chăm sóc giống cây quý hiếm duy nhất tại Việt Nam</Text>
             </View>
             <View style={styles.textInputContainer}>
                 <TextInput 
                  value={email}
                  onChangeText={setEmail}
                  placeholder='Email' style={styles.textInput}></TextInput>
                 <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder='Password' style={styles.textInput} secureTextEntry></TextInput>
                 <TextInput
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  placeholder='Confirm password' style={styles.textInput} secureTextEntry></TextInput>
             </View>
             <Pressable onPress={register} style={styles.button}>
                   <Text style={styles.register}>Đăng ký</Text>
             </Pressable>
             <View style={styles.LoginContainer}>
                    
                    <Text style={styles.Login}
                    onPress={() => navigation.navigate('Login')}>Đăng nhập</Text>
             </View>

             <View style={styles.NoteLoginContainer}>
                    <Text style={styles.Note}>Bằng việc đăng ký, bạn đồng ý với</Text>
                    <Text style={styles.Note}> <Text style={styles.NoteChu}>Điều khoản</Text> và <Text style={styles.NoteChu}>Chính sách</Text> bảo mật chúng tôi. </Text>
             </View>
               
        </View>
          </ScrollView>
    )
}

export default Register
const styles = StyleSheet.create({
    NoteChu:{
        color:'#006600',
        textDecorationLine:'underline',
        textDecorationColor:'#006600',
    },
    Note:{
        width:299,
        alignItems:'center',
        textAlign:'center',
        fontSize:14,
        lineHeight:20,
    },
    NoteLoginContainer:{
       
       
        marginTop:180,
        paddingHorizontal:48,
    },
    Login:{
        borderBottomColor:'black',
        borderBottomWidth:1.5,
    },
    LoginContainer:{
        alignItems:'center',
        marginTop:20,
    },
    register:{
       color:'white',
    },
    button:{
        marginTop:41,
        width:294,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:100,
        paddingVertical:10,
        backgroundColor:'#221F1F',
        marginHorizontal:48,
    },
    textInput:{
        marginVertical:15,
        height:33,
       fontSize:16,
       lineHeight:20,
       alignItems:'center',
       borderBottomColor:'#ABABAB',
       borderBottomWidth:1.5,
    
     
    },
    textInputContainer:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        borderRadius:8,
        paddingHorizontal:30,
    },
    container:{
        width:'100%',
        height:'100%',
    },
    planta:{
        color:'#007537',
        fontSize:35,
        fontWeight:'bold',
     
    },
    plantaContainer:{
        width:375,
        height:120,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:42,
        marginTop:42,
      
    },
    sloganContainer:{
        width:375,
        height:59,
    
        paddingHorizontal:48,
       
    },
    slogan:{
        marginTop:3.5,
        fontSize:14,
        lineHeight:26,
        alignItems:'center',
        textAlign:'center',
      
     
    },



})