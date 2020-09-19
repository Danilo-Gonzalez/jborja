$(document).ready(inicio);
function inicio(){
   
    mostrarSeccion1();
    $("#btn1").click(mostrarSeccion1);   
    $("#btn2").click(mostrarSeccion2);  
    $("#btn3").click(mostrarSeccion3);
    $("#btn4").click(mostrarSeccion4);

}

function mostrarSeccion1(){
    //rerenciar datos del formulario
    $("#seccion1").show();
    $("#seccion2").hide();
    $("#seccion3").hide();
    $("#seccion4").hide();
    $("#seccion5").hide();
}

function mostrarSeccion2(){   
    //rerenciar datos del formulario
    $("#seccion1").hide();
    $("#seccion2").show();
    $("#seccion3").hide();
    $("#seccion4").hide();
    $("#seccion5").hide();
}

function mostrarSeccion3(){   
    //rerenciar datos del formulario
    $("#seccion1").hide();
    $("#seccion2").hide();
    $("#seccion3").show(); 
    $("#seccion4").hide();
    $("#seccion5").hide();

}
function mostrarSeccion4(){   
    //rerenciar datos del formulario
    $("#seccion1").hide();
    $("#seccion2").hide();
    $("#seccion3").hide(); 
    $("#seccion4").show();
    $("#seccion5").hide();


}

