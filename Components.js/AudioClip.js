import { Audio } from 'expo-av';

async function playAudio(source) {
  try {
    const { sound } = await Audio.Sound.createAsync(source);
    await sound.playAsync();
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.didJustFinish) {
        sound.unloadAsync();
      }
    });
  } catch (error) {
    // Handle error
    console.log('Error playing audio:', error);
  }
}
