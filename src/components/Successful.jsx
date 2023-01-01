export default function Successful({ setSucces, isValide }) {
  return (
    <div className="overlay">
      <div className="popup order">
        {isValide && <div className="succes">✓</div>}
        <h1>{isValide ? "Merci !" : "Warning"}</h1>
        <p>
          {isValide
            ? "Merci pour votre commande"
            : "Votre panier est vide please ajouter un produit pour valider"}
        </p>
        <button
          className="order-btn"
          onClick={() => {
            setSucces();
          }}
          style={
            isValide ? { background: "#82ce34" } : { background: "#ce3434" }
          }
        >
          Ok
        </button>
      </div>
    </div>
  );
}
