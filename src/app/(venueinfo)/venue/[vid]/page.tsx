import getVenue from "@/libs/getVenue";

export default async function VenueDetail({
  params
}:{
  params: Promise<{ vid: string }>
}){

  const { vid } = await params

  const venueJson = await getVenue(vid)
  const venue = venueJson.data

  return(
    <div>

      <img
        src={venue.picture}
        alt="venue"
      />

      <h1>{venue.name}</h1>

      <p>{venue.address}</p>
      <p>{venue.province}</p>
      <p>{venue.postalcode}</p>
      <p>{venue.tel}</p>
      <p>{venue.dailyrate} Baht</p>

    </div>
  )
}