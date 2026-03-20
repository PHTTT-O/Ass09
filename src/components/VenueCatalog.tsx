"use client";
import { VenueJson, VenueItem } from "../../interface";
import Card from "./Card";
import Link from "next/link";

type Props = {
  venuesJson: VenueJson; // เปลี่ยนจาก Promise<VenueJson> เป็น VenueJson
};

export default function VenueCatalog({ venuesJson }: Props) {
  return (
    <div className="flex flex-row flex-wrap justify-around">
      {venuesJson.data.slice(0, 3).map((venueItem) => (
        <Link href={`/venue/${venueItem._id}`} key={venueItem._id}>
          <Card
            venueName={venueItem.name}
            imgSrc={venueItem.picture}
            rating={0}
            onRatingChange={() => {}}
          />
        </Link>
      ))}
    </div>
  );
}
