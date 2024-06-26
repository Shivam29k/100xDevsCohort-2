const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod')

const emailSchema = zod.string().email()
const passwordSchema = zod.string().min(6)


/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */

function isValidEmail(email) {
    const usernameResponse = emailSchema.safeParse(email);
    return usernameResponse.success;
}

function signJwt(username, password) {
    // Your code here
    if(!isValidEmail(username) || password.length < 6 ){
        return null
    } else {
        return jwt.sign({username: username}, jwtPassword);
    }
}
// console.log(signJwt('kisrat@gmail.com', 123456));

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    // Your code here
    try {
        const decoded = jwt.verify(token, jwtPassword);
        console.log(decoded);
        if(decoded){
            return true;
        } else {
            return false;
        }
    } catch(err) {
        return false;
    }

}
verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imtpc3JhdEBnbWFpbC5jb20iLCJpYXQiOjE3MDM3OTI4ODJ9.I55Zw11yIyOCxzwBhn2lVTriiKOtLrreomYjusFZJVI");

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    // Your code here
    try {
        const decoded = jwt.decode(token);
        console.log(decoded);
        if (decoded) {
            return true;
        } else {
            return false;
        }
        // return decoded ? decoded : false;
    } catch(err){
        return false;
    }

}
decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imtpc3JhdEBnbWFpbC5jb20iLCJpYXQiOjE3MDM3OTI4ODJ9.I55Zw11yIyOCxzwBhn2lVTriiKOtLrreomYjusFZJVI");


// console.log(decodeJwt(jwt.sign({ username: 'kirat@gmail.com', password: '123456' }, "randomPassword")))


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
