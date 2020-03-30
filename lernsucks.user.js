// ==UserScript==
// @name         LernSucks
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Make LernSax.de appreciateable
// @author       tobimori
// @match        *://*.lernsax.de/*
// @run-at       document-end
// ==/UserScript==

function walkText(node) {
  if (node.nodeType == 3) {
    node.data = node.data.replace(/ax/g, "ucks");
    node.data = node.data.replace(/achsen/g, "ucksen");
    node.data = node.data.replace(/ächsisch/g, "ucksisch");
    node.data = node.data.replace(/Deutsch/g, "Toitsch");
  }
  if (node.nodeType == 1 && node.nodeName != "SCRIPT") {
    for (var i = 0; i < node.childNodes.length; i++) {
      walkText(node.childNodes[i]);
    }
  }
}
walkText(document.body);
walkText(document.head);
