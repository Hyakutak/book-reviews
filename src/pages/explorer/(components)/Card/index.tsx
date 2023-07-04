import Image from 'next/image';
import ImageBook from '../../../../../public/prov/Book.svg';
import { Card } from './styles';
import { Star } from 'phosphor-react';

export default function CardExplorer() {
    return(
        <Card>
            <Image src={ImageBook} alt='Book' />
            <section>
                <header>
                    <h2>A revolução dos bichos</h2>
                    <p>George Orwell</p>
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