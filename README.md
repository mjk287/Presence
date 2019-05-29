# Presence

Presence is a side scroller, artistic game where the user and their character can interact with items in a domestic room. They can also make persisting changes to the room for the next user to see and change in return.

## Motivation

Presence aims to illustrate the trace and residue we leave behind of ourselves in our environments. Therefore, it hopes a user will experience the "presence" of the previous occupant of the room by the changes they have made during their stay. In turn, it hopes that the user will leave behind a trace of themselves (preferably with personal, intimate content) for the next user to experience. These changes will be more explicated in the Features section of the ReadME.     

## Tech/framework used

##### Built with

* Headless Rails API for the backend
* Vanilla Javascript for the frontend
* postgreSQL for the database

##### Other

* Active Storage for image uploads
* Youtube Iframe API for playing audio and songs

## Features

The application has the baseline, typical features of a social media application such as the ability to make text and image posts on your wall, comment on a post, and like a post. Aside from these, here are some of the unique features of this application:

1. When creating an account, a user will be assigned a random partner or pen pal, establishing the pair relationship.

2. When editing your profile, you can change your name, password, profile picture and your favorite song. How this favorite song will be used will be detailed below.

3. On your newsfeed/homepage, when your partner is logged-in a variety of features will become available and queues will be triggered:
    1. A warm amber light, imitating interior domestic lighting, will emit from the corner of the page, indicating their online presence.
    2. The aforementioned favorite song of your partner will begin to play. Moreover, an IIR filter will be applied on the song that makes it sound muffled and diegetic, simulating music coming from another room or from your next door neighbor.
    3. You can chat with your partner via realtime chatroom on the side of the page.

4. There is a third type of post, aside from text and image, which is the voicemail post. A user will be able to record their voice, play the preview, and submit it to the backend. A filter as well as sound effects will dynamically manipulate the audio to sound like voicemail and capture the sentimentality attached to this old mode of messaging.  

checkout the following for a video demo: https://www.youtube.com/watch?v=Wol44Ydzop8&feature=youtu.be

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

2. run npm install in your terminal and run the frontend server  

```
npm install
npm start
```
