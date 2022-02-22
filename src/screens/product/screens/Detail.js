import { View, Text,StyleSheet,Image,Pressable, ToastAndroid } from 'react-native';
import React,{useState,useEffect,useContext} from 'react';
import PagerView from 'react-native-pager-view';
import { ProductContext } from '../ProductContext';

const PartialView=(props) =>{
  const {product} =props;
  const {price,size,madein,quantity, _id}=product;
  const {getCart, updateCart}=useContext(ProductContext);
  const getQuantity=()=>{
    if(getCart().length ==0){
      return 0;
    }
    let item=getCart().filter(i => i.product._id == product._id);
    if(item.length ==0){
      return 0;
    }
    return item[0].quantity;
  }




  const [number, setNumber] = useState(getQuantity());
  const onNumberChange=(isAdd) =>{
      if(isAdd==true){
        setNumber(number+1);

      }else if(isAdd==false && number>=1){
        setNumber(number-1);
      }
  }

  const onUpdateCART =() =>{
    updateCart(product, price,number, true);
    ToastAndroid.show('Thêm sản phẩm thành công!',ToastAndroid.BOTTOM);
  }
  return (
    <>
    <View style={styles.productInfoContainer}>
          <Text style={styles.productPrice}>{price}đ</Text>
          <Text style={styles.productTitle}>Chi tiết sản phẩm</Text>
          <View style={styles.productDetail}>
            <Text style={styles.productDetailText}>Kích cỡ</Text> 
            <Text style={styles.productDetailText}>{size}</Text> 
          </View>
          <View style={styles.productDetail}>
            <Text style={styles.productDetailText}>Xuất xứ</Text> 
            <Text style={styles.productDetailText}>{madein}</Text> 
          </View>
          <View style={styles.productDetail}>
            <Text style={styles.productDetailText}>Tình trạng</Text> 
            <Text style={styles.productDetailText}>{quantity}</Text> 
          </View>
      </View>

      <View style={styles.cartProcessContainer}>
         <View style={styles.ProcessQuantity}>
            <Text style={styles.quatityText}>Đã chọn {number} sản phẩm</Text>
            <View style={styles.quatityAction}>    
              <Text onPress={() => onNumberChange(false)} style={styles.removeAction}>-</Text>
              <Text style={styles.quatity}>{number}</Text>
              <Text onPress={() => onNumberChange(true)} style={styles.addAction}>+</Text>
            </View>

         </View>
         <View style={styles.ProcessTotal}>
              <Text style={styles.totalText}>Tạm tính</Text>
              <Text style={styles.total}>{number * price}đ</Text>
         </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={onUpdateCART} style={[styles.button, number >0 ? styles.changeBackgroundColor:null]}>
            <Text style={styles.buttonText}>Chọn mua</Text>
        </Pressable>
      </View>
    
    </>
  )
}

const Detail = (props) => {
    const { navigation, route: { params: {id}}}=props;
    
    const {onGetProductDetail}=useContext(ProductContext);
    const [product, setProduct] = useState(null);

    useEffect(async () => {
     const res =await onGetProductDetail(id);
     setProduct(res);
     
      return () => {
        res;
      };
    }, []);
   
    
    if(!product){
      return (<></>)
    }
    const {name,images,price,size,madein,quantity, }=product;
  return (
    <View style={styles.container}>
      <View style={styles.productNameContainer}>
        <Text style={styles.productName}>{name}</Text>
      </View>
      <View style={styles.productImagesContainer}>
        <PagerView style={styles.productImagesPager} initialPage={0} orientation='horizontal'>
          {
            images.map(img =>
                <Image key={Math.random()} 
                source={{uri: img}} style={styles.productImage}
                resizeMode='cover' />
              
              )
          }
        </PagerView>
      </View>
        <PartialView product={product}/>
      
    </View>
  );
};

export default Detail;
const styles = StyleSheet.create({
  changeBackgroundColor:{
    backgroundColor:'#007537',
   
  },
  buttonText:{
   fontSize:16,
   color:'white',
   textTransform:'uppercase',
  },
  button:{
    backgroundColor:'#ABABAB',
    borderRadius:8,
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
  },
  buttonContainer:{
    paddingHorizontal:24,
    height:50,
    marginTop:16,
  },
  total:{
    marginTop:5,
    textAlign:'right',
    fontSize:24,
    fontWeight:'500',
  },
  totalText:{
    color:'black',
    opacity:0.6,
  },
  ProcessTotal:{
    
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
    marginTop:12,
    alignItems:'center'
  },
  quatityText:{
    fontSize:14,
    opacity:0.6,
  },
  ProcessQuantity:{
    
  },
  cartProcessContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:24,
    
  },
  productDetailText:{
    fontSize:14,
    fontWeight:'500',
    color:'#3A3A3A',
  },
  productDetail:{
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomColor:'#221F1F',
    borderBottomWidth:0.55,
    marginTop:15,
  },
  productTitle:{
    marginTop:15,
    fontSize:16,
    fontWeight:'500',
    color:'#3A3A3A',
    borderBottomColor:'#221F1F',
    borderBottomWidth:0.5,
  },
  productPrice:{
    fontSize:24,
    fontWeight:'500',
    color:'#007537',
  },
  productInfoContainer:{
    paddingHorizontal:48,
    paddingVertical:32,
  },
  productImage:{
    width:'100%',
    height:'100%',
  },
  productImagesPager:{
    flex:1,

  },
  productImagesContainer:{
    width:'100%',
    height:250,

  },
  productNameContainer:{
    justifyContent:'center',
    alignItems:'center',
    height:55,
    marginTop:45,

  },
  productName:{
    fontSize:16,
    fontWeight:'500',
  },
  container:{
    
    flexGrow:1,
    backgroundColor:'white',
   
  },
})

