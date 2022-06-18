import html from "../ReduxLib/core.js";
import {connect} from "../ReduxLib/store.js"
function header({activeForm}){
    return html
    `   <div class="header">
                <div class="header__nav">
                    <p>THINGS TO DO</p>
                    <button class="header__end-edit ${activeForm && 'active'} " onclick="dispatch('toggleInputForm')"><span>+</span></button>
                </div>
                <div class="header__form ${activeForm && 'active'}">
                    <div class="row">
                        <div class="col-4">
                            <label for="" class="title-form title-form-col-4">Action</label>
                            <select name="" id="id-action" class="form-control">
                                <option value="SHOPPING">SHOPPING</option>
                                <option value="WORK">WORK</option>
                                <option value="SPORT">SPORT</option>
                                <option value="MUSIC">MUSIC</option>
                            </select>
                        </div>
                        <div class="col-4">
                            <label for="" class="title-form title-form-col-4">Title</label>
                            <input type="text" name="" id="id-title" class="form-control">
                        </div>
                        <div class="col-4">
                            <label for="" class="title-form title-form-col-4">Date</label>
                            <select name="" id="id-date" class="form-control">
                                <option value="TODAY">TODAY</option>
                                <option value="TOMORROW">TOMORROW</option>
                            </select>
                        </div>
                        <div class="col-12 ">
                            <label for="" class="title-form">Description</label>
                            <input type="text" name="" id="id-description" class="form-control">
                        </div>
                    </div>
                    <button id="submit_form" onclick="dispatch('ADD')">ADD</button>
                </div>
                
        </div>
    `
}
export default connect()(header);

