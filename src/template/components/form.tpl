<form style="width: 300px" id="form">
    <div class="form__group">
        <label class="form__label">Text <span class="form__asterisk">*</span></label>
        <input class="form__control" type="text" name="text">
        <div class="form__error"></div>
    </div>
    <div class="form__group ">
        <label class="form__label">Email <span class="form__asterisk">*</span></label>
        <input class="form__control" type="email" name="email">
        <div class="form__error"></div>
    </div>

    <div class="form__group">
        <label class="form__label">Select <span class="form__asterisk">*</span></label>
        <select class="form__control" name="select">
            <option value="" selected disabled>Check</option>
            <option value="1">Item 1</option>
            <option value="2">Item 2</option>
            <option value="3">Item 3</option>
        </select>
        <div class="form__error"></div>
    </div>

    <div class="form__group">
        <label class="form__label">
            <input type="checkbox" name="checkbox"> Checkbox
        </label>
        <div class="form__error"></div>
    </div>

    <div class="form__group">
        <button type="submit" class="button">Submit</button>
    </div>
</form>