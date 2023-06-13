import "./styles.css";

import { FaGithub as Github } from "react-icons/fa";
import { FiMoon as Moon, FiSun as Sun } from "react-icons/fi";
import { toast } from 'react-toastify'

import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import BtnTheme from "../../components/BtnTheme";

function index({ toggleTheme, theme }) {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const findUserOnKeyEnter = (key) => {
    if (user?.trim() === "") {
      toast.error("Please enter a username to search")
      return;
    };

    if (key === "Enter") {
      return navigate(`/profile/${user}`);
    }
  };

  const findUser = () => {
    if (user?.trim() === "") {
      toast.error("Please enter a username to search")
      return;
    };

    return navigate(`/profile/${user}`);
  };

  return (
    <section className="home-container">
      <div className="btn">
        <BtnTheme
          toggleTheme={toggleTheme}
          theme={theme === "dark" ? <Sun /> : <Moon />}
        />
      </div>
      <div className="direction">
        <div className="container-finder">
          <div className="title">
            <h1>Github Finder</h1>
            <p>
              Enter path the user ex:
              <br />
              github.com/<span>hirokirigaya</span>
            </p>
          </div>
          <div className="box-finder">
            <div className="finder">
              <input
                type="text"
                placeholder="hirokirigaya"
                onKeyUpCapture={(e) => findUserOnKeyEnter(e.code)}
                onChange={(e) => {
                  setUser(e.target.value);
                }}
                value={user}
              />

              <button onClick={findUser}>FIND</button>
            </div>
          </div>
        </div>
        <div className="github-image">
          <Github />
        </div>
      </div>
    </section>
  );
}

export default index;
