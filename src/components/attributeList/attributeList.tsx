import React from "react";
import Attribute from "../attribute/attribute";

import birthdayIcon from "../../assets/icons/birthday.svg";
import dotoriIcon from "../../assets/icons/dotori.svg";
import friendsIcon from "../../assets/icons/friends.svg";
import pencilIcon from "../../assets/icons/pencil-solid.svg";
import { AttributeListProps } from "../../interface";
import { utils } from "../../utility/utils";

const AttributeList = ({
  attributes,
  onAlert,
  onMsgUpdate,
}: AttributeListProps) => {
  const { createdAt, friends, dotori, today } = attributes;
  const birthday = utils.getBirthday(createdAt);
  return (
    <>
      <Attribute src={birthdayIcon} message={birthday} editable={false} />
      <Attribute src={friendsIcon} message={friends.length} editable={false} />
      <Attribute src={dotoriIcon} message={dotori} editable={false} />
      <Attribute
        src={pencilIcon}
        message={today}
        editable={true}
        onAlert={onAlert}
        onMsgUpdate={onMsgUpdate}
      />
    </>
  );
};

export default AttributeList;
