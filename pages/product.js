
import FormProduct from '../components/FormProduct';
import MainLayout from '../layouts/MainLayout';
import { productRequest } from '../DAL/productRequest';
import {useRouter} from 'next/router';
import { useState } from 'react';
import {Alert, Card} from 'antd';
import { LIST_ROUTE } from '../utils/routers';


const product = () => {
    const [err, setErr] = useState('');
    const router = useRouter();
    const saveHandler = async (formData)=>{
      await productRequest.create(formData);
            router.push(LIST_ROUTE);
    }

    return (
        <MainLayout>
            <h1>Добавить товар</h1>
            {err!=='' && 
                 <Alert
                 message="Ошибка"
                 description={err}
                 type="error"
                 showIcon
               /> 
            }
           <Card>
               <FormProduct isError = { ()=>setErr(' Не все поля заполнены') } saveHandler={(formData) => saveHandler(formData)} isCreated/>
            </Card> 
        </MainLayout>
    );
};

export default product;