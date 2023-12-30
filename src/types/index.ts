export type channelListType = {
  logo: string;
  name: string;
  visitors: number;
  revenues: string;
  sales: number;
  conversion: number;
};

export type channelHeadingTye = {
  title: string;
  id: number;
};

export type chatListType = {
  avatar: string;
  name: string;
  text: string;
  time: number;
  textCount: number;
  dot: number;
};

export type dateListType = {
  id: number;
  fullName: string;
  shortName: string;
};

export type profile_dataType = {
  id: number;
  title: string;
  count: string;
};

export type socialDataType = {
  title: string;
  icon: JSX.Element;
  url: string;
};

export type topProductPriceType = {
  image: string;
  name: string;
  category: string;
  price: number;
  sold: number;
  profit: number;
};

export type topProductHeadingType = {
  id: number;
  name: string;
};

export type topPackageListType = {
  name: string;
  price: number;
  invoiceDate: string;
  status: string;
};
