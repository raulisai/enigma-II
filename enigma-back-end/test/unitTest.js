
let array=[10,1,2,3,15,4,6,8,9]

let array2=[]
let long=array.length-1

//let numbersearch=6;

//inverti array

/*for (var i=long; i >= 0 ; i=i-1){  
   array2.push(array[i])
}
console.log(array2)*/


//buscar

/*for (var i=0; i <=long ; i++){
    if (array[i] == numbersearch){
        console.log(i)
    }
}*/


//buscar el numero mayor 
/*let numMayor= array[0]
let aux

for (var i=1; i <=long ; i++){
   aux = array[i]

   if(aux>=numMayor){
    numMayor=aux
   }
    
}
console.log(numMayor)*/

//Sumar todos los numeros

let total=0


for (var i=0; i <= long ; i++){
    total = total + array[i]

 }

 console.log(total)

 
  


