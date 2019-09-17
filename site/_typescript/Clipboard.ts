import * as ClipboardJS from "clipboard";
import * as $ from "jquery";

$(() => {
  new ClipboardJS("[data-clipboard-target]")
});
