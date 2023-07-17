import { keyframes, styled } from '@stitches/react';

const AnimationLoading = keyframes({
    '0%':{
        backgroundPosition: '0%'
    },
    '50%':{
        backgroundPosition: '100%'
    },
    '100%': { 
        backgroundPosition: '0%' 
    }
});

export const DefaultLoadingBox = styled('section', {
    width: '100%',
    height: '100%',
    borderRadius: '$md',
    position: 'relative',

    '&::after': {
        content: '',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: '$gradient-vertical',
        backgroundSize: '500%',
        animation: `${AnimationLoading} 2s linear infinite`
    }
});