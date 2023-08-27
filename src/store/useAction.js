import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import{setItems,addItem,setCategory,addCategory,
    setShoppingList,setActiveShoppingList,addItemToShoppingList,updateItemStatus,updateShoppingListStatus,updateShoppingListName

} from './actions.js';

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators({
        setItems,
        addItem,
        setCategory,
        addCategory,
        setShoppingList,
        setActiveShoppingList,
        addItemToShoppingList,
        updateItemStatus,
        updateShoppingListStatus,
        updateShoppingListName
    }, dispatch);
}