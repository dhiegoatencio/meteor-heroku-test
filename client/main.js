import angular from 'angular';
import angularMeteor from 'angular-meteor';
import listaCompras from '../imports/components/lista-compras/lista-compras.component.js';
 
angular.module('app', [
  angularMeteor,
  listaCompras.name
]);