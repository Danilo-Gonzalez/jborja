$(document).ready(inicio);
function inicio(){
   
    mostrarEntradaDeNT1();
    $("#primeraNT").click(mostrarEntradaDeNT1);   
    $("#NTbtn1").click(mostrarEntradaDeNT1);   
    $("#NTbtn2").click(mostrarEntradaDeNT2);  
    $("#NTbtn3").click(mostrarEntradaDeNT3);
    $("#ultimaNT").click(mostrarEntradaDeNT3);   
    // $("#btn4").click(mostrarSeccion4); 
}

function mostrarEntradaDeNT1(){

    //rerenciar 
    $("#entradaDeNT1").show();
    $("#entradaDeNT2").hide();
    $("#entradaDeNT3").hide();
    $("#entradaDeNT4").hide();
    // 
    $("#act1").attr('class','active');
    $("#act2").removeClass('active');
    $("#act3").removeClass('active');

}

function mostrarEntradaDeNT2(){
   
    //rerenciar 
    $("#entradaDeNT1").hide();
    $("#entradaDeNT2").show();
    $("#entradaDeNT3").hide();
    $("#entradaDeNT4").hide();
    //  
    $("#act2").attr('class','active');
    $("#act1").removeClass('active');
    $("#act3").removeClass('active');



}

function mostrarEntradaDeNT3(){
   
    //rerenciar 
    $("#entradaDeNT1").hide();
    $("#entradaDeNT2").hide();
    $("#entradaDeNT3").show(); 
    $("#entradaDeNT4").hide();
    $("#act3").attr('class','active');
    $("#act2").removeClass('active');
    $("#act1").removeClass('active');
}
// function mostrarSeccion4(){
   
//     //rerenciar datos del formulario
//     $("#seccion1").hide();
//     $("#seccion2").hide();
//     $("#seccion3").hide(); 
//     $("#seccion4").show();

// }


