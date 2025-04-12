// src/hooks/useImageGenerator.js
import { useState } from "react";
import { toast } from "react-hot-toast";
import { generateImages } from "../Projects/React-Image-Generation/utils/api.js";

export default function useImageGenerator() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const generate = async (params) => {
    setLoading(true);
    try {
      const generatedImages = await generateImages(params);
      setImages(generatedImages);
      toast.success("Images generated successfully!");
    } catch (error) {
      toast.error(error.message);
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  return { images, loading, generateImages: generate };
}
