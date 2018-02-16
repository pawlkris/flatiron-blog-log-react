# Flatiron Blog Log README

## Description
Flatiron Blog Log is a very simple interface for Flatiron Students to interact with each other's Medium blog posts. When a user creates an account, Flatiron Blog Log grabs all the users' articles and corresponding posts and tags, adding them to it's database - a Rails API backend. Users can then search through other Flatiron students' blog posts and save them for later viewing.

There is also a dashboard graphing the top 10 blog post topics (indicated by post tags) and a table of the frequency of topics across all blog posts. This page can be filtered by cohort.

The overall interface is intentionally very simple because any other communication (e.g. comments or claps) should still happen on Medium as a means to increase visibilty to the external world (increase, that SEO!). With that in mind, join up and get your clap on for your fellow students!

### Featuring
* Full CRUD functionality through a Ruby on Rails API on a PostgreSQL Database, hosted on Heroku (https://flatiron-blog-log-backend.herokuapp.com... go to https://flatiron-blog-log-backend.herokuapp.com/api/users to see json of all users)
* All the custom serializers a human could hope for
* Whenever gem to run cronjob to pull any new medium posts nightly - Scheduler does this on Heroku 
* Routes developed using React Router
* State Managed with Redux Store
* Authorization and Authentication using bcrypt and jwt
* Semantic UI React used for styling

Thanks to all the Flatiron Students willing to lend me their medium usernames, there is a lot of seeded data! Shoot me a slack to get your password... I bet you can figure it out ;)

Check out the demo hosted on github: https://pawlkris.github.io/travel-diary-react/

## Installation Instructions
In order to run the application, fork the repo or clone using the following:

git clone https://github.com/pawlkris/flatiron-blog-log-react.git

Navigate to the main directory on your local drive and run the following:

npm install && npm start

Then navigate to http://localhost:3000 and explore away!

