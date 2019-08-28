import { Permissions, Notifications, AsyncStorage } from 'expo';

async saveTokenToDB() => {
  let previousToken = await AsyncStorage.getItem('pushtoken');
  if(previousToken) {
    return;
  } else {
    let { status } = await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS);
    if(status !== 'granted') {
      return;
    }
    let token = await Notifications.getExponentPushTokenAsync();
  }
}

export {
  saveTokenToDB
}
