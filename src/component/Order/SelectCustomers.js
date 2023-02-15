import React from 'react';
import {Avatar, Form, Select} from "antd";

const SelectCustomers = (props) => {
    const {customers} = props
    return (
        <>
            <Form.Item label="Customer" name={'selectCustomers'} style={{width:'1000px'}}>
                <Select placeholder="Select a person">
                    {customers.map(member => (
                        <Select.Option key={member.key} value={member.name} label={member.name}>
                            <div>
                                <Avatar style={{background: "#10899e"}}>{Array.from(member.name)[0]}</Avatar>
                                <span style={{marginLeft: '15px'}}>{`${member.name} - phone: ${member.phone}`}</span>
                            </div>
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>
        </>
    );
};

export default SelectCustomers;