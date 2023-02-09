import React from 'react';
import {Space, Table} from "antd";

const TableUser = (props) => {
    const {modalEditUser, deleteRecord, customers} = props
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },

        {
            title: 'Phone Number',
            dataIndex: 'phone',
            key: 'address',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={() => modalEditUser(record)}>Edit</a>
                    <a onClick={() => deleteRecord(record.key)}>Delete</a>
                </Space>
            ),
        },
    ];
    return (
        <>
            <Table columns={columns} dataSource={customers}/>

        </>
    );
};

export default TableUser;