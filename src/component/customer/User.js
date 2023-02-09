import React, {useEffect, useState} from 'react';
import {Button, Form, Input, Modal, Space, Table, Tag} from 'antd';
import {create, getAll, removeCustomerByKey, updateByKey} from "../../api/CRUD";
import {v4 as uuidv4} from 'uuid';
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import TableUser from "./TableUser";


const User = () => {
    const [customers, setCustomers] = useState([])
    const [modalAdd, setModalAdd] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [editingUser, setEditingUse] = useState({})
    useEffect(() => {
        fetchDataCustomer()
    }, [])

    const fetchDataCustomer = async () => {
        const data = await getAll("users")
        setCustomers(data)
    }

    //<ModalForm>
    const modalAddUser = () => {
        setModalAdd(true);
    };
    const cancelModalAddUser = () => {
        setModalAdd(false);
    };

    // Add User

    const addFinish = async (values) => {
        const name = values.name
        const phone = values.phone
        const keyuuid = uuidv4();
        const payload = {keyuuid, name, phone}
        await create("users", payload)
        fetchDataCustomer()
        setModalAdd(false);
    };
    const addFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // Edit User
    const modalEditUser = (record) => {
        setEditingUse({...record})
        setModalEdit(true);
    };


    const editFinish = async (values) => {
        const data = customers.find(e => e.key === editingUser.key);
        const newUser = { ...data,  name: values.name, phone: values.phone}

        await updateByKey("users", editingUser.key, newUser)
        fetchDataCustomer()
        setModalEdit(false);
    };

    const editFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }
    const cancelModalEditUser = () => {
        setModalEdit(false);
    };

    // delete User
    const deleteRecord = async (key) => {
        const newData = customers.filter((item) => item.key !== key);
        setCustomers(newData);
        await removeCustomerByKey("users", key)
        fetchDataCustomer()
    };

    return (
        <>
            <AddUser {...{modalAddUser, modalAdd, cancelModalAddUser, addFinish, addFailed}}/>
            <EditUser {...{modalEdit, cancelModalEditUser, editFinish, editFailed, editingUser}}/>
            <TableUser {...{modalEditUser, deleteRecord, customers}}/>
        </>
    );
};

export default User;