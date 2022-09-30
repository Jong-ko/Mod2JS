let newObject = {
    fullName : "Jeremy Ongko",
    age : 28,
    faveColor : "Green" ,
    likesPizza : true 
}

let faveColor = newObject.faveColor;

newObject.fullName = "Ongko";

delete newObject.likesPizza;

newObject.likesCookies = true;

console.log(newObject.fullName.split(" ").pop())
