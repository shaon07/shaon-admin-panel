import { chatListData } from "../../../resources/chatList";
import ChatListViewLayer from "./ChatListViewLayer";

const ChatList = () => {
    return <ChatListViewLayer chatList={chatListData} />
};

export default ChatList;
