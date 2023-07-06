import { InterfaceRating } from '@/interfaces/rating';
import { api } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';
import { Star } from 'phosphor-react';

interface BookId {
    book_id: string
}

export default function Ratings({ book_id }: BookId) {

    const {data: ratings} = useQuery<InterfaceRating[]>(['ratings[]', book_id], async () => {
        const response = await api.get(`/books/ratings`, {
            params: {
                id_book: book_id
            }
        });
        return response.data;
    });

    if(!ratings) {
        const stars = [...Array(5)].map(( _, index) => (
            <Star size={16} weight={'regular'} />
        ));
        return stars
    }

    const total = ratings.reduce((accumulator, currentValue) => accumulator + currentValue.rate, 0);
    
    const average = total / ratings.length;

    const stars = [...Array(5)].map(( _, index) => (
        <Star key={`star${index}`} size={16} weight={index <= average  ? 'fill' : 'regular'} />
    ));
    
    return(
        <>
            { stars }
        </>
    );
}