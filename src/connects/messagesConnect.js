import { compose } from "redux";
import { connect } from "react-redux";
import { messagesSelector } from "../store/messages/selectors";
import {createAddMessage, createAddMessageRequest, fetchMessages} from "../store/messages/actions";
import {getUserName} from "../store/profile/actions";

const mapStateToProps = (state) => ({
  messages: messagesSelector(state),
  username: getUserName(state)
});

const mapDispatchToProps = {
  createAddMessage,
  createAddMessageRequest,
  fetchMessages

};

export const messagesMapStateConnect = connect(mapStateToProps);

export const messagesMapDispatchConnect = connect(null, mapDispatchToProps);

export const messagesConnect = compose(
  messagesMapStateConnect,
  messagesMapDispatchConnect
);
