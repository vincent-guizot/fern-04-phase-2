import React from "react";

function ContentCard({ content }) {
  const { id, title, description, image } = content;
  return (
    <div
      key={id}
      className="w-full shadow transition ease-in-out hover:scale-105"
    >
      <div className="w-full">
        <img src={image} alt="" />
      </div>
      <div className="p-3">
        <p className="text-cyan-700 text-xl font-medium">{title}</p>
        <p className="line-clamp-2">{description}</p>
      </div>
    </div>
  );
}

export default ContentCard;
