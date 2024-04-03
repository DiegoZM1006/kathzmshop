import database from "./database";
import { collection, getDocs } from 'firebase/firestore';

const db = database();

export default async function fetchProducts() {
  try {
    let ref = collection(db, 'Products');
    const docSnap = await getDocs(ref);
    const result = docSnap.docs.map(doc => doc.data()).sort((a, b) => b.interactions - a.interactions);
    return result;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}