import React, {useEffect, useState} from 'react';
import TableProduct from "./TableProduct";
import {create, getAll, removeCustomerByKey, updateByKey, updateProductByKey} from "../../api/CRUD";
import {Button} from "antd";
import ModalFormProduct from "./ModalFormProduct";

const Product = () => {
    const [product, setProduct] = useState([])
    const [editingProduct, setEditingProduct] = useState({selectProduct: {}, isOpen: false});

    useEffect(() => {
        fetchDataProduct()
    }, [])

    const fetchDataProduct = async () => {
        const data = await getAll("product")
        setProduct(data)
    }
    const deleteProduct = async (key) => {
        const newData = product.filter((item) => item.key !== key);
        setProduct(newData);
        await removeCustomerByKey("product", key)
        fetchDataProduct()
    }

    const onFinish = async (values) => {
        const {key} = values
        key ? await editProduct(values) : await addProduct(values)
    };
    const addProduct = async (values) => {
        const {name, quantity} = values
        const keyuuid = Date.now()
        const payload = {keyuuid, name, quantity}
        await create("product", payload)
        fetchDataProduct()
        setEditingProduct({isOpen: false})
    }
    const editProduct = async (values) => {
        const {key} = values
        await updateProductByKey("product", key, values)
        fetchDataProduct()
        setEditingProduct({isOpen: false})
    };

    return (
        <>
            <Button type="primary" onClick={() => setEditingProduct({isOpen: true})}
                    style={{margin: '30px 0'}}>
                New Product
            </Button>

            <ModalFormProduct {...{product, editingProduct, setEditingProduct, onFinish}} />

            <TableProduct {...{product, setEditingProduct, editingProduct, deleteProduct}}/>
        </>
    );
};

export default Product;