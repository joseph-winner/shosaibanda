import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
  import {getFirestore, collection, doc, setDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
  import { getStorage, ref, uploadBytes  } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";
  const firebaseConfig = {
    apiKey: "AIzaSyAtWNx9eaCjNru3tBvxn2Xcg3Ul8aDQTB4",
    authDomain: "standard-shosa.firebaseapp.com",
    projectId: "standard-shosa",
    storageBucket: "standard-shosa.appspot.com",
    messagingSenderId: "954759367423",
    appId: "1:954759367423:web:2516fbcebcb58d2d361aca"
  };

  const app = initializeApp(firebaseConfig);
  let db = getFirestore(app)
  const storage = getStorage(app);


  var searchInp = document.querySelector("#searchname").value;
// document.querySelector(".user-name").innerHTML = searchInp;





//   var profilecontainerContent = `
//                 <div class="card-container">
//                     <img class="round" src="${image}" />
//                     <h3>${name}</h3>
//                     <p>Was at Standard since: <br/> <span class="grad-year">${years}</span></p>
//                     <div class="buttons">
//                         <button class="primary">
//                         <a href="https://wa.me/${telPhone}?text=Hello there!" target="_blank">WhatsApp</a>
//                         </button>
//                         <button class="primary ghost">
//                         <a href="mailto:${email}?subject=${name}&body=I just wanted to say hi!" target="_blank">Email</a>
//                         </button>
//                     </div>
//                 </div>
//         `
