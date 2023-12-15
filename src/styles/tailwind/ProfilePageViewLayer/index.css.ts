export const styles = {
  profilePageViewLayerWrapper: `overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark`,
  coverWrapper: `relative z-20 h-35 md:h-65`,
  coverImage: `h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center`,
  coverContent: `absolute bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4`,
  coverLabel: `flex cursor-pointer items-center justify-center gap-2 rounded bg-primary py-1 px-2 text-sm font-medium text-white hover:bg-opacity-80 xsm:px-4`,
  detailWrapper: `px-4 pb-6 text-center lg:pb-8 xl:pb-11.5`,
  detailContent: `relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3`,
  profilePic: `relative drop-shadow-2`,
  profileLabel: `absolute bottom-0 right-0 flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2`,
};
