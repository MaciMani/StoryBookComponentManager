import React, {} from 'react';
import { ImageCard } from './imageCard'

export default {
    title: "Image Card",
    component: ImageCard,
    argTypes: { 
        onButtonPress: { action: "Clicked" }, 
    },
};

const Template = args => <ImageCard {...args} />

export const Card1 = Template.bind({})
Card1.args = {
    roundness: 10, 
    imagePath: "https://picsum.photos/id/69/1000/500", 
    titleText: "Title", 
    subtitleText: "Subtitle", 
    buttonIconName: "play", 
    showTitle: true, 
    showButton: true, 
    showDescription: true,
    thumbAspectRatio: "16:9",
}

export const Card2 = Template.bind({})
Card2.args = {
    roundness: 10, 
    imagePath: "https://picsum.photos/id/69/1000/500", 
    titleText: "Title", 
    subtitleText: "Subtitle", 
    buttonIconName: "play", 
    showTitle: true, 
    showButton: false, 
    showDescription: false,
    thumbAspectRatio: "16:9",
}