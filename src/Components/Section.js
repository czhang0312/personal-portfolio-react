import React from "react";

export default function Section(props) {
    return (
      <section>
        <h2>{props.name}</h2>
        <div className="section-content">{props.content}</div>
      </section>
    );
  }
