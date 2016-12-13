import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './lista-compras.html';
 
import { Tasks } from '../../api/tasks.js';

class ListCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.helpers({
      tasks() {
        // Show newest tasks at the top
        return Tasks.find({}, {
          sort: {
            createdAt: -1
          }
        });
      }
    });
  }

  addTask(newTask) {
    // Insert a task into the collection
    Tasks.insert({
      text: newTask,
      createdAt: new Date
    });
 
    // Clear form
    this.newTask = '';
  }
   
  setChecked(task) {
    // Set the checked property to the opposite of its current value
    Tasks.update(task._id, {
      $set: {
        checked: !task.checked
      },
    });
  }
 
  removeTask(task) {
    Tasks.remove(task._id);
    
  }
}
 
export default angular.module('listaCompras', [
  angularMeteor

]).component('listaCompras', {
    templateUrl: 'imports/components/lista-compras/lista-compras.html',
    controller: ['$scope', ListCtrl]
});