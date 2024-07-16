function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
    }, []);
}

// Examples
console.log(flattenArray([1, 2, [3, 4]]));
console.log(flattenArray([1, [2, [3, [4, 5]]]]));
console.log(flattenArray([[1], 2, [3, [4]], 5]));
