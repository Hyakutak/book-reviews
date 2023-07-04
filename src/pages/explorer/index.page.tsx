import { Binoculars, MagnifyingGlass } from 'phosphor-react';
import { ContainerExplorer,
         InputFilter,
         FilterContainer,
         CardContainer } from './styles';
import CardExplorer from './(components)/Card';
import { useEffect, useState } from 'react';
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

interface interfaceBook {
    author: string,
    cover_url: string,
    id: string,
    name: string
}

export default function Explorer() {

    const [ books, setBooks] = useState<interfaceBook[]>([]);

    const FilterList = Filters.map(({ name, isActive }) => {
        return <button key={name} className={isActive ? 'active' : ''}>{ name }</button>
    });

    async function fetchBooks() {
        const response = await api.get('/books');
        const allBooks = response.data;
        const booksArray:interfaceBook[] = [];
        allBooks.forEach((book: interfaceBook) => {
            const {author, cover_url, id, name} = book;            
            booksArray.push({author, cover_url, id, name});
        });
        setBooks(booksArray);
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    const cardsBook = books.map((book) => {
        return <CardExplorer key={book.id} {...book} />
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