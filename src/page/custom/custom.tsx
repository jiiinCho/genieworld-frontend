import React, { useState, useRef } from "react";
import CloseButton from "../../components/closeButton/closeBtn";
import Expandable from "../../components/expandable/expandable";
import ItemCharacterViewer from "../../components/itemEditor/itemCharacterViewer";
import { CustomProps } from "../../interface";
import styles from "./custom.module.css";

type CloseCallbacksT = () => void;

const Custom = ({
  attributes,
  background,
  characterList,
  friends,
  playList,
  onAlert,
  onBackgroundUpdate,
  onClose,
  onCharacterUpdate,
  onCharacterSelect,
  onMsgUpdate,
}: CustomProps) => {
  const [hideClose, setHideClose] = useState(false);
  const innerRef = useRef<HTMLElement | null>(null);
  const outerRef = useRef<HTMLDivElement | null>(null);
  const onViewExpand = () => {
    setTimeout(() => {
      const inner = innerRef.current as HTMLElement;
      const outer = outerRef.current as HTMLElement;
      outer &&
        inner &&
        outer.scrollTo({
          top: inner.clientHeight,
          behavior: "smooth",
        });
    }, 100);
  };

  const [closeCallbacks, setCloseCallbacks] = useState<CloseCallbacksT[]>([]);

  const assignCloseCallbacks = (callback: () => void) => {
    setCloseCallbacks([callback]);
    closeCallbacks.length !== 0 &&
      closeCallbacks.forEach((callback) => callback());
  };

  const hideCloseButton = () => {
    hideClose ? setHideClose(false) : setHideClose(true);
  };

  return (
    <div ref={outerRef} className={styles.overflow}>
      <button
        className={hideClose ? styles.hide : styles.close}
        onClick={onClose}
      >
        <CloseButton />
      </button>
      <section ref={innerRef} className={styles.container}>
        <ItemCharacterViewer
          attributes={attributes}
          item={characterList[0]}
          onEditMode={hideCloseButton}
          onUpdate={onCharacterUpdate}
          onAlert={onAlert}
          onMsgUpdate={onMsgUpdate}
        />
        <Expandable
          title="Friends"
          friends={friends}
          onViewExpand={onViewExpand}
          setCloseCallback={assignCloseCallbacks}
        />
        <Expandable
          title="Characters"
          character={characterList}
          onCharacterSelect={onCharacterSelect}
          onCharacterSave={onCharacterUpdate}
          onViewExpand={onViewExpand}
          setCloseCallback={assignCloseCallbacks}
        />
        <Expandable
          title="Genieroom"
          background={background}
          onBackgroundSave={onBackgroundUpdate}
          onViewExpand={onViewExpand}
          setCloseCallback={assignCloseCallbacks}
        />
        <Expandable
          title="Music"
          playList={playList}
          onViewExpand={onViewExpand}
          setCloseCallback={assignCloseCallbacks}
        />
      </section>
    </div>
  );
};

export default Custom;
