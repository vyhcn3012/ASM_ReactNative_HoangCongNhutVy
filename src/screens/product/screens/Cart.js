import React,{useContext, useState,useEffect} from 'react'
import { View, Text,StyleSheet,Image,Pressable,FlatList,Dimensions,Modal, ToastAndroid } from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import { FontAwesome,MaterialIcons  } from '@expo/vector-icons';
import { ProductContext } from '../ProductContext';


const CartItems=(props) =>{
 
    const {data, updateCart} = props;
    const renderItem=({item}) =>{
        const {product,quantity,price,checked} =item;
        return(
            <View style={styles.itemContainer}>
            
                {/* <View style={styles.checkedContainer}>
                    {
                        checked== true ?
                        <FontAwesome name="check-square" size={24} color="black" /> :
                        <FontAwesome name="square-o" size={24} color="black" />
                    }
                    

                </View>  */}
                <View style={styles.imageContainer}>
                    <Image style={styles.image} resizeMode='cover'
                    source={{uri: product.images[0]}}/>
                
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.name}>
                        <Text>{product.name}</Text>
                    </View>
                    <View>
                        <Text style={styles.price}>{product.price}đ</Text>
                    </View>
                    <View style={styles.quatityAction}>
                          <Text 
                          onPress={() => updateCart(product, price, quantity - 1 ,true)}
                          style={styles.removeAction}>-</Text>
                          <Text  style={styles.quatity}>{quantity}</Text>
                          <Text 
                          onPress={() => updateCart(product, price, quantity + 1 ,true)}
                          style={styles.addAction}>+</Text>
                          {/* <Text  style={styles.deleteAction}>Xóa</Text> */}
                    </View>
                </View>
            </View>

        )
    }

   

    return(
        <FlatList 
        data={data}
        renderItem={renderItem}
        style={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
        keyExtractor={item =>Math.random()}
        />
        
    )
    
}

const CheckoutModal=(props)=>{
    const {isShowModal,setIsShowModal} = props;
    const {onSaveCart} =useContext(ProductContext);
    const checkout = async () =>{
        await onSaveCart();
        ToastAndroid.show("Thanh toán thành công",ToastAndroid.BOTTOM);
        setIsShowModal(false);
    }
    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={isShowModal}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text style={styles.checkout}>Xác nhận thanh toán</Text>
                        <Pressable onPress={checkout} style={styles.checkoutButton}>
                            <Text style={styles.checkoutText}>Đồng ý</Text>
                        </Pressable>
                        <Text onPress={() => setIsShowModal(false)} style={styles.cancel}>Hủy bỏ</Text>
                    </View>
                </View>
        </Modal>
    )
}


const DeleteModal=(props)=>{
    const {isShowDeleteModal,setIsShowDeleteModal} = props;
    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={isShowDeleteModal}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text style={styles.checkout}>Xác nhận xóa tất cả đơn hàng</Text>
                        <Pressable style={styles.checkoutButton}>
                            <Text style={styles.checkoutText}>Đồng ý</Text>
                        </Pressable>
                        <Text onPress={() => setIsShowDeleteModal(false)} style={styles.cancel}>Hủy bỏ</Text>
                    </View>
                </View>
        </Modal>
    )
}


 const Cart = (props) => {

     const {updateCart, cart}= useContext(ProductContext);
     const [isShowModal, setIsShowModal] = useState(false);
     const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
    

     const isShowCheckout =() =>{
         const items=cart?.filter(item => item.checked ==true) || [];
         let total=0;
         for (let index = 0; index < items.length; index++) {
             const element = items[index];
             total+=element.quantity * element.price;
         }
         return {
             isShow: items.length>0, total: total
         }
     }
   

    

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Giỏ Hàng</Text>
                {/* <FontAwesome onPress={() => setIsShowDeleteModal(true)} style={styles.trash}  name="trash-o" size={24} color="black" /> */}
            </View>
            <View>
            {
                cart.length == 0 ?
                <View style={styles.emptyContainer}>
                    <Text style={styles.empty}>Giỏ hàng của bạn đang trống</Text>
                </View> :
                <CartItems data={cart} updateCart={updateCart}/>
            }
            </View>
            <View style={styles.checkoutContainer}>
                {
                    isShowCheckout().isShow==true ?
                    <>
                      <View style={styles.totalContainer}>
                        <Text style={styles.totalText}>Tạm tính</Text>
                        <Text>{isShowCheckout().total}đ</Text>
                      </View>
                      <Pressable onPress={() => setIsShowModal(true)} style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Tiến hành thanh toán</Text>
                            <MaterialIcons style={styles.buttonIcon} name="keyboard-arrow-right" size={24} color="white" />
                      </Pressable>
                    </> : <></>
                }
              
            </View>
            <CheckoutModal isShowModal={isShowModal} setIsShowModal={setIsShowModal}/>
            <DeleteModal isShowDeleteModal={isShowDeleteModal} setIsShowDeleteModal={setIsShowDeleteModal}/>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    name:{
        width:200,
        overflow:'hidden',
    },
    cancel:{
       borderBottomColor:'black',
       borderBottomWidth:1,
       marginTop:8,
     },
    checkoutText:{
       color:'white'
    },
    checkoutButton:{
      backgroundColor:'#007537',
      height:50,
      borderRadius:4,
      width:'100%',
      alignItems:'center',
      justifyContent:'center',
      marginTop:16,

    },
    checkout:{
        color:'#252A31',
        fontSize:16,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor:'rgba(0,0,0,0.5)'
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width:'90%',
        height:200,
      },
    flatListContainer:{
        maxHeight:Dimensions.get('window').height-170,
    },
    buttonText:{
        color:'white',
    },
    buttonContainer:{
        width:'100%',
       height:50,
       backgroundColor:'#007537',
       borderRadius:8,
       justifyContent:'space-between',
       flexDirection:'row',
       paddingHorizontal:30,
       alignItems:'center',
       marginTop:16,
    },
    totalText:{
        opacity:0.6,
    },
    totalContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
    },
    checkoutContainer:{
        paddingHorizontal:28,
        position:'absolute',
        bottom:0,
        width:'100%',
    },
    deleteAction:{
        borderBottomColor:'black',
        borderBottomWidth:1,
    },
    addAction:{
        borderRadius:5,
        borderWidth:1,
        width:27.5,
        height:27.5,
        textAlign:'center',
        lineHeight:22.5,
        color:'black',
      },
      quatity:{
        
      },
      removeAction:{
        borderRadius:5,
        borderWidth:1,
        width:27.5,
        height:27.5,
        textAlign:'center',
        lineHeight:22.5,
        color:'black',
      },
    quatityAction:{
        flexDirection:'row',
        justifyContent:'space-between',
       
        alignItems:'center'
      },
    price:{
        color:'#007537',
        fontSize:16,
    },
    infoContainer:{
      marginLeft:15,
    },
    image:{
      width:'80%',
      height:'80%',
    },
    imageContainer:{
      width:77,
      height:77,
      borderRadius:8,
      marginVertical:24,
      marginLeft:16,
    },
    checkedContainer:{
      width:30,
     
      justifyContent:'center',
      alignItems:'center',
    },
    itemContainer:{
      flexDirection:'row',
       marginVertical:24,
       paddingHorizontal:24,
    },
    empty:{
      
    },
    emptyContainer:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:32,
    },
    trash:{
        right:24,
        position:'absolute'
    },
    title:{
        textTransform:'uppercase',
        fontSize:16,
    },
    titleContainer:{
        position:'relative',
        alignItems:'center',
        justifyContent:'center',
    },
    container:{
        paddingTop:60,
        position:'relative',
        flex:1,
        backgroundColor:'white',
    },

  })
