const firebaseConfig = {
      apiKey: "AIzaSyDKKcIuJ5o5DGINbbOT-9p3G2g_mIV1Eqk",
      authDomain: "kwitter-oroject.firebaseapp.com",
      databaseURL: "https://kwitter-oroject-default-rtdb.firebaseio.com",
      projectId: "kwitter-oroject",
      storageBucket: "kwitter-oroject.appspot.com",
      messagingSenderId: "127323617012",
      appId: "1:127323617012:web:8de8dc7367da30ff4e50a1",
      measurementId: "G-0HXZYD5TH5"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+ user_name  +"!";


function addRoom(){ 

      room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
      });
      
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}


function getData() {
      
      firebase.database().ref("/").on('value', function(snapshot)
 {
       document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
 {
       childKey  = childSnapshot.key;
       Room_names = childKey;

      //Start code
console.log("Room Name - "+Room_names);
row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;


      //End code
      });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
 