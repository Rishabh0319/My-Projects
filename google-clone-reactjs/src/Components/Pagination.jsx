import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";

import Logo from "../assets/google-pagination-logo.png";
import { pagination } from "../utils/Constants";

const Pagination = ({ queries }) => {
    const { query } = useParams();
    const [page, setPage] = useState(pagination[0].startIndex);
    const navigate = useNavigate();

    useEffect(() => {
        setPage(pagination[0].startIndex);
    }, [query]);

    const paginationClickHandler = (startIndex) => {
        setPage(startIndex);
        navigate(`/${query}/${startIndex}`);
    };

    // Check if queries is defined and has the required properties
    const hasPreviousPage = queries?.previousPage?.[0]?.startIndex;
    const hasNextPage = queries?.nextPage?.[0]?.startIndex;

    return (
        <div className="flex flex-col items-center py-14 max-w-[700px] pagination-cont">
            <div className="relative text-[#4285f4] inner-pagination-div">
                {hasPreviousPage && (
                    <div
                        className="absolute left-[-30px] md:left-[-40px] top-[10px]"
                        onClick={() =>
                            paginationClickHandler(queries.previousPage[0].startIndex)
                        }
                    >
                        <FiChevronLeft size={20} className="cursor-pointer nextprev" />
                        <span className="cursor-pointer absolute left-[-5px] top-[30px] hidden md:block nextprev">
                            Prev
                        </span>
                    </div>
                )}
                <img className="w-[250px] md:w-[300px] pagination-img" src={Logo} alt="Logo" />
                {hasNextPage && (
                    <div
                        className="absolute right-[-30px] md:right-[-40px] top-[10px]"
                        onClick={() =>
                            paginationClickHandler(queries.nextPage[0].startIndex)
                        }
                    >
                        <FiChevronRight size={20} className="cursor-pointer nextprev" />
                        <span className="cursor-pointer absolute left-[-5px] top-[30px] hidden md:block nextprev">
                            Next
                        </span>
                    </div>
                )}
            </div>
            <div className="flex gap-3 text-[#4285f4] text-sm pagination-numbs">
                {pagination.map((p) => (
                    <span
                        key={p.page}
                        onClick={() => paginationClickHandler(p.startIndex)}
                        className={`cursor-pointer ${page === p.startIndex ? "text-black" : ""
                            }`}
                    >
                        {p.page}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Pagination;
