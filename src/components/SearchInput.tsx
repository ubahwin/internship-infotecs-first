import React, { useState } from 'react'

interface SearchInputProps {
  onSearch: (term: string) => void
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('')
  const [isButtonSearch, setIsButtonSearch] = useState(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    setIsButtonSearch(value !== '')

    setInputValue(value)
  }

  const handleSearch = () => {
    onSearch(inputValue)
  }

  return (
    <div className="search-input">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>{isButtonSearch ? 'Search' : 'Refresh'}</button>
    </div>
  )
}

export default SearchInput
