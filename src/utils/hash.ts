const bcrypt = require('bcrypt');

async function generateHashedPassword() {
  try {
    // Example plaintext password
    const plaintextPassword = 'admin123';

    // Generate a salt (the higher the rounds, the more secure but slower)
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    // Hash the password with the salt
    const hashedPassword = await bcrypt.hash(plaintextPassword, salt);

    // Now you can store the hashed password in the database
    console.log('Hashed Password:', hashedPassword);
  } catch (error) {
    console.error('Error generating hashed password:', error);
  }
}

generateHashedPassword();
