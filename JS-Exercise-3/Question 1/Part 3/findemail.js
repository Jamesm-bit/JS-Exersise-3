const teststr = 'test1234@gmail.com'

function emailfind (a) {
 let finstr = ''
 finstr = finstr+a.match(/\@/gi)
 finstr = finstr+a.match(/\.com$/gi)
 finstr = finstr.replace(/null/,'')
 console.log(finstr)
 if (finstr.length == 5) {
   return 'this is an email address'
 } else {
   return 'this is not an email address'
 }
}
document.write(teststr+'    ')
document.write(emailfind(teststr))