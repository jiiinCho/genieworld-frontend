import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ExpandableItem from "../expandableItem/expandableItem";
import ItemBackgroundEditor from "../itemEditor/itemBackgroundEditor";
import ItemCharacterEditor from "../itemEditor/itemCharacterEditor";
import {
  ExpandableProps,
  CharacterItem,
  BackgroundItem,
  Friends,
  MusicList,
} from "../../interface";
import styles from "./expandable.module.css";
import { loadItem } from "../../utility/load";
import { Howl } from "howler";
import { utils } from "../../utility/utils";

const Expandable = ({
  background,
  character,
  friends,
  playList,
  title,
  onBackgroundSave,
  onCharacterSelect,
  onCharacterSave,
  onViewExpand,
  setCloseCallback,
}: ExpandableProps) => {
  const [list, setList] = useState<JSX.Element | undefined>(undefined);
  const [editor, setEditor] = useState<JSX.Element | undefined>(undefined);
  const navigate = useNavigate();

  const onExpand = () => {
    setCloseCallback(() => {
      setList(undefined);
      setEditor(undefined);
    });

    setEditor(undefined);
    setList(undefined);

    if (!list) {
      const items = friends
        ? displayFriends(friends)
        : background
        ? displayBackground(background)
        : character
        ? displayCharacters(character)
        : playList
        ? displayPlayList(playList)
        : [];
      const list = <ul className={styles.itemList}>{items}</ul>;
      setList(list);
      onViewExpand();
    }
  };

  const onEditorClose = () => {
    setEditor(undefined);
    setList(undefined);
  };

  const displayFriends = (friends: Friends[]) =>
    friends.map((friend) => {
      const onItemClick = () => {
        navigate("/friend");
      };
      const username = friend.username || "friend";
      const character = loadItem(friend);
      return (
        <ExpandableItem
          buttonMsg={`Visit ${utils.capitalizeFirstLetter(username)}`}
          component={character}
          key={username}
          onItemClick={onItemClick}
        />
      );
    });

  const displayCharacters = (character: CharacterItem[]) =>
    character.map((item: CharacterItem) => {
      const onCharacterClick = () => {
        onCharacterSelect && onCharacterSelect(item);
        onViewExpand();
        if (onCharacterSave) {
          const editor = (
            <article className={styles.backgroundEditor}>
              <ItemCharacterEditor
                item={item}
                onClose={onEditorClose}
                onUpdate={onCharacterSave}
              />
            </article>
          );
          setEditor(editor);
        }
      };
      return (
        <ExpandableItem
          buttonMsg="Select"
          component={loadItem(item)}
          key={item.type}
          onCharacterClick={onCharacterClick}
        />
      );
    });

  const displayBackground = (background: BackgroundItem[]) =>
    background.map((item: BackgroundItem) => {
      const onBackgroundEdit = () => {
        onViewExpand();
        if (onBackgroundSave) {
          const editor = (
            <article className={styles.backgroundEditor}>
              <ItemBackgroundEditor
                item={item}
                onClose={onEditorClose}
                onUpdate={onBackgroundSave}
              />
            </article>
          );
          setEditor(editor);
        }
      };
      return (
        <ExpandableItem
          buttonMsg={`Edit ${item.type}`}
          background={item}
          component={loadItem(item)}
          componentColors={item}
          key={item.type}
          onBackgroundEdit={onBackgroundEdit}
        />
      );
    });

  const displayPlayList = (playList: MusicList[]) => {
    const playBtn = (
      <svg
        width="20"
        height="20"
        className={styles.playIcon}
        viewBox="0 0 25 25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22 10.7679C23.3333 11.5377 23.3333 13.4623 22 14.2321L9.25 21.5933C7.91667 22.3631 6.25 21.4008 6.25 19.8612L6.25 5.13878C6.25 3.59918 7.91667 2.63693 9.25 3.40673L22 10.7679Z" />
      </svg>
    );
    const musicList = playList.map((item) => MakeHowl(item.audioURL));
    const muteOthers = (music: Howl) => {
      musicList.forEach((audio) => {
        audio !== music && audio.stop();
      });
    };
    return playList.map((item, index) => (
      <ExpandableItem
        buttonMsg={playBtn}
        music={musicList[index]}
        label={item.label}
        key={item.label}
        onMusicClick={muteOthers}
      />
    ));
  };

  return (
    <section className={styles.expandable}>
      <article className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <button onClick={onExpand} className={styles.expandableBtn}>
          {list ? (
            <svg
              className={styles.minus}
              width="24"
              height="24"
              viewBox="0 0 14 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="14" height="2" fill="currentColor" />
            </svg>
          ) : (
            <svg
              className={styles.plus}
              width="24"
              height="24"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 8V14H8V8H14V6H8V0H6V6H0V8H6Z"
                fill="currentColor"
              />
            </svg>
          )}
        </button>
      </article>
      {list && list}
      {editor && editor}
    </section>
  );
};

export default Expandable;

function MakeHowl(url: string): Howl {
  return new Howl({
    format: ["mp3"],
    html5: true,
    src: [url],
    volume: 0.1,
  });
}
