import React, {} from 'react';
import { VertCard } from './verticalCard'

export default {
    title: "Vertical Card",
    component: VertCard,
    argTypes: { 
        onPlayPress: { action: "Clicked" }, 
        onOptionsPress: { action: "Clicked" } 
    },
};

const Template = args => <VertCard {...args} />

export const Card1 = Template.bind({})
Card1.args = {
    showPlay: true, 
    showLabel: true, 
    showDuration: true, 
    showProgress: true, 
    showTitle: true, 
    showDescription: true, 
    showButtonIcon: true, 
    labelText: "label", 
    durationText: "00:00", 
    progressNumber: 0.5, 
    titleText: "Title Placeholder", 
    descriptionText: "Description Placeholder", 
    buttonPlayIconName: "play-circle", 
    buttonOptionsIconName: "dots-vertical", 
    roundness: 20, 
    imagePath: "https://picsum.photos/id/69/1000/500",
    thumbAspectRatio: '16:9',
    viewStyle: "mobile",
    labelMode: "compact",
}


export const Card2 = Template.bind({})
Card2.args = {
    showPlay: true, 
    showLabel: false, 
    showDuration: false, 
    showProgress: false, 
    showTitle: true, 
    showDescription: true, 
    showButtonIcon: true, 
    labelText: "label", 
    durationText: "00:00", 
    progressNumber: 0.5, 
    titleText: "Title Placeholder", 
    descriptionText: "Description Placeholder", 
    buttonPlayIconName: "play-circle", 
    buttonOptionsIconName: "dots-vertical", 
    roundness: 20, 
    imagePath: "https://picsum.photos/id/69/1000/500",
    thumbAspectRatio: '16:9',
    viewStyle: "mobile",
    labelMode: "compact",
}


export const Card3 = Template.bind({})
Card3.args = {
    showPlay: false, 
    showLabel: true, 
    showDuration: false, 
    showProgress: false, 
    showTitle: false, 
    showDescription: false, 
    showButtonIcon: false, 
    labelText: "label", 
    durationText: "00:00", 
    progressNumber: 0.5, 
    titleText: "Title Placeholder", 
    descriptionText: "Description Placeholder", 
    buttonPlayIconName: "play-circle", 
    buttonOptionsIconName: "dots-vertical", 
    roundness: 20, 
    imagePath: "https://picsum.photos/id/69/1000/500",
    thumbAspectRatio: '16:9',
    viewStyle: "mobile",
    labelMode: "long",
}