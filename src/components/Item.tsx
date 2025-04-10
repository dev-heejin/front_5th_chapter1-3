import { Item } from "../type";
import { useThemeContext } from "../context/ThemeContext/ThemeContext.tsx";

export const ItemComponent = ({ item }: { item: Item }) => {
  const { theme } = useThemeContext();
  return (
    <li
      className={`p-2 rounded shadow ${theme === "light" ? "bg-white text-black" : "bg-gray-700 text-white"}`}
    >
      {item.name} - {item.category} - {item.price.toLocaleString()}원
    </li>
  );
};

export default ItemComponent;
