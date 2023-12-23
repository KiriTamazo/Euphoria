/* eslint-disable no-unused-vars */
import { useMemo } from 'react'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './ui/pagination'

const Paginator = ({links,currentPage}) => {
    console.log(links)
    const checkLabel = ( label,name) =>{
        return label.includes(name)
    }
    const getVisibleLinks = () => {
        const maxVisibleLinks = 5;
        const visibleLinks = links.filter((link) => !checkLabel(link.label, 'Previous') && !checkLabel(link.label, 'Next'));
        return visibleLinks.slice(0, maxVisibleLinks);
    };
    
    const hasEllipsis = useMemo(() => {
        console.log('here');
        return links.length > getVisibleLinks().length;
    },[getVisibleLinks]);
    console.log(hasEllipsis);    
    return (
        <Pagination>
            <PaginationContent>
                {links?.map((link, i) => {
                    if (i < 3) {
                        // Render the first three links and the last three links
                        return (
                            <PaginationItem key={i}>
                                {checkLabel(link.label, 'Previous') && (
                                    <PaginationPrevious href={link?.url} />
                                )}
                                {checkLabel(link.label, 'Next') && (
                                    <PaginationNext href={link?.url} />
                                )}
                                {!checkLabel(link.label, 'Previous') &&
                  !checkLabel(link.label, 'Next') && (
                                    <PaginationLink href="#">{link.label}</PaginationLink>
                                )}
                            </PaginationItem>
                        );
                    }

                    {  hasEllipsis ? (
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                    ) : null; }
                    if( i >= links.length - 3){
                        return (
                            <PaginationItem key={i}>
                                {checkLabel(link.label, 'Previous') && (
                                    <PaginationPrevious href={link?.url} />
                                )}
                                {checkLabel(link.label, 'Next') && (
                                    <PaginationNext href={link?.url} />
                                )}
                                {!checkLabel(link.label, 'Previous') &&
                  !checkLabel(link.label, 'Next') && (
                                    <PaginationLink href="#">{link.label}</PaginationLink>
                                )}
                            </PaginationItem>
                        );
                    }
                })}

                {/* {hasEllipsis && (
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                )} */}
            </PaginationContent>
        </Pagination>

    )
}
export default Paginator