const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

async function debugConnection() {
  console.log('🔍 DEBUG: MongoDB Connection Test');
  console.log('================================');
  
  // 1. Skontrolujte environment variables
  console.log('1. Environment Variables:');
  console.log('   MONGODB_URI exists:', !!process.env.MONGODB_URI);
  console.log('   MONGODB_URI length:', process.env.MONGODB_URI ? process.env.MONGODB_URI.length : 0);
  
  if (process.env.MONGODB_URI) {
    // Skryjeme heslo pre bezpečnosť
    const maskedUri = process.env.MONGODB_URI.replace(/\/\/[^:]+:[^@]+@/, '//***:***@');
    console.log('   MONGODB_URI (masked):', maskedUri);
  }
  
  console.log('');
  
  // 2. Skontrolujte URI formát
  if (process.env.MONGODB_URI) {
    console.log('2. URI Analysis:');
    const uri = process.env.MONGODB_URI;
    
    // Extrahujte časti URI
    const usernameMatch = uri.match(/\/\/([^:]+):/);
    const hostMatch = uri.match(/@([^\/]+)\//);
    const dbMatch = uri.match(/\/\/([^\/]+)\/([^?]+)/);
    
    if (usernameMatch) {
      console.log('   Username:', usernameMatch[1]);
    }
    if (hostMatch) {
      console.log('   Host:', hostMatch[1]);
    }
    if (dbMatch) {
      console.log('   Database:', dbMatch[2]);
    }
  }
  
  console.log('');
  
  // 3. Pokus o pripojenie
  console.log('3. Connection Test:');
  
  if (!process.env.MONGODB_URI) {
    console.log('   ❌ MONGODB_URI nie je nastavené');
    return;
  }
  
  try {
    console.log('   🔌 Pokúšam sa pripojiť...');
    
    // Nastavte timeout na 10 sekúnd
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 10000,
    });
    
    console.log('   ✅ Úspešne pripojené!');
    
    // Test databázy
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('   📊 Kolekcie v databáze:', collections.length);
    
    // Test zápisu
    const testCollection = mongoose.connection.collection('debug_test');
    await testCollection.insertOne({ 
      test: true, 
      timestamp: new Date(),
      message: 'Connection test successful'
    });
    console.log('   ✍️  Test zápisu úspešný');
    
    // Vyčistite test dáta
    await testCollection.deleteOne({ test: true });
    console.log('   🗑️  Test dáta vyčistené');
    
  } catch (error) {
    console.log('   ❌ Chyba pripojenia:', error.message);
    
    // Detailná analýza chyby
    if (error.message.includes('bad auth')) {
      console.log('   💡 Tip: Nesprávne používateľské meno alebo heslo');
      console.log('   💡 Tip: Skontrolujte, či je používateľ vytvorený v MongoDB Atlas');
    } else if (error.message.includes('ENOTFOUND')) {
      console.log('   💡 Tip: Cluster URL nie je správne');
    } else if (error.message.includes('ECONNREFUSED')) {
      console.log('   💡 Tip: Network Access nie je povolené');
    } else if (error.message.includes('timeout')) {
      console.log('   💡 Tip: Pripojenie vypršalo - skontrolujte internet');
    }
    
    console.log('   🔍 Error details:', {
      name: error.name,
      code: error.code,
      message: error.message
    });
  } finally {
    if (mongoose.connection.readyState === 1) {
      await mongoose.disconnect();
      console.log('   🔌 Odpojené od MongoDB');
    }
  }
  
  console.log('');
  console.log('================================');
  console.log('🔍 DEBUG: Test dokončený');
}

debugConnection(); 