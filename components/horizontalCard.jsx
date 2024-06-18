import React, {} from 'react';
import { StyleSheet, View, Image, Text,} from 'react-native';
import { IconButton, ProgressBar, MD3Colors} from 'react-native-paper';
import PropTypes from "prop-types"

export function HoriCard ({roundness, imagePath, buttonIconName, showProgress, progressNumber, showButton, showTitle, titleText, showDescription, descriptionText, showDuration, durationText, showExtra, onPlayPress, onExtraPress, viewStyle}) {
;

    const styles = StyleSheet.create({
        buttonExtra: {            
            borderRadius: 50,
            width: 50,
            height: 50,
            bottom: viewStyle === "mobile" ? 170 : 267,
            left: 290,
            zIndex: 1,
        },
        buttonPlay: {
            borderRadius: 50,
            width: 25,
            height: 25,
            position: 'absolute',
            top: 53,
            left: 5,
            zIndex: 1,
            backgroundColor: 'white'
        },
        cardContainer: {
            backgroundColor: '#F5F5DC',
            height: 100,
            width: 350,
            borderRadius: roundness,
            alignSelf: 'center',
            alignContent: 'flex-start', 
    
            shadowColor: '#000',  
            shadowOffset:{ 
                width: 5, 
                height: 5,
            },
            shadowOpacity: 0.75,
            shadowRadius: 5,
            elevation: 9,
        },
        descriptionContainer: {
            left: 140 ,
            bottom: viewStyle === "mobile" ? 70 : 167,
            height: 30,
            width: 150,
        },
        descriptionSpecs: {
            fontSize: 12,
        },
        durationContainer: {
            left: 140 ,
            bottom: viewStyle === "mobile" ? 70 : 167,
            height: 20,
            width: 150, 
        },
        durationSpecs: {
            fontSize: 11,
        },
        imageContainer: {
            top: '10%',
            left: '2%',
            height: '80%',
            width: '35%',
            alignSelf: 'flex-start',
        },
        progressBar: {
            top: 6,
            left: 6,
            width: 124,
            overflow: 'hidden',
        },
        titleContainer: {
            left: 140 ,
            bottom: viewStyle === "mobile" ? 70 : 167,
            height: 35,
            width: 150, 
        },
        titleSpecs: {
            fontSize: 14,
            fontWeight: 'bold'
        }
    })

    return (
        <View style={styles.cardContainer}>
            <Image 
                style={styles.imageContainer} 
                source={{ uri: imagePath}} 
            />
            {showProgress && (
            <ProgressBar progress={progressNumber} color={MD3Colors.error50} style={styles.progressBar}/>
            )} 
            {showButton && (
                <IconButton
                    icon={buttonIconName}
                    style={styles.buttonPlay}
                    onPress={() => {
                        onPlayPress();
                    }}
                    >
                </IconButton>
            )}
            <View style={styles.titleContainer}>
                {showTitle && (
                    <Text style={styles.titleSpecs}>
                        {titleText}
                    </Text>
                )}
            </View>
            <View style={styles.descriptionContainer}>
                {showDescription && (
                    <Text style={styles.descriptionSpecs}>
                        {descriptionText}
                    </Text>
                )}
            </View>
            <View style={styles.durationContainer}>
                {showDuration && (
                    <Text style={styles.durationSpecs}>
                        {durationText}
                    </Text>
                )}
            </View>
            {showExtra && (
                <IconButton
                onPress={() => {
                onExtraPress();
                }}
                icon={'dots-vertical'}
                style={styles.buttonExtra}
                />
            )}
        </View>
    ) 
}

HoriCard.propTypes = {
    buttonIconName: PropTypes.string,
    showButton: PropTypes.bool,
    roundness: PropTypes.number, 
    imagePath: PropTypes.string,
    onOptionsPress: PropTypes.func, 
    showTitle: PropTypes.bool,
    titleText: PropTypes.string,
    showDescription: PropTypes.bool,
    descriptionText: PropTypes.string,
    showDuration: PropTypes.bool,
    durationText: PropTypes.string,
    showProgress: PropTypes.bool,
    progressNumber: PropTypes.number,
    showExtra: PropTypes.bool,
    onPlayPress: PropTypes.func,
    onExtraPress: PropTypes.func,
    viewStyle: PropTypes.oneOf(["mobile","computer"])
}