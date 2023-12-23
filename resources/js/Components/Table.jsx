/* eslint-disable no-unused-vars */
import Paginator from './Paginator'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'

const Index = ({datas,columns,renderItem,showPagination=true}) => {
    console.log(datas)
    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        {columns.map((column, index) => (
                            <TableHead key={index} className={column.className}>
                                {column.label}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {datas?.data ? 
                        datas.data.map((data, index) => (
                            <TableRow key={data?.id}>
                                {renderItem(data,index)}
                            </TableRow>
                        )) : 
                        <TableRow key={datas?.id}>
                            {renderItem(datas)}
                        </TableRow>
                    }
                    {
                        (datas?.data?.length === 0) && 
                            <tr className='text-center '>
                                <td className='py-8 px-2 bg-slate-50' colSpan={columns.length}>
                                No Table Data
                                </td>
                            </tr>
                    }
                </TableBody>
           
            </Table>
            {
                ((showPagination && datas?.links?.length >= 3))  &&
    <Paginator links={datas.links} currentPage={datas.current_page} />
            }
        </>
    )
}
export default Index