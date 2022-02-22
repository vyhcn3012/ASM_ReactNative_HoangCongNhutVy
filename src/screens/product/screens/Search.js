import React from 'react'
import { View, Text,Image,StyleSheet,TextInput,FlatList,Pressable } from 'react-native'


 const Search = (props) => {
    const {navigation}=props;


    const renderItem=({item}) =>{
        const {name,price,quantity,images,_id}=item;
        return(
           
            <Pressable onPress={() => navigation.navigate('Detail',{id:_id})} style={styles.categoryContainer}>
          
            <Image style={styles.productImage} resizeMode='cover'
                                        source={{uri:images[0]}}/>
                            
                               
          
            <View style={styles.productContainer}>         
            <Text style={styles.productName}>{name}</Text>            
            <Text style={styles.productPrice}>{price}đ</Text>        
            <Text style={styles.productquantity}>Còn {quantity} sp</Text>
            </View>
         
           
            
           
        </Pressable>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.textSearchContainer}>
                <Text style={styles.textSearch}>Tìm kiếm</Text>
            </View>
            <View style={styles.textInputContainer}>
                <Text style={styles.textSearch}>Tìm kiếm</Text>
                <View>
                    <TextInput style={styles.textInput} placeholder='Từ khóa tìm kiếm'/>
                    <Image style={styles.searchIcon} source={require('../../../assets/images/search.png')}/>
                </View>
            
            </View>
            <View style={{marginTop:70}}>
            <FlatList data={data}
            renderItem={renderItem}
            keyExtractor={item => Math.random()}
            showsVerticalScrollIndicator={false}
            />
            </View>
        </View>
    )
}

export default Search
const styles = StyleSheet.create({
    productquantity:{
        fontSize:16,
    },
  
    productContainer:{
        paddingLeft:30,
        paddingVertical:10,
    },
    categoryContainer:{
      flexDirection:'row',
      marginBottom:50,
      paddingHorizontal:40,
    },
    productName:{
        fontSize:16,
        color:'#221F1F',
        fontWeight:'500',
    },
    productPrice:{
        fontSize:16,
    },
    productNameContainer:{
     
    },
    productImageContainer:{
      
    },
    productImage:{
      
        width:100,
        height:100,
    },
    
   
    searchIcon:{
        position:'absolute',
        right:8,
        top:8,
    },
    textInput:{
        width:'100%',
        height:'100%',
        borderBottomColor:'#221F1F',
        borderBottomWidth:1.5,
        paddingRight:25,
    },
    
    textInputContainer:{
        paddingHorizontal:40,
        height:40,
        position:'relative'
    },
    textSearch:{
        fontSize:16,
        fontWeight:'500',
        textTransform:'uppercase',
        lineHeight:55,
    },
    textSearchContainer:{
        alignItems:'center',
    },
   
   container:{
        // width:'100%',
        // height:'100%',
        marginTop:10,
        flexGrow:1,
        backgroundColor:'white',
        paddingTop:32,
       
   }
})
var data=[
    {
        "sold": 73,
        "images": [
            "https://2.pik.vn/2022764d0cef-ffb4-4dee-a1a6-f4c0ce35fa17.jpg",
            "https://2.pik.vn/2022b3b441fd-3346-4e00-b45a-3cfe53cce7cd.jpg"
        ],
        "_id": "61d12d14555401c8610cfa3a",
        "name": "Lygeum Loefl. ex L.",
        "price": 3,
        "madein": "Mexico",
        "quantity": 3781040078,
        "category": "61d11bf386511f0016f490c9",
        "size": "2XL",
        "createdAt": "2021-11-18T02:13:41.000Z",
        "updatedAt": "2021-12-21T06:00:50.000Z"
    },

    {
        "sold": 73,
        "images": [
            "https://2.pik.vn/2022764d0cef-ffb4-4dee-a1a6-f4c0ce35fa17.jpg",
            "https://2.pik.vn/2022b3b441fd-3346-4e00-b45a-3cfe53cce7cd.jpg"
        ],
        "_id": "61d12d14555401c8610cfa3a",
        "name": "Lygeum Loefl. ex L.",
        "price": 3,
        "madein": "Mexico",
        "quantity": 3781040078,
        "category": "61d11bf386511f0016f490c9",
        "size": "2XL",
        "createdAt": "2021-11-18T02:13:41.000Z",
        "updatedAt": "2021-12-21T06:00:50.000Z"
    },

    {
        "sold": 73,
        "images": [
            "https://2.pik.vn/2022764d0cef-ffb4-4dee-a1a6-f4c0ce35fa17.jpg",
            "https://2.pik.vn/2022b3b441fd-3346-4e00-b45a-3cfe53cce7cd.jpg"
        ],
        "_id": "61d12d14555401c8610cfa3a",
        "name": "Lygeum Loefl. ex L.",
        "price": 3,
        "madein": "Mexico",
        "quantity": 3781040078,
        "category": "61d11bf386511f0016f490c9",
        "size": "2XL",
        "createdAt": "2021-11-18T02:13:41.000Z",
        "updatedAt": "2021-12-21T06:00:50.000Z"
    },

    {
        "sold": 73,
        "images": [
            "https://2.pik.vn/2022764d0cef-ffb4-4dee-a1a6-f4c0ce35fa17.jpg",
            "https://2.pik.vn/2022b3b441fd-3346-4e00-b45a-3cfe53cce7cd.jpg"
        ],
        "_id": "61d12d14555401c8610cfa3a",
        "name": "Lygeum Loefl. ex L.",
        "price": 3,
        "madein": "Mexico",
        "quantity": 3781040078,
        "category": "61d11bf386511f0016f490c9",
        "size": "2XL",
        "createdAt": "2021-11-18T02:13:41.000Z",
        "updatedAt": "2021-12-21T06:00:50.000Z"
    },

    {
        "sold": 73,
        "images": [
            "https://2.pik.vn/2022764d0cef-ffb4-4dee-a1a6-f4c0ce35fa17.jpg",
            "https://2.pik.vn/2022b3b441fd-3346-4e00-b45a-3cfe53cce7cd.jpg"
        ],
        "_id": "61d12d14555401c8610cfa3a",
        "name": "Lygeum Loefl. ex L.",
        "price": 3,
        "madein": "Mexico",
        "quantity": 3781040078,
        "category": "61d11bf386511f0016f490c9",
        "size": "2XL",
        "createdAt": "2021-11-18T02:13:41.000Z",
        "updatedAt": "2021-12-21T06:00:50.000Z"
    },

    {
        "sold": 73,
        "images": [
            "https://2.pik.vn/2022764d0cef-ffb4-4dee-a1a6-f4c0ce35fa17.jpg",
            "https://2.pik.vn/2022b3b441fd-3346-4e00-b45a-3cfe53cce7cd.jpg"
        ],
        "_id": "61d12d14555401c8610cfa3a",
        "name": "Lygeum Loefl. ex L.",
        "price": 3,
        "madein": "Mexico",
        "quantity": 3781040078,
        "category": "61d11bf386511f0016f490c9",
        "size": "2XL",
        "createdAt": "2021-11-18T02:13:41.000Z",
        "updatedAt": "2021-12-21T06:00:50.000Z"
    },

    {
        "sold": 73,
        "images": [
            "https://2.pik.vn/2022764d0cef-ffb4-4dee-a1a6-f4c0ce35fa17.jpg",
            "https://2.pik.vn/2022b3b441fd-3346-4e00-b45a-3cfe53cce7cd.jpg"
        ],
        "_id": "61d12d14555401c8610cfa3a",
        "name": "Lygeum Loefl. ex L.",
        "price": 3,
        "madein": "Mexico",
        "quantity": 3781040078,
        "category": "61d11bf386511f0016f490c9",
        "size": "2XL",
        "createdAt": "2021-11-18T02:13:41.000Z",
        "updatedAt": "2021-12-21T06:00:50.000Z"
    },
]

