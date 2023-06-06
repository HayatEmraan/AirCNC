import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import { useSearchParams } from "react-router-dom";
import Heading from "../Heading/Heading";

const Room = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const holdParams = searchParams.get("category");
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch("rooms.json")
      .then((res) => res.json())
      .then((data) => {
        setRooms(
          (holdParams && data.filter((room) => room.category === holdParams)) ||
            data
        );
      });
  }, [holdParams]);
  console.log(rooms);
  return (
    <>
      {rooms ? (
        rooms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mb-4">
            {rooms.map((room, index) => (
              <Card room={room} key={index}></Card>
            ))}
          </div>
        ) : (
          <Heading title={"No Rooms Available In This Category"} subtitle={"Please Select Other Categories"} center={true}></Heading>
        )
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Room;
