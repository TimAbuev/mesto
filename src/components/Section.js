export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  renderItems(data) {
    data.forEach((item) => {
      this._renderer(item);
    })
  }

  addItem(elementNode) {
    this._container.prepend(elementNode);
  }

}