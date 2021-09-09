import React from "react";
import ReactDOM from "react-dom";
import UserSearch from "./UserSearch";

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
