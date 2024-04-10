for(i=1;i<=10;i++){
    let star = ""
    if(i%2!==0){
        console.log(i)
        for(j=1;j<=10;j++){
            if(j<i){
                star = star + "*"
            }else{
                
            }
        }
    }
    console.log(star)
    star = ""
}