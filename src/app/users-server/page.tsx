type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};
const UsersServe = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users123");
  const users = await response.json();
  return (
    <ul>
      {users.map((user: User) => {
        return (
          <li key={user.id}>
            {user.name} {user.email}
          </li>
        );
      })}
    </ul>
  );
};

export default UsersServe;
