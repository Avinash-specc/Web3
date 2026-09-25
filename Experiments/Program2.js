const file = require('fs');

file.writeFile("hello.txt","Name: Avinash",(err)=>{
    if(err){
        console.log(err)
        return
    }

    console.log("File Created")
    file.appendFile('hello.txt',"\nage: 21",(appendError)=>{
        if(appendError){
            console.log(appendError)
            return
        }

        console.log("File Appended")
        file.readFile('hello.txt','utf-8',(readError,data)=>{
            if(readError){
                console.log(`unsuccessful ${readError}`)
                return
            }

            console.log(`File has been read ${data}`)
            file.unlink('hello.txt',(deleteError)=>{
                if(deleteError){
                    console.log(`unsuccessful delete ${deleteError}`)
                    return
                }

                console.log("File Deleted")
            })
        })
    })
})