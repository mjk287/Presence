# Presence

Presence is a side scroller, artistic game where the user and their character can interact with items in a domestic room. They can also make persisting changes to the room for the next user to see and change in return.

## Motivation

Presence aims to illustrate the trace and residue we leave behind of ourselves in our environments. Therefore, it hopes a user will experience the "presence" of the previous occupant of the room by the changes they have made during their stay. In turn, it hopes that the user will leave behind a trace of themselves (preferably with personal, intimate content) for the next user to experience. These changes will be further explicated in the Features section of the ReadME.     

## Tech/framework used

##### Built with

* Headless Rails API for the backend
* Vanilla Javascript for the frontend
* postgreSQL for the database

##### Other

* Active Storage for image uploads
* Youtube Iframe API for playing audio and songs
* Photoshop to animate background ambience and idle character

## Features

The application allows a user to take control of a sprite character, move from left to right between the kitchen and bedroom, and interact with objects in the room by pressing the up arrow key. Most of the interactions will consist of a form appearing and being able to change/post new content for the next user. These interactions will be listed below.

1. When directly in front of the post-it note on the fridge, a user can read the previous user's written message and change/edit the message for the next user as a form's textarea.

2. Interacting with the radio will begin to play the previous user's uploaded song/mixtape. Allows the user to upload a new song in the form of a Youtube URL.

3. Interacting with the picture frame will pull up the last user's uploaded photo. Allows the user to upload and store a new photo via Active Storage.

4. Interacting with the remote control will animate the sprite to hop onto the bed and start reading. The light from the TV screen will start to flicker over the bed.

checkout the following for a video demo: https://www.youtube.com/watch?v=mFRceA2HyIc&feature=youtu.be

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installation

##### Backend Setup
1. cd into the backend directory

```
cd backend
```

2. run bundle install in your terminal

```
bundle install
```

3. setup your database by creating it and running migrations

```
rails db:create && rails db:migrate
```

4. run the server and check in the browser that the endpoints are not throwing a 404

```
rails s
```

##### Frontend Setup
1. cd into the frontend directory

```
cd frontend
```

2. run the frontend server via a simple ruby local http server  

```
ruby -run -e httpd . -p 8000
```
