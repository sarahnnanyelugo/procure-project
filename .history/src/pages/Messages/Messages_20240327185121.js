import React from "react";
import { chatsData } from "../../TestData";
import "./messages.scss";
export const Messages = () => {
  const [state, setState] = useState({
    query: "",
    list: chatsData,
  });
  return (
    <>
      <h2>Messages</h2>
      <div className="flexy messages-body">
        <div className="col-md-8" style={{ paddingRight: "20px" }}>
          <div>
            {" "}
            {state.list.map((data, index) => (
              <Recommended data={data} />
            ))}
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </>
  );
};
