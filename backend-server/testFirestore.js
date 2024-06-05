const admin = require('firebase-admin');
const serviceAccount = require('./boardgame-shelf-160524-firebase-adminsdk-qkogs-f3a9773d94.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: 'boardgame-shelf-160524'
});

const db = admin.firestore();

async function testFirestore() {
  try {
    console.log('Connecting to Firestore...');
    const boardgamesRef = db.collection('boardgames');
    const response = await boardgamesRef.get();
    console.log('Received response from Firestore:', response);
    let boardgamesArr = [];
    response.forEach(doc => {
      console.log('Processing document:', doc.id);
      boardgamesArr.push({ id: doc.id, ...doc.data() });
    });
    console.log('Fetched boardgames:', boardgamesArr);
  } catch (error) {
    console.error('Error fetching boardgames:', error);
  }
}

testFirestore();
