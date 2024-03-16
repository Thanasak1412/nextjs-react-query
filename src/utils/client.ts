type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

type Response = {
  page: number;
  per_page: number;
  total: number;
  data: User[];
  support: {
    url: string;
    text: string;
  };
};

export async function getUsers() {
  const res = (await fetch('https://reqres.in/api/users?page=2').then((res) =>
    res.json()
  )) as Response;

  return res.data;
}
