
    window.onload=function game(){
        var playFieldWidth = $('#playField').width();
        var playFieldHeight = $('#playField').height();

     var cubeWidth=160;
     var cubeHeight=160;

     var cubeNumInRow = Math.round(playFieldWidth / cubeWidth);
     var cubeNumInColumn=Math.round(playFieldHeight/cubeHeight);
     var cubeVerticalOffset=0;
/* 
    for (var i = 0; i < cubeNumInRow; i++) {
         for (var j = 0; j < cubeNumInColumn; j++){
            var cubeColor = ['red', 'blue', 'green', 'yellow', 'pink', 'purple'];
             var obj=JSON.parse(cubeColor);
             for(var k=0; k<obj.length;k++){
                 var cube=document.createElement("div");
                 cube.className=obj[k].smallCube;
                 document.querySelector('.row').append(cube);
             }
         }
     }  */

    for (var i = 0; i < cubeNumInRow; i++){
            for (var j = 0; j < cubeNumInColumn; j++){
               
                    cube = $('<div class="cube">').css({
                    "background-color": getRandomColor(),
                    "width": cubeWidth + "px",
                    "height": cubeHeight + "px",
                    "left": i * cubeWidth,
                    "top": j * cubeHeight,
                    "padding":"12px",
                    "margin": "8px",
                    "position":"absolute"

                });
                for(var t=0; t<5; t++){
                     $('#playField').append(cube);
                }
                
                }
         }
        /* function cubeClick() {
                // $(this).click(function () {
                //     $(this).css("visibility", "hidden");
                $(this).hide(2000, function () {
                $(this).remove();

                });
        } */

       /*  for (var i = 0; i < 5; i++) {
            $("<div>;").appendTo(document.body);
        }
        $("div").click(function () {
            $(this).hide(2000, function () {
                $(this).remove();
            });
        }); */

    }

function getRandomColor() {
    var arrayColor = ['red', 'blue', 'green', 'yellow', 'pink', 'purple'];
    return arrayColor[Math.floor(Math.random() * arrayColor.length)]
}
function randomCube(min,max) {
    return Math.random()*(max-min)+min;
}


