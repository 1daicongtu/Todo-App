import { attach } from "./ReduxLib/store.js";
import app from "./Component/app.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);



attach(app, $(".box"));
