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
      width: 320,
      height: 68,
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 3,
    },
    button: {
      borderRadius: 10,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    buttonIcon: {
      paddingRight: 8,
    },
    buttonLabel: {
      color: 'yellow',
      fontSize: 50,
    },
  });