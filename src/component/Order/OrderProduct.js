import React, {useRef} from 'react';
import {Avatar, Form, InputNumber, Select, Button, Space,Table, Input} from "antd";
import TableOrder from './TableOder'

const OrderProduct = (props) => {
    const {product} = props


    return (
        <>
            <TableOrder {...{product}}/>

            {/*<Table*/}

            {/*    components={{*/}
            {/*        body: {*/}
            {/*            cell: EditableCell,*/}
            {/*        },*/}
            {/*    }}*/}
            {/*    bordered*/}
            {/*    dataSource={data}*/}
            {/*    columns={mergedColumns}*/}
            {/*    rowClassName="editable-row"*/}
            {/*    pagination={{*/}
            {/*        onChange: cancel,*/}
            {/*    }}*/}
            {/*/>*/}

            <Form.List name="orderProduct">
                {(fields, {add, remove}) => (
                    <>
                        {fields.map(({key, name, ...restField}) => (
                            <Space key={key} style={{display: 'flex', marginBottom: 8}} align="baseline">
                                <Form.Item
                                    {...restField} label="Product"
                                    name={[name, 'nameProduct']} style={{width: '500px'}}
                                >
                                    <Select placeholder="Select a product">
                                        {product.map(item => (
                                            <Select.Option key={item.key} value={item.name} label={item.key}>
                                                <div>
                                                    <Avatar
                                                        style={{background: "linear-gradient(#e66465, #9198e5, #e66465)"}}>{(Array.from(item.name)[0]).toUpperCase()}
                                                    </Avatar>
                                                    <span
                                                        style={{marginLeft: '15px'}}>{`${item.name} - $${item.price}`}</span>
                                                </div>
                                            </Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    {...restField} label={'quantity'}
                                    name={[name, 'quantityOrder']} style={{width: '370px'}}
                                >
                                    <InputNumber min={1}/>
                                </Form.Item>

                                <Button type={'primary'} danger size={'middle'}
                                        onClick={() => remove(name)}>Delete</Button>
                            </Space>
                        ))}
                        <Form.Item wrapperCol>
                            <Button type="dashed" onClick={() => add()} block>
                                + Add field
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </>
    );
};

export default OrderProduct;