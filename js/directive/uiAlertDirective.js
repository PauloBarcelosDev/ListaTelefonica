angular.module("listaTelefonica").directive("uiAlert",function(){
  return {
       templateUrl: "/view/alert.html",
       restric: "AE",
       scope:{
         title:"@",
         message: "="
       },
       transclude:true
  };
});