import React, { useState } from 'react';
import styles from './App.module.css';
import { useUsers } from './hooks/useUsers';
import { User } from './types';
import { UserTable } from './components/UserTable';
import { UserModal } from './components/UserModal';

function App() {
  const { users, loading, error, deleteUser } = useUsers();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.title}>Users</h1>
      {loading && <div>Loading...</div>}
      {error && <div style={{color: 'red'}}>{error}</div>}
      {!loading && !error && (
        <UserTable
          users={users}
          onUserClick={setSelectedUser}
          onDelete={deleteUser}
        />
      )}
      <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
    </div>
  );
}

export default App;
