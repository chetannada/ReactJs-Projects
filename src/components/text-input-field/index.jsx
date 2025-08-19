const TextInputField = ({ field, error, placeholder, ...rest }) => (
  <>
    <input
      {...field}
      {...rest}
      type="text"
      placeholder={placeholder}
      autoComplete="off"
      className={`w-full px-4 py-2 border rounded-md text-sm ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
  </>
);

export default TextInputField;
