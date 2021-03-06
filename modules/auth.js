  // Import the functions you need from the SDKs you need
  import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js'
  import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-analytics.js'
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: 'AIzaSyBGPNWZQ0NhfIJZ3AvdU0xp89fte8zfM3s',
    authDomain: 'gdsc-27141.firebaseapp.com',
    databaseURL: 'https://gdsc-27141-default-rtdb.firebaseio.com',
    projectId: 'gdsc-27141',
    storageBucket: 'gdsc-27141.appspot.com',
    messagingSenderId: '701196602653',
    appId: '1:701196602653:web:afc79c572a3929a19fa5f4',
    measurementId: 'G-755Y8K0P37',
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  import {
    getDatabase,
    ref,
    set,
    child,
    get,
    update,
    remove,
  } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js'
  const db = getDatabase()
  const auth = getAuth(app)
  const user = auth.currentUser
  // console.log(user)
  import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    browserSessionPersistence,
    setPersistence,
  } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js'
import { builtinModules } from 'module'
  login.addEventListener('click', function (e) {
    e.preventDefault()
    email = email.value
    // console.log(email)
    password = password.value
    // console.log(password)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user)
        console.log(auth.currentUser)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        alert('incorrect email or password')
        window.location.reload()
      })
  })
  createAccount.addEventListener('click', function (e) {
    email = signupemail.value
    password = signuppassword.value
    confirmpassword = confirmpassword.value
    if (password !== confirmpassword) {
      alert('Passwords do not match, try again')
    } else
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          // ...
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorMessage)
          if (errorMessage == 'Firebase: Error (auth/email-already-in-use).') {
            alert('Email already exists')
          }
          // ..
        })
  })
  const provider = new GoogleAuthProvider()
  gLogin.addEventListener('click', function (e) {
    alert('gogoel')
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        // The signed-in user info.
        const user = result.user
        console.log(user)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        // ...
      })
  })
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid
      const email = user.email
      console.log("State chnage")
      console.log(uid, email)
      // ...
    } else {
      // User is signed out
      // ...
      console.log("state change")
      console.log("User is not signed")
    }
  })
  signout.addEventListener('click', function (e) {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log(auth.currentUser)
        console.log('signed out')
      })
      .catch((error) => {
        // An error happened.
      })
  })
