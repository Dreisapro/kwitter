const firebaseConfig = {
    apiKey: "AIzaSyBa1taNescwVkNZdmaeG860Z5zH3PUy-2g",
    authDomain: "kwitter-3fb1a.firebaseapp.com",
    databaseURL: "https://kwitter-3fb1a-default-rtdb.firebaseio.com",
    projectId: "kwitter-3fb1a",
    storageBucket: "kwitter-3fb1a.appspot.com",
    messagingSenderId: "181758526501",
    appId: "1:181758526501:web:89dc27cc62bc63b3c0ebcc"
  };
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}
