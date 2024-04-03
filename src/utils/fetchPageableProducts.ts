import database from "./database";
import { collection, query, getDocs, startAt, startAfter, orderBy, limit } from 'firebase/firestore';

const db = database();

export default async function fetchPageableProducts(numPage: number) {
    try {
        const itemsPerPage = 4;
        const startAfterDoc = (numPage - 1) * itemsPerPage;
        
        let ref = collection(db, 'Products');
        const q = query(ref, orderBy('interactions'), startAt(startAfterDoc), limit(4));
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