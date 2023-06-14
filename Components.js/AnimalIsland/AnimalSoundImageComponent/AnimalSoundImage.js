import { View, Text, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import React from 'react';

function AnimalSoundImage({ animal }) {
    const animalArray = ['cat', 'chicken', 'cow', 'duck', 'goat', 'crow', 'deer', 'dog', 'dolphin', 'donkey', 'eagle', 'elephant', 'fox', 'frogs', 'hippo', 'horse', 'lion', 'monkey', 'mouse', 'owl', 'pig', 'pigeon', 'rooster', 'seagull', 'walrus', 'whale', 'wolf', 'zebra'  ];
    const animalPictures = {
        cat: require("../../../assets/animal-pictures/cat-1.jpg"),
        chicken: require('../../../assets/animal-pictures/chicken.jpeg'),
        cow: require('../../../assets/animal-pictures/cow.jpg'),
        duck: require('../../../assets/animal-pictures/mallard.jpg'),
        goat: require('../../../assets/animal-pictures/goat.jpg'),
        crow: require('../../../assets/animal-pictures/crow.jpg'),
        deer: require('../../../assets/animal-pictures/deer.jpg'),
        dog: require('../../../assets/animal-pictures/dog.jpg'),
        dolphin: require('../../../assets/animal-pictures/dolphin.jpg'),
        donkey: require('../../../assets/animal-pictures/donkey.jpg'),
        eagle: require('../../../assets/animal-pictures/eagle.jpg'),
        elephant: require('../../../assets/animal-pictures/elephant.jpg'),
        fox: require('../../../assets/animal-pictures/fox.jpg'),
        frogs: require('../../../assets/animal-pictures/frog.jpg'),
        hippo: require('../../../assets/animal-pictures/hippo.jpg'),
        horse: require('../../../assets/animal-pictures/horse.jpg'),
        lion: require('../../../assets/animal-pictures/lion.jpg'),
        monkey: require('../../../assets/animal-pictures/monkey.jpg'),
        mouse: require('../../../assets/animal-pictures/mouse.jpg'),
        owl: require('../../../assets/animal-pictures/owl.jpg'),
        pig: require('../../../assets/animal-pictures/pig.jpg'),
        pigeon: require('../../../assets/animal-pictures/pigeon.jpg'),
        rooster: require('../../../assets/animal-pictures/rooster.jpg'),
        seagull: require('../../../assets/animal-pictures/seagull.jpg'),
        walrus: require('../../../assets/animal-pictures/walrus.jpg'),
        whale: require('../../../assets/animal-pictures/whale.jpg'),
        wolf: require('../../../assets/animal-pictures/wolf.jpg'),
        zebra: require('../../../assets/animal-pictures/zebra.jpg'),
    };

      const image =animalPictures[animal]
      
    return (
        <View>
            <Text>
                <Image style={styles.image} source={image} />
            
            </Text>
        </View>
    );
}

export default AnimalSoundImage;

const styles = EStyleSheet.create({
    image: {
        width: 100,
        height: 100
    }
});
