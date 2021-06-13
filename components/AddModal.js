
import { Drawer } from 'antd';
import FormProduct from './FormProduct';
const AddModal = ({isAddModalVisible, handleCancel, handleOk, currentProduct}) => {
   
    return (
        <Drawer
            width={640}
            title=""
            placement="right"
            closable={false}
            onClose={handleCancel}
            visible={isAddModalVisible}
        >
            <FormProduct product={currentProduct}/>
        </Drawer>
    );
};

export default AddModal;