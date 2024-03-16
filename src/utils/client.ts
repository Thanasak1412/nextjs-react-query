type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

type ResponseUser = {
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
  )) as ResponseUser;

  return res.data;
}

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export async function getTodos() {
  return (await fetch('https://jsonplaceholder.typicode.com/todos').then((res) =>
    res.json()
  )) as Todo[];
}

export async function createTodo(title: string) {
  return (await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({ title, completed: false, userId: 1 }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.json())) as Todo;
}
