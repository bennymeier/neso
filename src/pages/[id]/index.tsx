import { useRouter } from 'next/router';
import Link from 'next/link';
import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';
import { GetServerSideProps } from 'next';

/* Allows you to view user card info and delete user card*/
interface Props {
  user: any;
}
const PetPage: React.FC<Props> = ({ user }) => {
  const router = useRouter();
  const handleDelete = async () => {
    const userID = router.query.id;

    try {
      await fetch(`/api/users/${userID}`, {
        method: 'Delete',
      });
      router.push('/');
    } catch (error) {
      console.log('Failed to delete the user.');
    }
  };

  return (
    <div key={user._id}>
      <div className="card">
        <h5 className="user-name">{user.firstname}</h5>
        <div className="main-content">
          <p className="user-name">{user.lastname}</p>
          <div className="btn-container">
            <Link href="/[id]/edit" as={`/${user._id}/edit`}>
              <button className="btn edit">Edit</button>
            </Link>
            <button className="btn delete" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params?.id) {
    return { props: {} };
  }
  await dbConnect();

  const user = await User.findById(params.id).lean();
  user._id = user._id.toString();

  return { props: { user } };
};

export default PetPage;
