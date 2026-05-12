import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSplit from "@/components/HeroSplit";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroSplit />
      </main>
      <Footer />
    </div>
  );
}
