import data from './first_module.js';
console.log('first module "hey":', data.hey);
console.log('first module "ho":', data.ho);

var sync_result = import('./second_module.js');
console.log('second module sync result:', sync_result);
sync_result.then(res => console.log('second module async result:', res.default));

