import database from "./database";
import { collection, getCountFromServer } from 'firebase/firestore';

const db = database();

export default async function fetchContProducts() {
  try {
    let ref = collection(db, 'Products');
    const docSnap = await getCountFromServer(ref);
    const contProducts = docSnap.data().count;
    return contProducts;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}