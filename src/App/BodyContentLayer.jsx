const BodyContentLayer = ({ children }) => {
  return (
    <main className="min-h-[calc(100vh-2.5rem)] mob:min-h-[calc(100vh-2rem)] mx-8 mob:mx-4 pt-24 pb-4">
      {children}
    </main>
  );
};

export default BodyContentLayer;
