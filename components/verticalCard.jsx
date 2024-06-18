import React, { useState } from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';
import { IconButton, ProgressBar, MD3Colors } from 'react-native-paper';
import PropTypes from "prop-types"
import theme from '../JSONs/theme.json'

export function VertCard ({showPlay, showLabel, showDuration, showProgress, showTitle, showDescription, showButtonIcon, labelText, durationText, progressNumber, titleText, descriptionText, buttonPlayIconName, buttonOptionsIconName, roundness, onPlayPress, onOptionsPress, imagePath, thumbAspectRatio, viewStyle, labelMode, labelColor}) {

    const styles = StyleSheet.create({
        buttonOptions: {
            borderRadius: 50,
            width: 50,
            height: 50,
            position: 'absolute',
            right:0,
            top: 130,
            zIndex: 1,
        },
        buttonPlay: {
            borderRadius: 50,
            width: 50,
            height: 50,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: [{ translateX: -30 }, { translateY: -70 }],
        },
        cardContainer: {
            backgroundColor: theme.palettes.primary[60],
            height: 220,
            width: "85%",
            borderRadius: roundness,
            alignSelf: 'center',
    
            shadowColor: '#000',
            shadowOffset:{
                width: 5,
                height: 5,
            },
            shadowOpacity: 0.75,
            shadowRadius: 5,
            elevation: 9,
        },
        durationContainer: {
            position: 'absolute',
            backgroundColor: 'white',
            right: 10,
            top: 95,
            padding: 5, 
        },
        imageContainer: {
            alignSelf: 'center',
            borderTopRightRadius: roundness,
            borderTopLeftRadius: roundness,
        },
        labelContainer: {
            position: 'absolute',
            backgroundColor: 'blue',
            width: labelMode === "long" ? "100%" : "",
            left: labelMode === "long" ? 0 : 10,
            top: labelMode === "long" ? 105 : 95,
            padding: 5, 
        },
        labelText: {
            color: labelColor === "light" ? "white" : "black",
        },
        subtitle:{
            overflow: 'hidden',
            height: 45,
            width : "90%" ,
            position: "absolute",
            padding: 10,
            top: 175,
            fontSize: theme.styles.subtitle.fontSize,
        },
        title: {
            overflow: 'hidden',
            height: 45,
            width : "90%" ,
            position: "absolute",
            padding: 10,
            top: 130,
            fontSize: theme.styles.title.fontSize,
        },
    })

    const imageHeight = 130; 
    let imageWidth = '100%';

    if (thumbAspectRatio === '16:9') {
        cardWidth= viewStyle === "mobile" ? "85%" : "30%" 
        imageWidth = "100%"
    } else if (thumbAspectRatio === '21:9') {
        imageWidth = (21/9) * imageHeight;
        cardWidth = imageWidth
    } else if (thumbAspectRatio === '20:7') {
        imageWidth = (20/7) * imageHeight; 
        cardWidth = imageWidth
    }

    return (
        <View style={[styles.cardContainer, {width: cardWidth }]}>
            <Image 
                style={[styles.imageContainer, {width: imageWidth, height: imageHeight}]} 
                source={{ uri: imagePath}} 
            />
            {showPlay && (
                <IconButton
                onPress={() => {
                  onPlayPress();
                }}
                icon={buttonPlayIconName}
                style={styles.buttonPlay}
              />
            )}
            {showLabel && (
                <View style={styles.labelContainer}>
                <Text style={styles.labelText}>{labelText}</Text>
                </View>
            )}
            {showDuration && (
                <View style={styles.durationContainer}>
                <Text>{durationText}</Text>
                </View>
            )}
            {showProgress && (
            <ProgressBar progress={progressNumber} color={MD3Colors.error50}/>
            )} 
            {showButtonIcon && (
                <IconButton
                onPress={() => {
                  onOptionsPress();
                }}
                icon={buttonOptionsIconName}
                style={styles.buttonOptions}
                />
            )}
            {showTitle && (
            <Text style={styles.title}>{titleText}</Text>
            )}
            {showDescription && (
            <Text style={styles.subtitle}>{descriptionText}</Text>
            )} 
        </View>    
    ) 
}

VertCard.propTypes = {
    showThumb: PropTypes.bool, 
    showPlay: PropTypes.bool, 
    showLabel: PropTypes.bool, 
    showDuration: PropTypes.bool, 
    showProgress: PropTypes.bool, 
    showTitle: PropTypes.bool, 
    showDescription: PropTypes.bool, 
    showButtonIcon: PropTypes.bool, 
    labelText: PropTypes.string, 
    durationText: PropTypes.string, 
    progressNumber: PropTypes.number, 
    titleText: PropTypes.string, 
    descriptionText: PropTypes.string, 
    buttonPlayIconName: PropTypes.string, 
    buttonOptionsIconName: PropTypes.string, 
    roundness: PropTypes.number, 
    onPlayPress: PropTypes.func, 
    onOptionsPress: PropTypes.func, 
    imagePath: PropTypes.string,
    thumbAspectRatio: PropTypes.oneOf(['16:9', '21:9', '20:7']),
    viewStyle: PropTypes.oneOf(["mobile","computer"]),
    labelMode: PropTypes.oneOf(["compact","long"])
}