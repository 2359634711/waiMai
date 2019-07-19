
// components/navTitle/navTitle.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navTitleInfo: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e) {
      let item = e.currentTarget.dataset.item;
      this.triggerEvent('onAction', item);
    }
  }
})

