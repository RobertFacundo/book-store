import { Dispatch, SetStateAction } from "react";

type PaginationProps = {
    page: number;
    setPage: Dispatch<SetStateAction<number>>
}

const Pagination = ({ page, setPage }: PaginationProps) => {
    return (
        <div className="flex flex-row items-center text-white justify-center gap-5">
            <button className="pagination-link" onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>
                Prev
            </button>
            <span className="text-yellow-500 text-3xl">{page}</span>
            <button className="pagination-link" onClick={() => setPage((p) => p + 1)}>
                Next
            </button>
        </div>
    )
};

export default Pagination;