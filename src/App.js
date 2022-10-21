import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Header, Notification } from "./components";
import {
  angela,
  anna,
  chess,
  jacob,
  kimberly,
  mark,
  nathan,
  rizky,
} from "./assets";

const UnReadMark = () => (
  <span className="red-mark" aria-label="unread-notification"></span>
);

function App() {
  const [read, setRead] = useState(false);
  const [value, setValue] = useState(3);
  const [theme, setTheme] = useState(localStorage.theme);
  const colourTheme = theme === "dark" ? "light" : "dark";
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colourTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colourTheme]);
  return (
    <div className="relative center flex-col w-full min-h-screen bg-lgb2 dark:bg-slate-800 pb-8 md:py-8">
      <div className="card mb-5">
        <Header
          className="mb-3"
          value={value}
          click={() => {
            setRead(true);
            setValue(0);
          }}
        />
        <Notification hasBg={!read} src={mark} alt="Mark Webber">
          <span className="notification-name">Mark Webber</span>
          reacted to your recent post
          <span className="font-bold"> My first tournament today!</span>
          {!read && <UnReadMark />}
          <div className="time">1m ago</div>
        </Notification>
        <Notification hasBg={!read} src={angela} alt="Angela Gray">
          <span className="notification-name">Angela Gray</span>
          followed you
          {!read && <UnReadMark />}
          <div className="time">5m ago</div>
        </Notification>
        <Notification hasBg={!read} src={jacob} alt="Jacob Thompson">
          <span className="notification-name">Jacob Thompson</span>
          has joined your group{" "}
          <span className="text-my-blue font-extrabold dark:text-blue-300">
            Chess Club
          </span>
          {!read && <UnReadMark />}
          <div className="time">1 day ago</div>
        </Notification>
        <Notification
          src={rizky}
          alt="Rizky Hasanuddin"
          message={`Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.`}
        >
          <span className="notification-name">Rizky Hasanuddin</span>
          sent you a private message
          <div className="time">5 days ago</div>
        </Notification>
        <Notification src={kimberly} alt="Kimberly Smith">
          <span className="notification-name">Kimberly Smith</span>
          commented on your picture
          <img
            src={chess}
            alt="chess"
            className="absolute right-0 top-5 md:top-0 w-12 h-12"
          />
          <div className="time">1 week ago</div>
        </Notification>
        <Notification src={nathan} alt="Nathan Peterson">
          <span className="notification-name">Nathan Peterson</span>
          reacted to your recent post{" "}
          <span className="font-bold">
            5 end-game strategies to increase your win rate
          </span>
          <div className="time">2 weeks ago</div>
        </Notification>
        <Notification src={anna} alt="Anna Kim">
          <span className="notification-name">Anna Kim</span>
          left the group{" "}
          <span className="text-my-blue font-extrabold dark:text-blue-300">
            Chess Club
          </span>
          <div className="time">2 weeks ago</div>
        </Notification>
      </div>
      <div className="text-zinc-900 dark:text-white">
        Coded by{" "}
        <a
          href="https://linktr.ee/joe_hsn"
          rel="noreferrer"
          target="_blank"
          className="text-blue-700 dark:text-blue-300 underline"
        >
          joe_hsn
        </a>
      </div>
      <button
        className="center rounded-full bg-gray-800 text-white dark:bg-slate-600 w-10 md:w-14 h-10 md:h-14 fixed bottom-2 md:bottom-4 right-2 md:right-4 text-[1rem] md:text-[2rem]"
        onClick={() => {
          setTheme(colourTheme);
        }}
      >
        {colourTheme === "light" ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
}

export default App;
