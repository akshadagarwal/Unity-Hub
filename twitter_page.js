//YOUR FIREBASE LINKS
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

room_name = localStorage.getItem("room_name");
username = localStorage.getItem("username");


function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function LOGOUT() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("username");
      window.location = "twitter.html";
}


function sent() {
      SM = document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name: username, message: SM, like: 0
      });
      document.getElementById("message").value = "";
}