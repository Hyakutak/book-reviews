import { styled } from '@stitches/react';

export const ContainerExplorer = styled('article', {
    width: 'calc((100% - 14.5rem) - 12rem)',
    maxWidth: '75rem',
    margin: '0 auto',
    marginTop: '4.5rem',

    '& header': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        'section': {
            display: 'flex',
            alignItems: 'center',
            gap: '$3',

            'svg': {
                color: '$green100'
            },

            'h1': {
                fontSize: '$2xl',
                fontWeight: '$bold',
                lineHeight: '$short'
            }
        }
    }
});

export const InputFilter = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '$2',
    width: '27rem',
    height: '3rem',
    padding: '.875rem $5',
    borderRadius: '$sm',
    border: '1px solid $gray500',
    background: 'gray800',

    '& input': {
        all: 'unset',
        fontSize: '$sm',
        color: 'gray400',
        lineHeight: '$base',
        width: 'calc(100% - 1.25rem)',
        height: '100%'
    },

    '& svg': {
        color: '$gray500'
    }
});

export const FilterContainer = styled('section', {
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
    marginTop: '$10',

    '& .active': {
        background: '$purple200',
        color: '$gray100',
        borderColor: 'transparent'
    },

    '& button': {
        all: 'unset',
        padding: '$1 $4',
        textAlign: 'center',
        color: '$purple100',
        lineHeight: '$base',
        borderRadius: '$full',
        border: '1px solid $purple100',
        fontSize: '$md',
        fontWeight: '$regular',
        fontFamily: '$default',
        cursor: 'pointer'
    }
});

export const CardContainer = styled('section', {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '$5',
    marginTop: '3rem'
});