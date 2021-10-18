import React from "react";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";

export const Message = ({ text, author, date, color }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: color }}>{author.slice(0, 1)}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={text}
        secondary={new Date(date).toLocaleTimeString("ru-Ru")}
      />
    </ListItem>
  );
};
