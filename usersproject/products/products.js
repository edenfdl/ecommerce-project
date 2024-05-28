import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js';
import { getFirestore, getDocs, collection } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyDzvEx7IGrVI8KOcuaqjclv_bJEZc9hdos",
    authDomain: "e-commerce-application-60e47.firebaseapp.com",
    projectId: "e-commerce-application-60e47",
    storageBucket: "e-commerce-application-60e47.appspot.com",
    messagingSenderId: "397687973430",
    appId: "1:397687973430:web:fbbcb784f01391f494da97",
    measurementId: "G-XXL2QS3848"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function fetchProducts() {
    const querySnapshot = await getDocs(collection(db, "products"));
    const productsContainer = document.getElementById('products-container');
    querySnapshot.forEach((doc) => {
        const product = doc.data();
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.image}" alt="${product.name}">
            <p>Price: ${product.price}</p>
            <p>SKU: ${product.sku}</p>
            <p>Description: ${product.description}</p>
        `;
        productsContainer.appendChild(productDiv);
    });
}

fetchProducts();
