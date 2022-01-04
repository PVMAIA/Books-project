import { useEffect, useState } from 'react';

import Preload from '../Preload';

import api from '../../services/api';

import NoBookImage from '../../assets/NoBook.png';
import Quotes from '../../assets/Quotes.png';

import {
   Container,
   BodyModal,
   ContainerBookImage,
   BookImage,
   Content,
   ContainerHeader,
   Title,
   ButtonCloseModal,
   InfoContainer,
   PublishersReviewContainer,
   IconClose,
   Authors,
   InfoTitle,
   InfoContentContainer,
   InfoText,
   InfoTextValue,
   PublishersReviewTitle,
   PublishersReview,
} from './styles';
import Utils from '../../utils/Utils';

type Book = {
   id: string;
   title: string;
   authors: string[];
   imageUrl: string;
   pageCount: string;
   publisher: number;
   published: number;
   description: string;
   category: string;
   isbn10: string;
   isbn13: string;
   language: string;
};

interface Props {
   idBook: string;
   handleClose(): void;
   show: boolean;
}

const Modal = ({ idBook, handleClose, show }: Props) => {
   const [book, setBook] = useState<Book>({} as Book);
   const [loading, setLoading] = useState(false);
   const [showHideClassName, setShowHideClassName] = useState('');
   const isMobile = Utils.isMobile();

   const handleGetBook = async () => {
      setShowHideClassName('');
      setLoading(true);
      const storagedToken = localStorage.getItem('@App:token');

      const response = await api.get(`/books/${idBook}`, {
         headers: {
            Authorization: storagedToken || '',
         },
      });

      setBook(response.data);
      setTimeout(() => {
         setLoading(false);
         setShowHideClassName('show');
      }, 2000);
   };

   useEffect(() => {
      if (show) handleGetBook();
   }, [idBook, show]);

   return loading ? (
      <Preload loading={loading} />
   ) : (
      <Container className={showHideClassName}>
         <ButtonCloseModal
            type="button"
            onClick={() => {
               setShowHideClassName('');
               handleClose();
            }}>
            <IconClose />
         </ButtonCloseModal>
         <BodyModal>
            <ContainerBookImage>
               <BookImage src={book.imageUrl || NoBookImage} alt="Book Image" />
            </ContainerBookImage>
            <Content>
               <ContainerHeader>
                  <Title>{book.title}</Title>
                  {!isMobile && <br />}
                  <Authors>{book.authors?.join(', ')}</Authors>
               </ContainerHeader>
               <InfoContainer>
                  <InfoTitle>Informações</InfoTitle>
                  <InfoContentContainer>
                     <InfoText>Páginas</InfoText>
                     <InfoTextValue>{book.pageCount} páginas</InfoTextValue>
                  </InfoContentContainer>
                  <InfoContentContainer>
                     <InfoText>Editora</InfoText>
                     <InfoTextValue>Editora {book.publisher}</InfoTextValue>
                  </InfoContentContainer>
                  <InfoContentContainer>
                     <InfoText>Publicação</InfoText>
                     <InfoTextValue>{book.published}</InfoTextValue>
                  </InfoContentContainer>
                  <InfoContentContainer>
                     <InfoText>Idioma</InfoText>
                     <InfoTextValue>{book.language}</InfoTextValue>
                  </InfoContentContainer>
                  <InfoContentContainer>
                     <InfoText>Título Original</InfoText>
                     <InfoTextValue>{book.title}</InfoTextValue>
                  </InfoContentContainer>
                  <InfoContentContainer>
                     <InfoText>ISBN-10</InfoText>
                     <InfoTextValue>{book.isbn10}</InfoTextValue>
                  </InfoContentContainer>
                  <InfoContentContainer>
                     <InfoText>ISBN-13</InfoText>
                     <InfoTextValue>{book.isbn13}</InfoTextValue>
                  </InfoContentContainer>
               </InfoContainer>
               <PublishersReviewContainer>
                  <PublishersReviewTitle>
                     Resenha da Editora
                  </PublishersReviewTitle>
                  <PublishersReview>
                     <img src={Quotes} alt="" /> {book.description}
                  </PublishersReview>
               </PublishersReviewContainer>
            </Content>
         </BodyModal>
      </Container>
   );
};

export default Modal;
