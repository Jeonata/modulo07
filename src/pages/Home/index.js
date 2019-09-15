import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/06/D12-9119-006/D12-9119-006_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF">
              3
            </MdAddShoppingCart>
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/06/D12-9119-006/D12-9119-006_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF">
              3
            </MdAddShoppingCart>
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/06/D12-9119-006/D12-9119-006_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF">
              3
            </MdAddShoppingCart>
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/06/D12-9119-006/D12-9119-006_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF">
              3
            </MdAddShoppingCart>
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/06/D12-9119-006/D12-9119-006_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF">
              3
            </MdAddShoppingCart>
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/06/D12-9119-006/D12-9119-006_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF">
              3
            </MdAddShoppingCart>
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
