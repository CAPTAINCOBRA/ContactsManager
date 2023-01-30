//TODO: DONE:add firebase configuration and export it

export const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: "reactcontactslist.firebaseapp.com",
  databaseURL: "https://reactcontactslist-default-rtdb.firebaseio.com",
  projectId: "reactcontactslist",
  storageBucket: "reactcontactslist.appspot.com",
  messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`,
};

//image configuration
export const imageConfig = {
  quality: 0.2,
  maxWidth: 800,
  maxHeight: 600,
  autoRotate: true,
};
