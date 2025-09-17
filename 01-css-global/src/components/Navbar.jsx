import { FaShoppingCart } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";




export function Navbar({theme, setTheme}) {

    return(
        <nav className="navbar">
            <div className="navbar-container">
                <span className="logo">
                    Minha Loja
                </span>

                <div>
                    <button aria-label="Alterar tema"
                        onClick={() => setTheme(theme === "light" ? "dark" : "light" )}
                        className="btn-icon"
                    >
                        {theme === "light" ?  <FaMoon />: <FaSun />}
                    </button>

                    <button>
                        <FaShoppingCart />
                    </button>
                </div>
            </div>
        </nav>
    )
}