
const TabButtons = ({ setApplemusic, setSpotify }) => {

  return (
    <div
      className="Buttons"
>
      <button
        onClick={() => {
          setApplemusic(true);
          setSpotify(false);
        }}
      >
        <span>Apple Music</span>
      </button>

      <button
        onClick={() => {
          setSpotify(true);
          setApplemusic(false);
        }}
      >
        <span>Spotify</span>
      </button>
    </div>
  );
};

export default TabButtons;