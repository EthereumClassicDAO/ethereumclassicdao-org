import { permanentRedirect } from "next/navigation";

// The Olympia rollout is part of the Olympia page now.
export default function TimelinePage() {
  permanentRedirect("/olympia#activation");
}
