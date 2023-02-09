import React, {useState} from 'react';
import {Drawer, Menu} from "antd";
import {NavLink} from "react-router-dom";

const items = [
    {
        key: 'customer',
        label: (
            <NavLink to={'/user'}>
                Customer
            </NavLink>
        ),
    },
    {
        label: (
            <NavLink to={'/product'}>
                Product
            </NavLink>
        ),
        key: 'propduct',
    },
    {
        label: 'Service',
        key: 'service',
    },
    {
        label: 'Contact',
        key: 'contact',
    }
]

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <>
            <HeaderMenu/>
            {/*<Drawer*/}
            {/*    open={openMenu} close={false} onClose={() => setOpenMenu(!openMenu)}*/}
            {/*>*/}
            {/*    <HeaderMenu isInline />*/}
            {/*</Drawer>*/}
        </>

    );
};
const HeaderMenu = ({isInline=false}) => {
    return (
        <Menu
            theme="dark"
            mode={isInline ? " " : "horizontal"}
            defaultSelectedKeys={['2']}
            items={items}
            style={{fontSize:'25px'}}
        />

    );
};

export default Navbar;