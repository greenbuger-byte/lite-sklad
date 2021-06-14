import React,{useState} from 'react';
import style from '../styles/Sider.module.scss';
import Link from 'next/link';
import {useRouter} from 'next/router';
import { FileAddOutlined,  HistoryOutlined, UnorderedListOutlined } from '@ant-design/icons';
import {ADD_PRODUCT_ROUTE, LIST_ROUTE, HISTORY_ROUTE} from '../utils/routers';

const SiderCustom = (collapsed) => {
      const menu = [
        {id: 1, name: 'Список', to: LIST_ROUTE, icon: <UnorderedListOutlined/>},
        {id: 2, name: 'Добавить', to: ADD_PRODUCT_ROUTE,  icon: <FileAddOutlined/>},
        {id: 3, name: 'История', to: HISTORY_ROUTE, icon: <HistoryOutlined/>},
      ];
      const router = useRouter();
      console.log(collapsed)
    return ( <ul className={style.sider}> 
     {menu.map(m=><li  key={m.id} className={router.pathname === m.to ? style.sider__active : ''}><Link  href={m.to}><a className={collapsed.collapsed ? style.sider__collapsed : ''}>{m.icon} {!collapsed.collapsed ? m.name : ''}  </a></Link></li>)}
      </ul>  );
};


export default SiderCustom;