//repositories in github.com
//https://github.com/samanazadi1996/datepicker-component
//moore component https://github.com/samanazadi1996

jQuery.fn.extend({
    JustNumber: function (model = false) {
        return this.each(function () {
            this.onkeydown = function () {
                var ValidMaxLenght = true;
                if (model) {
                    if (model.maxLenght) {
                        ValidMaxLenght = this.value.length <= model.maxLenght
                    }
                }
                var ValidCharacter = (event.ctrlKey || event.altKey
                    || (47 < event.keyCode && event.keyCode < 58 && event.shiftKey == false)
                    || (95 < event.keyCode && event.keyCode < 106)
                    || (event.keyCode > 34 && event.keyCode < 40)
                    || (event.keyCode == 46))
                return ValidCharacter && ValidMaxLenght || ((event.keyCode == 8) || (event.keyCode == 9));

            };
            this.onchange = function () {
                var o = this.value;
                o = o.replace(/ /g, "");
                o = o.replace(/۰/g, "0");
                o = o.replace(/۱/g, "1");
                o = o.replace(/۲/g, "2");
                o = o.replace(/۳/g, "3");
                o = o.replace(/۴/g, "4");
                o = o.replace(/۵/g, "5");
                o = o.replace(/۶/g, "6");
                o = o.replace(/۷/g, "7");
                o = o.replace(/۸/g, "8");
                o = o.replace(/۹/g, "9");
                this.value = o;

            };
        });
    },
});