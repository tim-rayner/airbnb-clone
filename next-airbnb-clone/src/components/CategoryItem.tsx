import { Category } from "@/types/propertyTypes";


/**
 * @todo: display an underline using custom css when category is hovered
 */
const CategoryItem = ({ category }: { category: Category }) => {
  return (
    <div className="flex mx-auto py-2 flex-col text-center rounded-xl px-2 opacity-75 hover:opacity-100 cursor-pointer">
      <i className={`${category.icon} text-xl mb-2 `}></i>
      <p className="text-sm">{category.name}</p>
    </div>
  );
}

export default CategoryItem;