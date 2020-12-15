const teststr = 'Row-8 Col-8'

function emailfind(a) {
    let nums = a.match(/\d/gi)
    for (let i = 0; i < parseInt(nums[0]); i++) {
        let arr = new Array(parseInt(nums[1]))
        for (let j = 0; j < arr.length; j++) {
            arr[j] = ['Row: ' + (i + 1), 'Col: ' + (j + 1)]
        }
        console.log(arr)
    }
}

emailfind(teststr)