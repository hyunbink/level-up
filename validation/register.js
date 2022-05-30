const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(data) {
    let errors = {};
    console.log('logging-data', data);
    data.email = validText(data.email) ? data.email : "";
    data.firstName = validText(data.firstName) ? data.firstName : "";
    data.lastName = validText(data.lastName) ? data.lastName : "";
    data.password = validText(data.password) ? data.password : "";
    
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email is required";
    }
    if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    if (Validator.isEmpty(data.firstName)) {
        errors.firstName = "First name is required";
    } 
    if (Validator.isEmpty(data.lastName)) {
        errors.lastName = "Last name is required";
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password is required";
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password must be at least 6 characters';
    }

    return {
        errors, 
        isValid: Object.keys(errors).length === 0
    };
}