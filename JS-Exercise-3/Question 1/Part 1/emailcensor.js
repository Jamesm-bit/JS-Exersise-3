const teststr = 'test1234@gmail.com'

function emailcensor(a) {
    console.log(a.indexOf('@'))
    if (a.indexOf('@') == -1) {
        return 'this is not an email'
    } else {
        a = a.substring(0, 1) + '***' + a.substring(a.indexOf('@') - 1, a.indexOf('@') + 1) + 'example.com'
        return a
    }
}
document.write(teststr+'    ')
document.write(emailcensor(teststr))