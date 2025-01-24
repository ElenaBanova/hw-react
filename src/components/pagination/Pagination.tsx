import {useSearchParams} from "react-router";

const Pagination = () => {

    const [searchParams, setSearchParams] = useSearchParams({page: '1'});
    let currentPage = +(searchParams.get('page') || '1');

    return (
        <div>
            <button className='mr-2 w-24 font-bold text-2xl border-4 border-amber-100 bg-blue-300' onClick={() => {
                setSearchParams({page: (--currentPage).toString()})
            }}>
                prev
            </button>
            <button className='w-24 font-bold text-2xl border-4 border-amber-100 bg-blue-300' onClick={() => {
                setSearchParams({page: (++currentPage).toString()})
            }}>
                next
            </button>

</div>
    );
};

export default Pagination;