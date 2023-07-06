import Image from 'next/image';
import { Card } from './styles';
import { interfaceBook } from '@/interfaces/book';
import Ratings from '@/components/Ratings';

export default function CardExplorer({ name, author, cover_url, id }: interfaceBook) {
    return(
        <Card>
            <Image src={cover_url} alt={name} width={170} height={270} />
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