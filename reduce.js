/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

*/
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') 


    function extractValue(arr, key) {
        return arr.reduce(function(acc,next){
            acc.push(next[key]);
            return acc;
        },[]);
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
*/

    vowelCount('Elie') 
    vowelCount('Tim')
    vowelCount('Matt') 
    vowelCount('hmmm') 
    vowelCount('I Am awesome and so are you') 


function vowelCount(str){
        const vowels = "aeiou";
        return str.split('').reduce(function(acc,next){
            let lowerCased = next.toLowerCase()
            if(vowels.indexOf(lowerCased) !== -1){
                if(acc[lowerCased]){
                    acc[lowerCased]++;
                } else {
                    acc[lowerCased] = 1;
                }
            }
            return acc;
        }, {});
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.*/


    const array = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(array, 'title', 'Instructor') 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]


    function addKeyAndValue(array, key, value) {
        return array.reduce(function(acc, next,idx){
            acc[idx][key] = value;
            return acc;
        },array);
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray.*/ 


    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const myArr = [1,2,3,4,5,6,7,8];
    
    partition(myArr, isEven) 
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) 


function partition(arr, callback) {
    return arr.reduce(function(acc,next){
        if(callback(next)){
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[],[]]);
}
