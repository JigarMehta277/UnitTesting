//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========

/** checkHumbrId Function
 * Validate input as a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */

function checkHumberId(idIn) {
  "use strict";

  let humberidvalid = false;

  if (idIn.match(/^(N|n)\d{8}$/)) {
    humberidvalid = true;
  }

  return humberidvalid;
}

