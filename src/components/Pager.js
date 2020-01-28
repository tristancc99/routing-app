import React from 'react';

function Pager(props) {
  const pages = Math.ceil(props.count / 50);

  let pagerMapping = [];
  for (let i = 0; i < pages; i++) {
    pagerMapping.push(<a href={`#view=users&idx=${i}`}>{i + 1}</a>);
  }

  return <div className="pagination">{pagerMapping}</div>;
}

export default Pager;
