import { SocialButton } from './styles';
import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode
}


export default function SocialAuth({ children }: ButtonProps) {
    return (
        <SocialButton>
            { children }
        </SocialButton>
    );
}