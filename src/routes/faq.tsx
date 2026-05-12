import { createFileRoute } from "@tanstack/react-router";
import InfoPage from "@/components/InfoPage";

export const Route = createFileRoute("/faq")({
  component: () => <InfoPage titleKey="footer.links.faq" bodyKey="info.faq" />,
});
