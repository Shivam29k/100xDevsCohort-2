"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
// How to connect to a postgres database us the pg package
const client = new pg_1.Client({
    // host: process.env.PGHOST,
    // port: 5432,
    // database: process.env.PGDATABASE,
    // user: process.env.PGUSER,
    // password: process.env.PGPASSWORD
    // or
    connectionString: process.env.POSTGRES_URL
});
// Write a funcyion to create a users table in your database.
function createUserTable() {
    return __awaiter(this, void 0, void 0, function* () {
        client.query(`
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            username VARCHAR(20) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(50) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
    `)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        // .finally(() => client.end())
    });
}
// Async funtion to insert data into the table
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
        client.query(`
        INSERT INTO users(username, email, password) VALUES('user1', 'user1@example.com', 'password1')
    `)
            .then(res => console.log('Insertion Success: ', res))
            .catch(err => console.log('Insertion Error: ', err))
            .finally(() => client.end());
    });
}
// but sql injection is a thing, so we should use parameterized queries
function insertData2() {
    return __awaiter(this, void 0, void 0, function* () {
        const insertQuery = "INSERT INTO users(username, email, password) VALUES($1, $2, $3)";
        const values = ['user2', 'user2@example.com', 'password2'];
        client.query(insertQuery, values)
            .then(res => console.log('Insertion Success: ', res))
            .catch(err => console.log('Insertion Error: ', err))
            .finally(() => client.end());
    });
}
// function to fetch data from the table for a giver email input
function getuser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const selectQuery = "SELECT * FROM users WHERE email = $1";
        const values = [email];
        client.query(selectQuery, values)
            .then((res) => {
            console.log('Data Fetched: ', res.rows);
        })
            .catch(err => console.log('Fetch Error: ', err))
            .finally(() => client.end());
    });
}
// RESLATIONSHIP BETWEEN TABLES
// Making another table for addresses in relation to the users table
// it will contain the user_id as a foreign key which will be the id of the user in the users table
function createAdressTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `
        CREATE TABLE addresses(
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(100) NOT NULL,
            country VARCHAR(100) NOT NULL,
            street VARCHAR(100) NOT NULL,
            pincode VARCHAR(10) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        );
    `;
        client.query(query)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    });
}
// Inserting addresses
function insertAddress() {
    return __awaiter(this, void 0, void 0, function* () {
        const query = `
        INSERT INTO addresses(user_id, city, country, street, pincode) VALUES($1, $2, $3, $4, $5)
    `;
        const values = [2, 'New Delhi', 'India', '1234, Chandani chowk', '100111'];
        client.query(query, values)
            .then(res => console.log(res))
            .catch(err => console.log(err))
            .finally(() => client.end());
    });
}
// JOINS : Fetching data from multiple tables using joins
// Fetching user and their addresses using a join
function getUserAndAddress() {
    return __awaiter(this, void 0, void 0, function* () {
        const YOUR_USER_ID = 2;
        const query = `
        SELECT users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
        FROM users
        JOIN addresses ON users.id = addresses.user_id
        WHERE users.id = ${YOUR_USER_ID};
    `;
        // both query and query2 are the same
        const query2 = `
        SELECT u.username, u.email, a.city, a.country, a.street, a.pincode
        FROM users u
        JOIN addresses a ON u.id = a.user_id
        WHERE users.id = ${YOUR_USER_ID};
    `;
        client.query(query)
            .then(res => console.log(res.rows))
            .catch(err => console.log(err))
            .finally(() => client.end());
    });
}
// Types of joins
// INNER JOIN: Returns records that have matching values in both tables
// LEFT JOIN: Returns all records from the left table, and the matched records from the right table
// RIGHT JOIN: Returns all records from the right table, and the matched records from the left table
// FULL JOIN: Returns all records when there is a match in either left or right table
function innerJoin() {
    const query = `
        SELECT users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
        FROM users
        INNER JOIN addresses ON users.id = addresses.user_id
        WHERE users.id = 2;
    `;
    client.query(query)
        .then(res => console.log(res.rows))
        .catch(err => console.log(err))
        .finally(() => client.end());
}
function leftJoin() {
    const query = `
        SELECT users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
        FROM users
        LEFT JOIN addresses ON users.id = addresses.user_id
        WHERE users.id = 2;
    `;
    client.query(query)
        .then(res => console.log(res.rows))
        .catch(err => console.log(err))
        .finally(() => client.end());
}
client.connect()
    // .then(() => createUserTable())
    // .then(() => insertData())
    // .then(() => insertData2())
    // .then(() => getuser('user1@example.com'))
    // .then(() => createAdressTable())
    // .then(() => insertAddress())
    // .then(() => getUserAndAddress())
    // .then(() => innerJoin())
    .then(() => leftJoin());
