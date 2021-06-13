import Link from 'next/link';
import {useState} from 'react';
import HeaderContainer from '../components/Header';
import style from '../styles/Layouts.module.scss';
import { useRouter } from 'next/router';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import Head from 'next/head';
import { Layout, Menu ,  Row, Col, Card, Breadcrumb } from 'antd';
import HistoryRow from '../components/HistoryRow';
import { FileAddOutlined, WalletOutlined, HistoryOutlined, UnorderedListOutlined, MoreOutlined } from '@ant-design/icons';
import {ADD_PRODUCT_ROUTE, LIST_ROUTE, HISTORY_ROUTE} from '../utils/routers';

const {  Footer, Sider, Content, Header  } = Layout;
const { SubMenu } = Menu;
const MainLayout = ({children, props}) => {
  const router = useRouter();
  

      const [menu, setMenu] = useState([
        {id: 1, name: 'Список', to: LIST_ROUTE, icon: <UnorderedListOutlined/>},
        {id: 2, name: 'Добавить', to: ADD_PRODUCT_ROUTE,  icon: <FileAddOutlined/>},
        {id: 3, name: 'История', to: HISTORY_ROUTE, icon: <HistoryOutlined/>},
      ]);

     const handleMenuClick = (e) => {
        //  setMenu(menu.map((m)=>{
        //   if(m.to === to ){ 
        //     return ({...m, active:true}) 
        //   }else{ 
        //     return ({...m, active:false})
        //   }
        // }))
        router.push(e.key);
        console.log(e);
     }
    return (
    <Layout style={{height: '100vh'}}>
         <Head>
            <title>LITE SKLAD</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
        <Header className={style.headerAntd}>
                    <HeaderContainer/>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu mode="vertical" onClick={handleMenuClick} defaultSelectedKeys={[1]}>
                {menu.map(m=>  <Menu.Item key={m.to} >  {m.icon}  {m.name} </Menu.Item>)}  
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content>
              <Row>
                <Col span={20} sm>
                    {children} 
                </Col>
                <Col span={8}>
                  <HistoryRow/>
                </Col>
              </Row>
            </Content>
          </Layout>
      
        </Layout>
        <Footer>
               Footer
        </Footer>
    </Layout>
    );
};


export default MainLayout;