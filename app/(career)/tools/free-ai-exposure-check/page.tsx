import type { Metadata } from "next";
import Navbar from "@/components/career/Navbar";
import Footer from "@/components/career/Footer";
import FreeAiExposureCheck from "@/components/career/FreeAiExposureCheck";

export const metadata: Metadata = {
  title: "Free AI Exposure Check | Think Sriram",
  description: "Answer six quick questions to get a directional AI exposure score and practical next-step options matched to your role.",
};

export default function FreeAiExposureCheckPage() {
  return (
    <div className="font-body min-h-screen bg-white text-[#0a1628]">
      <Navbar />
      <div id="main-content">
        <FreeAiExposureCheck />
      </div>
      <Footer />
    </div>
  );
}
