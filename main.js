function Roll(){
    let x = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    document.getElementById("output").innerHTML = 'The First Dice is: ' + x;
    let y = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    document.getElementById("output2").innerHTML = 'The Second Dice is: ' + y;
    let z = x + y;
    document.getElementById("output3").innerHTML = 'Your total roll is: ' + z;


    
}