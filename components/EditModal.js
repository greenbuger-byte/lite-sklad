import { Modal} from 'antd';
const EditModal = ({isEditModalVisible, handleEditCancel, handleEditOk, currentProduct}) => {
   
    
    return (
        <Modal 
        title="Списать товар" 
        visible={isEditModalVisible} 
        onOk={handleEditOk} 
        onCancel={handleEditCancel}
        okText="Сохранить"
        cancelText="Отмена"
        >
         ,,,,
        
      </Modal>
    );
};

export default EditModal;