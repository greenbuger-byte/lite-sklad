import {Button,  Modal} from 'antd';
import FormEdit from './FormEdit';
const EditModal = ({isEditModalVisible, handleEditCancel, handleEditOk, currentProduct}) => {
   
    
    return (
        <Modal 
        title={`Списать ${currentProduct.name}`}
        visible={isEditModalVisible} 
        onOk={handleEditOk} 
        onCancel={handleEditCancel}
        okText="Списать"
        cancelText="Отмена"
        >
         <FormEdit product={currentProduct}/>
         
      </Modal>
    );
};

export default EditModal;