// ==UserScript==
// @name         Change Dropdown Default Value
// @namespace    http://tampermonkey.net/
// @homepageURL  https://github.com/mateo-ceballos/login-utn-frc
// @version      2024-03-16
// @description  Change the default selected value of a dropdown menu
// @author       Mateo Ceballos
// @match        https://www.frc.utn.edu.ar/logon.frc
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Find the dropdown menu element
    var dropdownMenu = document.getElementById('txtDominios');
    if (dropdownMenu) {
        // Change the default selected value to 'sistemas'
        dropdownMenu.value = 'sistemas';
    }

    // Find and activate the 'Recordar mi usuario y servicio' checkbox
    var rememberCheckbox = document.getElementById('rec');
    if (rememberCheckbox) {
        rememberCheckbox.checked = true;
    }

    // Find and activate the 'Autogestión' checkbox
    var autogestionCheckbox = document.getElementById('chk2');
    if (autogestionCheckbox) {
        autogestionCheckbox.checked = true;
    }

    // Find and deactivate the 'Web Principal' checkbox
    var webPrincipalCheckbox = document.getElementById('chk1');
    if (webPrincipalCheckbox) {
        webPrincipalCheckbox.checked = false;
    }
})();
