import { createFileRoute } from "@tanstack/react-router";
import InfoPage from "@/components/InfoPage";

export const Route = createFileRoute("/size-guide")({
  component: () => <InfoPage titleKey="footer.links.sizeGuide" bodyKey="info.sizeGuide" />,
});
