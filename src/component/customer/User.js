import React, {useEffect, useState} from 'react';
import {Button} from 'antd';
import {create, getAll, removeCustomerByKey, updateByKey} from "../../api/CRUD";
import {v4 as uuidv4} from 'uuid';
import TableUser from "./TableUser";
import ModalFormUsers from "./ModalFormUsers";


const User = () => {
        const [customers, setCustomers] = useState([])
        const [editingUser, setEditingUser] = useState({selectedUser: {}, handleModalUser: false})

        useEffect(() => {
            fetchDataCustomer()
        }, [])

        const fetchDataCustomer = async () => {
            const data = await getAll("users")
            setCustomers(data)
        }
        const onFinish = async (values) => {
            const {key} = values
            if (key !== undefined) {
                await updateUser(values)
            } else {
                await addUser(values)
            }
        };
        const addUser = async (values) => {
            const {name, phone} = values
            const keyuuid = uuidv4();
            const payload = {keyuuid, name, phone}
            await create("users", payload)
            fetchDataCustomer()
            setEditingUser({handleModalUser: false});
        }
        const updateUser = async (values) => {
            const {key, name, phone} = values
            const data = customers.find(e => e.key === key);
            const newUser = {...data, name: name, phone: phone}
            await updateByKey("users", key, newUser)
            fetchDataCustomer()
            setEditingUser({handleModalUser: false});
        }
// delete User
        const deleteRecord = async (key) => {
            const newData = customers.filter((item) => item.key !== key);
            setCustomers(newData);
            await removeCustomerByKey("users", key)
            fetchDataCustomer()
        };

        return (
            <>
                <Button type="primary" onClick={() => setEditingUser({handleModalUser: true})} style={{margin: '30px 0'}}>
                    New Customer
                </Button>

                <ModalFormUsers {...{customers, editingUser, setEditingUser, onFinish}}/>

                <TableUser {...{setEditingUser, deleteRecord, customers}}/>
            </>
        );
    }
;

export default User;