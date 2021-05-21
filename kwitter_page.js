var firebaseConfig = {
    apiKey: "AIzaSyDiKybzTv4y6wnGcOHO4-dhEAsWXgNxHF8",
    authDomain: "kwitter-chat-app-project-71bae.firebaseapp.com",
    databaseURL: "https://kwitter-chat-app-project-71bae-default-rtdb.firebaseio.com",
    projectId: "kwitter-chat-app-project-71bae",
    storageBucket: "kwitter-chat-app-project-71bae.appspot.com",
    messagingSenderId: "246886927000",
    appId: "1:246886927000:web:f76bf804594d70c5941eed"
  };
  firebase.initializeApp(firebaseConfig);
  
function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

username = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          like: 0,
          name: username,
          message: msg
    });
    document.getElementById("msg").value = "";
}
