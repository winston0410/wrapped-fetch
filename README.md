# `wrapped-fetch`

Simple fetch wrapper to make my life easier.

## Notes for decision made here:

- Http error is not `throw`/`Promise.reject()`, as they are required for checking in frontend for their status code regardless for updating the UI.

- Therefore, you will be able to only `catch()` network error.
