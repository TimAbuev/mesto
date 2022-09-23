export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = containerSelector;
    console.log(this._items);
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    })
  }

  addItem(elementNode) {
    this._container.append(elementNode);
  }

}