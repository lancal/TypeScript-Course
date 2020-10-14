type combinable = number | string;
function combine(
    input1: combinable,
    input2: combinable,
    resultConvesrion: 'as-number' | 'as-text')
{
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConvesrion === 'as-number') {
        result = +input1 + +input2;
    }else{
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30,26,'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30','26','as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max','Anna','as-text');
console.log(combinedNames);