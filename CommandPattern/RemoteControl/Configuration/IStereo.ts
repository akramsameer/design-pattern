interface IStereo {
  on: () => void;
  off: () => void;
  setCd: () => void;
  setDvd: () => void;
  setRadio: () => void;
  setVolume: () => void;
}

export default IStereo;
