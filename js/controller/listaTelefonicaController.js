angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, contatosAPI, operadorasApi, serialGenerator){
  $scope.app ="Lista Telefonica";
  $scope.contatos = [];
  $scope.operadoras = [ ];
  let carregarContatos = function() {
    contatosAPI.getContatos().then(function(data ){
       data.forEach(function(item){
          item.serial = serialGenerator.generate();
       });
        $scope.contatos = data.data;
    }).catch(function(data,status){
      $scope.error = "Não Foi possível carregar os dados!";
    });
  };
  let carregarOperadoras = function() {
    operadorasApi.getOperadoras().then(function(data ){
        $scope.operadoras = data.data;
    });
  }
  $scope.adicionarContato =function(contato){
      contato.serial= serialGenerator.generate();
      contato.data = new Date()
      contatosAPI.saveContato(contato).then(function(data){
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
       carregarContatos();
    });
  }
  $scope.apagarContatos = function(contatos){
     $scope.contatos = contatos.filter(function (contato){
      if (!contato.selecionado) return contato;
     });
  };
  $scope.isContatosSelecionados = function (contatos) {
    return contatos.some(function (contato){
        return contato.selecionado;
    });
  }
  $scope.ordernarPor = function (campo) {
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
  };
  carregarContatos();
  carregarOperadoras();
});