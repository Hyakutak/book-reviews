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
    console.log(cover_url)
    return(
        <Card>
            <Image src={cover_url} alt={name} width={200} height={100} />
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