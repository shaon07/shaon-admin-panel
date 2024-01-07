import { channelListData } from "@/resources/channelListData";
import ChannelListViewLayer from "./channelListViewLayer";

const ChannelListTable = () => {
    return <ChannelListViewLayer channelListData={channelListData} />
};

export default ChannelListTable;
