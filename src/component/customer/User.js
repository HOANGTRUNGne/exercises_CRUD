import React, {useEffect, useState} from 'react';
import {Button, Form, Input, Modal, Space, Table, Tag} from 'antd';
import {create, getCustomer, removeCustomerByKey, updateByKey} from "../../api/CRUD";
import {v4 as uuidv4} from 'uuid';

export const convertObjectToArr = (obj) => {
    // console.log(obj)
    // console.log(Object.keys(obj))

    const dataCustomer = Object.keys(obj).map((key, index) => {
        const id = index + 1
        const item = {key, id, ...(obj[key])}
        return item;
    })
    return dataCustomer
}

const Customer = () => {
    const [customers, setCustomers] = useState([])
    const [modalAdd, setModalAdd] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [editingUser, setEditingUse] = useState({})
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await getCustomer()
        setCustomers(data)
    }

    //<ModalForm>
    const modalAddUser = () => {
        setModalAdd(true);
    };
    const cancelModalAddUser = () => {
        setModalAdd(false);
    };

    // Add User

    const addFinish = async (values) => {
        const name = values.name
        const phone = values.phone
        const keyuuid = uuidv4();
        const payload = {keyuuid, name, phone}
        await create("users", payload)
        fetchData()
        setModalAdd(false);
    };
    const addFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // Edit User
    const modalEditUser = (record) => {
        setEditingUse({...record})
        setModalEdit(true);
    };


    const editFinish = async (values) => {

        // const data = customers.map(e => {
        //
        //     if (e.key === editingUser.key) {
        //         const updateUser = {...e, name: values.name, phone: values.phone}
        //         // delete updateUser.id && delete updateUser.key
        //         return updateUser
        //     }
        //     return e;
        // });

        const data = customers.find(e => e.key === editingUser.key);
        const newUser = { ...data,  name: values.name, phone: values.phone}

        await updateByKey("users", editingUser.key, newUser)
        fetchData()
        setModalEdit(false);
    };

    const editFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }
    const cancelModalEditUser = () => {
        setModalEdit(false);
    };

    // Table
    const deleteRecord = async (key) => {
        const newData = customers.filter((item) => item.key !== key);
        setCustomers(newData);
        await removeCustomerByKey("users", key)
        fetchData()
    };
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
            <div style={{display: 'block'}}>
                <Button type="primary" onClick={modalAddUser} style={{margin: '30px 0'}}>
                    Insert Customer
                </Button>
                {/*Add User*/}
                <Modal title="Add User" open={modalAdd} onCancel={cancelModalAddUser} footer={null} destroyOnClose={true}>
                    <Form
                        name="Add User"
                        labelCol={{
                            span: 8,
                        }}

                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={addFinish}
                        onFinishFailed={addFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="User Name"
                            name="name"

                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="Phone Number"
                            name="phone"
                            rules={[
                                {
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Add Customer
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal></div>

            {/*Edit User*/}
            <Modal title="Edit User" open={modalEdit} onCancel={cancelModalEditUser} footer={null}
                   destroyOnClose={true}>
                <Form
                    name="Edit User"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={editFinish}
                    onFinishFailed={editFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="User Name"
                        name="name"
                        initialValue={editingUser.name}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}

                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Phone Number"
                        name="phone"
                        rules={[
                            {
                                // required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input value/>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Edit Customer
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            <Table columns={columns} dataSource={customers}/>
        </>
    );
};

export default Customer;