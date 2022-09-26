import * as React from "react";

type List = {
  name?: string;
  list: string[];
};

const List = (props: List) => {
  const { list } = props;
  const listItems = list.map((item) => <li key={item}>{item}</li>);
  return (
    <>
      <div className="details">
        <ul className="servicesList">{listItems}</ul>
      </div>
    </>
  );
};

export default List;
