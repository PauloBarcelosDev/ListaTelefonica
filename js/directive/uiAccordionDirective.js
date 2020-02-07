angular.module("listaTelefonica").directive("uiAccordion", function (){
  return {
    templateUrl:"view/accordion.html",
    transclude: true,
    scope: {
      title: "@",
    },
    required: "^uiAccordions",
    link: function(scope,element,attrs,ctrl){
      scope.open = function(){
            scope.isOpened=!scope.isOpened;
          }
    }
  };
});

/**
    ctrl.registerAccordion(scope);
        scope.open = function(){
          ctrl.closeAll();
 */