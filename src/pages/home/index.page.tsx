import Image from 'next/image';
import Logo from '../../../public/Logo.svg';
import Banner from '../../../public/Banner-login.png';
import { AsideContent, AsideImage, MainContainer } from './styles';
import SocialAuth from '@/components/SocialAuth/indes';
import IconGoogle from '../../../public/google-icon.svg';
import IconGthub from '../../../public/icon_github.svg';
import IconRocket from '../../../public/rocket-icon.svg';

const ButtonsAuth = [
    {
        name: 'Google',
        src: IconGoogle
    },
    {
        name: 'Github',
        src: IconGthub
    },
    {
        name: 'Visitante',
        src: IconRocket
    }
];

export default function Home() {

    const Buttons = ButtonsAuth.map(({ name, src }) => {
        return (
            <SocialAuth key={name}>
                <Image src={src} alt={`Logo ${name}`} />
                { name == 'Visitante' ? <span>Acessar como { name }</span> : <span>Entrar com { name }</span> }
            </SocialAuth>
        );
    });

    return (
        <>
            <MainContainer>
                <AsideImage>
                    <Image src={Logo} alt="Book Wise Logo" />
                    <Image src={Banner} alt="" width={598} quality={100} />
                </AsideImage>
                <AsideContent>
                    <header>
                        <h2>Boas vindas!</h2>
                        <span>Faça seu login ou acesse como visitante.</span>
                    </header>
                    <section>
                        { Buttons }
                    </section>
                </AsideContent>
            </MainContainer>
        </>
    )
}