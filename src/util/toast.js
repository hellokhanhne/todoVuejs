import { BToast } from "bootstrap-vue";
export const showToast = (title, message, variant) => {
  let bootStrapToaster = new BToast();
  bootStrapToaster.$bvToast.toast(message, {
    title: title,
    toaster: "b-toaster-top-right",
    solid: true,
    appendToast: false,
    variant,
    autoHideDelay: 3000,
    noHoverPause: true,
  });
};
