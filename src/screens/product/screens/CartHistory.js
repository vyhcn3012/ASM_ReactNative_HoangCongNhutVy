import { StyleSheet, Text, View,FlatList } from 'react-native';
import React from 'react';



const CartHistory = (props) => {

  const displayDay=(day)=>{
    switch(day){
        case 0:
          return 'Chủ nhật';
        case 1:
          return 'Thứ hai';   
        case 2:
          return 'Thứ ba';
        case 3:
          return 'Thứ tư';
        case 4:
          return 'Thứ năm';
        case 5:
          return 'Thứ sáu';    
        case 5:
          return 'Thứ bảy';  
      default:
        break;
    }
  }

const displayTime=(time) =>{
  time=new Date(time);
  const day=displayDay(time.getDay());
  const date=time.getDate() <10 ? '0'+time.getDate() : time.getDate();
  const month=time.getMonth()+1 ? '0'+(time.getMonth()+1) : (time.getMonth()+1);
  const year=time.getFullYear();
  return `${day}, ${date}/${month}/${year}`
}

const renderItem=({item}) =>{
  const {createdAt,total,products,status}=item;
  return(
      <View style={styles.cartItemContainer}>
        <Text style={styles.date}>{createdAt}</Text>
        <Text style={styles.status}>Trạng thái: {status}</Text>
        <Text style={styles.products}>Tổng sản phẩm: {products.length}</Text>
        <Text style={styles.total}>Tổng tiền: {total}</Text>
      </View>

  )
}

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Lịch sử giao dịch</Text>
    <FlatList 
      data={data}
      keyExtractor={item => Math.random()}
      renderItem={renderItem}
    />
    </View>
  );
};

export default CartHistory;

const styles = StyleSheet.create({
  total:{
    color:'#000',
    fontSize:14,
  },
  products:{
    color:'#000',
    fontSize:14,
  },
  status:{
    color:'#007537',
    fontSize:16,
  },
  date:{
    color:'#221F1F',
    fontSize:16,
    borderBottomColor:'#7D7B7B',
    borderBottomWidth:0.5,

  },
  cartItemContainer:{
    marginTop:18,
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

var data=[
  {
      "_id": "61f3e7aaf4100600161cc99b",
      "user": "61dd764bb4c902001617bf4c",
      "status": "Đang xử lý",
      "total": 13,
      "products": [
          {
              "_id": "61f3e7aaf4100600161cc99c",
              "product": "61d12f0c555401c8610fb8d1",
              "quantity": 2,
              "price": 1
          },
          {
              "_id": "61f3e7aaf4100600161cc99d",
              "product": "61d12f0c555401c8610fb8d2",
              "quantity": 2,
              "price": 1
          },
          {
              "_id": "61f3e7aaf4100600161cc99e",
              "product": "61d12f0c555401c8610fb8d3",
              "quantity": 3,
              "price": 3
          }
      ],
      "createdAt": "2022-01-28T12:55:06.037Z",
      "updatedAt": "2022-01-28T12:55:06.037Z"
  }
]