import { styled } from '@stitches/react';

export const Card = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '$5',
    padding: '$4  $5',
    background: '$gray700',
    borderRadius: '$md',

    '& section': {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '100%',

        '& header': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
    
            'h2': {
                lineHeight: '$base',
                fontSize: '$md',
                fontWeight: '$bold',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
            },
            'p': {
                color: '$gray400',
                fontWeight: '$regular',
                fontSize: '$sm'
            }
        },

        '& footer': {
            display: 'flex',
            gap: '$1',

            '& svg': {
                color: '$purple100'
            }
        }
    },

});