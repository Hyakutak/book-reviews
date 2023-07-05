import { api } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';
import { Star } from 'phosphor-react';

interface Id {
    id: string
}

export default function Ratings({ id }: Id) {

    const {data: ratings, isLoading} = useQuery([], async () => {
        const response = await api.get(`/books/ratings?${id}`);
        return response.data;
    });

    return(
        <>
            <Star size={16} weight='fill' />
            <Star size={16} weight='fill' />
            <Star size={16} weight='fill' />
            <Star size={16} weight='fill' />
            <Star size={16} />
        </>
    );
}