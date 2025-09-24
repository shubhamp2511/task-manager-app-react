import React from 'react';

const FilterButtons = React.memo(({ filter, setFilter }) => (
  <div className="filters">
    {['all', 'completed', 'pending'].map(f => (
      <button
        key={f}
        onClick={() => setFilter(f)}
        className={filter === f ? 'active' : ''}
      >
        {f.charAt(0).toUpperCase() + f.slice(1)}
      </button>
    ))}
  </div>
));

export default FilterButtons;
