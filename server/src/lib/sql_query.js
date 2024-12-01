require("dotenv").config();
const { neon } = require("@neondatabase/serverless");

const sql = neon(process.env.DATABASE_URL || "http://localhost:3000");

async function createtable() {
    try {
        await sql(
            `CREATE TABLE IF NOT EXISTS "User" (
                email VARCHAR(50) PRIMARY KEY,
                password VARCHAR(30)
            )`
        );
        console.log("Table created successfully!");
    } catch (error) {
        console.error("Error creating table:", error);
        throw error;
    }
}

async function createuser(email, password) {
    try {
        await sql(
            `INSERT INTO "User" (email, password) VALUES ($1, $2)`,
            [email, password]
        );
        console.log(`User with email ${email} created successfully!`);
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
}

async function findUser(email) {
    try {
        const data = await sql(
            `SELECT * FROM "User" WHERE email = $1`,
            [email]
        );
        console.log("User found:", data);
        return data; 
    } catch (error) {
        console.error("Error finding user:", error);
        throw error;
    }
}

module.exports = {
    createtable,
    createuser,
    findUser,
};
