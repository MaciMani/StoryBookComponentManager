import React, {} from 'react';
import { StyleSheet, View, Image, Text,} from 'react-native';
import { IconButton,} from 'react-native-paper';
import PropTypes from "prop-types"

export function ImageCard ({roundness, imagePath, titleText, subtitleText, buttonIconName, showTitle, showButton, showDescription, onButtonPress, thumbAspectRatio}) {

    const styles = StyleSheet.create({
        button: {
            borderRadius: 50,
            width: 50,
            height: 50,
            position: 'absolute',
            right: 60,
            top: 50,
            zIndex: 1,
            backgroundColor: 'white'
        },
        cardContainer: {
            backgroundColor: '#F5F5DC',
            height: 400,
            width: 350,
            borderRadius: roundness,
            alignSelf: 'center',
            alignContent: 'center',
    
            shadowColor: '#000',
            shadowOffset:{
                width: 5,
                height: 5,
            },
            shadowOpacity: 0.75,
            shadowRadius: 5,
            elevation: 9,
        },
        imageContainer: {
            top: 50,
            height: '80%',
            width: '90%',
            alignSelf: 'center',
            borderRadius: roundness,
        },
        titleBox: {
            bottom: 100,
            left: 25,
            flexDirection: 'row',
        },
        titleContainer: {
            top: 60,
            width: 210,
            padding: 10,
            alignSelf: 'flex-start',
            fontSize: 16,
            color: "white",
        },
        subtitleContainer:{
            top: -50,
            left: 25,
            padding: 10,
            alignSelf:'flex-start',
            fontSize: 12,
            color: "white",
        },
    })

    const imageHeight = 130; 
    let imageWidth = '100%';

    if (thumbAspectRatio === '16:9') {
        cardWidth= "85%"
        imageWidth = "100%"
    } else if (thumbAspectRatio === '21:9') {
        imageWidth = (21/9) * imageHeight;
        cardWidth = imageWidth
    } else if (thumbAspectRatio === '20:7') {
        imageWidth = (20/7) * imageHeight; 
        cardWidth = imageWidth
    }

    return (
        <View style={styles.cardContainer}>
            <Image 
                style={styles.imageContainer} 
                source={{ uri: imagePath}} 
            />
            <View style={styles.titleBox}>
            {showTitle && (
                <Text style={styles.titleContainer}>
                    {titleText}
                </Text>
            )}
            {showButton && (
                <IconButton
                    icon={buttonIconName}
                    style={styles.button}
                    onPress={() => {
                        onButtonPress();
                    }}
                    >
                </IconButton>
            )}
            </View>
            {showDescription && (
                <Text style={styles.subtitleContainer}>
                    {subtitleText}
                </Text>
            )}
        </View> 

    ) 
}

ImageCard.propTypes = {
    roundness: PropTypes.number, 
    imagePath: PropTypes.string, 
    titleText: PropTypes.string, 
    subtitleText: PropTypes.string, 
    buttonIconName: PropTypes.string, 
    showTitle: PropTypes.bool, 
    showButton: PropTypes.bool, 
    showDescription: PropTypes.bool,
    onButtonPress: PropTypes.func, 
    thumbAspectRatio: PropTypes.oneOf(['16:9', '21:9', '20:7']),
}