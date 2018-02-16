import React from "react";
import { Image } from "semantic-ui-react";

const Splash = props => {
  return (
    <div className="splash">
      <h1>{"Welcome to Bob Loblaw's Flatiron Blog Log"}</h1>
      <Image
        fluid
        src="https://media.giphy.com/media/GSB9ORFWdpiWA/giphy.gif"
        alt="bob loblaw"
      />
      <h3>What is it?</h3>
      <p>
        {
          "Flatiron Blog Log is a very simple interface for Flatiron Students to interact with each other's Medium blog posts. When a user creates an account, Flatiron Blog Log grabs all the users' articles and corresponding posts and tags, adding them to it's database - a Rails API backend. Users can then search through other Flatiron students' blog posts and save them for later viewing."
        }
      </p>
      <p>
        There is also a dashboard graphing the top 10 blog post topics
        (indicated by post tags) and a table of the frequency of topics across
        all blog posts. This page can be filtered by cohort.
      </p>
      <p>
        The overall interface is intentionally very simple because any other
        communication (e.g. comments or claps) should still happen on Medium as
        a means to increase visibilty to the external world (increase, that
        SEO!). With that in mind, join up and get your clap on for your fellow
        students!
      </p>
    </div>
  );
};

export default Splash;
