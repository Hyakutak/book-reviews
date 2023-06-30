import { styled } from '@stitches/react';
import BackgroundAside from '../../../public/Background-nav.svg';

export const NavContainer = styled('aside', {
    position: 'relative',
    width: '14.5rem',
    height: 'calc(100vh - 2.25rem)',
    background: `url(${BackgroundAside.src})`,
    borderRadius: '$md',
    padding: '$10 3.25rem $6',
    margin: '$5 0 $4 $5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',

    'img': {
        maxWidth: '100%'
    }
});

export const NavLinks = styled('nav', {
    'ul': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '$4',
        marginTop: '4rem',

        '.active': {
            color: '$gray100',

            '::before': {
                content: '',
                width: '0.25rem',
                height: '1.5rem',
                position: 'absolute',
                left: '-1.25rem',
                top: '0.5625rem',
                background: '$gradient-vertical',
                borderRadius: '$full'
            }
        },

        'a': {
            textDecoration: 'none',
            color: '$gray400',
            position: 'relative',
            'li': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '$3',
                padding: '$2 0',

                'span': {
                    lineHeight: '$base'
                }
            }
        }
    }
});

export const FooterAside = styled('footer', {
    position: 'absolute',
    bottom: '1.5rem',
    display: 'flex',
    padding: '$1',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$3',
    cursor: 'pointer',

    'span': {
        color: 'gray200',
        fontWeight: '$bold',
        lineHeight: '$base',
        fontFamily: '$default'
    },

    'svg': {
        color: '$green100'
    }
});