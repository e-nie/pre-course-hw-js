// code

let passport = {
    name: "Petr",
    surname: "Petrov",
};

const passportCopy = {...passport}
passportCopy.name = 'Ivan'

console.log(passportCopy);
console.log(passport);
