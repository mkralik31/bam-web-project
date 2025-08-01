const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

// User model
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ['admin', 'editor'],
    default: 'admin',
  },
  active: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

async function createAdminUser() {
  try {
    // Pripojenie k databáze
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Pripojené k MongoDB');

    // Kontrola či už existuje admin
    const existingAdmin = await User.findOne({ email: 'admin@bam-atelier.sk' });
    if (existingAdmin) {
      console.log('❌ Admin používateľ už existuje');
      process.exit(0);
    }

    // Hash hesla
    const hashedPassword = await bcrypt.hash('admin123', 12);

    // Vytvorenie admin používateľa
    const adminUser = new User({
      email: 'admin@bam-atelier.sk',
      password: hashedPassword,
      name: 'Admin',
      role: 'admin',
      active: true,
    });

    await adminUser.save();
    console.log('✅ Admin používateľ vytvorený úspešne!');
    console.log('📧 Email: admin@bam-atelier.sk');
    console.log('🔑 Heslo: admin123');
    console.log('⚠️  Zmeňte heslo po prvom prihlásení!');

  } catch (error) {
    console.error('❌ Chyba:', error.message);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Odpojené od MongoDB');
  }
}

createAdminUser(); 