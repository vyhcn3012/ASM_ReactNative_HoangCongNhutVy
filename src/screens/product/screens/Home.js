import React,{useState,useContext,useEffect} from 'react'
import { View, Text,StyleSheet,FlatList,Pressable } from 'react-native'
import { Image } from 'react-native'
import { ProductContext } from '../ProductContext'
const Home = (props) => {
    const {navigation}=props;
    const {onGetProductForHomePage}=useContext(ProductContext);
    const [data,setData] =useState([]);
    const [isLoading, setIsLoading] = useState(false);
    //tự động chạy khi component dc gọi
    useEffect(async ()=>{
        setIsLoading(true);
        const res =await onGetProductForHomePage();
        setData(res);
        setIsLoading(false);
        return () =>{
            res;
        };
    }, []);

    const renderItem=({item}) =>{
        const {name,products}=item;
        return(
            <View style={styles.categoryContainer}>
                <Text style={styles.categoryName}>{name}</Text>
                <View style={styles.productContainer}>
                    {
                        products.map(pro =>{
                            return(
                                <Pressable onPress={() => navigation.navigate('Detail',{ id: pro._id })} style={styles.product} key={pro._id}>
                                    <View style={styles.productImageContainer}>
                                        <Image style={styles.productImage} resizeMode='cover'
                                        source={{uri: pro.images[0]}}/>

                                    </View>
                                    <View style={styles.productNameContainer}>
                                        <Text numberOfLines={1} style={styles.productName}>{pro.name}</Text>
                                    </View>
                                    <View style={styles.productPriceContainer}>
                                        <Text style={styles.productPrice}>{pro.price}đ</Text>
                                    </View>
                                </Pressable>
                            )
                        })
                    }
                </View>
               
            </View>
        )
    }
    const renderHeader=() =>{
        return(
            <View>
             
               <Image style={{width:'100%',position:'relative'}} source={require('../../../assets/images/banner.png')}/>
               <View style={styles.productSlogan}>
                    {/* <Text style={styles.productSlogan1}>Planta - toả sáng không gian nhà bạn</Text> */}
               </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            {
                isLoading==true?
                <Text style={styles.loading}>Đang tải dữ liệu</Text> :
            
          <FlatList ListHeaderComponent={renderHeader} 
                    data={data} renderItem={renderItem} 
                    keyExtractor={item => item._id}
                    showsVerticalScrollIndicator={false}/>
            }
        </View>
    )
}

export default Home
const styles = StyleSheet.create({
    loading:{
       marginTop:200,
       marginLeft:100,
       fontSize:30,
    
    },
    productSlogan1:{
        fontSize:20,
        paddingRight:160,
        fontWeight:'500',
    },
    productSlogan:{
    
        top:80,
        position:'absolute'
       
    },
    productPrice:{
        fontSize:20,
        color:'#221F1F',
        fontWeight:'500',
    },
    productPriceContainer:{

    },
    productName:{
        fontSize:16,
        color:'#221F1F',
        fontWeight:'500',
    },
    productNameContainer:{

    },
    productImage:{
        width:100,
        height:100,
    },
    productImageContainer:{
        backgroundColor:'#F6F6F6',//F6F6F6
        height:134,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        
    },
    product:{
        width:'46%',
        marginBottom:16,
    },
    productContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between'


    },
    categoryName:{
        color:'#221F1F',
        fontSize:24,
        fontWeight:'500',
        marginBottom:16,
    },
    categoryContainer:{
        paddingHorizontal:24,
        marginTop:20,
    },
   container:{
        // width:'100%',
        // height:'100%',
       
        flexGrow:1,
        backgroundColor:'white',
   },
})

