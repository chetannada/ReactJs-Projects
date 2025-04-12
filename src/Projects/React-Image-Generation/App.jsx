// src/App.jsx
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import useImageGenerator from "../../hooks/useImageGenerator.js";
import ControlsCard from "./components/ControlsCard";
import ResultsGrid from "./components/ResultsGrid";
import LoadingSpinner from "./components/LoadingSpinner";

const ReactImageGeneration = () => {
  const [prompt, setPrompt] = useState("");
  const [count, setCount] = useState(1);
  const [dimensions, setDimensions] = useState("512x512");
  const [provider, setProvider] = useState("flux");

  const { images, loading, generateImages } = useImageGenerator();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    await generateImages({
      prompt: `${prompt}, high quality, trending on art station`,
      count,
      dimensions,
      provider,
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <ControlsCard
          prompt={prompt}
          count={count}
          dimensions={dimensions}
          provider={provider}
          setPrompt={setPrompt}
          setCount={setCount}
          setDimensions={setDimensions}
          setProvider={setProvider}
          onSubmit={handleSubmit}
        />

        {loading ? <LoadingSpinner /> : <ResultsGrid images={images} />}

        <Toaster position="bottom-right" />
      </div>
    </div>
  );
};

export default ReactImageGeneration;
