// code

let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
const passportWithAddressCopy = {...passportWithAddress, address: { ...passportWithAddress.address, city:'Bobruisk'}}

console.log(passportWithAddress);
console.log(passportWithAddressCopy);
