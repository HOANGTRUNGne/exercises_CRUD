import React from 'react';
import {Button, Form, Input, Modal} from "antd";

const EditProduct = (props) => {
    const { cancelModalEditProduct, editFinishProduct, editingProduct, modalEditProduct} = props
    return (
        <>
            <Modal title="Edit Product" open={modalEditProduct} onCancel={cancelModalEditProduct} footer={null}
                   destroyOnClose={true}>
                <Form
                    name="Edit Product"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    onFinish={editFinishProduct}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Product Name"
                        name="name"
                        initialValue={editingProduct.name}
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
                        label="Quantity"
                        name="quantity"
                        initialValue={editingProduct.quantity}
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

export default EditProduct;