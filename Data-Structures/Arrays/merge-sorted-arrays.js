// This is only for merging already sorted arrays.
// Very confusing. Need to see explaination

function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];

    let i=1;
    let j=1;

    while(arr1Item || arr2Item) {
        if(!arr2Item || arr1Item < arr2Item) {
            mergedArray.push(arr1Item);
            arr1Item = arr1[i];
            i++;
        }
        else {
            mergedArray.push(arr2Item);
            arr2Item = arr2[j];
            j++;
        }
    }


    return mergedArray;
}

console.log(mergeSortedArrays([0,3,4,31], [4,6,30]));