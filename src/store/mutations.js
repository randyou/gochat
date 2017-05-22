import * as types from './types';

export default {
  [types.UPDATE_CURRENT_CONTACT](state, contact) {
    state.currentContact = contact;
  },
  [types.ADD_CHAT_RECORD](state, record) {
    state.chatRecords.push(record);
  },
  [types.UPDATE_CURRENT_PROFILE](state, profile) {
    state.currentProfile = profile;
  },
  [types.UPDATE_CHAT_LIST](state, chat) {
    state.chatList.push(chat);
  },
};
