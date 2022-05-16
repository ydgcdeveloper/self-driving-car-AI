class Controls {
  constructor(type) {
    this.forward = false;
    this.left = false;
    this.right = false;
    this.reverse = false;

    switch (type) {
      case "KEYS":
        this.#addKeyboardListeners();
        break;
      case "DUMMY":
        this.forward = true;
        break;
    }
  }

  #addKeyboardListeners() {
    document.addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case 37:
          this.left = true;
          break;
        case 38:
          this.forward = true;
          break;
        case 39:
          this.right = true;
          break;
        case 40:
          this.reverse = true;
          break;
      }
    });

    document.addEventListener("keyup", (e) => {
      switch (e.keyCode) {
        case 37:
          this.left = false;
          break;
        case 38:
          this.forward = false;
          break;
        case 39:
          this.right = false;
          break;
        case 40:
          this.reverse = false;
          break;
      }
    });
  }
}
