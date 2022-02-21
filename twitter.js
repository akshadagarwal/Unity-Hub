function kwitter_login() {
    var username = document.getElementById("user_name").value;
    window.location = "twitter_room.html";
    localStorage.setItem("username" , username);
}