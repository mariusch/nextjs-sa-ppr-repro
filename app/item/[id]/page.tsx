import { Suspense } from "react";
import { ActionButton } from "./action-button";

export default function ItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <ItemContent params={params} />
      </Suspense>
    </div>
  );
}

async function ItemContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <>
      <h1>Item {id}</h1>
      <ActionButton />
    </>
  );
}
