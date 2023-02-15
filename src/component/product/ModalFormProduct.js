import React from 'react';
import {Button, Form, Input, InputNumber, Modal, Upload} from "antd";

function PlusOutlined() {
    return null;
}

const ModalFormProduct = (props) => {

    const {onFinish, product = [], editingProduct = {}, setEditingProduct} = props
    const {selectProduct = {}, isOpen} = editingProduct
    const {name = '', price = Number, quantity = Number, key} = selectProduct
    const finish = (values) => {
        onFinish({...values, key: selectProduct?.key})
    }
    return (
        <>
            <Modal title={key ? "Edit Product" : "Insert Product"} open={isOpen}
                   onCancel={() => setEditingProduct({isOpen: false})}
                   footer={null}
                   destroyOnClose={true}>
                <Form
                    name="basic"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                    style={{maxWidth: 600}}
                    onFinish={finish}
                    autoComplete="off"
                    initialValues={{name: name, quantity:quantity, price: price}}
                >
                    <Form.Item
                        label="Product Name"
                        name="name"
                        rules={[{required: true, message: 'Please input your username!'},
                            {whitespace: true, message: `don't white space`},
                            {
                                validator(rule, value) {
                                    return new Promise((resolve, reject) => {
                                        const findProductNamesake = product.some(e => e.name === value)
                                            key || !findProductNamesake ? resolve() : reject(`Namesake! let's give another name`)
                                    })
                                }
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Quantity Product"
                        name="quantity"
                        rules={[
                            {required: true, message: 'Please input your number quantity!'},
                        ]}
                    >
                        <Input type={'number'} min={0} />
                    </Form.Item>

                    <Form.Item
                        label="Price Product"
                        name="price"
                        rules={[
                            {required: true, message: 'Please input your number price!'},
                        ]}
                    >
                        <Input type={'number'} min={0} />
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
                            {key ? 'Update Product' : 'Add Product'}
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default ModalFormProduct;