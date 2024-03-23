import { getProductSubcategoryList } from '@/services/global_services';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import mobile from '../../assets/img/devices/PNG/Mobile.png'
import AC from '../../assets/img/devices/PNG/ACs.png'
import Laptops from '../../assets/img/devices/PNG/Laptops.png'
import Cameras from '../../assets/img/devices/PNG/Cameras.png'
import TVs from '../../assets/img/devices/PNG/TVs.png'
import phone from '../../assets/img/devices/PNG/phone.png'
import AllDevices from '../../assets/img/devices/PNG/AllDevices.png'
import APP_ROUTES from '@/pages/routes';


const getCategoryImage = (categoryId: number): string => {
    switch (categoryId) {
        case 1:
            return TVs.src;
        case 2:
            return mobile.src;
        case 3:
            return AllDevices.src;
        case 4:
            return Laptops.src;
        case 5:
            return AllDevices.src;
        case 6:
            return AC.src;
        case 7:
            return AllDevices.src;
        case 8:
            return Cameras.src;
        case 9:
            return phone.src;
        default:
            return '';
    }
};

const DeviceCategoryModal = ({ showModal, toggleModal }: { showModal: boolean, toggleModal: any }) => {

    const [categories, setCategories] = useState<any[]>([]);
    const router = useRouter();
    const [query, setQuery] = useState('');
    const [BranchName, setBranchName] = useState('')
    const [loading, setLoading] = useState(true);

    const onSearch = (query: string) => {
        setQuery(query);
    }

    const handleSearch = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        if (query.length > 0)
            router.push('/categories?q=' + query)
    }


    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await getProductSubcategoryList('');
            setCategories(response.data);
            // Assuming the API response has a `data` property containing the list of categories
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    useEffect(() => {
        const storedBranchName = sessionStorage.getItem('branchname');
        if (storedBranchName) {
            setBranchName(storedBranchName);
        }
    }, []);


    return (
        <Modal
            show={showModal}
            onHide={() => {
                toggleModal();
            }}
            className="modal fade"
            id="selectBrands"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >

            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Select Category</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={() => toggleModal()} // Call toggleModal directly
                        />
                    </div>
                    <div className="modal-body">
                        <div className="cate-container">
                            {/* <h2>Search your brand if not visible here</h2> */}
                            <div className="radio-buttons">
                                <label className="custom-radio">
                                    <input type="radio" name="radio" defaultChecked />

                                    {categories.map((category) => {
                                        return (
                                            <span key={category.id} className="radio-buttons">
                                                <Link href={`/productlist?subcategoryid=${category.subcategoryid}`} className="dropdown-item-links">
                                                    <span className="cate-icon">
                                                        <img
                                                            src={getCategoryImage(category.subcategoryid)}
                                                            width={48}
                                                            height={48}
                                                            alt={category.subcategoryname}
                                                        />
                                                    </span>
                                                    <div className="navText">
                                                        <h3>{category.subcategoryname}</h3>
                                                        <span>{category.subcategoryname}</span>
                                                    </div>
                                                </Link>
                                            </span>
                                        );
                                    })}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Modal>
    )
}

export default DeviceCategoryModal