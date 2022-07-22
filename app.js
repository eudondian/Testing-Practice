const functions = {
    wordLen: (word)=> word.length,

    wordLenCondition: (word)=>{
        if(word.length >= 1 || word.length <= 10) {
            return word.length;
        } else {
            throw new badWord('Your word length is either too short or too long') 
        }
    },

   reversed: (str) =>{
        const array = str.split('')
       return array.reverse().join('')
    }
}

module.exports = functions