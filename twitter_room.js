
document.getElementById("user_name").innerHTML = "Welcome " +localStorage.getItem("username");

//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCmeZpS12I36MR7f8vxXGnh3zWIkN6Ys-M",
      authDomain: "twitter-1f229.firebaseapp.com",
      databaseURL: "https://twitter-1f229-default-rtdb.firebaseio.com",
      projectId: "twitter-1f229",
      storageBucket: "twitter-1f229.appspot.com",
      messagingSenderId: "29122739376",
      appId: "1:29122739376:web:afe4a113c42bfc11710f75"
};


    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names);
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick = 'redirectToRoomNmae(this.id)'>"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomNmae(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "twitter_page.html";
}



function logout() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("username");
      window.location("twitter.html");
}

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose : "addingRoom"});
      localStorage.setItem("room_name" , room_name);
      window.location = "twitter_page.html";
}