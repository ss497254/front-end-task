const urls = [
  "https://www.youtube.com/embed/BddP6PYo2gs",
  "https://www.youtube.com/embed/fzOPc-VtcTE",
  "https://www.youtube.com/embed/-pSnTtTkdNA",
  "https://www.youtube.com/embed/yGNW5NuD0qM",
  "https://www.youtube.com/embed/WZEdTAuCFQE",
  "https://www.youtube.com/embed/PD9ofg0Dpks",
  "https://www.youtube.com/embed/fPO76Jlnz6c",
  "https://www.youtube.com/embed/nxdwznysRB4",
  "https://www.youtube.com/embed/ML2qY9g1Vcg",
  "https://www.youtube.com/embed/_P3R63mmakg",
  "https://www.youtube.com/embed/EiItLWWxgOI",
  "https://www.youtube.com/embed/_uSInTncaQ8",
];
export const youtubeVideoUrl = () => {
  let i = Math.ceil(Math.random() * urls.length);
  return urls[i - 1];
};
