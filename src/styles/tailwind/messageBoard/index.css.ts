export const styles = {
  messageBoardWrapper: `relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white`,
  messageNotifyIconWrapper: `absolute -top-0.5 -right-0.5 z-1 h-2 w-2 rounded-full bg-meta-1`,
  messageNotifyIcon: `absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75`,
  messageDropDownWrapper: `absolute -right-16 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80`,
  messageDropDownListWrapper: `flex h-auto flex-col overflow-y-auto`,
};
