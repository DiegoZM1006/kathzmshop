import database from "./database";
import { collection, getDocs, query, startAt, limit, orderBy } from 'firebase/firestore';

const db = database();

export default async function fetchProducts() {
  try {

    const startInitial = 0;
    const finalLimit = 16;

    let ref = collection(db, 'Products');
    const q = query(ref, orderBy('interactions'),startAt(startInitial), limit(finalLimit));
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