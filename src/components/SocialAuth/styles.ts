import { styled } from '@stitches/react';

export const SocialButton = styled('button', {
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    gap: '$5',
    padding: '$5 $6',
    width: '100%',
    background: '$gray600',
    borderRadius: '$md',
    cursor: 'pointer',

    'span': {
        color: '$gray200',
        fontSize: '$lg',
        fontWeight: '$bold',
        lineHeight: '$base'
    }
});