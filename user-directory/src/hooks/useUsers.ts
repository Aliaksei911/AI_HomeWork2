import { useEffect, useState } from 'react';
import { User } from '../types';

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Ошибка загрузки пользователей');
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const deleteUser = (id: number) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return { users, loading, error, deleteUser };
} 