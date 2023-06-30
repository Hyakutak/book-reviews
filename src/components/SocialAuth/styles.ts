import { styled } from '@stitches/react';

export const SocialButton = styled('button', {
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    gap: '$5',
    padding: '$5 $6',
    width: '23.25rem',
    background: '$gray600',
    borderRadius: '$md',
    cursor: 'pointer',
    boxSizing: 'border-box',

    'span': {
        color: '$gray200',
        fontSize: '$lg',
        fontWeight: '$bold',
        lineHeight: '$base'
    }
});