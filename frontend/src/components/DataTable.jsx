import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Heading
} from '@chakra-ui/react'
import './DataTableStyles.css'
import { FiShoppingCart } from 'react-icons/fi'
function DataTable(props) {
    const book = props.book_data;
    return (
        <div className='table'>
            <Heading className='heading'>Chipest Book List</Heading>
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <Thead>
                        <Tr>
                            <Th>No</Th>
                            <Th>Book Name</Th>
                            <Th>Book Price</Th>
                            <Th>Purchase Link </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            book.map((data, count) => {
                                return (
                                    <Tr>
                                        <Td>{count+1}</Td>
                                        <Td>{data['book_name']}</Td>
                                        <Td>{data['price']}</Td>
                                        <Td><a href={data['href']} target='_blank'><FiShoppingCart size={20}/></a></Td>
                                    </Tr>
                                )
                            })
                        }
                    </Tbody>

                </Table>
            </TableContainer>
        </div>
    )
}

export default DataTable