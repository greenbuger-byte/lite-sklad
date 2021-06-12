import {useState} from 'react';
import style from '../styles/Product.module.scss';
import { WalletOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';



import AddModal from './AddModal';
import EditModal from './EditModal';
const Product = ({product}) => {
    const [isAddModalVisible, setIsAddModalVisible] = useState(false);
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);


    const showModal = (product) => {
        setIsAddModalVisible(true);
      };
    
      const handleOk = () => {
        setIsAddModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsAddModalVisible(false); 
      };
      const saveProduct = () =>{

      }
      const handleEditOk = () =>{

      }
    return (
        <>
        <div className={style.product}>
         
    <div onClick={()=>showModal(product)} className={style.product__content}>
            <div className={style.product__repair}>{product.barcode}   </div>
            <div className={style.product__name}>
            {product.name}
            </div>
            <div className={style.product__balance}>
             <span>Остаток:</span>
             {product.balance} <span> шт.</span> 
            </div>
            <div className={style.product__retail}>
            <span>Розница:</span>
            {product.retail} <span> ₽</span> 
            </div>
            <div className={style.product__repair}>
            <span>Ремонтная:</span>
            {product.repair} <span> ₽</span> 
            </div>
            <div className={style.product__wholesale}>
            <span>Оптовая:</span>
            {product.wholesale} <span> ₽</span> 
            </div>
           
        </div>
             <div>
        
            <Tooltip placement="topLeft" onClick={()=> setIsEditModalVisible(true)} title="Списать"><Button><WalletOutlined /></Button></Tooltip>
            </div>
        
        </div>
        <AddModal currentProduct={product} saveProduct = {saveProduct} isAddModalVisible={isAddModalVisible} handleOk={handleOk} handleCancel={handleCancel}/>
        <EditModal currentProduct={product}  isEditModalVisible={isEditModalVisible} handleOk={handleEditOk} handleEditCancel={()=>setIsEditModalVisible(false)}/>
        </>
    );
};

export default Product;