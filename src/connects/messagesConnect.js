import { compose } from "redux";
import { connect } from "react-redux";
import { messagesSelector } from "../store/messages/selectors";
import {createAddMessage} from "../store/messages/actions";

const mapStateToProps = (state) => ({
  messages: messagesSelector(state),
});

const mapDispatchToProps = {
  createAddMessage,
};

export const messagesMapStateConnect = connect(mapStateToProps);

export const messagesMapDispatchConnect = connect(null, mapDispatchToProps);

export const messagesConnect = compose(
  messagesMapStateConnect,
  messagesMapDispatchConnect
);
