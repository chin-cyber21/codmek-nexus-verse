import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Studio3D from "@/components/Studio3D";
import HUD from "@/components/HUD";
import ChatModal from "@/components/ChatModal";
import PodOverlay from "@/components/PodOverlay";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedPod, setSelectedPod] = useState<string | null>(null);
  const [hoveredPod, setHoveredPod] = useState<string | null>(null);

  const handlePodClick = (podName: string) => {
    if (podName === "Reception") {
      setIsChatOpen(true);
    } else {
      setSelectedPod(podName);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* 3D Scene */}
          <Studio3D onPodClick={handlePodClick} />

          {/* HUD Overlay */}
          <HUD onChatClick={() => setIsChatOpen(true)} hoveredPod={hoveredPod} />

          {/* Chat Modal */}
          <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

          {/* Pod Info Overlay */}
          <PodOverlay podName={selectedPod} onClose={() => setSelectedPod(null)} />
        </>
      )}
    </div>
  );
};

export default Index;
