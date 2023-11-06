export const DisplayFiles = ({ files }) => {
  return <>{files.length > 0 && `Files: ${files.map(file => file.name).join(", ")}`}</>;
};
