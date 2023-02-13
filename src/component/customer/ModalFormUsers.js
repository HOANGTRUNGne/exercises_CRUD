import React from 'react';
import {Button, Input, Form, Modal} from "antd";

const ModalFormUsers = (props) => {
    const { onFinish, editingUser = {selectedUser: {}}, setEditingUser, customers} = props
    const {handleModalUser, selectedUser={}} = editingUser;
    const {name='', phone = Number, key = undefined} = selectedUser
    const finish = (values) => {
        onFinish({...values, key: selectedUser?.key})
    }

    return (
        <>
            <Modal title={key ? "Edit User" : "Add User"}
                   footer={null} destroyOnClose={true} open={handleModalUser}
                   onCancel={() => setEditingUser({handleModalUser: false})}
            >
                <Form
                    name="Add Users" autoComplete="off" onFinish={finish}
                    labelCol={{span: 8,}} wrapperCol={{span: 16,}}
                    initialValues={{name: name, phone: phone}}
                >
                    <Form.Item
                        label="User Name"
                        name="name"
                        rules={[
                            {required: true, message: 'Please input your username!'},
                            {whitespace: true, message: `don't white space`},
                            {
                                validator(rule, value) {
                                    return new Promise((resolve, reject) => {
                                        const findProductNamesake = customers.some(e => e.name === value)
                                        !findProductNamesake ? resolve() : reject(`Namesake! let's give another name`)
                                    })
                                }
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Phone Number"
                        name="phone"
                        rules={[
                            {required: true, message: 'Please input your phone number!'},
                            {min: 3, message: 'Username must be minimum 3 characters.' },
                            {max: 6, message: 'Username must be max 6 characters.'},
                        ]}
                    >
                        <Input type={'number'}/>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            {key ? 'Update Customer' : 'Add Customer'}
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default ModalFormUsers;