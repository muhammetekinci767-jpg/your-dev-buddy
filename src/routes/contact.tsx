import { createFileRoute } from "@tanstack/react-router";
import InfoPage from "@/components/InfoPage";

export const Route = createFileRoute("/contact")({
  component: () => <InfoPage titleKey="footer.links.contact" bodyKey="info.contact" />,
});
