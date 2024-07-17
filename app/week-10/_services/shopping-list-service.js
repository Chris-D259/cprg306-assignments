import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";
//create async function to getItems
const getItems = async (userId) => {
    const items = [];
    const q = query(collection(db, 'users/${userId}/items'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        items.push({
            id: doc.id,
            ...doc.data(),
        });
    });
    return items;
}
//create async function to addItem
const addItem = async (userId, item) => {
    //try catch to prevent execution errors
    try{
    const docRef = await addDoc(collection(db, 'users/${userId}/items'), item);
    return docRef.id;

    } catch (err) {
        console.error(err);
        return null;
    }
    
}
export { getItems, addItem };