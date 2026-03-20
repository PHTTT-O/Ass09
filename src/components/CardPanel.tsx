"use client"

import Card from "./Card";
import { useReducer } from "react";
import Link from "next/link";

const venues = [
  { vid: "001", name: "The Bloom Pavilion", img: "/img/bloom.jpg" },
  { vid: "002", name: "Spark Space", img: "/img/sparkspace.jpg" },
  { vid: "003", name: "The Grand Table", img: "/img/grandtable.jpg" }
];

function ratingReducer(state: Map<string, number>, action: any) {
  const newState = new Map(state);

  switch (action.type) {
    case "rate":
      newState.set(action.venue, action.rating);
      return newState;

    case "remove":
      newState.delete(action.venue);
      return newState;

    default:
      return state;
  }
}

export default function CardPanel() {

  const initialState = new Map<string, number>([
    ["The Bloom Pavilion", 0],
    ["Spark Space", 0],
    ["The Grand Table", 0]
  ]);

  const [ratingMap, dispatch] = useReducer(ratingReducer, initialState);

  return (
    <div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {venues.map((v) => (
          <Link key={v.vid} href={`/venue/${v.vid}`}>

            <Card
              imgSrc={v.img}
              venueName={v.name}
              rating={ratingMap.get(v.name) ?? 0}
              onRatingChange={(rating:number)=>{
                dispatch({type:"rate",venue:v.name,rating})
              }}
            />

          </Link>
        ))}
      </div>

      <div style={{marginTop:"20px"}}>
        {Array.from(ratingMap.entries()).map(([venue, rating]) => (
          <div
            key={venue}
            data-testid={venue}
            onClick={()=>dispatch({type:"remove",venue})}
          >
            {venue} Rating : {rating}
          </div>
        ))}
      </div>

    </div>
  );
}