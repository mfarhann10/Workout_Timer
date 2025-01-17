/* eslint-disable react/prop-types */
function ToggleSounds({ allowSound, setAllowSound }) {
  return (
    <button
      className={`absolute top-8 right-8 text-3xl ${
        allowSound ? "text-blue-500" : "text-gray-400"
      }`}
      onClick={() => setAllowSound((allow) => !allow)}
    >
      {allowSound ? "🔈" : "🔇"}
    </button>
  );
}

export default ToggleSounds;
