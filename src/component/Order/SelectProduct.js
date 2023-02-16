import React from 'react';
import {Select, Avatar} from "antd";

const SelectProduct = (props) => {
    const {product} = props

    return (
        <>
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
        </>
    );
};

export default SelectProduct;