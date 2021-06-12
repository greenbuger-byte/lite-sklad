import React, { useState } from 'react';
import {Form, Input } from 'antd';
const FormEdit = ({product}) => {
    const [balance, setBalance] = useState(product.balance);
    return (
        <Form>
            <Form.Item
                 label={`На остатке: ${balance}`}
                 name="balance"
                 initialValue={1}
                 rules={[{ required: true, message: 'Введите количество' }]}
            >
                <Input/>
            </Form.Item>
           
        </Form>
    );
};

export default FormEdit;