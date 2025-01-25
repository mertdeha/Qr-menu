import fetchMenu from "./api.js";
import { elements, renderCards } from "./ui.js";

document.addEventListener("DOMContentLoaded", async () => {
    // Sayfa yüklendiğinde api isteği at ve gelen veriyi data'ya aktar
    const data = await fetchMenu(); // Sayfa yüklendiğinde api isteği at ve gelen veriyi data'ya aktar

    console.log(data)

    
    renderCards(data) // card elemanlarını render et

    elements.inputs.forEach((input) => {
        input.addEventListener("change", () => {
            
            const selected = input.id // inputun id sine eriş

            // eğer seçili kategori all ise tüm ürünleri render et ama başka bir kategori seçiliyse bu kategorideki ürünleri render et
            if (selected === 'all') {
                renderCards(data)
            } else {
                const filtered = data.filter((item) => item.category == selected)

                renderCards(filtered)
            }


        })
    })
});
