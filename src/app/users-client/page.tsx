"use client";
import { useState, useEffect } from "react";
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};
const UsersClient = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error("Fallo la peticion de usuarions");
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError("Fallo la peticion de usuarions");
        if (err instanceof Error) {
          setError(`Fallo peticion de usuarios : ${err.message}`);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);
  if (loading) return <h3>Cargando...</h3>;
  if (error) return <h3>{error}</h3>;
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            {user.name} {user.email}
          </li>
        );
      })}
    </ul>
  );
};

export default UsersClient;
