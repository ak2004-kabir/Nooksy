// NOOKSY — Firebase Configuration

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDoGfZhsc50rc1JaD3Et2x2DVaKk_n9SMA",
  authDomain: "nooksy-nky25.firebaseapp.com",
  projectId: "nooksy-nky25",
  storageBucket: "nooksy-nky25.firebasestorage.app",
  messagingSenderId: "912035256219",
  appId: "1:912035256219:web:483b210d7ca1ce6640733e"
};

// Initialize Firebase
firebase.initializeApp(FIREBASE_CONFIG);

// Auth helpers
function onAuthStateChange(callback) {
  firebase.auth().onAuthStateChanged(callback);
}
function getCurrentUser() {
  return firebase.auth().currentUser;
}
function logoutUser() {
  return firebase.auth().signOut();
}

// Save order to Firestore
async function saveOrder(orderData) {
  const user = getCurrentUser();
  const uid = user ? user.uid : 'guest_' + Date.now();
  const orderId = orderData.txnId || ('NKY' + Date.now());
  await firebase.firestore().collection('orders').doc(orderId).set({
    ...orderData,
    uid,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });
  return orderId;
}

// Get orders for current user
async function getUserOrders() {
  const user = getCurrentUser();
  if (!user) return [];
  const snapshot = await firebase.firestore()
    .collection('orders')
    .where('uid', '==', user.uid)
    .orderBy('createdAt', 'desc')
    .limit(20)
    .get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// Save user profile
async function saveUserProfile(data) {
  const user = getCurrentUser();
  if (!user) return;
  await firebase.firestore().collection('users').doc(user.uid).set(data, { merge: true });
}

// Get user profile
async function getUserProfile() {
  const user = getCurrentUser();
  if (!user) return null;
  const doc = await firebase.firestore().collection('users').doc(user.uid).get();
  return doc.exists ? doc.data() : null;
}
