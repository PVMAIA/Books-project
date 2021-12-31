import RoutesWithoutAuthentication from './RoutesWithoutAuthentication';
import RoutesWithAuthentication from './RoutesWithAuthentication';

const Routes = () => {
   const signed = false;
   return signed ? (
      <RoutesWithAuthentication />
   ) : (
      <RoutesWithoutAuthentication />
   );
};

export default Routes;
