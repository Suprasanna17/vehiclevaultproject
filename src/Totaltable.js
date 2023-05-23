import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Table, Pagination } from 'react-bootstrap';

function Totaltable() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  let api = "http://localhost:5004/logindata";
  useEffect(() => {
    axios.get(api).then((response) => {
        console.log(response.data)
        setData(response.data);            
    });
  }, []);
  const renderTable = () => {
    return (
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item,i) => (
            <tr>
              <td>{i+1}</td>
              <td>{item.username}</td>
              <td>{item.password}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  const renderPagination = () => {
    return (
      <Pagination>
        {pageNumbers.map((number) => (
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </Pagination.Item>
        ))}
      </Pagination>
    );
  };

  return (
    <div>
      <h1>Student Data</h1>
      {renderTable()}
      {renderPagination()}
    </div>
  );
}

export default Totaltable;