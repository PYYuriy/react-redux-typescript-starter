import { createElement, memo } from 'react'
import { Pagination as BootstrapPagination , PaginationItem as Item, PaginationLink as Link } from 'reactstrap'

const ItemLink = ({page, onPaginationChange }) => {
    const paginate = () => onPaginationChange(page)
    return <Item onClick={paginate}><Link>{page}</Link></Item>
}

const Pagination = ({pagination, onPaginationChange}) => {
    const paginationList =  new Array(pagination.totalPages).fill(null)
    return <BootstrapPagination size="lg" aria-label="Page navigation example">
        {paginationList.map((el, i) =>
            <ItemLink key={'pagination_' + i} onPaginationChange={onPaginationChange} page={i + 1}/>
        )}
    </BootstrapPagination>
}
export default memo(Pagination)
