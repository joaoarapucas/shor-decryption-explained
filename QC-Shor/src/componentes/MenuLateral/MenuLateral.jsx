import { useState } from "react";
import { Menu, EllipsisVertical } from "lucide-react";
import "./MenuLateral.css";

export function MenuLateral() {
  const [showMenu, setShowMenu] = useState(false);

  const topicos = [
    "O que é física quântica?",
    "Clássico vs Quântico",
    "Principais cientistas",
    "Princípios fundamentais",
    "Computação quântica",
    "Simulação",
    "Descriptografia quântica",
  ];

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function selecionar(topico) {
    console.log(topico);
    // Aqui você pode adicionar navegação, scroll ou mudança de conteúdo
  }

  const iconSize = 32;

  return (
    <>
      {/* Botão de abrir/fechar */}
      <button onClick={toggleMenu} className="hamburger-button">
        {showMenu ? <EllipsisVertical size={iconSize} /> : <Menu size={iconSize} />}
      </button>

      {/* Menu lateral */}
      <nav className={`sidebar ${showMenu ? "open" : ""}`}>
        <ul>
          {topicos.map((t, i) => (
            <li key={i} className="hamburger-options" onClick={() => selecionar(t)}>
              {t}
            </li>
          ))}
        </ul>
      </nav>

      {/* Fundo escurecido para clique fora fechar */}
      {showMenu && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
}
