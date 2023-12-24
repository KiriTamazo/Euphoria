import { router } from '@inertiajs/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { memo } from 'react';
import ReactPaginate from 'react-paginate';

const Paginator = ({  pageCount,datas }) => {
    const handlePageChange = (e) =>{
        router.get(datas?.links[e.selected + 1]?.url)
    }
    const hrefBuilder = (page) =>datas?.links[page ]?.url
    return (
        <ReactPaginate
            onPageChange={handlePageChange}
            disableInitialCallback={true}
            pageCount={pageCount}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            previousLabel={<ChevronLeft className='w-5 h-5' />}
            nextLabel={<ChevronRight className='w-5 h-5' />}
            hrefBuilder={hrefBuilder}
            containerClassName="mx-4 min-w-[500px] w-fit flex justify-center gap-2"
            activeClassName="bg-primary"
            previousLinkClassName="page-link "
            nextLinkClassName="page-link "
            disabledClassName="disabled"
            breakClassName=" min-w-[20px] flex justify-center"
            pageClassName="page_item"
            previousClassName={`page_item flex [&>a]:!px-2 ${datas?.prev_page_url ? '': 'hidden'}`}
            nextClassName={`page_item flex [&>a]:!px-2 ${datas?.next_page_url ? '': 'hidden'}`}
            breakLinkClassName="break-link"
            activeLinkClassName="text-white"
            initialPage={datas?.current_page - 1}
        />
    );
};
  
export default memo(Paginator);
  