for(i=0;i<=10;i++){
    let star = ""
    for(j=0;j<=i;j++){
        if(i%3===0){
            star = star + "*"
        }
    }
    console.log(star)
    star = ""
}