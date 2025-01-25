import fetchMenu from "./api.js";
import { elements, renderDetailPage, renderNotFound } from "./ui.js";

/*
Çok sayfalı projelerde eğer pek çok eleman için bir sayfayı render edeceksek bu noktada sayfa içeriği dinamik şekilde render ederiz.Bunu yaparken herbir eleman için url'e bir paramtre geçilir.Devamında bu parametreye sahip ürün verileriyle sayfa renderlanır.

*/
const params = new URLSearchParams(window.location.search); // Js içerisindeki URLSearchParams classı parametreleri alıp kullanmas noktasında bize kolaylık sağlar

const id = +params.get("id"); // urlden gelen id parametresini number a çevir

document.addEventListener("DOMContentLoaded", async ()=> {
    const data = await fetchMenu("../db.json")

   const product = data.find((item) => item.id === id)

   if (!product) {
    
    renderNotFound(elements.detailContainer) // Ürün bulunamadıysa Not Founded içeriğini render et
   } else {
     
     renderDetailPage(product, elements.detailContainer) // Detay verisini bilinen ürün ile arayüzü ayarla
   }

   
})

