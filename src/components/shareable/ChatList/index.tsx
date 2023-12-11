import ChatListViewLayer from "./ChatListViewLayer";
import { chatListData } from "./data";

const ChatList = () => {
    return <ChatListViewLayer chatList={chatListData} />
};

export default ChatList;
