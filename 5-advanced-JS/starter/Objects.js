

// Object.create lecture
var personProto = {
    calculateAge: function () {
        console.log(2016 - this.yearOfBirth)
    }
}

// Janky way of creating a blank object that also "passes in" personProto as a prototype
var john = Object.create(personProto);
// Which then needs each item to go in to to be manually created:
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

// Horrible old way of doing the same thing as above
var jane = Object.create(personProto, 
    {
      name: { value: 'Jane'},
      yearOfBirth: { value: 1969 },
      job: { value: 'designer'}  
    });