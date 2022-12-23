$(function(){
    $(".dropdown-btn").click(function(){
       $(".dropdown-container").hide(); //Oculta todos elemento com classe
       $(this).next().toggle(); //mostra o elemento seguinte ao botão clicado
    });
  });
  $(function(){
    $(".dropdown-btn1").click(function(){
       $(".dropdown-container1").hide(); //Oculta todos elemento com classe
       $(this).next().toggle(); //mostra o elemento seguinte ao botão clicado
    });
  });
  $(function(){
    $(".dropdown-btn2").click(function(){
       $(".dropdown-container2").hide(); //Oculta todos elemento com classe
       $(this).next().toggle(); //mostra o elemento seguinte ao botão clicado
    });
  });
