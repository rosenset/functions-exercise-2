(function () {
    let position=0;
    let direction=true;


function moveForward(distance) {
    if (direction === true) {
        position+=distance; 
    } else {
        position-=distance;
    }
}

function moveBackward (distance2) {
    if (direction === true) {
        position-=distance2;
    } else {
        position+=distance2;
    }
}

function turnAround (){
    direction=!direction; 
}

function printLocation () {
    console.log(position);
}


moveForward(5);
moveBackward(3);
printLocation();
turnAround();
moveForward(10);
moveBackward(5);
printLocation();
}

)();