import { createContext, useState } from "react";

const NotificationContext = createContext({
  notification: null, //{ title, message, status }
  showNotification: function (notficationData) {},
  hideNotification: function () {},
});

export function NotificationContextProvider(props) {
    const [activeNotification, setActiveNotification] = useState();

    function showNotificationHandler(notficationData){
        setActiveNotification(notficationData);
    }

    function hideNotificationHandler(){
        setActiveNotification(null);
    }

    const context = { 
        notfication: activeNotification,
        showNotification: showNotificationHandler, 
        hideNotification: hideNotificationHandler, 
    };

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
