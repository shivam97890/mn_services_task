(function () {
    "use strict";
    var app = angular.module('myApp', []);
    app.controller('myCtrl', function () {
        var vm = this;
        vm.selectedList=[];
        vm.list = [{ name: 'project Management', add: 0, view: 1, edit: 1, delete: 0 },
        { name: 'Employee Registration', add: 1, view: 0, edit: 1, delete: 0 },
        { name: 'User Profile', add: 0, view: 0, edit: 1, delete: 0 },
        { name: 'Experience Details', add: 0, view: 0, edit: 1, delete: 0 }];

        // function declaration
        // vm.selectedform = selectedform;
        vm.submited=submited;
        // function selectedform(selected, checkedItem) {
        //     angular.forEach(vm.list, function (item) {
        //         if (selected == item.name) {
        //             if (checkedItem == 'Add') {
        //                 item.add = !item.add;
        //             } else if (checkedItem == 'View') {
        //                 item.view = !item.view;
        //             } else if (checkedItem == 'Edit') {
        //                 item.edit = !item.edit;
        //             } else {
        //                 item.delete = !item.delete;
        //             }
        //         }
        //     })
        // }

        function submited(item){
        	console.log(item)
            vm.selectedList=[];
            vm.selectedList=JSON.parse(JSON.stringify(item))
        }

    });
})();