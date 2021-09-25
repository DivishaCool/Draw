var mouseEvent = "empty";
var last_position_of_x , last_position_of_y;

canvas = document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
color = "pink";
width_of_line = 2;

canvas.addEventListener("mousedown",myMouseDown);

canvas.addEventListener("mouseup",myMouseUp);

canvas.addEventListener("mouseleave",myMouseLeave);

canvas.addEventListener("mousemove",myMouseMove);



function myMouseDown(e){
mouseEvent="mouseDown";

console.log(document.getElementById(color).value)


color=document.getElementById("color").value;
width_of_line=document.getElementById("width").value;
}

function myMouseUp(e){
    mouseEvent="mouseUp";
    }

    function myMouseLeave(e){
    mouseEvent="mouseLeave";
    }

    
    function myMouseMove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("last position of X =" + last_position_of_x);
        console.log("last position of Y ="+last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log("Current position of X = "+ current_position_of_mouse_x);
        console.log("Current position of Y = "+current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();


    }

    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;


        }

    