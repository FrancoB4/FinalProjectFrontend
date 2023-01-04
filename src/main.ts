import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
const firebaseConfig = {
  apiKey: "AIzaSyDU1UKgsVXB_0MP3Brlo2gbdSmO49WA3EU",
  authDomain: "my-personal-portfolio-3f485.firebaseapp.com",
  databaseURL: "https://my-personal-portfolio-3f485-default-rtdb.firebaseio.com",
  projectId: "my-personal-portfolio-3f485",
  storageBucket: "my-personal-portfolio-3f485.appspot.com",
  messagingSenderId: "1046103602636",
  appId: "1:1046103602636:web:ef8746fcfb021c5ea71969",
  measurementId: "G-5QG7P86KQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
