import HomeController from './controllers/MyController';
import NameService from './services/PersonService';
import {UpperFilter, LowerFilter} from './filter/stringUtils';

var app = angular.module('MyApp', []);

app.controller('MyController', MyController);
app.service('PersonService', NameService);
app.filter('upper', UpperFilter);
app.filter('lower', LowerFilter);
