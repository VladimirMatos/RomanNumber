const {expect} = require ('@jest/globals');
const { Romannumer } = require('../Main.js');

test('Test Correct', ()=>{
     Romannumer (516);
     expect('DXVI');
});