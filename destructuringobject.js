const personalInformation = {
    firstName: 'Rajesh',
    lastName: 'Jagarlamudi',
    city: 'Guntur',
    state: 'Hyderabad',
    zipCode: 522402
};

const {firstName: fn, lastName: ln} = personalInformation;

console.log(`${fn} ${ln}`);