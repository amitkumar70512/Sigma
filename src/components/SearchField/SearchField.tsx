// SearchField.tsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import Loader from './Loader'; // Import your Loader component
// import Button from './Button'; // Import your Button component
import Spinner from '../plugins/Spinner/Spinner'; // Import your Spinner component

const SearchContainer = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  padding: 20px;
  font-size: 20px;

  width: 30%; // Use 100% width to expand to the full width of the container
  border: none;
  border-bottom: 1px solid #023240;
  outline: none;
  background: transparent;
  transition: border-bottom 0.2s;

  &:focus {
    border-bottom: 3px solid #023240;
  }
`;


const ResponseContainer = styled.div<{ showResponse: boolean }>`
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 5px 5px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: ${({ showResponse }) => (showResponse ? 'block' : 'none')};
`;

const SearchField: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showResponse, setShowResponse] = useState(false);

    useEffect(() => {
        // Simulating an API call or any asynchronous operation
        const timer = setTimeout(() => {
            setShowResponse(searchTerm.length > 0);
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [searchTerm]);

    const getSearchResults = () => {
        // Check the search term and return the corresponding components
        switch (searchTerm.toLowerCase()) {
            case 'loader':
                return <Spinner />;
            case 'button':
                return <Spinner />;
            case 'spinner':
                return <Spinner />;
            default:
                return null;
        }
    };

    return (
        <>
            <SearchContainer>
                <SearchInput
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </SearchContainer>
            <ResponseContainer showResponse={showResponse}>{getSearchResults()}</ResponseContainer>
        </>
    );
};

export default SearchField;
