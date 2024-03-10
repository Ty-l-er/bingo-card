var numberOfButtons = document.querySelectorAll(".items").length;
var numberOfBButtons = document.querySelectorAll(".row_b").length

for (var i = 0; i < numberOfButtons; i++){
    document.querySelectorAll(".items")[i].addEventListener("click", function (){this.style.backgroundColor = "#0d2649";});   
}
   
document.querySelector(".reset").addEventListener("click", function (){for (var i = 0; i < numberOfButtons; i++){document.querySelectorAll(".items")[i].style.backgroundColor = "#277ef7";}});

document.querySelector(".new").addEventListener("click", newCard);

function newCard () {

    // B# 1-15
    var bList = ["1", "2", "3","4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];

    // I# 16-30
    var iList = ["16" , "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"];

    // N# 31-45
    var nList = ["31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"];

    // G# 46-60
    var gList = ["46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60"];

    // O# 61-75
    var oList = ["61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75"];
    
    for (var i = 0; i < numberOfButtons; i++){
        document.querySelectorAll(".items")[i].style.backgroundColor = "#277ef7";
    }
    
    for (var i = 0; i < numberOfButtons; i++){
        
        var generateColB = Math.floor(Math.random() * bList.length);
        var generateColI = Math.floor(Math.random() * iList.length);
        var generateColN = Math.floor(Math.random() * gList.length);
        var generateColG = Math.floor(Math.random() * nList.length);
        var generateColO = Math.floor(Math.random() * oList.length);
            
        document.querySelectorAll(".row_b")[i].textContent = bList[generateColB];
        removeNum(bList, bList[generateColB]);
        
        document.querySelectorAll(".row_i")[i].textContent = iList[generateColI];
        removeNum(iList, iList[generateColI]);
        
        document.querySelectorAll(".row_n")[i].textContent = nList[generateColN];
        removeNum(nList, nList[generateColN]);
        
        document.querySelectorAll(".row_g")[i].textContent = gList[generateColG];
        removeNum(gList, gList[generateColG]);
        
        document.querySelectorAll(".row_o")[i].textContent = oList[generateColO];
        removeNum(oList, oList[generateColO]);
        
        document.querySelector(".free").textContent = "Free";
    }
}

function removeNum (arr, value) {
    var index = arr.indexOf(value);
    if (index > -1){
    arr.splice(index, 1);
    console.log(arr);
    }  
}