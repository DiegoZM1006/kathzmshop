import database from "./database";
import { collection, query, getDocs, where, orderBy, limit } from 'firebase/firestore';

const db = database();

export default async function fetchProductsByCategoryOrType(category?: string, type?: string) {
    try {
        const finalCategory = category || null;
        const finalType = type || null;
        const ref = collection(db, 'Products');
        const objCategory = {
            man: 'Hombre',
            women: 'Mujer',
            kids: 'Niños',
        }
        const objType = {
            shoes: 'Zapatos',
            clothes: 'Ropa',
            accesories: 'Accesorios',
        }
        
        let q;

        if(finalCategory != null && finalType != null) {
            q = query(
                ref, 
                where('category', '==', objCategory[finalCategory]), 
                where('type', '==', objType[finalType]),
                limit(16)
                );
        } else if(finalCategory != null) {
            q = query(
                ref, 
                where('category', '==', objCategory[finalCategory]),  
                limit(16)
                );
        } else if(finalType != null) {
            q = query(
                ref, 
                where('type', '==', objType[finalType]),
                limit(16)
                );
        } else {
            q = query(
                ref, 
                limit(16)
                );
        }

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