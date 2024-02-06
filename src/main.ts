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

export const srcMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d352.5415238551123!2d-79.4605529300001!3d-1.4435718388883554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902cb3dba3a82d29%3A0x4ca5d0a596ac835b!2sVentanas%2C%20Ecuador!5e0!3m2!1ses-419!2sco!4v1707192975680!5m2!1ses-419!2sco";