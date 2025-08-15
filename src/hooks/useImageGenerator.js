import { useState } from "react";
import { toast } from "react-hot-toast";
import { generateImages } from "../features/image-generation/utils/api";

const useImageGenerator = () => {
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
};

export default useImageGenerator;
