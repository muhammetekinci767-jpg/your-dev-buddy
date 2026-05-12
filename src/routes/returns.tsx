import { createFileRoute } from "@tanstack/react-router";
import InfoPage from "@/components/InfoPage";

export const Route = createFileRoute("/returns")({
  component: () => <InfoPage titleKey="footer.links.returns" bodyKey="info.returns" />,
});
