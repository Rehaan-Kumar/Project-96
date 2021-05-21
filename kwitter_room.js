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

var username = localStorage.getItem("username");
document.getElementById("welcome").innerHTML = "Welcome " + username;

function add_room() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "Adding Room names"
  })
  localStorage.setItem("room_name", room_name)
  window.location = "kwitter_page.html"
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log(Room_names);
      row = "<div id = " + Room_names + " class = 'room_name' onclick = 'redirect_to_room_name(this.id)'>#" + Room_names + "</div> <hr>"
      document.getElementById("output").innerHTML += row;
    });
  });
}
getData();

function redirect_to_room_name(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}