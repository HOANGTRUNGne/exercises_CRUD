import {ref, set, child, get, remove, getDatabase, update} from "firebase/database";
import {database} from "../FireBase/firebase";
import {convertObjectToArr} from "../App";


export const getAll = async (collection) => {
    const dbRef = ref(database);

    const snapshot = await get(child(dbRef, collection));
    if (snapshot.exists()) return convertObjectToArr(snapshot.val())

    // get(child(dbRef, `users`)).then((snapshot) => {
    //     if (snapshot.exists()) {
    //         console.log(snapshot.val());
    //     } else {
    //         console.log("No data available");
    //     }
    // }).catch((error) => {
    //     console.error(error);
    // });


    // return await new Promise((resolve, reject) => {
    //     get(child(dbRef, "users")).then((snapshot) => {
    //         if (snapshot.exists()) {
    //             resolve(convertObjectToArr(snapshot.val()))
    //         } else {
    //             console.log("No data available");
    //         }
    //     }).catch((error) => {
    //         console.error(error);
    //         reject()
    //     });
    // })

}


export const getById = (key) => {
}


export const create = async (collection, {keyuuid, ...restPayload}) => {
    return await set(ref(database, `${collection}/${keyuuid}`), {
        ...restPayload
    })
}


export const updateByKey = (collection, key, data) => {
    const db = getDatabase()
    const name = data.name
    const phone = data.phone
    const userUpdate = ref(db, `${collection}/${key}`)

    update(userUpdate, {name, phone}).then(() => {
        console.log("Data updated");
    }).catch((e) => {
        console.log('fail');
    })
}
export const updateProductByKey = (collection, key, data) => {
    const db = getDatabase()
    const name = data.name
    const quantity = data.quantity
    const userUpdate = ref(db, `${collection}/${key}`)

    update(userUpdate, {name, quantity}).then(() => {
        console.log("Data updated");
    }).catch((e) => {
        console.log('fail');
    })
}


export const removeCustomerByKey = async (collection, key) => {

    const db = getDatabase();
    const userDelete = ref(db, `${collection}/${key}`);
    remove(userDelete).then(() => {
        console.log(`user ${key} removed`);
    });
}



