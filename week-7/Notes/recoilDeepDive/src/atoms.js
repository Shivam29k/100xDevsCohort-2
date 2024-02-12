import { atom, selector } from "recoil";
import axios from "axios";

// export const networkAtom = atom ({
//     key: "networkAtom",
//     default: 104
// })

// export const jobsAtom = atom ({
//     key: "jobsAtom",
//     default: 0
// })

// export const notificationAtom = atom ({
//     key: "NotificationAtom",
//     default: 12
// })

// export const messagingAtom = atom ({
//     key: "messagingAtom",
//     default: 0
// })

// export const totalNotificationSelector = selector ({
//     key:"totalNotificationSelector",
//     get : ({get}) =>{
//         const networkCount = get(networkAtom);
//         const jobsAtomCount = get(jobsAtom);
//         const notificationAtomCount = get(notificationAtom);
//         const messagingAtomCount = get(messagingAtom);
//         return networkCount + jobsAtomCount + notificationAtomCount + messagingAtomCount
//     }
// })

// Making Async data queries

export const notifications = atom({
  key: "notifications",
  default: selector({
    key: "networkAtomSelector",
    get: async () => {
      const res = await axios
        .get("https://sum-server.100xdevs.com/notifications")
        .catch((err) => console.log(err));
      return res.data
    },
  }),
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const allNotifications = get(notifications);
    return (
      allNotifications.network +
      allNotifications.jobs +
      allNotifications.notifications +
      allNotifications.messaging
    );
  },
});
