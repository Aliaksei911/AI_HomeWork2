import React from 'react';
import { User } from '../../types';
import styles from './UserModal.module.css';

interface UserModalProps {
  user: User | null;
  onClose: () => void;
}

export const UserModal: React.FC<UserModalProps> = ({ user, onClose }) => {
  if (!user) return null;

  const mapUrl = `https://www.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}`;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} title="Закрыть">✕</button>
        <h2 className={styles.name}>{user.name}</h2>
        <div className={styles.infoBlock}><b>Username:</b> {user.username}</div>
        <div className={styles.infoBlock}><b>Email:</b> {user.email}</div>
        <div className={styles.infoBlock}><b>Phone:</b> {user.phone}</div>
        <div className={styles.infoBlock}><b>Website:</b> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></div>
        <div className={styles.infoBlock}><b>Company:</b> {user.company.name} <span style={{color:'#888'}}>{user.company.catchPhrase}</span></div>
        <div className={styles.infoBlock}><b>Address:</b> {user.address.city}, {user.address.street}, {user.address.suite}, {user.address.zipcode}</div>
        <div className={styles.infoBlock}><b>Map:</b> <a href={mapUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a></div>
      </div>
    </div>
  );
}; 