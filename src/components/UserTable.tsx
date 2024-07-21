import React from 'react';
import UserRow from './UserRow';

interface UserTableProps {
  users: any[]
  onSort: (key: string) => void
  sortConfig: { key: string; direction: string } | null
  onRowClick: (user: any) => void
}

const UserTable: React.FC<UserTableProps> = ({ users, onSort, sortConfig, onRowClick }) => {
  const getClassNamesFor = (key: string) => {
    if (!sortConfig) {
      return
    }

    return sortConfig.key === key ? sortConfig.direction : undefined
  }

  return (
    <div className="user-table">
      <table>
        <thead>
        <tr>
          <th onClick={() => onSort('firstName')}>
            ФИО {getClassNamesFor('firstName')}
          </th>
          <th onClick={() => onSort('age')}>
            Возраст {getClassNamesFor('age')}
          </th>
          <th onClick={() => onSort('gender')}>
            Пол {getClassNamesFor('gender')}
          </th>
          <th>Номер телефона</th>
          <th onClick={() => onSort('address')}>
            Адрес {getClassNamesFor('address')}
          </th>
        </tr>
        </thead>
        <tbody>
        {users.map(user => (
          <UserRow key={user.id} user={user} onRowClick={onRowClick}/>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable
