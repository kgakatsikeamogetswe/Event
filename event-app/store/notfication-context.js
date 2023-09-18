import { createContext, useState, useEffect } from "react";

const NotificationContext = createContext({
  notification: null, //{ title, message, status }
  showNotification: function (notficationData) {},
  hideNotification: function () {},
});

export function NotificationContextProvider(props) {
    const [activeNotification, setActiveNotification] = useState();

    useEffect(() => {
      if (
        activeNotification && 
        (activeNotification.status === 'success' || 
        activeNotification.status === 'error')
        ) {
        const timer = setTimeout(() => {
          setActiveNotification(null)
        }, 3000);

        return () => {
          clearTimeout(timer)
        };
      }
    }, [activeNotification]);

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
