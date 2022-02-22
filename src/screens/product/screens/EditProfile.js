import { StyleSheet, Text, View,TextInput,Pressable } from 'react-native';
import React,{useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
const EditProfile = (props) => {
  const {navigation} = props;
  const{_id,name,address,phone,avatar,dob,email} =data;
  const [fullname, setFullname] = useState(name);
  const [location, setLocation] = useState(address);
  const [mobile, setMobile] = useState(phone);
  const [birthday, setBirthday] = useState(dob);

  const [showDateTimePicker, setshowDateTimePicker] = useState(false);
  const onChangeDatetime = (event, selectedDate) => {
    const currentDate = selectedDate || birthday;
    setshowDateTimePicker(false);
    setBirthday(currentDate);
  };

  const displayTime=(time)=>{
    time=new Date(time);
    return time.getDate()+ '/'+ (time.getMonth()+1)+'/'+time.getFullYear();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chỉnh sửa thông tin</Text>
      <Text style={styles.instruction}>Thông tin sẽ được lưu cho lần mua kế tiếp.</Text>
      <Text style={styles.instruction}>Bấm vào thông tin chi tiết để chỉnh sửa.</Text>
      <View style={styles.formContainer}> 
             <TextInput value={fullname} onChangeText={setFullname} 
            style={styles.inputText}/>
             <TextInput value={location} onChangeText={setLocation} 
            style={styles.inputText}/>
             <TextInput value={mobile} onChangeText={setMobile} 
            style={styles.inputText}/>
             <TextInput value={displayTime(birthday)} onPressIn={() => setshowDateTimePicker(true)} style={styles.inputText}/>
      </View>
      <Pressable style={styles.buttonContainer}>
        <Text style={styles.save}>Lưu thông tin</Text>
      </Pressable>

      {showDateTimePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date(birthday)}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={onChangeDatetime}
        />
      )}
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  save:{
    color:'white',
    textTransform:'uppercase',
  },
  buttonContainer:{
    position:'absolute',
    bottom:0,
    height:50,
    backgroundColor:'#007537',
    borderRadius:8,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
  },
  inputText:{
    height:40,
    borderBottomColor:'#ABABAB',
    borderBottomWidth:0.7,
    fontSize:14,
    color:'#7D7B7B'
  },
  formContainer:{
    marginTop:60,
    width:'100%'
  },
  instruction:{
    color:'#221F1F',
    fontSize:10,
    alignSelf:'flex-start'

  },
  title:{
    fontSize:16,
    textAlign:'center',
    textTransform:'uppercase',
    marginBottom:16,
  },
  container:{
    position:'relative',
    flex:1,
    backgroundColor:'white',
    paddingTop:32,
    paddingHorizontal:48,
    width:'100%',
    alignItems:'center',
  },
});
var data= {
  _id: "61dd764bb4c902001617bf4c",
  name:"Hồ Hoàng Phúc",
  address:"00000 Quận 12",
  phone:"0123456789",
  avatar:"",
  dob:"2002/07/19",
  email: "hoangphuc@gmail.com",
  createdAt: "2022-01-11T12:21:31.949Z",
  updatedAt: "2022-01-11T12:21:31.949Z",
 
}