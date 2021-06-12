
import MainLayout from '../layouts/MainLayout';
import { Input } from 'antd';
import Product from '../components/Product';
const { Search } = Input;
import style from '../styles/Home.module.scss';

export default function Home() {
  const onSearch = value => console.log(value);

  const productList = [
    {id: 1, barcode: '12312321', name:'Дисплей Apple Iphone 6 plus AAA+ Китай', balance:23,  retail: 1200, repair: 1000, wholesale:900},
    {id: 2, barcode: '2353453454', name:'Дисплей Apple Iphone 7 plus AAA+ Китай', balance:3,  retail: 1500, repair: 1300, wholesale:1000}
  ]

      
  return (
      <MainLayout>
          <div className={style.main}>
        <div className={style.main__title}> <h2>Список товара </h2><div><Search placeholder="Найти в списке" width={300} onSearch={onSearch} /></div></div>   
        <div className={style.main__list}>        
       {productList.map(product=> <Product key={product.id} product={product} />)} 
    
            </div>
             </div>
           
      </MainLayout>
  )
}
