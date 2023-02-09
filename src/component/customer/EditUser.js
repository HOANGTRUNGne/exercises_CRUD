import React from 'react';
import {Button, Form, Input, Modal} from "antd";

const EditUser = (props) => {
    const {modalEdit, cancelModalEditUser, editFinish, editFailed, editingUser} = props
    return (
        <>
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
                        initialValue={editingUser.phone}
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
        </>
    );
};

export default EditUser;