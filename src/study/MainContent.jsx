import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`flex flex-col items-center justify-center h-40 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <h1 className="text-2xl font-bold mb-4">{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</h1>
            <button 
                className="text-sm font-semibold transition-all duration-300 mb-2 bg-blue-500 text-white "
                onClick={toggleTheme}
            >
                테마 변경
            </button>
            <p>테마변경이 가능한 웹사이트</p>
        </div>
    );
}

export default MainContent;
