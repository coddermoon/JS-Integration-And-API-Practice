/**
 * Declear an object which has 6 different type property
 * and access the function using property and call methods
 */

const student = {
    name:'abdul Hannan Khan',
    age:28,
    isRegular:true,
    friends:['rahim','karim','rakib','Mehedi'],
    exam:function isPassed(mark) {
      
        const status= ()=> {
            
            

          return ` ${this.name} 
            age: ${this.age}
            friends are: ${this.friends}
            type: ${this.isRegular?`regular`:'irregular'} 

            `
        }
        if (mark>=33) {
          console.log(status())

         return  ` congratulations! ${this.name} you have successfully passed in exam
            `
          
             
        }else{
            console.log(status())
          return  ` ooops! ${this.name} You need to improvement exam don't worry try your best and get best output `
        }
       
    }
}


// const output =student.exam(53)
// console.log(output)


// now declear a templete string and access 2nd positon value of an array in student object

const bestFriend = `my Best Friend is ${student.friends[1]}`
// console.log(bestFriend)