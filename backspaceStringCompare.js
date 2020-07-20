var backspaceCompare = function(S, T) {
    
    let changedT = deleteCharacter(T).join('')
    let changedS = deleteCharacter(S).join('')
    
    console.log("THE ARRAYS",changedS, changedT)
    
    if(changedT === changedS){
        return true
    }else{
        return false
    }
};

function deleteCharacter(string){
    
    let array = string.split('')
        // array.reverse()
    
    array.forEach(x =>{
        
        if(x === "#"){
            
            //add conditional to prevent loop from deleting # 
            
            console.log(array.indexOf(x))
            console.log(array.length -1)
            let backspace = array.indexOf(x)
            let toDelete = backspace - 1
            
            if(backspace === array.length -1){
                console.log("if the # is at the end of the array")
            }
            else if(toDelete === "#"){
                console.log("scrubber duck")
                array.slice(backspace)
            }else{
                array.splice(toDelete ,backspace)
            }
            
            console.log(array)
        }
       
    })
    return array 
}


