import React from "react";
import styled from "styled-components";
import { FaSearch, FaTimes } from "react-icons/fa";
// import LoadingSpinner from "./LoadingSpinner";

export default function SearchBar({ search, placeholder, loading, setSearch }) {
  return (
    <SearchBarContainer>
      <SearchIcon />
      <Input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder={placeholder}
      />
      <SearchInputLoadingIndicator>
        {/* {loading && <LoadingSpinner />} */}
        {search && (
          <FaTimes
            className="clickable text-red"
            onClick={() => setSearch("")}
          />
        )}
      </SearchInputLoadingIndicator>
    </SearchBarContainer>
  );
}

const SearchBarContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 20px;
  ::placeholder {
    color: grey;
  }
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  font-style: italic;
  font-weight: 300;
  font-size: 15px;
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 20px;
  top: 20px;
  color: grey;
`;

const SearchInputLoadingIndicator = styled.div`
  position: absolute;
  color: black;
  right: 14px;
  top: 16px;
`;
