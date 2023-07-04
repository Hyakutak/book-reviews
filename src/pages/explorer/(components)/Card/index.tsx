import Image from 'next/image';
import ImageBook from '../../../../../public/prov/Book.svg';
import { Card } from './styles';
import { Star } from 'phosphor-react';

interface interfaceBook {
    author: string,
    cover_url: string,
    id: string,
    name: string
}

export default function CardExplorer({ name, author, cover_url }: interfaceBook) {
    return(
        <Card>
            <Image src={ImageBook} alt={name} />
            <section>
                <header>
                    <h2>{ name }</h2>
                    <p>{ author }</p>
                </header>
                <footer>
                    <Star size={16} weight='fill' />
                    <Star size={16} weight='fill' />
                    <Star size={16} weight='fill' />
                    <Star size={16} weight='fill' />
                    <Star size={16} />
                </footer>
            </section>
        </Card>
    );
}