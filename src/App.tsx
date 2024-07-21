import React, {useEffect, useState} from 'react'
import UserTable from './components/UserTable';
import SearchInput from './components/SearchInput';
import {fetchUsers, searchUsers} from './api.ts'
import UserModal from '@components/UserModal.tsx'

const App = () => {
  const [users, setUsers] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: string } | null>(null);
  const [selectedUser, setSelectedUser] = useState<any | null>(null);

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    try {
      const usersData = await fetchUsers()
      setUsers(usersData)
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

  const handleSearch = async (term: string) => {
    if (term === '') {
      loadUsers()
      return
    }

    setSearchTerm(term)

    try {
      const usersData = await searchUsers(term)
      setUsers(usersData)
    } catch (error) {
      console.error('Error searching users:', error)
    }
  }

  const handleSort = (key: string) => {
    let direction = '▲'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === '▲') {
      direction = '▼'
    } else if (sortConfig && sortConfig.key === key && sortConfig.direction === '▼') {
      setSortConfig(null)
      return
    }
    setSortConfig({ key, direction })
  }

  const sortedUsers = React.useMemo(() => {
    let sortableUsers = [...users]
    if (sortConfig !== null) {
      sortableUsers.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === '▼' ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === '▲' ? 1 : -1
        }
        return 0
      })
    }

    return sortableUsers
  }, [users, sortConfig])

  const handleRowClick = (user: any) => {
    setSelectedUser(user)
  }

  const handleCloseModal = () => {
    setSelectedUser(null)
  }

  return (
    <div className="app-container">
      <SearchInput onSearch={handleSearch}/>
      <UserTable users={sortedUsers} onSort={handleSort} sortConfig={sortConfig} onRowClick={handleRowClick} />
      {selectedUser && <UserModal user={selectedUser} onClose={handleCloseModal} />}
    </div>
  )
}

export default App
