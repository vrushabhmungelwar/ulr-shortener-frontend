import "./App.css";
import { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { NewUrl } from "./newUrl";



function App() {
  const [url, setUrl] = useState("");
  const [urls, setUrls] = useState([]);
  console.log(urls);
  const GetUrls = () => {
    fetch(`https://forgot-password-by-vrushabh.herokuapp.com/short/`)
      .then((data) => data.json())
      .then((u) => setUrls(u));
  };
  useEffect(GetUrls, []);

  function Shorturl(url) {
    const obj = { fullUrl: url };
    fetch(`https://forgot-password-by-vrushabh.herokuapp.com/short/shortUrls`, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(window.location.reload());
  }


  return (
    <div className="App">
    <h1>Url Shortner</h1>
      <div className="container">
        <TextField
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          label="Enter Url"
          sx={{ m: 1, width: "70ch" }}
        />
        <Button
          variant="contained"
          sx={{ m: 1.1 }}
          onClick={() => Shorturl(url)}
        >
          Shorten Url
        </Button>
      </div>


      <div className="list">
        {urls.map((ur) => (
          <NewUrl key={ur._id} ur={ur} />
        ))}
      </div>
    </div>
  );
}

export default App;
