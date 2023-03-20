import { combineReducers } from "redux";
import user from "./user";
import user_regris from "./regrister";
import menu from "./menu";
import add_menu from "./addMenu";
import delete_menu from "./deleteMenu";
import detail_menu from "./detailMenu";
import recipes_profile from "./getRecipesProfile";
import search_menu from "./searchMenu";
import edit_menu from "./editMenu";
import update_menu from "./updateMenu";


const rootReducers = combineReducers({
  user,
  user_regris,
  menu,
  add_menu,
  delete_menu,
  detail_menu,
  recipes_profile,
  search_menu,
  edit_menu,
  update_menu
});

export default rootReducers