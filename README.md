# Adhoccer Platform for Ad-hoc Jobs creation and management

## To run application locally:
Clone this repository

```cd``` into this directory.

Run ```docker-compose up --build``` within this directory to start both the backend (express server) and frontend (React App) containers, along with the MongoDB container.

Use Postman collections to test the API locally (```Postman_Collections/Adhoccer.postman_collection.json```)

To run tests:
- ```cd backend```
- ```npm run test```

To access frontend locally: http://localhost:3000

## Deployed endpoints:
Backend: https://adhoccer.et.r.appspot.com/

Frontend: https://adhoccer.netlify.app/