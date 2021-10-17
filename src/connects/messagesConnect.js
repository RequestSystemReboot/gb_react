import { compose } from "redux";
import { connect } from "react-redux";
import { messagesSelector } from "../store/messages/selectors";
import { messagesAddItem } from "../store/messages/actionTypes";

const mapStateToProps = (state) => ({
  messages: messagesSelector(state),
});

const mapDispatchToProps = {
  messagesAddItem,
};

export const messagesMapStateConnect = connect(mapStateToProps);

export const messagesMapDispatchConnect = connect(null, mapDispatchToProps);

export const messagesConnect = compose(
  messagesMapStateConnect,
  messagesMapDispatchConnect
);
