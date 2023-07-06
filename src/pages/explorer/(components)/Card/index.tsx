import Image from 'next/image';
import { Card } from './styles';
import { interfaceBook } from '@/interfaces/book';
import image from '../../../../../public/images/books/Book.png'
import Ratings from '@/components/Ratings';

export default function CardExplorer({ name, author, cover_url, id }: interfaceBook) {
    return(
        <Card>
            <Image src={image} alt={name} />
            <section>
                <header>
                    <h2>{ name }</h2>
                    <p>{ author }</p>
                </header>
                <footer>
                    <Ratings book_id={id} />
                </footer>
            </section>
        </Card>
    );
}