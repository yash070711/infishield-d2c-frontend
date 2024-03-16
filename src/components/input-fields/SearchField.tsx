import React, { useState, useEffect, useRef } from 'react';
import { getProductSubcategoryList } from '@/services/global_services';
import { useRouter } from 'next/router';

interface SearchInputProps {
    onSearch: (searchTerm: string) => void
    
}

const SearchInputField: React.FC<SearchInputProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [dropdownOptions, setDropdownOptions] = useState<any[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const router=useRouter()
    const fetchDropdownOptions = async () => {
        try {
            const response = await getProductSubcategoryList(searchTerm);
            // Filter the options based on the search term
            const filteredOptions = response.data.filter((option: { subcategoryname: string; }) =>
                option.subcategoryname.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setDropdownOptions(filteredOptions);
            setIsDropdownOpen(true); // Open dropdown when options are fetched
        } catch (error) {
            console.error('Error fetching dropdown options:', error);
        }
    };

    useEffect(() => {
        if (searchTerm.trim() !== '') {
            fetchDropdownOptions();
        } else {
            setDropdownOptions([]);
            setIsDropdownOpen(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSelectOption = (option: any) => {
        setSearchTerm(option.subcategoryname);
        setIsDropdownOpen(false);
    };

    const handleInputFocus = () => {
        fetchDropdownOptions();
    };
 const handlebutton=()=>{
    router.push('/productlist')
 }
    return (
        <div className="input-group">
            <input
                type="text"
                placeholder="Search..."
                id="search"
                className="form-control"
                value={searchTerm}
                onChange={handleChange}
                onFocus={handleInputFocus}
                ref={inputRef}
                style={{ padding: '0.5rem', fontSize: '1rem' }}
            />
            {isDropdownOpen && (
                <div ref={dropdownRef} className="dropdown-menu" style={{ display: 'block', marginTop: '40px' }}>
                    {dropdownOptions.map(option => (
                        <button
                            key={option.subcategoryid}
                            className="dropdown-item"
                            onClick={() => {handleSelectOption(option),
                                handlebutton()}}
                        >
                            {option.subcategoryname}
                        </button>
                    ))}
                </div>
            )}
            <span className="input-group-append">
                <button className="btn btnSearch" type="button" onClick={handlebutton}>
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
