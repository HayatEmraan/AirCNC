import React from "react";
import Calender from "../Calender/Calender";
import Button from "../Button/Button";
import { TbH1 } from "react-icons/tb";

const Details = () => {
  return (
    <div className="col-span-4 flex flex-col gap-8 mt-12">
      <div>
        <h1 className="text-3xl font-bold">Veluvana Bali - Owl Bamboo House</h1>
        <h1 className="text-lg text-slate-500">Sidemen, Indonesia</h1>
      </div>
      <div>
        <img
          className="rounded-xl w-full md:h-[60vh]"
          src="https://images.unsplash.com/photo-1682686581220-689c34afb6ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2">
        <div
          className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          "
        >
          <div>Hosted by Veluvana</div>

          <img
            className="rounded-full"
            height="30"
            width="30"
            alt="Avatar"
            src="https://a0.muscache.com/im/pictures/user/bb9ba580-9b3b-4402-ac92-3976abe1a178.jpg"
          />
        </div>
        <div
          className="
            flex 
            flex-row 
            items-center 
            gap-4 
            font-light
            text-neutral-500
          "
        >
          <div>5 guests</div>
          <div>3 rooms</div>
          <div>2 bathrooms</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-7 gap-8">
        <div className="col-span-5">
          <hr />
          <div
            className="
      text-lg font-light text-neutral-500"
          >
            Veluvana is a unique bamboo house with a wonderful view of Sidemen
            Valley, a genuine tropical landscape with Mount Agung peak on its
            back. This getaway spot is a great place to bring into reality the
            dream adventure of the true wanderer. We invite you to feel the
            magnificent vibes of the entire house to escape the life that is
            full of drama into a journey with ultimate joy.
          </div>
          <hr />
        </div>
        <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden col-span-2">
          <div className="flex flex-row items-center gap-1 p-4">
            <div className="text-2xl font-bold">$ 200</div>
            <div className="font-light text-neutral-600 font-semibold">
              night
            </div>
          </div>
          <hr />
          <Calender />
          <hr />
          <div className="p-4">
            <Button label="Reserve" />
          </div>
          <hr />
          <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
            <h1 className="font-bold text-2xl">Total</h1>
            <h1 className="font-bold text-2xl">$ 300</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
