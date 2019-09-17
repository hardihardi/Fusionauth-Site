import * as ClipboardJS from "clipboard";
import * as $ from "jquery";

module Clipboard {
  $(() => {
    new ClipboardJS("[data-clipboard-target]")
  });
}
