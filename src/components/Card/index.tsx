import {
   Container,
   ContainerImage,
   BookImage,
   Content,
   Title,
   Authors,
   TextDescription,
   DescriptionContainer,
   InfoContainer,
} from './styles';

import NoBookImage from '../../assets/NoBook.png';

type Book = {
   id: string;
   title: string;
   authors: string[];
   imageUrl: string;
   pageCount: string;
   publisher: number;
   published: number;
};

interface Props {
   id: string;
   book: Book;
   onClick(id: string): void;
}

const Card = ({ book, onClick, id }: Props) => {
   const listAuthors = book.authors.map((author, index) => (
      <div key={index}>
         <Authors>{author}</Authors>
         <br />
      </div>
   ));

   return (
      <Container id={id} onClick={() => onClick(id)}>
         <ContainerImage>
            <BookImage src={book.imageUrl || NoBookImage} />
         </ContainerImage>
         <Content>
            <InfoContainer>
               <Title>{book.title}</Title>
               {listAuthors}
            </InfoContainer>
            <DescriptionContainer>
               <TextDescription>{book.pageCount} paginas</TextDescription>
               <TextDescription>Editora {book.publisher}</TextDescription>
               <TextDescription>Publicado em {book.published}</TextDescription>
            </DescriptionContainer>
         </Content>
      </Container>
   );
};

export default Card;
