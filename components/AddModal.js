
import { Modal} from 'antd';
import FormProduct from './FormProduct';
const AddModal = ({isAddModalVisible, handleCancel, handleOk, currentProduct}) => {
   
    console.log('product', currentProduct);
    
    return (
        <Modal 
        title="Редактировать товар" 
        visible={isAddModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}
        okText="Сохранить"
        cancelText="Отмена"
        >
          <FormProduct product={currentProduct}/>
        
      </Modal>
    );
};

export default AddModal;