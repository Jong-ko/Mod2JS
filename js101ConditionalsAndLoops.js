let toDoList = ["Fold Laundry",
    "Mow Lawn",
    "Do Dishes",
    "Mop Bathroom"
]

function checkchores(){
    if(toDoList.length < 3 ) {
        console.log("You can go play some video games!")
    }
    else {
        console.log("Do your chores!")
    }
}

//checkchores();

function removeChores (){
    for (let i = toDoList.length; i > 2; i--){
        toDoList.pop();
        console.log(toDoList.length)
        console.log(toDoList)
    }
}
//change while number for number of chores left
//removeChores();

function whileremove(){
    let i = toDoList.length;
    while (i > 2){
        toDoList.pop();
        i = i - 1;
        console.log(toDoList.length)
        console.log(toDoList)
    }
}
//whileremove()

function triangle(){
    let triangle = ""
    let i = 0;
    while (i < 8){
        triangle = triangle.concat("#")
        i = i++
        console.log(triangle)
    }

}

triangle()