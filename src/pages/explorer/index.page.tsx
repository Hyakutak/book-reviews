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

const Filters = [
    {
        name: 'Tudo',
        isActive: true
    },
    {
        name: 'Computação',
        isActive: false
    },
    {
        name: 'Educação',
        isActive: false
    },
    {
        name: 'Fantasia',
        isActive: false
    },
    {
        name: 'Ficção científica',
        isActive: false
    },
    {
        name: 'Horror',
        isActive: false
    },
    {
        name: 'HQs',
        isActive: false
    },
    {
        name: 'Suspense',
        isActive: false
    }
]

export default function Explorer() {

    const {data: books, isLoading} = useQuery(['books'], async () => {
        const response = await api.get('/books');
        return response.data;
    });

    const cardsBook = isLoading ? (
        <span>Carregando</span>
    ) : (
        books.map((book: interfaceBook) => <CardExplorer key={book.id} {...book} />) 
    );

    const FilterList = Filters.map(({ name, isActive }) => {
        return <button key={name} className={isActive ? 'active' : ''}>{ name }</button>
    });

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
                { FilterList }
            </FilterContainer>
            <CardContainer>
                { cardsBook }
            </CardContainer>
        </ContainerExplorer>
    );
}