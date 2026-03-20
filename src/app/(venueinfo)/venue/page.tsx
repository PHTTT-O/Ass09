import getVenues from "@/libs/getVenues";
import VenueCatalog from "@/components/VenueCatalog";

export default async function VenuePage() {

  const venues = await getVenues();

  return (
    <main>

      <h1 className="text-xl font-bold">
        Venue Catalog
      </h1>

      <VenueCatalog venuesJson={venues} />

    </main>
  );
}