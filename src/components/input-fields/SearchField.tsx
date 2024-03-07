import React, { useState, useEffect } from 'react';

interface SearchInputProps {
    onSearch: (searchTerm: string) => void;
}

const SearchInputField: React.FC<SearchInputProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            onSearch(searchTerm);
        }, 500); // Adjust the debounce timeout as needed

        return () => clearTimeout(debounceTimeout);
    }, [searchTerm, onSearch]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="input-group">
        <input
            type="text"
            placeholder="Search..."
            id="search"
            className="form-control"
            value={searchTerm}
            onChange={handleChange}
            style={{ padding: '0.5rem', fontSize: '1rem' }}
        />
        <span className="input-group-append">
            <button className="btn btnSearch" type="button">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-search"
                >
                    <circle cx={11} cy={11} r={8} />
                    <line x1={21} y1={21} x2="16.65" y2="16.65" />
                </svg>
            </button>
        </span>
    </div>
    );
};

export default SearchInputField;