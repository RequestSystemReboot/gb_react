import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import { profileReducer } from "./profile/reducer";
import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";
import { COVIDReducer } from "./covid/reducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import {userReducer} from "./user/reducer";

const persistConfig = {
  key: 'messages',
  storage,
  whitelist: ['messages']
}

const allReducers = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  covid: COVIDReducer,
  user: userReducer,
  messages: persistReducer(persistConfig, messagesReducer),
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { persistor, store };
