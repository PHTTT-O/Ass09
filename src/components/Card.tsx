"use client"

import styles from "./card.module.css";
import InteractiveCard from "./InteractiveCard";
import Rating from "@mui/material/Rating";

export default function Card({
  imgSrc,
  venueName,
  rating,
  onRatingChange
}:{
  imgSrc?: string,
  venueName?: string,
  rating:number,
  onRatingChange:(rating:number)=>void
}) {

  return (
    <InteractiveCard>
      <img src={imgSrc} alt="venue" />

      <div className={styles.cardBody}>
        <h2>{venueName}</h2>

        <Rating
          value={rating}
          onChange={(e,newValue)=>{
            onRatingChange(newValue ?? 0)
          }}
          id={`${venueName} Rating`}
          name={`${venueName} Rating`}
          data-testid={`${venueName} Rating`}
        />

      </div>
    </InteractiveCard>
  );
}