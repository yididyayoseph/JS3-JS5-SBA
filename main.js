//person class
class person {
    constructor (firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    get firstName(){
        return this._firstName;
      }
    
      get lastName(){
        return this._lastName;
      }
    
      get age(){
        return this._age;
      }

      set firstName(firstName){
        if(firstName){
          return this._firstName = firstName;
        }
        else{
          console.log('Must have an input')
        }
      }

      set lastName(lastName){
        if(lastName){
          return this._lastName = lastName;
        }
        else{
          console.log('Must have an input')
        }
      }

      set age(age){
        if(age){
          return this._age = age;
        }
        else{
          console.log('Must have an input')
        }
      }
    
}

subbutton = document.getElementsByTagName('button');

function givesOutput() {
    let firstName  = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let age  = document.getElementById("age").value;
    subbutton.onclick = new person(firstName, lastName, age);
    document.getElementById("output").innerHTML = 'Hello, ' + firstName + ' ' + lastName + '! You are ' + age + ' years old.';
    
  }
