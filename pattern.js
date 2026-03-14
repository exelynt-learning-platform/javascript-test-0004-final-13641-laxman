for(let i=1; i<=7; i++){
    for(let j=1; j<=7; j++){
        if(i==1 || i==7){
            console.log(i)
            document.write("4 ")

        } 
        // document.write("<br>")
        if(i==2 || i==6){
            if(j==1 || j==7){
                document.write("4 ")
            } else{
                document.write("3 ")
            }
        }
        // document.write("<br>")
        if(i==3 || i==5){
            if(j==1 || j==7){
                document.write("4 ")
            }
            if(j==2 || j==6){
                document.write("3 ")
            }
            if(j>=3 && j<=5){
                document.write("2 ")
            }
        }
        if(i==4){
            if(j==1 || j==7){
                document.write("4 ")
            }
            if(j==2 || j==6){
                document.write("3 ")
            }
            if(j>=3 && j<=5){
                let middle = Math.floor(7/2)+1
                console.log(middle)
                if(j==middle){
                    document.write("1 ")
                }else{
                    document.write("2 ")
                }
            }
        }
    }
    document.write("<br>");
}