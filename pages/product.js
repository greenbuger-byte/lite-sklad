
import FormProduct from '../components/FormProduct';
import MainLayout from '../layouts/MainLayout';

const product = () => {
    return (
        <MainLayout>
            <h1>Добавить товар</h1>
            <FormProduct/>
        </MainLayout>
    );
};

export default product;