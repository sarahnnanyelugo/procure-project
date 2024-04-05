import React, { useState } from "react";
import { chatsData } from "../../TestData";
import { Chats } from "./Chats";
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
              <Chats data={data} />
            ))}
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
      <PubNubProvider client={pubnub}>
        <Chat currentChannel="test-channel" theme="light">
          {/* Add components here */}
        </Chat>
      </PubNubProvider>
    </>
  );
};
