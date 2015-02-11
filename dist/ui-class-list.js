System.register([], function (_export) {
  "use strict";

  var _classCallCheck, ClassList;
  return {
    setters: [],
    execute: function () {
      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      ClassList = _export("ClassList", function ClassList() {
        _classCallCheck(this, ClassList);

        this.addClass = function () {
          var args = Array.isArray(arguments[0]) ? arguments[0] : arguments;
          this.element.classList.add.apply(this.element.classList, args);
        };


        this.removeClass = function () {
          var args = Array.isArray(arguments[0]) ? arguments[0] : arguments;
          this.element.classList.remove.apply(this.element.classList, args);
        };
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpLWNsYXNzLWxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3VCQUNhLFNBQVM7Ozs7OztBQUFULGVBQVMsd0JBR1AsU0FIRixTQUFTOzhCQUFULFNBQVM7O0FBS2QsWUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFVO0FBRXRCLGNBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQTtBQUNqRSxjQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBO1NBRWpFLENBQUE7OztBQUdELFlBQUksQ0FBQyxXQUFXLEdBQUcsWUFBVTtBQUUzQixjQUFJLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUE7QUFDakUsY0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQTtTQUVsRSxDQUFBO09BRUoiLCJmaWxlIjoidWktY2xhc3MtbGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvZGlzdC8ifQ==