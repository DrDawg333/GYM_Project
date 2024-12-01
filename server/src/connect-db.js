const {pool } = require( '@neondatabase/serverless')
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || "http://localhost:3000",
    ssl: {
      rejectUnauthorized: false, 
    },
  });
  
  // Function to test the connection
  async function connectDB() {
    try {
      const client = await pool.connect();
      console.log('Connected to NeonDB successfully');
      client.release(); 
    } catch (err) {
      console.error('Error connecting to NeonDB:', err);
      process.exit(1);
    }
  }
  
  // Test the DB connection
module.exports = { connectDB}
