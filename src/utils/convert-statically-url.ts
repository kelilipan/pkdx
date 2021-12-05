const convertStatically = (url: string) => {
  const TEMPLATE = {
    input:
      "https?:\\/\\/raw\\.github(?:usercontent)?\\.com\\/([^\\/]+)\\/([^\\/]+)\\/([^\\/]+)\\/([^?&#]+)",
    output: "https://cdn.statically.io/gh/$1/$2/$3/$4",
  };
  let r = new RegExp("^" + TEMPLATE.input + "$");
  return url.replace(r, TEMPLATE.output);
};

export { convertStatically };
