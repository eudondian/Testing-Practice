const functions = require('./app')

test('length of word', ()=>{
    expect(functions.wordLen('word')).toBe(4)
})

test('Do not accept "presonification"', () => {
    expect(()=>{
        functions.wordLenCondition('personification').toThrow('The word is either too short or too long')
    });
  });

  
test('Reversed String', () => {
    expect(functions.reversed('word')).toEqual('drow');
   });


   