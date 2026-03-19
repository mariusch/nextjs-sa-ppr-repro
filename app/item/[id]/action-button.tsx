"use client";

import { useTransition } from "react";
import { updateItem } from "./actions";

export function ActionButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          const result = await updateItem();
          console.log("Result:", result);
        });
      }}
    >
      {isPending ? "Updating..." : "Update Item"}
    </button>
  );
}
