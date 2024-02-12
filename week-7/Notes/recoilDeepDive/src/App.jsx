

import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { notifications, totalNotificationSelector } from './atoms';
// import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './atoms'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>

}

function MainApp() {
  // const networknotificationCount = useRecoilValue(networkAtom);
  // const jobsAtomCount = useRecoilValue(jobsAtom);
  // const notificationAtomcount = useRecoilValue(notificationAtom);
  // const [messagingAtomCount, setMessagingAtomCount] = useRecoilState(messagingAtom);
 
  const allNotifications = useRecoilValue(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
    
      <button>Home</button>
      
      <button>My network ({allNotifications.network >= 100 ? "99+" : allNotifications.network})</button>
      <button>Jobs ({allNotifications.jobs})</button>
      <button>Messaging ({allNotifications.messaging})</button>
      <button>Notifications ({allNotifications.notifications})</button>
      
      <button>Me ({totalNotificationCount})</button>
    
    </>
  )
}

export default App
