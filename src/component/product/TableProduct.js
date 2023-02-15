import React from 'react';
import {Space, Table} from "antd";
import Image from '../../image/image.svg'

const TableProduct = (props) => {
    const {product, deleteProduct, setEditingProduct} = props
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            width: '160px',
            align: 'center',
            title: (
                <img src={Image} alt={'img'} width={'25px'}/>
            ),
            dataIndex: 'id',
            key: 'id',
        },
        {
            width: '200px',
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Quantity ',
            width: '100px',
            align: 'center',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Price ',
            width: '100px',
            align: 'center',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={() => setEditingProduct({selectProduct: record, isOpen: true})}>Edit</a>
                    <a onClick={() => deleteProduct(record.key)}>Delete</a>
                </Space>
            ),
        },

    ];
    return (
        <>
            <Table columns={columns} dataSource={product}/>
        </>
    );
};

export default TableProduct;