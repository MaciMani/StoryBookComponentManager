import React, {} from 'react';
import { HoriCard } from './horizontalCard';

export default {
    title: "Horizontal Card",
    component: HoriCard,
    argTypes: { 
        onPlayPress: { action: "Clicked Play" }, 
        onExtraPress: { action: "Clicked Extra" }, 
    },
};

const Template = args => <HoriCard {...args} />

export const Card1 = Template.bind({})
Card1.args = {
    showButton: true, 
    showDescription: true,
    showDuration:true,
    showExtra: true,
    showProgress: true,
    showTitle: true,
    roundness: 10, 
    progressNumber: 0.5,
    imagePath: "https://picsum.photos/id/69/1000/500",
    buttonIconName: "play",
    titleText: "Title",
    descriptionText: "Description",
    durationText: "00:00",
    viewStyle: "mobile",
}