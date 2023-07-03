import { styled } from '@stitches/react';
import { globalCss } from '../../stitches.config';

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
    },

    body: {
        backgroundColor: '$gray800',
        color: '$gray100',
        '-webkit-font-smoothing': 'antialiased',
    }, 

    'body, h2, span, button': {
        fontFamily: '$default',
        fontWeight: '$regular'
    }
});

export const MainContainer = styled('main', {
    display: 'flex'
});