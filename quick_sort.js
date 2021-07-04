function quick_sort(arr){
    let right =[];
    let left = [];

    if (arr.length < 1){
        return arr;
    }

    const pivot = arr[(arr.length-1)];
    for (let i = 0; i < arr.length-1; i++){
        if (arr[i] > pivot){
            right.push(arr[i]);
        } else{
            left.push(arr[i]);
        }
    }
        return [...quick_sort(left), pivot, ...quick_sort(right)];
}

// [1,2,3] ... => 1,2,3
const arr = [1,4,6,7,8,345,7567,98,843,567,5,67,87,23,92,923,123,4536,65]
console.log(quick_sort(arr))