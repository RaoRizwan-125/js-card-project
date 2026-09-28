function changeText(){
    let h3 =document.getElementById("inf2").innerHTML = "hello";
    let p =document.getElementById("inf3").innerHTML = "Wellcome to my card";
}
function changePic() {
    let pic =document.getElementById("changephoto").src ="image/pic2.webp"
}
function changeName() {
    let name =document.getElementById("rename").value;
    let changeName =document.getElementById("inf1");
    changeName.innerHTML=name;
}