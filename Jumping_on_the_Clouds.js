function jumpingOnClouds(c) {
    // Write your code here
    let x = 0
    let i = 0
    let ct = true
    do{
        if(c[i + 2] != 1 && c[i + 2] !== undefined){
            i = i + 2
            x++
        } else if(c[i + 1] != 1 && c[i + 1] !== undefined){
            i++
            x++
        } else {
            ct = false
        }
    } while(ct)

    return x
}