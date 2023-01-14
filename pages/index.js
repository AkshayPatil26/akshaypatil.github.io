import { useState } from "react";

// const app = document.getElementById("app");

function Notice({ addon }) {
  console.log(addon);
  return (
    <div>
      <h6>
        The is an experimantal website 🚀 <br />
        {addon ? addon : "This page is rendered with React JS and Next.js"}
      </h6>
    </div>
  );
}

function Greeting() {
  return <h2>Hello World</h2>;
}

function Intro() {
  return (
    <div>
      <p>
        I'm Akshay Patil.
        <br />
        I'm currently taking Google UX Design Professional Certificate Course
        from Coursera and diving deep into React JS(Nextjs). 
        <br />
        And this is my experimental portfolio website.
      </p>
    </div>
  );
}

export default function HomePage(){
  const [likes, setLikes] = useState(0);

  const movies = ["taxi driver", "dead poet society", "liberal arts"];

  function handleClick() {
    setLikes(likes + 1);
    console.log("like is clicked");
  }

  return (
    <div>
      <Greeting />
      <Intro />

      <p>Movies I have recently watched:</p>
      <ul>
        {movies.map((movieName) => (
          <li key={movieName}>{movieName}</li>
        ))}
      </ul>
      <button onClick={handleClick}>like {likes}</button>
      <Notice addon="" />
    </div>
  );
}

// ReactDOM.render(<HomePage />, app);
