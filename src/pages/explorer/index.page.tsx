import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { api } from '@/lib/axios';
import { Binoculars, MagnifyingGlass } from 'phosphor-react';
import { ContainerExplorer,
         InputFilter,
         FilterContainer,
         CardContainer } from './styles';
import CardExplorer from './(components)/Card';
import { interfaceBook } from '../../interfaces/book';
import LoadingBox from '@/components/LoadingBox';

export default function Explorer() {

    const {data: books, isLoading} = useQuery(['books'], async () => {
        const response = await api.get('/books');
        return response.data;
    });

    const { data: allCategory } = useQuery(['allCategory'],async () => {
        const response = await api.get('/')
    });

    const cardsBook = isLoading ? (
        <LoadingBox />
    ) : (
        books.map((book: interfaceBook) => <CardExplorer key={book.id} {...book} />) 
    );

    //<button key={name} className={isActive ? 'active' : ''}>{ name }</button>

    return(
        <ContainerExplorer>
            <header>
                <section>
                    <Binoculars size={32} />
                    <h1>Explorar</h1>
                </section>
                <InputFilter>
                    <input type='text' placeholder='Buscar livro ou autor' />
                    <MagnifyingGlass size={20} />
                </InputFilter>
            </header>
            <FilterContainer>
                
            </FilterContainer>
            <CardContainer>
                { cardsBook }
            </CardContainer>
        </ContainerExplorer>
    );
}