// ==UserScript==
// @name         LernSucks
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Make LernSax.de appreciateable
// @author       tobimori
// @match        *://*.lernsax.de/*
// @run-at       document-end
// ==/UserScript==

function walkText(node) {
  if (node.nodeType == 3) {
    node.data = node.data
        .replace(/([sS])ax/g, "$1ucks")
        .replace(/([sS])achsen/g, "$1ucksen")
        .replace(/([sS])ächsisch/g, "$1ucksisch")
        .replace(/([dD])eutsch/g, "$1oitsch")
        .replace(/Schulsport/g, "Folter")
        .replace(/Landesamt für Schule und Bildung/g, "Landesamt für Corona-Superspreading und Unverantwortlichkeit")
        .replace(/Schuldatenbank/g, "Datenbank für Corona-Superspreader")
        .replace(/Schule/g, "Corona-Superspreading")
        .replace(/Schul(.)/g, x => "Corona-Superspreading-" + x[5].toUpperCase())
  }
  if (node.nodeType == 1 && node.nodeName != "SCRIPT") {
    for (var i = 0; i < node.childNodes.length; i++) {
      walkText(node.childNodes[i])
    }
  }
}
walkText(document.body)
walkText(document.head)
