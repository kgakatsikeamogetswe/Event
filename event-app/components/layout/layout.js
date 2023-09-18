import { Fragment, useContext } from "react";

import MainHeader from "./main-header";
import Notification from '../ui/notification'
import NotificationContext from '../../store/notfication-context'

export default function Layout(props) {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notfication;



  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
     {activeNotification && (
     <Notification 
     title={activeNotification.title} 
     message={activeNotification.message} 
     status={activeNotification.status}/>
     )}
    </Fragment>
  );
}
