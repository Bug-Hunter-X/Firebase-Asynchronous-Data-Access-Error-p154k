The solution involves correctly handling the promise returned by `get()`:

```javascript
db.collection('myCollection').doc('myDoc').get().then((docSnapshot) => {
  if (docSnapshot.exists) {
    console.log('Document data:', docSnapshot.data().myField); 
  } else {
    console.log('No such document!');
  }
}).catch((error) => {
  console.error('Error getting document:', error);
});
```

This ensures that `docSnapshot.data()` is only accessed after the promise has resolved, preventing the error.  Additionally, checking `docSnapshot.exists` before accessing the data is a good practice to prevent errors when the document doesn't exist.