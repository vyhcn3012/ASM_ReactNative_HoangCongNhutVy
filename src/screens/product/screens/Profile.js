import React from 'react'
import { View, Text,Pressable,Image,StyleSheet } from 'react-native'
import { FontAwesome  } from '@expo/vector-icons'; 
 const Profile = (props) => {
   const {navigation} = props;
   const{_id,name,address,phone,avatar,dob,email} =data;
    return (
        <View style={styles.container}>
         <Text style={styles.title}>Profile</Text>
         <View style={styles.infoContainer}>
            <View style={styles.avatarContainer}>
              {
                avatar.trim.length == 0 ?
                <FontAwesome name="user-circle-o" size={24} color="black" />
                :   <Image source={{uri: avatar}} resizeMode='cover'
                      style={styles.avatar}/>
              }
           
            </View>
            <View style={styles.nameContainer}>
               <Text numberOfLines={1} style={styles.name}>{name}</Text>
               <Text numberOfLines={1} style={styles.email}>{email}</Text>
            </View>
         </View>
         <View  style={styles.actionContainer}>
           <Text style={styles.actionTitle}>Chung</Text>
           <Text onPress={() =>navigation.navigate('EditProfile')} style={styles.action}>Chỉnh sửa thông tin</Text>
           <Text onPress={() =>navigation.navigate('CartHistory')} style={styles.action}>Lịch sử giao dịch</Text>
           <Text style={styles.actionTitle}>Ứng dụng</Text>
           <Text style={[styles.action,styles.logout]}>Đăng xuất</Text>
         </View>
        </View>
    )
}

export default Profile
const styles = StyleSheet.create({
  logout:{
    color:'#FF0000'
  },
  action:{
   marginTop:15,
  },
  actionTitle:{
    marginTop:16,
    fontSize:16,
    color:'#7F7F7F',
    borderBottomColor:'#ABABAB',
    borderBottomWidth:1,
  },
  actionContainer:{
    marginTop:32,
  },
  name:{
    fontSize:16,
  },
  email:{
    fontSize:14,
    color:'#7F7F7F',

  },
  nameContainer:{
   
  },
  avatar:{
    width:'80%',
    height:'80%',
    borderRadius:20,
  },
  avatarContainer:{
    justifyContent:'center',
    alignItems:'center',
    width:40,
    height:40,
  
    backgroundColor:'red',
  },
  infoContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:15,
    marginRight:50,
    alignItems:'center'

  },
  title:{
    fontSize:16,
    textAlign:'center',
    textTransform:'uppercase'

  },

  container:{
    flex:1,
    backgroundColor:'white',
    paddingTop:32,
    paddingHorizontal:48,
  },
})
var data= {
  _id: "61dd764bb4c902001617bf4c",
  name:"Hồ Hoàng Phúc",
  address:"00000 Quận 12",
  phone:"0123456789",
  avatar:"",
  dob:"",
  email: "hoangphuc@gmail.com",
  createdAt: "2022-01-11T12:21:31.949Z",
  updatedAt: "2022-01-11T12:21:31.949Z",
 
}