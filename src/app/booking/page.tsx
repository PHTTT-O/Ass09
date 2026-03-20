import { getServerSession } from "next-auth";
import  getUserProfile  from "@/libs/getUserProfile";

import { TextField, Select, MenuItem, Button, FormControl, InputLabel } from "@mui/material";
import DateReserve from "@/components/DateReserve";

export default async function BookingPage() {

  const session = await getServerSession();

  let profile = null;

  if (session?.user?.token) {
    const data = await getUserProfile(session.user.token);
    profile = data.data;
  }

  return (
    <main className="p-10">

      {/* 🔥 แสดง user profile */}
      {profile && (
        <div className="mb-6 p-4 border">
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <p>Tel: {profile.tel}</p>
          <p>Member Since: {profile.createdAt}</p>
        </div>
      )}

      <h1 className="text-3xl font-bold mb-6">
        Venue Booking
      </h1>

      <form className="flex flex-col gap-6 w-96">

        <TextField
          variant="standard"
          name="Name-Lastname"
          label="Name-Lastname"
        />

        <TextField
          variant="standard"
          name="Contact-Number"
          label="Contact-Number"
        />

        <FormControl variant="standard">
          <InputLabel id="venue-label">Venue</InputLabel>

          <Select
            id="venue"
            labelId="venue-label"
            defaultValue=""
          >
            <MenuItem value="Bloom">
              The Bloom Pavilion
            </MenuItem>

            <MenuItem value="Spark">
              Spark Space
            </MenuItem>

            <MenuItem value="GrandTable">
              The Grand Table
            </MenuItem>
          </Select>
        </FormControl>

        <DateReserve />

        <Button variant="contained">
          Book Venue
        </Button>

      </form>

    </main>
  );
}