import React from "react";

function Pager(props) {
  return (
    <div className="pagination">
      {() => {
        while (p < Math.ceil(props.count / 50)) {
          <a></a>;
        }
      }}
    </div>
  );
}

export default Pager;
