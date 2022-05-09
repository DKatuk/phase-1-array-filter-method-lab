// Code your solution here


function findMatching(array, str){
   return array.filter(function(element){
            return element.toLowerCase() === str.toLowerCase();
        });
}

function fuzzyMatch(array, str){
    return array.filter( function(initial) {
        return initial[0] === str[0];
    })
};

function matchName(array, str){
    return array.filter(function(query){
        return query.name === str;
    })
}

