import React from "react";
import { VscCheckAll } from "react-icons/vsc";

export default function header({ className, click, value }) {
  return (
    <header className={`between ${className || ""}`}>
      <div className="card-title">
        Notifications <div className="badge">{value}</div>
      </div>
      <div className="mark-read" onClick={click}>
        <VscCheckAll className="inline-block mr-1" /> Mark all as read
      </div>
    </header>
  );
}
