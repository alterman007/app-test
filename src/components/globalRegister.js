import Vue from 'vue';

const requireComponent = require.context('.', false, /Base[A-Z]\w+\.vue$/);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = fileName.replace(/^\.\/|\.vue$/g, '');
  Vue.component(componentName, componentConfig.default || componentConfig);
});
