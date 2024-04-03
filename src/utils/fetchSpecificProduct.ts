import database from "./database";
import { collection, query, getDocs, where, orderBy, startAt, endAt } from 'firebase/firestore';

const db = database();

export default async function fetchSpecificProduct(name: string) {
    try {
        let ref = collection(db, 'Products');
        const q = query(ref, where('name', '==', name));
        const docSnap = await getDocs(q);
        const result = [];
        docSnap.forEach(doc => {
            result.push(doc.data());
        });
        return result;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}