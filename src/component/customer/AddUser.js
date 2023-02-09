import React from 'react';
import {Button, Form, Input, Modal} from "antd";

const AddUser = (props) => {
    const {modalAddUser, modalAdd, cancelModalAddUser, addFinish, addFailed} = props
    return (
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
                    onFinish={addFinish}
                    onFinishFailed={addFailed}
                    autoComplete="off"
                    initialValues={{phone:12}}
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
                        <Input />
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
                            Add Customer
                        </Button>
                    </Form.Item>
                </Form>
            </Modal></div>

    );
};

export default AddUser;