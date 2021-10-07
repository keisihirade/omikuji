let username;
let userresult;

username = prompt("お名前を教えて下さい。");
if(username==""){
    username=("名無し");
    }
document.getElementById("name").innerHTML = username;

