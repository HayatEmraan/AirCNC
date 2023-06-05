import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";

const Room = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch("rooms.json")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);
  return (
    <>
      {rooms ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mb-4">
          {rooms.map((room, index) => (
            <Card room={room} key={index}></Card>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Room;
