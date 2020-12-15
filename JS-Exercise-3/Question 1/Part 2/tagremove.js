const teststr = '<html><head>test</head><body>'

function removetags(a) {
    return a.replace(/<(.*?)>/gi, '')
}
document.write(teststr+'   ')
document.write(removetags(teststr))