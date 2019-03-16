export default function registerFeature(Vue, store, feature) {
  const {
    storeModules = {},
  } = feature;

  Vue.use(feature);
  Object.keys(storeModules)
    .forEach(moduleName => store.registerModule(moduleName, storeModules[moduleName]));
}
