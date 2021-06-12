
import MainLayout from '../layouts/MainLayout';
import { Input, Card } from 'antd';
import Product from '../components/Product';
const { Search } = Input;
import style from '../styles/Home.module.scss';
import { useEffect, useState } from 'react';
import {listProduct} from '../DAL/createProduct';

export default function Home() {
  const onSearch = value => console.log(value);
  const [productList, setProductList] = useState([]);
  // const productList = [
  //   {id: 1, barcode: '12312321', name:'Дисплей Apple Iphone 6 plus AAA+ Китай', balance:23,  retail: 1200, repair: 1000, wholesale:900},
  //   {id: 2, barcode: '2353453454', name:'Дисплей Apple Iphone 7 plus AAA+ Китай', balance:3,  retail: 1500, repair: 1300, wholesale:1000}
  // ]
  useEffect( () => {
    setProductList( listProduct(listProduct) );
  }, [] );
      
  return (
      <MainLayout>
          <div className={style.main}>
        <div className={style.main__title}> <h2>Список товара </h2><div><Search placeholder="Найти в списке" width={300} onSearch={onSearch} /></div></div>   
        <div className={style.main__list}>   
        <Card>
        {productList.map(product=> <Product key={product.id} product={product} />)} 
        </Card>     
       
    
            </div>
             </div>
           
      </MainLayout>
  )
}
