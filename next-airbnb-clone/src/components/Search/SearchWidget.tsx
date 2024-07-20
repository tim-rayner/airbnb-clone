'use client';
import { useState } from 'react';
import Button from '../Button';

const SearchWidget = ({ expand = false }: { expand: boolean }) => {
  const [searchValue, setSearchValue] = useState('');
  // Step 1: Introduce a new state for managing the expanded state
  const [isExpanded, setIsExpanded] = useState(expand);
  const [currentStayFilter, setCurrentStayFilter] = useState('stays');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // Step 3: Add an onClick event handler to toggle the expanded state
  const toggleExpand = () => {
    if (!isExpanded) {
      setIsExpanded(!isExpanded);
    }
  };

  const changeCurrentStayFilter = (filter: string) => {
    setCurrentStayFilter(filter);
  };

  const expandedClass = isExpanded ? 'px-6' : 'px-4';

  return (
    <>
      {isExpanded && (
        <div className="conditional-div w-full content-center items-center pb-2 transition-all">
          {/* Content of the conditional div */}
          <div className="flex mx-auto w-fit">
            <div
              className={`mx-4 cursor-pointer ${
                currentStayFilter === 'stays' ? 'font-bold' : 'font-light'
              }`}
              onClick={() => changeCurrentStayFilter('stays')}
            >
              Stays{' '}
            </div>
            <div
              className={`mx-4 cursor-pointer ${
                currentStayFilter === 'experiences' ? 'font-bold' : 'font-light'
              }`}
              onClick={() => changeCurrentStayFilter('experiences')}
            >
              Experiences{' '}
            </div>
          </div>
        </div>
      )}

      <div
        className={`flex border rounded-3xl p-2 content-center cursor-pointer shadow-md hover:shadow-lg transition-shadow ${
          isExpanded ? 'expanded-class' : ''
        }`}
        onClick={toggleExpand}
      >
        <div
          className={`widget-location h-2/3 content-center border-r -border-r--linaria-theme_palette-foggy m-auto ${expandedClass}`}
        >
          <p> Anywhere </p>
        </div>
        <div
          className={`widget-date h-2/3 content-center border-r -border-r--linaria-theme_palette-foggy m-auto ${expandedClass}`}
        >
          <p> Any week </p>
        </div>
        <div
          className={`widget-guests h-2/3 content-center m-auto ${expandedClass} `}
        >
          <p> Add guests </p>
        </div>
        <Button iconOnly={true} icon="pi pi-search" rounded="full" size="sm" />
      </div>
    </>
  );
};

export default SearchWidget;
