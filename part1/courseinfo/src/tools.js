const Sum = numArray => {
    let total = 0
    numArray.forEach(element => {
        total += element
    });
    return total
}

export default Sum