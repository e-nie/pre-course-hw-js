
let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
const passportWithAddressCopy = {...passportWithAddress, address: { ...passportWithAddress.address, city:'Bobruisk'}}

console.log(passportWithAddress.address.city);
console.log(passportWithAddressCopy.address.city);
