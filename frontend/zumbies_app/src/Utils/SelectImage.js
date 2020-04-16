import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import ImagePicker from 'expo-image-picker'

const getPermissionAsync = async () => {

  if (Constants.platform.ios) {
    let { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }
  } else {
    let { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
        return;
      }

    }
    console.tron.log(status)
  }
};

const _pickImage = async () => {
  try {

    getPermissionAsync()

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      return result;
    }




  } catch (E) {
    console.tron.log(E);
  }
};


export {
  getPermissionAsync,
  _pickImage
}