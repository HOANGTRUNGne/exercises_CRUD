import React, {useState} from 'react';
import {Alert, Button, Form, Input, InputNumber, Modal, Upload} from "antd";

function PlusOutlined() {
    return null;
}

const AddProduct = (props) => {
    const {addFinish, addFailed, modalProduct, setModalProduct, validateName, product} = props
    const showModal = () => {
        setModalProduct(true);
    };
    const handleCancel = () => {
        setModalProduct(false);
    };
    return (
        <div style={{display: 'block'}}>
            <Button type="primary" onClick={showModal} style={{margin: '30px 0'}}>
                Open Modal
            </Button>
            <Modal title="Insert Product" open={modalProduct} footer={null} onCancel={handleCancel} destroyOnClose>
                <Form
                    name="basic"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                    style={{maxWidth: 600}}
                    onFinish={addFinish}
                    onFinishFailed={addFailed}
                    autoComplete="off"
                    initialValues={{quantity: 123}}
                >
                    <Form.Item
                        label="Product Name"
                        name="name"
                        rules={[{required: true, message: 'Please input your username!'},
                            {
                                validator(rule, value ) {
                                    return new Promise((resolve, reject) => {
                                        const findProductNamesake = product.some(e => e.name === value)
                                        if (!findProductNamesake) {
                                            resolve()
                                        }else {
                                            reject(`Namesake! let's give another name`)
                                        }
                                    })
                                }
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Quantity Product"
                        name="quantity"
                        rules={[
                            {required: true, message: 'Please input your number quantity!'},
                        ]}
                    >
                        <InputNumber min={0} />
                    </Form.Item>

                    <Form.Item label="Upload" valuePropName="fileList">
                        <Upload action="/upload.do" listType="picture-card">
                            <div>
                                <PlusOutlined/>
                                <div style={{marginTop: 8}}>Upload</div>
                            </div>
                        </Upload>
                    </Form.Item>


                    <Form.Item wrapperCol={{offset: 8, span: 16}}>
                        <Button type="primary" htmlType="submit">
                            Add Product
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default AddProduct;