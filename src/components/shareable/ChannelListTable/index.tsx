import ChannelListViewLayer from "./channelListViewLayer";
import { channelListData } from "./data/channelData";

const ChannelListTable = () => {
    return <ChannelListViewLayer channelListData={channelListData} />
};

export default ChannelListTable;
