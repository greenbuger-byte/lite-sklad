import { Form , Input} from 'antd';
import { useEffect, useState } from 'react';

const FormProduct = ({product}) => {
    let currentProduct = product || {barcode: '', name: '', balance: '', retail: '', wholesale: '', rapair: ''}
    const [name, setName] = useState(currentProduct.name || '');
    const [barcode, setBarcode] = useState(currentProduct.barcode || '');
    const [balance, setBalance] = useState(currentProduct.balance || '');
    const [retail, setRetail] = useState(currentProduct.retail || '');
    const [wholesale, setWholesale] = useState(currentProduct.wholesale || '');
    const [repair, setRepair] = useState(currentProduct.repair || '');
    

    return (
        <Form>
            <Form.Item
             label="Наименование"
             name="name"
             initialValue={name}
             rules={[{ required: true, message: 'Введите наименование' }]}
            >
                <Input onChange={e=>setName(e.target.value)}/>
            </Form.Item>
            <Form.Item
             label="Штрихкод"
             name="barcode"
             initialValue={barcode}
             rules={[{ required: true, message: 'Введите штрихкод' }]}
            >
                <Input onChange={e=>setName(e.target.value)}/>
            </Form.Item>
            <Form.Item
             label="Остаток"
             name="balance"
             initialValue={balance}
             rules={[{ required: true, message: 'Остаток не может быть пустым' }]}
            >
                <Input  onChange={e=>setBalance(e.target.value)}     />
            </Form.Item>
            <Form.Item
             label="Розница"
             name="retail"
             initialValue={retail}
             rules={[{ required: true, message: 'Розница не может быть пустым' }]}
            >
                <Input  onChange={e=>setRetail(e.target.value)}     />
            </Form.Item>
            <Form.Item
             label="Оптовая"
             name="wholesale"
             initialValue={wholesale}
             rules={[{ required: true, message: 'Оптовая не может быть пустым' }]}
            >
                <Input  onChange={e=>setWholesale(e.target.value)}     />
            </Form.Item>
            <Form.Item
             label="Ремонтная"
             name="repair"
             initialValue={repair}
             rules={[{ required: true, message: 'Ремонтная не может быть пустым' }]}
            >
                <Input  onChange={e=>setRepair(e.target.value)}     />
            </Form.Item>
      
    </Form>
    );
};

export default FormProduct;