"use client";
import getUsersQuery from "./services/getUsers";

export default function Home() {
  const query = getUsersQuery();

  !query.isLoading && console.log(query.data, "DATA");
  return <div></div>;
}
