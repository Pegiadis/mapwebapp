import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import LeftSidebar from '../Layout/Sidebars/LeftSidebar';

// Throttle function to limit the rate at which a function is executed
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function() {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

const Chartography = ({ filter, onFilterChange }) => {
  const [data, setData] = useState([]);
  const [dataGridHeight, setDataGridHeight] = useState(200);
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/mosquito_vision_data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, [filter]);

  const columns = React.useMemo(
      () => [
        { Header: 'ID', accessor: 'id' },
        { Header: 'A1', accessor: 'a1' },
        { Header: 'B1', accessor: 'b1' },
        { Header: 'Latitude', accessor: 'lat' },
        { Header: 'Longitude', accessor: 'lon' },
      ],
      []
  );

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  const centerPosition = [40.6401, 22.9444];

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  // Wrapped our handleMouseMove with the throttle function
  const handleMouseMove = throttle((e) => {
    if (isResizing) {
      const newHeight = window.innerHeight - e.clientY;
      setDataGridHeight(newHeight);
    }
  }, 100);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, handleMouseMove]);

  return (
      <div className="flex h-full bg-gray-100">
        <div className="border-r border-gray-300">
          <LeftSidebar onFilterChange={onFilterChange} />
        </div>

        <div className="flex flex-col flex-grow border-l border-gray-300">
          <div className="flex-grow relative" style={{ height: '500px' }}>
            <MapContainer center={centerPosition} zoom={12} className="h-full w-full">
              <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
            </MapContainer>
          </div>

          <div className="bg-gray-700 p-4 border-t border-gray-300 overflow-auto" style={{ height: `${dataGridHeight}px` }}>
            <h2 className="text-white text-lg mb-4">Data Results</h2>
            <div onMouseDown={handleMouseDown} className="cursor-row-resize bg-gray-600 text-gray-200 text-center">
              Drag to resize
            </div>
            <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
              {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {column.render('Header')}
                        </th>
                    ))}
                  </tr>
              ))}
              </thead>
              <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
              {rows.map(row => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map(cell => (
                          <td {...cell.getCellProps()} className="px-6 py-4 whitespace-nowrap">
                            {cell.render('Cell')}
                          </td>
                      ))}
                    </tr>
                );
              })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
};

export default Chartography;
