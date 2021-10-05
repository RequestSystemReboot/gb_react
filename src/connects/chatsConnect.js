import { compose } from "redux";
import { connect } from "react-redux";
import { chatsListSelector, chatsSelector } from "../store/chats/selectors";
import {
  chatsAddItem,
  chatsAddList,
  chatsPopItem,
} from "../store/chats/actionTypes";

const mapStateToProps = (state) => ({
  chats: chatsSelector(state),
  chatsList: chatsListSelector(state),
});

const mapDispatchToProps = {
  chatsAddItem,
  chatsAddList,
  chatsPopItem,
};

export const chatsMapStateConnect = connect(mapStateToProps);

export const chatsMapDispatchConnect = connect(null, mapDispatchToProps);

export const chatsConnect = compose(
  chatsMapStateConnect,
  chatsMapDispatchConnect
);
