import React, {useEffect, useState} from 'react';
import { Button, Form, InputNumber, Tabs} from "antd";
import {getAll} from "../../api/CRUD";
import OrderCustomers from './OrderCustomers'
import OrderProduct from './OrderProduct'


const Order = () => {
    const [customers, setCustomers] = useState([])
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetchDataAll()
    }, [])
    const fetchDataAll = async () => {
        const dataUsers = await getAll("users")
        const dataProduct = await getAll("product")
        setCustomers(dataUsers)
        setProduct(dataProduct)
    }

    const onFinish = (values) => {
        const {selectCustomers = '', orderProduct = []} = values
        // combineAr(product, orderProduct)
    };
    // const combineAr = (arr1, arr2) => {
    //     let arr3 = arr1.concat(arr2);
    //     let result = [];
    //     let obj = [];
    //     result = arr3.reduce(function (prev, cur, index, arr) {
    //         obj[cur.id] ? '' : obj[cur.id] = true && prev.push(cur);
    //         return prev;
    //     }, []);
    //     console.log(result)
    // }

    const arrTabs = [
        // {
        //     key: '1',
        //     label: `Customer`,
        //     children: (<OrderCustomers {...{customers}}/>),
        // },
        {
            key: '2',
            label: `Product`,
            children: (<OrderProduct {...{product}} />),
        },
        {
            key: '3',
            label: `Cart`,
            children: `Content of Tab Pane 3`,
        },
    ];

    return (
        <>
            <Form
                labelCol={{span: 4,}} wrapperCol={{span: 14,}} onFinish={onFinish}
                style={{width:'1000px'}} size={"large"}
                initialValues={{quantity: 2}}
            >
                <h1>Cart</h1>

                <Tabs defaultActiveKey="1" items={arrTabs} />

                <Form.Item wrapperCol={{offset: 8, span: 16,}}>
                    <Button type="primary" htmlType="submit" >Submit</Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default Order;