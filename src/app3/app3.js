import singleSpaSvelte from "single-spa-svelte";
import myRootSvelteComponent from "./root.component";
const svelteLifecycles = singleSpaSvelte({
  component: myRootSvelteComponent,
  domElementGetter: () => document.getElementById("svelte-app"),
  data: { someData: "data" }
});
export const bootstrap = svelteLifecycles.bootstrap;
export const mount = svelteLifecycles.mount;
export const unmount = svelteLifecycles.unmount;
