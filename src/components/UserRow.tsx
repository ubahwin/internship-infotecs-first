import React from 'react'

interface UserRowProps {
  user: any
  onRowClick: (user: any) => void
}

const UserRow: React.FC<UserRowProps> = ({ user, onRowClick }) => {
  return (
    <tr onClick={() => onRowClick(user)}>
      <td>{`${user.firstName} ${user.lastName}`}</td>
      <td>{user.age}</td>
      <td>{user.gender}</td>
      <td>{user.phone}</td>
      <td>{`${user.address.city}, ${user.address.street}`}</td>
    </tr>
  )
}

export default UserRow
