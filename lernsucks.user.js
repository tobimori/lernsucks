// ==UserScript==
// @name         LernSucks
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Make LernSax.de appreciateable
// @author       tobimori
// @match        *://*.lernsax.de/*
// @run-at       document-end
// ==/UserScript==

function walkText(node) {
  if (node.nodeType == 3) {
    node.data = node.data.replace(/Sax/g, "Sucks");
    node.data = node.data.replace(/Sachsen/g, "Sucksen");
    node.data = node.data.replace(/sächsisch/g, "sucksisch");
    node.data = node.data.replace(/Sächsisch/g, "Sucksisch");
    node.data = node.data.replace(/sax/g, "sucks");
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
