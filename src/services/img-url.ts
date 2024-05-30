const getCroppedImageUrl = (url: string) => {
  if (!url) return "";

  const target = "media/";
  const width = 600;
  const height = 400;

  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + `crop/${width}/${height}/` + url.slice(index);
};

export default getCroppedImageUrl;
