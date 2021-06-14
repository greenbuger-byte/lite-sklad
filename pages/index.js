
import MainLayout from '../layouts/MainLayout';
import { Input, Card } from 'antd';
import Product from '../components/Product';
const { Search } = Input;
import style from '../styles/Home.module.scss';
import { useEffect, useState } from 'react';
import {db} from '../firebase';
export default function Home() {
  const [productList, setProductList] = useState([]); 
  const [filterProductList, setFilterProductList] = useState([]); 
  const [searchInput, setSearchInput] = useState('');
  // const productList = [
  //   {id: 1, barcode: '12312321', name:'Дисплей Apple Iphone 6 plus AAA+ Китай', balance:23,  retail: 1200, repair: 1000, wholesale:900},
  //   {id: 2, barcode: '2353453454', name:'Дисплей Apple Iphone 7 plus AAA+ Китай', balance:3,  retail: 1500, repair: 1300, wholesale:1000}
  // ]
  useEffect( () => {
    db.collection('products').onSnapshot((snapshot) =>{
      setProductList(snapshot.docs.map(doc=>({id: doc.id, data: doc.data()}))); // return product's list
      setFilterProductList(snapshot.docs.map(doc=>({id: doc.id, data: doc.data()}))); // return product's list
    }) 
  }, [] );


  useEffect( () => {
   findHandler();
  }, [searchInput])

  const  findHandler =  async () => {
    if(searchInput!=''){
     await setFilterProductList(productList.filter(product => {
        if(product.data.barcode == searchInput) return  product;
    }));
    if(filterProductList.length<1){
      //Поиск по тексту
      let str = new RegExp(`${searchInput}`, 'g');
     await setFilterProductList(productList.filter(product => {
        if(product.data.name.match(str)){
           return  product;
        }
    }));
    }

    }else{
      setFilterProductList(productList);
    }
  }
      
  return (
      <MainLayout>
          <div className={style.main}>{searchInput}
        <div className={style.main__title}> <h2>Список товара </h2><div><Search onChange={(e)=>setSearchInput(e.target.value)}  placeholder="Найти в списке" width={300} /></div></div>   
        <div className={style.main__list}>   
        {  filterProductList.length>0  ? ( filterProductList.map(({id, data})=> <Product key={id} id={id} product={data} />)) : 'Ничего не найдено' }
        
    
            </div>
             </div>
           
      </MainLayout>
  )
}
