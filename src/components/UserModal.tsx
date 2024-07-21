import React from 'react';

interface UserModalProps {
  user: any
  onClose: () => void
}

const UserModal: React.FC<UserModalProps> = ({ user, onClose }) => {
  if (!user) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{`${user.firstName} ${user.lastName}`}</h2>
        <p><strong>Возраст:</strong> {user.age}</p>
        <p><strong>Адрес:</strong> {`${user.address.city}, ${user.address.street}`}</p>
        <p><strong>Рост:</strong> {user.height} см</p>
        <p><strong>Вес:</strong> {user.weight} кг</p>
        <p><strong>Номер телефона:</strong> {user.phone}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  )
}

export default UserModal
