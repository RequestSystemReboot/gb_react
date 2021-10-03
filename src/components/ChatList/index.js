import React from "react";
import { Chat } from "../Chat";
import { List, ListItem, ListItemButton } from "@material-ui/core";

export const ChatList = ({ ChatItems }) => {
  return (
    <List sx={{ width: "100%", height: "85vh", overflow: "auto" }}>
      {ChatItems.map((chat) => (
        <ListItem key={chat.id}>
          <ListItemButton>
            <Chat name={chat.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
