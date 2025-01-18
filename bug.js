The Firebase SDK may throw an error if you try to access a property of a document snapshot before the promise returned by `get()` has resolved.  This often happens when you're working with asynchronous operations and try to access data too early in your code.

```javascript
db.collection('myCollection').doc('myDoc').get().then((docSnapshot) => {
  console.log(docSnapshot.data().myField); // This might throw if the promise hasn't resolved yet
}).catch((error) => {
  console.error('Error getting document:', error);
});
```