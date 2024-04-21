import React, { useState, useEffect } from "react";
import Scissors from "../Assets/Scissor.png";
import Paper from "../Assets/Paper.png";
import Rock from "../Assets/Rock.png";
import axios from 'axios';
import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';

const Images = [
  { id: "rock", image: Rock, msg: "Rock", com: "Rock" },
  { id: "paper", image: Paper, msg: "Paper", com: "Paper" },
  { id: "scissor", image: Scissors, msg: "Scissor", com: "Scissor" },
];

const Img = () => {
  const [value, updated] = useState();
  const [image, setImage] = useState(null);
  const [randomImage, setRandomImage] = useState(null);
  const [randommsg, updatedmsg] = useState();
  const [win, setWin] = useState(0);
  const [lose, setLose] = useState(0);
  const [tie, setTie] = useState(0);
  const [output, setOutput] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  const fetchResults = async () => {
    try {
      const response = await axios.get('http://localhost:8000/results', {
        headers: { Authorization: `Bearer ${token}` },
        params: { username },
      });

      setWin(response.data.wins);
      setLose(response.data.losses);
      setTie(response.data.draws);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const updateResult = async (result) => {
    try {
      const response = await axios.post('http://localhost:8000/move', {
        username,
        result,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const { wins, losses, draws } = response.data;
      setWin(wins);
      setLose(losses);
      setTie(draws);
    } catch (err) {
      console.log(err);
    }
  };

  const clickresult = (img, randomImg) => {
    if (img && randomImg) {
      let result = 'draw';
      if (img === randomImg) {
        setOutput("It's a tie...😳!");
        setTie(tie + 1);
      } else if (
        (img === Paper && randomImg === Rock) ||
        (img === Rock && randomImg === Scissors) ||
        (img === Scissors && randomImg === Paper)
      ) {
        setOutput("Congrats You Win...😊🥇");
        setWin(win + 1);
        result = 'win';
      } else {
        setOutput("You Lose...🥺!");
        setLose(lose + 1);
        result = 'lose';
      }
      updateResult(result);
    }
  };

  const click = (e, msg, img, com) => {
    updated(msg);
    setImage(img);

    const randomIndex = Math.floor(Math.random() * Images.length);
    setRandomImage(Images[randomIndex].image);
    updatedmsg(Images[randomIndex].com);

    clickresult(img, Images[randomIndex].image);
  };


  const handleLogout = () => {
      
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate('/login');
    
  };

  return (
    <div className="main">
        <Navbar handleLogout={handleLogout} />
      <div className="Container">
        <h2>Click to choose..</h2>
        <span>Score_Card</span>
        <div className="scoreccard">
          <h3>Win :- {win}</h3>
          <h3>Lose :- {lose}</h3>
          <h3>Tie :- {tie}</h3>
        </div>

        <div className="imagecontainer">
          {Images.map((icons) => (
            <img
              key={icons.id}
              src={icons.image}
              alt={icons.id}
              onClick={(e) => click(e, `${icons.msg}`, icons.image, icons.com)}
            />
          ))}
        </div>

        <div className="data">
          <h2>Rock</h2>
          <h2>Paper</h2>
          <h2>Scissor</h2>
        </div>
      </div>

      <div className="msg">
        <div className="componenet">
          <h3>User</h3>
          <h3>Computer</h3>
        </div>

        <div className="user">
          <h2>{value}</h2>
          <h1>Vs</h1>
          <h2>{randommsg && <h3>{randommsg}</h3>}</h2>
        </div>
      </div>

      <div className="result">
        <div className="result_img">
          {image && <img src={image} alt="selected" />}
          {randomImage && <img src={randomImage} alt="random" />}
        </div>
        <div className="result_msg">
          <span>{output}</span>
        </div>

     
      </div>
    </div>
  );
};

const Games = () => {
 
   
  return (
    <div>
       
      <Img />
    </div>
  );
};

export default Games;
