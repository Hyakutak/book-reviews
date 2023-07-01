import { NavContainer, NavLinks, FooterAside } from './styles';
import Logo from '../../../public/Logo.svg';
import Image from 'next/image';
import { ChartLineUp, Binoculars, User, SignIn  } from 'phosphor-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav = [
    {
        name: 'Início',
        icon: <ChartLineUp size={24} />,
        link: '/feed'
    },
    {
        name: 'Explorar',
        icon: <Binoculars size={24} />,
        link: '/explorer'
    },
    {
        name: 'Perfil',
        icon: <User size={24} />,
        link: '/account'
    }
];

export function AsideNav() {

    const pathname = usePathname();

    const navLinks = Nav.map(({ name, icon, link }) => {
        return (
            <Link href={link} className={pathname == link ? "active" : ""}>
                <li>
                    { icon }
                    <span>{ name }</span>
                </li>
            </Link>
        );
    });

    return (
        <NavContainer>
            <Image src={Logo} alt='Logo Book Reviews' />
            <NavLinks>
                <ul>
                    { navLinks }
                </ul>
            </NavLinks>
            <FooterAside>
                <span>Fazer Login</span>
                <SignIn size={20} />
            </FooterAside>
        </NavContainer>
    );
}