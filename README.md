# NoteService

A web app to keep all your notes together.

## Getting Started

These instructions will let you know about the API endpoints which are required for this application.

### Prerequisites

You should have node and react installed in your system and for Database we are using MongoDb, so you should also have an account in mlab, as we are not using local mongoDB.

### Endpoints

## POST Endpoint for creating a note

This endpoint is used to create a note and store it in the Database. The following inputs are required for this endpoint:
* todo_description
* todo_responsible
* todo_completed  

```
https://localhost:5000/notes/add
```

## GET Endpoint for fetching all the notes


```
https://localhost:5000/notes
```

## GET Endpoint for fetching a particular note

This endpoint is used to fetch a particular note based on the ID

```
https://localhost:5000/notes/:id
```


## Author

* **Ashish Tiwari** 

