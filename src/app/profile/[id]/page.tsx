import React from "react";

export default async function page({ params }: any) {
  const { id } = await params;
  return <div>Profle page {id}</div>;
}
