import { useState } from "react";
import { Menu, EllipsisVertical } from "lucide-react";
import "./MenuLateral.css";

export function MenuLateral( { onSelecionarTopico: onSelecionarOpcao, options } ) {
    
    const iconSize = 32;
    const [showMenu, setShowMenu] = useState(false);

    function toggleMenu() {
        setShowMenu(!showMenu);
    }

    function selecionarOpcao(o){
        onSelecionarOpcao?.(o);
        setShowMenu(false);
    }

    return (
    <>
      {/*botao de abrir/fechar*/}
      <button onClick={toggleMenu} className="hamburger-button">
        {showMenu ? <EllipsisVertical size={iconSize} /> : <Menu size={iconSize} />}
      </button>

      {/*sidebar*/}
      <nav className={`sidebar ${showMenu ? "open" : ""}`}>
        <ul>
        {/*loop pra exibir todos itens*/}
          {options.map((o, i) => (
            <li key={i} className="hamburger-options" onClick={() => selecionarOpcao(o)}>
              {o}
            </li>
          ))}
        </ul>
      </nav>

      {/*fundo escurecido e clique fora p fechar*/}
      {showMenu && <div className="overlay" onClick={toggleMenu}></div>}
    </>
    );
}