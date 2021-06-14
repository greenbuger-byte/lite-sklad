import React, { useState } from 'react';
import {Form, Input } from 'antd';
import {productRequest} from '../DAL/productRequest';
import { Button } from 'antd';
const FormEdit = ({product, id}) => {
    const [balance, setBalance] = useState(product.balance);
    const save = () => {
        if(product.balance >= balance){
            productRequest.update(id, (product.balance-balance));
        }else{
            alert('Balance catn\'t be less zero');
        }
    }
    return (
        <Form>
            <Form.Item
                 label={`На остатке: ${balance}`}
                 name="balance"
                 initialValue={1}
                 rules={[{ required: true, message: 'Введите количество' }]}
            >
                <Input onChange={e=>setBalance(e.target.value)} />
                <Button onClick={save}>Изменить</Button>
            </Form.Item>
           
        </Form>
    );
};

export default FormEdit;