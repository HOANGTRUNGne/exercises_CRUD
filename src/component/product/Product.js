import React, {useEffect, useState} from 'react';
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import TableProduct from "./TableProduct";
import {v4 as uuidv4} from "uuid";
import {create, getAll, removeCustomerByKey, updateByKey, updateProductByKey} from "../../api/CRUD";

const Product = () => {
    const [product, setProduct] = useState([])
    const [modalProduct, setModalProduct] = useState(false);
    const [modalEditProduct, setModalEditProduct] = useState(false);
    const [editingProduct, setEditingProduct] = useState(false);
    // const [validateName, setNalidateName] = useState(true)

    useEffect(() => {
        fetchDataProduct()
    }, [])

    const fetchDataProduct = async () => {
        const data = await getAll("product")
        setProduct(data)
    }
    const deleteProduct = async (key) => {
        console.log(key)
        const newData = product.filter((item) => item.key !== key);
        setProduct(newData);
        await removeCustomerByKey("product", key)
        fetchDataProduct()
    }
    // Add Product
    const addFinish = async (values) => {
        const name = values.name
        const quantity = values.quantity
        const keyuuid = Date.now()
        const payload = {keyuuid, name, quantity}
        await create("product", payload)
        fetchDataProduct()
        setModalProduct(!modalProduct)
    };
    // Edit
    const showEditProduct = (record) => {
        setEditingProduct({...record})
        setModalEditProduct(true);
    };

    const editFinishProduct = async (values) => {
        console.log(values)
        const data = product.find(e => e.key === editingProduct.key);
        const newProduct = {...data, name: values.name, quantity: values.quantity}
        await updateProductByKey("product", editingProduct.key, newProduct)
        fetchDataProduct()
        setModalEditProduct(false);
    };

    const cancelModalEditProduct = () => {
        setModalEditProduct(false);
    };

    return (
        <>
            <AddProduct {...{product, addFinish, modalProduct, setModalProduct}} />
            <EditProduct {...{
                modalEditProduct,
                showEditProduct,
                cancelModalEditProduct,
                editFinishProduct,
                editingProduct
            }} />
            <TableProduct {...{product, showEditProduct, deleteProduct}}/>
        </>
    );
};

export default Product;