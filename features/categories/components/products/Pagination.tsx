import { Dispatch, SetStateAction } from "react";

type PaginationProps = {
    page: number;
    setPage: Dispatch<SetStateAction<number>>
    totalPages: number;
}

const Pagination = ({ page, setPage, totalPages }: PaginationProps) => {
    return (
        <div className="flex flex-row items-center text-white justify-center gap-5">
            <button className="pagination-link" onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>
                Prev
            </button>
            <span className="text-yellow-500 text-2xl">{page}<span className="text-white/30 text-sm"> /{totalPages}</span></span>
            <button className="pagination-link"
                onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                disabled={page === totalPages}
            >
                Next
            </button>
        </div>
    )
};

export default Pagination;