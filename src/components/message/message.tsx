import React, { useState, useEffect } from "react";
import Character from "../character/character";
import { MessageProps } from "../../interface";
import styles from "./message.module.css";

//[todo] once db structured, use genieService.postMessage instead of onMessageSubmit, onMessageUpdate
//-> prevent other componets in menu component to be called

const Message = ({
  defaultMessage,
  character,
  username,
  onMessageUpdate,
  onAlert,
}: MessageProps) => {
  const [message, setMessage] = useState("");
  const synth = window.speechSynthesis;

  useEffect(() => {
    setMessage(defaultMessage);
  }, [defaultMessage]);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currMsg = e.target.value;
    if (currMsg.length > 11) {
      onAlert("Message cannot be more than 11 characters", true);
      return;
    } else {
      setMessage(currMsg);
      onMessageUpdate(currMsg);
    }
  };

  const playText = (text: string) => {
    const voices = synth.getVoices();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.8;
    utterance.volume = 0.2;
    utterance.pitch = 2;
    if (voices.length > 66) {
      //chrome, edge
      utterance.voice = voices[49];
    } else {
      //safari
      utterance.voice = voices[34];
    }
    synth.speak(utterance);
  };
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    playText(message);
  };

  return (
    <article className={styles.container}>
      <div className={styles.avatarContainer}>
        <div className={styles.scaleAvatar}>
          <Character character={character} />
        </div>
      </div>
      <form className={styles.messageForm} onSubmit={handleOnSubmit}>
        <div className={styles.user}>
          <div className={styles.avatarContainerMobile}>
            <div className={styles.scaleAvatarMobile}>
              <Character character={character} />
            </div>
          </div>
          <p className={styles.username}>{username}</p>
        </div>
        <label className={styles.bubbleContainer}>
          <svg
            className={styles.bubble}
            width="150"
            height="36"
            viewBox="0 0 162 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_66_6" fill="currentColor">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M152 0H25H10H0V10V21V26C0 31.5228 4.47716 36 10 36H152C157.523 36 162 31.5228 162 26V10C162 4.47715 157.523 0 152 0Z"
              />
            </mask>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M152 0H25H10H0V10V21V26C0 31.5228 4.47716 36 10 36H152C157.523 36 162 31.5228 162 26V10C162 4.47715 157.523 0 152 0Z"
              fill="currentColor"
            />
            <g className={styles.bubbleOutline}>
              <path
                d="M0 0V-2H-2V0H0ZM25 2H152V-2H25V2ZM10 2H25V-2H10V2ZM0 2H10V-2H0V2ZM2 10V0H-2V10H2ZM2 21V10H-2V21H2ZM2 26V21H-2V26H2ZM10 34C5.58172 34 2 30.4183 2 26H-2C-2 32.6274 3.37259 38 10 38V34ZM152 34H10V38H152V34ZM160 26C160 30.4183 156.418 34 152 34V38C158.627 38 164 32.6274 164 26H160ZM160 10V26H164V10H160ZM152 2C156.418 2 160 5.58172 160 10H164C164 3.37258 158.627 -2 152 -2V2Z"
                fill="currentColor"
                mask="url(#path-1-inside-1_66_6)"
              />
            </g>
          </svg>

          <div className={styles.messageContainer}>
            <input
              maxLength={12}
              autoComplete="off"
              id="message"
              name="message"
              required
              type="text"
              onChange={handleOnChange}
              className={styles.message}
              value={message}
            ></input>
            <button className={styles.submit} type="submit">
              <svg
                width="25"
                height="19"
                viewBox="0 0 25 19"
                fill="none"
                className={styles.waveform}
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.349609"
                  y="6.5249"
                  width="2.9"
                  height="5.8"
                  rx="1.45"
                  fill="currentColor"
                />
                <rect
                  x="22"
                  y="6.5249"
                  width="2.9"
                  height="5.8"
                  rx="1.45"
                  fill="currentColor"
                />
                <rect
                  x="4.69922"
                  y="2.8999"
                  width="2.9"
                  height="13.05"
                  rx="1.45"
                  fill="currentColor"
                />
                <rect
                  x="13.4004"
                  y="2.8999"
                  width="2.9"
                  height="13.05"
                  rx="1.45"
                  fill="currentColor"
                />
                <rect
                  x="9.05078"
                  width="2.9"
                  height="18.85"
                  rx="1.45"
                  fill="currentColor"
                />
                <rect
                  x="17.75"
                  width="2.9"
                  height="18.85"
                  rx="1.45"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </label>
      </form>
    </article>
  );
};

export default Message;
