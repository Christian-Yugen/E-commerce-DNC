import React from 'react';
import './index.scss'

const ModalForm = ({ onClose, data }) => {
  const handleContinueShopping = () => {
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal__content modal__content--flex">
        <span className="modal__close" onClick={onClose}>
          &times;
        </span>

        <img className="imageModal" src={data.img} alt={data.descrição}/>
        <div className="modal__content__right">
          <h1 className="h1bold" >Meu Carrinho</h1>
          <h2>{data.nome}</h2>
          <hr />
          <h1 className="h2bold" >{data.preço}</h1>
          <h4>Cor: {data.cor}</h4>

          <div className='modal__content__colors'>
            {data.cor.map((cor) => (
            <div
              style={{
                width: "40px",
                height: "40px",
                border: "solid 1px black",
                borderRadius: "10px",
                backgroundColor: cor,
              }}>
            </div>
            ))}
            </div>

          <button onClick={handleContinueShopping}>Continuar Comprando</button>
          <button>Finalizar Compra</button>

        </div>
      </div>
    </div>
  );
};

export default ModalForm;
