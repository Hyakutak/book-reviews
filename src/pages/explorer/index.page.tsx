import { Binoculars, MagnifyingGlass } from 'phosphor-react';
import { ContainerExplorer,
         InputFilter,
         FilterContainer,
         CardContainer } from './styles';
import CardExplorer from './(components)/Card';
import { useEffect } from 'react';
import { api } from '@/lib/axios';

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

    const FilterList = Filters.map(({ name, isActive }) => {
        return <button key={name} className={isActive ? 'active' : ''}>{ name }</button>
    });

    async function fetchBooks() {
        const response = await api.get('/books')
        console.log(response.data)
    }

    useEffect(() => {
        fetchBooks();
    }, [])

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
                <CardExplorer />
                <CardExplorer />
                <CardExplorer />
            </CardContainer>
        </ContainerExplorer>
    );
}