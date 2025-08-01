const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

async function testConnection() {
  try {
    console.log('🔌 Pokúšam sa pripojiť k MongoDB...');
    console.log('📝 URI:', process.env.MONGODB_URI ? 'Nastavené' : 'CHÝBA!');
    
    if (!process.env.MONGODB_URI) {
      console.log('❌ MONGODB_URI nie je nastavené v .env.local');
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Úspešne pripojené k MongoDB!');
    
    // Test vytvorenia kolekcie
    const testCollection = mongoose.connection.collection('test');
    await testCollection.insertOne({ test: 'connection', date: new Date() });
    console.log('✅ Test zápisu do databázy úspešný!');
    
    // Vyčistite test dáta
    await testCollection.deleteOne({ test: 'connection' });
    console.log('✅ Test čítania z databázy úspešný!');
    
  } catch (error) {
    console.log('❌ Chyba pripojenia:', error.message);
    
    if (error.message.includes('bad auth')) {
      console.log('💡 Tip: Skontrolujte používateľa a heslo v MongoDB Atlas');
    } else if (error.message.includes('ENOTFOUND')) {
      console.log('💡 Tip: Skontrolujte cluster URL v connection string');
    } else if (error.message.includes('ECONNREFUSED')) {
      console.log('💡 Tip: Skontrolujte Network Access v MongoDB Atlas');
    }
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Odpojené od MongoDB');
  }
}

testConnection(); 