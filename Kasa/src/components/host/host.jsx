import "../../Sass/main.scss";

function HostInfo({ host }) {
  return (
    <div className="order-display-rating-three">
      <p>{host.name}</p>
      <img src={host.picture} alt={host.name} className="host-picture" />
    </div>
  );
}

export default HostInfo;
