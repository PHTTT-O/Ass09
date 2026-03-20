
import { VenueItem } from "../../interface";

export default async function getVenue(id: string): Promise<{ data: VenueItem }> {

  const response = await fetch(
    `https://a08-venue-explorer-backend.vercel.app/api/v1/venues/${id}`
  );

  const data = await response.json() as { data: VenueItem };

  return data;
}