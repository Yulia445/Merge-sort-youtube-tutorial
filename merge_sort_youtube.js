const array = []

for (let i = 0; i < 10; i++) {
    array.push(Math.round(Math.random() * 100))
}
console.log(array)

const mergeSort = function merge(array) {
    if (array.length <= 1) {
        return array
    }

    const left = merge(array.slice(0, array.length / 2));
    const right = merge(array.slice(array.length / 2, array.length));

    let i = 0 ;
    let j = 0 ;
    const sorted_array = [];

    while (i < left.length && j < right.length) {
        if(left[i] === right[j]){
            sorted_array.push(left[i], right[j]);
            i++;
            j++;
        } else if(left[i] < right[j]) {
            sorted_array.push(left[i]);
            i++;
        } else {
            sorted_array.push(right[j]);
            j++;
        }
    }

    if(i !== left.length) {
        sorted_array.push(...left.slice(i))
    } else if (j !== right.length) {
        sorted_array.push(...right.slice(j))
    }

    return sorted_array
}

console.log(mergeSort(array))