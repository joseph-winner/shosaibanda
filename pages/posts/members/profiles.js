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



  var inputImage = document.querySelector("#photo")
  var imagesArr = [];
  inputImage.addEventListener("change",(e) =>{
        var imageChanges = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            imageArr1(reader.result);
            document.querySelector("#sample-image").src = (reader.result);
            document.querySelector("#sample-image").style.display = "block"
            document.querySelector("#photoLabel").style.display = "none"            
        }
        reader.readAsDataURL(imageChanges);
    })

    function imageArr1(file1){
        imagesArr.push(file1)
    }

    
    var createProf = document.querySelector("#createProfile")
    createProf.addEventListener("click", (e)=>{
        e.preventDefault();
        var userNam = document.querySelector("#names").value
        var userEmail = document.querySelector("#email").value
        var userPhone = document.querySelector("#phone").value
        var Year = document.querySelector("#year").value
        var image = imagesArr
        // console.log(userNam, userEmail, userPhone,Year)
        setDoc(doc(db, "Profiles", userNam), {
            userName: userNam,
            phone: userPhone,
            email: userEmail,
            Year: Year,
            profImage: image
          });
        document.querySelector(".registered-name").innerText = userNam;
        document.querySelector(".success-message").style.display = "block";
        document.querySelector(".create-shosa-profiles").style.display = "none";
    })




