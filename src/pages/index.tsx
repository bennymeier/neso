import { useUser } from '../../lib/hooks';
import HeaderNavbar from '../components/Menu/HeaderNavbar';

const Index = () => {
  const user = useUser();
  const isAuthenticated = true;
  return (
    <>
      {isAuthenticated && <HeaderNavbar />}
      <p>{JSON.stringify(user, null, 2)}</p>
      {user && (
        <>
          <p>Currently logged in as:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
    </>
  );
};

export default Index;
