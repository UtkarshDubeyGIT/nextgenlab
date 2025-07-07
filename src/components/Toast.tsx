"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function Sonner(messageText: string, actionText: string) {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast(messageText, {
          description: ""
        //   action: {
        //     label: actionText,
        //     onClick: () => console.log("Undo"),
        //   },
        })
      }
    >
      Show Toast
    </Button>
  );
}
