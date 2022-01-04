import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../services/api';
import Utils from '../../utils/Utils';
import { useAuth } from '../../contexts/auth';

import Modal from '../../components/Modal';
import Card from '../../components/Card';

import LogoGray from '../../assets/LogoGray.png';

import {
   Container,
   ContainerHeader,
   ContainerLogoAndTitle,
   Logo,
   Title,
   ContainerWelcome,
   WelcomeText,
   ButtonLogout,
   IconLogout,
   ListContainer,
   PagingButtonsContainer,
   TextPagination,
   PaginationButton,
   BackPageIcon,
   NextPageIcon,
} from './styles';
import Preload from '../../components/Preload';

type Book = {
   id: string;
   title: string;
   authors: string[];
   imageUrl: string;
   pageCount: string;
   publisher: number;
   published: number;
};

interface ListBooks extends Array<Book> {}

const Home = () => {
   const navigate = useNavigate();
   const { Logout, user } = useAuth();
   const [thisPage, setThisPage] = useState(1);
   const [totalPages, setTotalPages] = useState(0);
   const [books, setBooks] = useState<ListBooks>([]);
   const [show, setShow] = useState(false);
   const [bookId, setBookId] = useState('');
   const [loading, setLoading] = useState(true);
   const initialPage = thisPage === 1;
   const lastPage = thisPage === totalPages;
   const isMobile = Utils.isMobile();

   const refreshToken = async () => {
      return new Promise((resolve, reject) => {
         try {
            const refreshToken = localStorage.getItem('@App:refresh-token');
            const storagedToken = localStorage.getItem('@App:token');
            const body = {
               refreshToken,
            };
            api.post('/auth/refresh-token', body, {
               headers: {
                  Authorization: storagedToken || '',
               },
            })
               .then(async (response) => {
                  localStorage.setItem(
                     '@App:token',
                     `Bearer ${response.headers.authorization}`,
                  );
                  localStorage.setItem(
                     '@App:refresh-token',
                     response.headers['refresh-token'],
                  );
                  api.defaults.headers.common.Authorization = `Bearer ${response.headers.authorization}`;
                  return resolve(response);
               })
               .catch((err) => {
                  localStorage.removeItem('@App:user');
                  localStorage.removeItem('@App:token');
                  localStorage.removeItem('@App:refresh-token');
                  navigate('/');
                  return reject(err);
               });
         } catch (err) {
            return reject(err);
         }
      });
   };

   const handleLogout = () => {
      Logout();
      navigate('/login');
      window.location.reload();
   };

   const handleBookListing = async (page = 1) => {
      setLoading(true);
      const storagedToken = localStorage.getItem('@App:token');

      const response = await api.get(`/books`, {
         headers: {
            Authorization: storagedToken || '',
         },
         params: {
            page,
            amount: 12,
            category: 'biographies',
         },
      });

      setBooks(response.data.data);
      setThisPage(response.data.page);
      setTotalPages(Math.ceil(response.data.totalPages));
      setLoading(false);
   };

   const nextPage = async () => {
      if (lastPage) {
         return;
      }

      setThisPage(thisPage + 1);

      await handleBookListing(thisPage + 1);
      window.scrollTo(0, 0);
   };

   const backPage = async () => {
      if (initialPage) {
         return;
      }

      setThisPage(thisPage - 1);

      await handleBookListing(thisPage - 1);
      window.scrollTo(0, 0);
   };

   const hideModal = () => {
      if (show) {
         setShow(false);
      }
   };

   useEffect(() => {
      refreshToken();
      handleBookListing();
   }, []);

   return (
      <Container className={show ? 'noScroll' : ''}>
         <Preload loading={loading} />
         <Modal show={show} idBook={bookId} handleClose={hideModal} />
         <ContainerHeader>
            <ContainerLogoAndTitle>
               <Logo src={LogoGray} alt="Logo" />
               <Title>Books</Title>
            </ContainerLogoAndTitle>
            <ContainerWelcome>
               {!isMobile && (
                  <WelcomeText>Bem vindo, {user?.name}!</WelcomeText>
               )}
               <ButtonLogout onClick={handleLogout}>
                  <IconLogout />
               </ButtonLogout>
            </ContainerWelcome>
         </ContainerHeader>
         <ListContainer>
            {books.map((book) => {
               return (
                  <Card
                     onClick={(id) => {
                        setShow(true);
                        setBookId(id);
                     }}
                     id={book.id}
                     key={book.id}
                     book={book}
                  />
               );
            })}
         </ListContainer>
         <PagingButtonsContainer>
            {isMobile ? (
               <>
                  <PaginationButton onClick={backPage} disabled={initialPage}>
                     <BackPageIcon />
                  </PaginationButton>
                  <TextPagination>
                     Página <strong>{thisPage}</strong> de{' '}
                     <strong>{totalPages}</strong>
                  </TextPagination>
                  <PaginationButton onClick={nextPage} disabled={lastPage}>
                     <NextPageIcon />
                  </PaginationButton>
               </>
            ) : (
               <>
                  <TextPagination>
                     Página <strong>{thisPage}</strong> de{' '}
                     <strong>{totalPages}</strong>
                  </TextPagination>
                  <PaginationButton onClick={backPage} disabled={initialPage}>
                     <BackPageIcon />
                  </PaginationButton>
                  <PaginationButton onClick={nextPage} disabled={lastPage}>
                     <NextPageIcon />
                  </PaginationButton>
               </>
            )}
         </PagingButtonsContainer>
      </Container>
   );
};

export default Home;
