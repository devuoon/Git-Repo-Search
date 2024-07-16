// src/App.js
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { FaGithubAlt } from "react-icons/fa";
import SearchBar from './components/SearchBar';
import UserRepository from './components/UserRepository'; // ensure the correct import
import * as Styled from './pageStyled';

const App = () => {
    const [query, setQuery] = useState('');

    const handleSearch = (query) => {
        setQuery(query);
    };

    return (
        <Container className="d-flex align-items-center flex-column">
            <Styled.H1><FaGithubAlt /></Styled.H1>
            <SearchBar onSearch={handleSearch} />
            {query && <UserRepository query={query} />}
        </Container>
    );
};

export default App;