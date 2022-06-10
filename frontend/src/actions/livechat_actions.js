export const RECEIVE_CHAT = 'RECEIVE_CHAT'; 
export const RECEIVE_CHAT_USER = 'RECEIVE_CHAT_USER'; 

export const sendChat = chat => ({
    type: RECEIVE_CHAT,
    chat
})

export const sendChatUser = chatUser => ({
    type: RECEIVE_CHAT,
    chatUser
})