import { styled } from '@stitches/react';

export const MainContainer = styled('main', {
    padding: '1.25rem',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    gap: '12.06rem'
});

export const AsideImage = styled('aside', {
    position: 'relative',
    width: 'fit-content',
    maxHeight: '100%',
    overflow: 'hidden',
    flexShrink: 0,

    'img': {
        '&:first-child': {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        },
    }
});

export const AsideContent = styled('aside', {
    width: '23.25rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '$10',

    'header': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '.125rem',
        
        'h2': {
            color: '$gray100',
            fontSize: '$2xl',
            fontWeight: '$bold',
            lineHeight: '$short'
        },

        'span': {
            color: '$gray200',
            lineHeight: '$base'
        }
    },

    'section': {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '$4'
    }
});