import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Button({label}) {
  return (
    <View style={styles.buttonContainer}>
    <Pressable style={styles.button} onPress={() => alert(`Ready for ${label}'s?`)}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </Pressable>
  </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      borderRadius: 10,
      borderWidth: 5,
      borderColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonLabel: {
      color: 'blue',
      fontSize: 50,
    },
  });