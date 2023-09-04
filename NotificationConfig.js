import PushNotification from 'react-native-push-notification';

class NotificationService {
  configure = () => {
    PushNotification.configure({
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  };

  scheduleDailyNotification = (hour) => {
    PushNotification.localNotificationSchedule({
        date: new Date(Date.now() + 3 * 60 * 60 * 1000), // Programar la primera notificación 3 horas después del momento actual
        repeatInterval: 'hour', // Repetir cada hora
        message: '¡Es hora de tu notificación cada 3 horas!',
        id: 'everyThreeHours',
    });
  };
}

export default new NotificationService();
