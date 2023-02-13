import './App.css';
import './style/header.css'
import './style/main.css'
import Navbar from "./component/Navbar";
import User from "./component/customer/User";
import { Layout} from 'antd';
import {Route, Routes} from "react-router-dom";
import Product from "./component/product/Product";
const { Header, Content } = Layout;


export const convertObjectToArr = (obj) => {
    // console.log(obj)
    // console.log(Object.keys(obj))

    const data = Object.keys(obj).map((key, index) => {
        const id = index + 1
        const item = {key, id, ...(obj[key])}
        return item;
    })
    return data
}

function App() {


    return (
        <Layout className="layout">
            <Header>
               <Navbar />
            </Header>
            <Content className={'main'}>


                <Routes>
                    <Route path={'/'} element={<User />}/>
                    <Route path={'/user'} element={<User />}/>
                    <Route path={'/product'} element={<Product />}/>


                </Routes>
            </Content>

        </Layout>
    );
}

export default App;
