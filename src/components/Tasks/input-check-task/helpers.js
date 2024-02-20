export function checkIsWordSelected(value, usedValues) {
    return !!usedValues.find(usedValue => usedValue.includes(value))
}

export function checkSelectedValues(bools, values) {
    const res = []
    bools.forEach((bool, boolIdx) => {
        if (!bool) return
        if (res.includes(values[boolIdx])) return 
        res.push(values[boolIdx])
    })
    return res
}