const capitalize = require('./capitalize')

test('The first letter should be a capital letter', ()=>{
    const str = 'abigail'
    expect(capitalize(str)).toMatch('Abigail')
})

