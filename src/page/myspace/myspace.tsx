import React, { useState, useEffect } from "react";
import Alert from "../../components/alert/alert";
import GenieRoom from "../genieroom/genieroom";
import Custom from "../custom/custom";
import {
  AlertObject,
  Friends,
  MySpaceProps,
  BackgroundItem,
  CharacterItem,
  MusicList,
  MusicCallbackT,
  UserAttributes,
} from "../../interface";
import styles from "./myspace.module.css";
import { loadCharacter } from "../../utility/load";
import { utils } from "../../utility/utils";
import { useAuth } from "../../context/authProvider";

/**
  [IMPORTANT LEARNING] userState value only stays in setPosition param.
  when I call position.posY and position.posX inside updatePosition function, 
  it always 0 even though the character is moving correctly. 
  [note]assign dynamically top and left position value required the browser to perform layout operations. -> bad perfomance
  this issue was improved by tansform: translate(x, y)

  Main focus was minimizing fetch points to avoid limit bounds
 */

const MySpace = ({ genieService }: MySpaceProps) => {
  const [isAlert, setAlert] = useState<AlertObject>({
    alertMsg: "",
    warning: false,
  });
  const [alertTimeoutId, setAlertTimeoutId] = useState<
    NodeJS.Timeout | undefined
  >(undefined);
  const [onEdit, setOnEdit] = useState(false);
  const [ownedCharacters, setOwnedCharacters] = useState<
    undefined | CharacterItem[]
  >(undefined);
  const [background, setBackground] = useState<undefined | BackgroundItem[]>(
    undefined
  );
  // const [username, setUserName] = useState<string>("");
  const [musicList, setMusicList] = useState<undefined | MusicList[]>(
    undefined
  );
  const [attributes, setAttributes] = useState<undefined | UserAttributes>(
    undefined
  );
  const [friends, setFriends] = useState<undefined | Friends[]>(undefined);
  const { username } = useAuth();

  //background music controller
  const [musicController, setMusicController] = useState<
    undefined | MusicCallbackT
  >(undefined);

  const handleOnAlert = (alertMsg: string, warning: boolean) => {
    setAlert((prev) => {
      const update = { ...prev };
      update.alertMsg = alertMsg;
      update.warning = warning;
      return update;
    });
    const timeoutId = setTimeout(() => {
      setAlert({ alertMsg: "", warning: false });
    }, 1500);
    setAlertTimeoutId(timeoutId);
  };

  const onAlertClose = () => {
    alertTimeoutId && clearTimeout(alertTimeoutId);
    setAlert({ alertMsg: "", warning: false });
  };

  const handleOnEdit = () => {
    if (onEdit) {
      setOnEdit(false);
      setMusicController(undefined);
    } else {
      setOnEdit(true);
      musicController && musicController();
    }
  };

  //welcome message
  useEffect(() => {
    handleOnAlert(`Welcome, ${username}!`, false);
  }, [username]);

  //fetch owned characters
  useEffect(() => {
    genieService
      .getCharacters(username)
      .then((data) => {
        setOwnedCharacters(data);
      })
      .catch((err) => handleOnAlert(err.message, true));
  }, [genieService, username]);

  const onCharacterUpdate = (updated: CharacterItem) => {
    username !== "genie" && genieService.updateCharacter(updated);
    ownedCharacters &&
      setOwnedCharacters((prev) =>
        prev
          ? prev.map((item) => (item.type === updated.type ? updated : item))
          : prev
      );
  };

  const onCharacterSelect = (characterItem: CharacterItem) => {
    //alter ownedCharacters order
    ownedCharacters &&
      setOwnedCharacters((prev) => {
        if (prev) {
          const updated = prev.filter(
            (item) => item.type !== characterItem.type
          );
          return [characterItem, ...updated];
        } else {
          return prev;
        }
      });
  };

  //fetch background info
  useEffect(() => {
    const backgroundRaw = genieService.fetchBackground();
    setBackground(backgroundRaw);
  }, [genieService, username]);

  const onBackgroundUpdate = (updated: BackgroundItem) => {
    setBackground((prev) => {
      return prev
        ? prev.map((item) => (item.type === updated.type ? updated : item))
        : prev;
    });
  };

  //fetch userSettings
  useEffect(() => {
    genieService
      .getGenie(username)
      .then((data) => {
        setAttributes(data);
        setFriends(data.friends);
        setMusicList(data.userMusic);
      })
      .catch((err) => handleOnAlert(err.message, true));
  }, [genieService, username]);

  const onMsgUpdate = (today: string) => {
    genieService.updateGenie(username, { today });
  };
  return (
    <div className={styles.container}>
      {isAlert.alertMsg && (
        <Alert
          alertMsg={isAlert.alertMsg}
          warning={isAlert.warning}
          onClose={onAlertClose}
        />
      )}
      {onEdit &&
        attributes &&
        background &&
        friends &&
        ownedCharacters &&
        musicList && (
          <section className={styles.custom}>
            <Custom
              attributes={attributes}
              background={background}
              characterList={ownedCharacters}
              friends={friends}
              genieService={genieService}
              playList={musicList}
              onAlert={handleOnAlert}
              onClose={handleOnEdit}
              onBackgroundUpdate={onBackgroundUpdate}
              onCharacterUpdate={onCharacterUpdate}
              onCharacterSelect={onCharacterSelect}
              onMsgUpdate={onMsgUpdate}
            />
          </section>
        )}

      <section
        className={onEdit ? `${styles.genieroomHide}` : `${styles.genieroom}`}
      >
        {ownedCharacters && background && musicList && (
          <GenieRoom
            background={background}
            character={loadCharacter(ownedCharacters[0])}
            username={utils.capitalizeFirstLetter(username)}
            playList={musicList}
            genieService={genieService}
            onAlert={handleOnAlert}
            onEdit={handleOnEdit}
            stopMusic={setMusicController}
          />
        )}
      </section>
    </div>
  );
};

export default MySpace;
