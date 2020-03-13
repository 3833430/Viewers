import React, { useState } from 'react';
import {
  Typography,
  ButtonGroup,
  Button,
  IconButton,
  Icon,
} from '../../../components/';

const StudyListPagination = props => {
  const [currentPage, setCurrentPage] = useState(1);

  const navigateToPage = page => {
    const toPage = page < 1 ? 1 : page;
    setCurrentPage(toPage);
  };

  return (
    <div className="bg-black py-10">
      <div className="container m-auto relative px-8">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="relative mr-3">
              <select
                defaultValue="25"
                className="block appearance-none w-full bg-transparent border border-custom-darkSlateBlue text-white text-base px-2 pr-4 rounded leading-tight focus:outline-none"
                style={{ height: 28 }}
              >
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <Icon
                  name="arrow-down"
                  className="text-white"
                  style={{ width: 6 }}
                />
              </div>
            </div>
            <Typography className="text-base opacity-60">
              Results per page
            </Typography>
          </div>
          <div className="">
            <div className="flex items-center">
              <Typography className="opacity-60 mr-4 text-base">
                Page {currentPage}
              </Typography>
              <ButtonGroup color="primary">
                <IconButton
                  size="small"
                  className="border-custom-darkSlateBlue px-4 py-2 text-base"
                  style={{ padding: '3px 12px', minWidth: 0 }}
                  color="white"
                  onClick={() => navigateToPage(1)}
                >
                  <>{`<<`}</>
                </IconButton>
                <Button
                  size="small"
                  className="border-custom-darkSlateBlue py-2 text-base"
                  style={{ padding: '3px 8px', minWidth: 0 }}
                  color="white"
                  onClick={() => navigateToPage(currentPage - 1)}
                >{`< Previous`}</Button>
                <Button
                  size="small"
                  className="border-custom-darkSlateBlue py-2 text-base"
                  style={{ padding: '3px 20px', minWidth: 0 }}
                  color="white"
                  onClick={() => navigateToPage(currentPage + 1)}
                >
                  {`Next >`}
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyListPagination;
