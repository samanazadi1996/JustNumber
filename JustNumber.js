//repositories in github.com
//https://github.com/samanazadi1996/JustNumber
//moore component https://github.com/samanazadi1996

jQuery.fn.extend({
  JustNumber: function (model = false) {
    return this.each(function () {
      this.onkeydown = function (event) {
        var ValidMaxLenght = true;
        if (model) {
          if (model.maxLenght) {
            ValidMaxLenght = this.value.length <= model.maxLenght;
          }
        }
        var ValidCharacter =
          event.ctrlKey ||
          event.altKey ||
          (47 < event.keyCode &&
            event.keyCode < 58 &&
            event.shiftKey == false) ||
          (95 < event.keyCode && event.keyCode < 106) ||
          (event.keyCode > 34 && event.keyCode < 40) ||
          event.keyCode == 46;
        return (
          (ValidCharacter && ValidMaxLenght) ||
          event.keyCode == 8 ||
          event.keyCode == 9
        );
      };
      this.onchange = function () {
        this.value = this.value
          .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
          .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
      };
    });
  },
});
