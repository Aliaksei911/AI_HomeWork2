import React from 'react';
import { User } from '../../types';
import styles from './UserTable.module.css';

interface UserTableProps {
  users: User[];
  onUserClick: (user: User) => void;
  onDelete: (id: number) => void;
}

export const UserTable: React.FC<UserTableProps> = ({ users, onUserClick, onDelete }) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>NAME / EMAIL</th>
            <th>ADDRESS</th>
            <th>PHONE</th>
            <th>WEBSITE</th>
            <th>COMPANY</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className={styles.row}>
              <td onClick={() => onUserClick(user)} className={styles.clickable}>
                <div><strong>{user.name}</strong></div>
                <div style={{ fontSize: '0.95em', color: '#888' }}>{user.email}</div>
              </td>
              <td onClick={() => onUserClick(user)} className={styles.clickable}>
                {user.address.city}, {user.address.street}, {user.address.suite}
              </td>
              <td onClick={() => onUserClick(user)} className={styles.clickable}>{user.phone}</td>
              <td onClick={() => onUserClick(user)} className={styles.clickable}>
                <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>{user.website}</a>
              </td>
              <td onClick={() => onUserClick(user)} className={styles.clickable}>{user.company.name}</td>
              <td>
                <button className={styles.deleteBtn} onClick={() => onDelete(user.id)} title="Delete user">✕</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}; 