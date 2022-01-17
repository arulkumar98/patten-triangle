




function getRandomArbitrary(){
    for (let y = 0; y <= 5; y++) {
        
        for (let z = 0; z <=(5-y) ; z++) {
            document.write("&nbsp")
            
        }

        for (let x = 0; x <= y; x++) {
            document.write("^")   
        }
        document.write("<br/>")
    }
}

getRandomArbitrary();


  