let darkArray=["pic1Hover.png","pic2Hover.png","pic3Hover.png","pic4Hover.png","pic5Hover.png","pic6Hover.png"]
let normalArray=["pic1.png","pic2.png","pic3.png","pic4.png","pic5.png","pic6.png"]

function darken(n){
    switch(n){
        case 1:
            document.getElementById("1").src=darkArray[n-1];
            break;
        case 2:
            document.getElementById("2").src=darkArray[n-1];
            break;
        case 3:
            document.getElementById("3").src=darkArray[n-1];
            break;
        case 4:
            document.getElementById("4").src=darkArray[n-1];
            break;
        case 5:
            document.getElementById("5").src=darkArray[n-1];
            break;
        case 6:
            document.getElementById("6").src=darkArray[n-1];
            break;
    }
}

function back(n){
    switch(n){
        case 1:
            document.getElementById("1").src=normalArray[n-1];
            break;
        case 2:
            document.getElementById("2").src=normalArray[n-1];
            break;
        case 3:
            document.getElementById("3").src=normalArray[n-1];
            break;
        case 4:
            document.getElementById("4").src=normalArray[n-1];
            break;
        case 5:
            document.getElementById("5").src=normalArray[n-1];
            break;
        case 6:
            document.getElementById("6").src=normalArray[n-1];
            break;
    }
}