import fetchProducts from "./db";

export const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export function categoryTranslate(str) {
    const dictionary = {
        kids: "Niños",
        man: "Hombre",
        women: "Mujer"
    }
    return dictionary[str];
}

export function typeTranslate(str) {
    const dictionary = {
        shoes: "Zapatos",
        clothes: "Ropa",
        accesories: "Accesorios"
    }
    return dictionary[str];
}

export function categoryProductsArr(str) {
    const dictionary = {
        Niños: [
            { title: "Zapatos", titleEn: "shoes", url: "/kid-shoes.webp" },
            { title: "Ropa", titleEn: "clothes", url: "/kid-clothes.webp" },
          ],
          Hombre: [
            { title: "Zapatos", titleEn: "shoes", url: "/man-shoes.webp" },
            { title: "Ropa", titleEn: "clothes", url: "/man-clothes.webp" },
            { title: "Accesorios", titleEn: "accesories", url: "/man-accesories.webp" },
          ],
          Mujer: [
            { title: "Zapatos", titleEn: "shoes", url: "/women-shoes.webp" },
            { title: "Ropa", titleEn: "clothes", url: "/women-clothes.webp" },
            { title: "Accesorios", titleEn: "accesories", url: "/women-accesories.webp" },
          ],
    }
    return dictionary[str];
};