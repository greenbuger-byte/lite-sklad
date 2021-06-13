import firebase from 'firebase';
import {db} from '../firebase';


export const productRequest  = {
    create: ({name, barcode, balance, retail, wholesale, repair})=>{
        db.collection('products').add({
            name, barcode,  balance, retail, repair, wholesale, 
            timeStamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            return true;
        }).catch(err => {
            alert(err.message || err);
            return false;
        });
    },
    list: (setProductList)=>{
        // setProduct ( set state )
        db.collection('products').onSnapshot((snapshot) => snapshot.docs.map(doc=>({id: doc.id, data: doc.data()}))); // return product's list
    }

}
// export const createProduct = ({name, barcode, balance, retail, wholesale, repair})=>{
//     db.collection('products').add({
//         name, barcode,  balance, retail, repair, wholesale, 
//         timeStamp: firebase.firestore.FieldValue.serverTimestamp()
//     }).then(() => {
//         return true;
//     }).catch(err => {
//         alert(err.message || err);
//         return false;
//     });
// }

// export const listProduct = (setProductList)=>{
//     db.collection('products').onSnapshot((snapshot) => setProductList(snapshot.docs.map(doc=>({id: doc.id, data: doc.data()})))); // return product's list
// }