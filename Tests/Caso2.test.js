const {expect} = require ('@jest/globals');
const { Romannumer } = require('../Main.js');

test('Test Correct', ()=>{
     Romannumer ("Hola");
     expect('I');
});