import {component} from "./../../../../decorators/component";

// Directive stylesheet
import './hello-world.styl';

interface HelloWorldComponentScope extends ng.IScope
{
    HelloWorld: any
}

@component()
export class HelloWorldComponent implements ng.IComponentOptions {

    public template:string = require('./hello-world.html');
    public restrict:string = "E";
    public bindings:Object = {
        message: "="
    };
    public controllerAs:string = 'HelloWorld';

    public controller:Function = ($scope: HelloWorldComponentScope):void => {
        'ngInject';

        var ctrl = $scope.HelloWorld;
        ctrl.message2 = ", I'm a component.";
    };
}