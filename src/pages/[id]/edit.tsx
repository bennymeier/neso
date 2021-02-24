import { useRouter } from 'next/router';
import useSWR from 'swr';

const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const EditPet = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: user, error } = useSWR(id ? `/api/users/${id}` : null, fetcher);

  if (error) return <p>Failed to load</p>;
  if (!user) return <p>Loading...</p>;

  return (
    <>
      <h1>Edit User</h1>
      <p>{JSON.stringify(user, null, 2)}</p>
    </>
  );
};

export default EditPet;
