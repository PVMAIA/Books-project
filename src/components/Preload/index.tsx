import Container from './styles';

function Preload({ loading }: { loading: boolean }) {
   return (
      <Container
         className={!loading ? 'container-preload' : 'container-preload active'}
      />
   );
}

export default Preload;
