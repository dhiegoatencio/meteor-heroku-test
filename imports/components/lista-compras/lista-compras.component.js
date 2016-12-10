import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './lista-compras.html';
 
class ListCtrl {
  constructor() {}

  $onInit() {
    this.items = [{
      desc: 'Banana'
    }, {
      desc: 'Abacaxi'
    }, {
      desc: 'Pães'
    }];
  };
}
 
export default angular.module('listaCompras', [
  angularMeteor

]).component('listaCompras', {
    templateUrl: 'imports/components/lista-compras/lista-compras.html',
    controller: ListCtrl
});