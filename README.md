# Firebase Asynchronous Data Access Error

This repository demonstrates a common error when working with Firebase's asynchronous data retrieval methods.  The `get()` method returns a promise; accessing data before the promise resolves can lead to undefined behavior and errors.  The solution focuses on using `.then()` to handle the promise's resolution properly.

## Bug
The bug occurs when attempting to access a document's data before the promise returned by `get()` has completed.  This often results in an error because `docSnapshot.data()` will be undefined.

## Solution
The solution uses `.then()` to ensure that the code accessing the document data only executes after the promise returned by `get()` has successfully resolved.