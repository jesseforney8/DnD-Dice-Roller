//creates array where dice objects are stored. One D20 in by default
const dice_info = [
    {name:"D20", sides:20, image:"static/dice.png", roll: 0}
];

//clears html before a for of loops adds to html
function clear_html(id) {
    document.getElementById(id).innerHTML = "";

};

//for loop to show dice imgs
function show_dice() {

    for (var x of dice_info) {

        if (x.sides > 20) {
            document.getElementById("red_dice").innerHTML += "<h1>"+x.name+"</h1><img src='static/D20plus.png' class='img-rounded'>";
          
        } else {
            document.getElementById("red_dice").innerHTML += "<h1>"+x.name+"</h1><img src='static/"+x.name+".png' class='img-rounded'>";
            
        }
            
        

    };
    

}

show_dice();

//removed last dives from array. clears dice and rolls html then go thru for loops to show updated list or dice and numbers
function remove_dice() {
    clear_html("red_dice");
    dice_info.pop();
    clear_html("rolls");
    for (let x of dice_info) {
        
         document.getElementById("rolls").innerHTML += x.roll+"<br>";
     };
    show_dice();
    var total_dice_roll = 0;
    for (let x of dice_info) {
        total_dice_roll += x.roll;
    
    };
    document.getElementById("total").innerHTML = total_dice_roll;

}




//shows add dice input and confrim button
function add_dice_button() {
    document.getElementById("add_input_div").style.display = "block";

}

//clears dices html. adds new dices to array based on sides inputted. Roll is 0 by default. hides itself after.
function confirm() {
    clear_html("red_dice");
    let sides_num = document.getElementById("side_text").value;

    dice_info.push({name:"D"+sides_num, sides:Number(sides_num), image:"static/D"+sides_num, roll: 0})
    show_dice();
    document.getElementById("add_input_div").style.display = "none";


}


//For each dice, RNG based on number of sides. then stores in array. Calls sides from array and diplays them
function rollme() {
    clear_html("rolls");
    for (let x of dice_info) {
       var dice_roll_num = Math.floor(Math.random() * x.sides + 1);
        x.roll = dice_roll_num;

        
        document.getElementById("rolls").innerHTML += x.roll+"<br>";
    };

    //adds all rolls of dices up then displays
    var total_dice_roll = 0;
    for (let x of dice_info) {
        total_dice_roll += x.roll;
    
    };
    
    document.getElementById("total").innerHTML = total_dice_roll;



};

