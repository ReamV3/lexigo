// ── DOM-ready bridge: wires all HTML elements to the app functions ──
// This file contains NO application logic — just event binding.
// It is safe to leave unobfuscated, or obfuscate alongside app.js.

document.addEventListener('DOMContentLoaded', function () {

  // ── Top bar ──
  document.getElementById('fab')
    .addEventListener('click', function () { openWordsScreen(); });

  document.getElementById('speedToggle')
    .addEventListener('click', function (e) { toggleSpeed(e); });

  document.getElementById('typeDirToggle')
    .addEventListener('click', function (e) { toggleTypeDir(e); });

  // ── Game area ──
  document.querySelector('.g-back')
    .addEventListener('click', function () { exitGame(); });

  document.getElementById('cardWrap')
    .addEventListener('click', function () { flipCard(); });

  // ── Words screen ──
  document.getElementById('wordsBackBtn')
    .addEventListener('click', function () { closeWordsScreen(); });

  document.getElementById('wsInfoBtn')
    .addEventListener('click', function () { openInfoModal(); });

  document.querySelector('.view-all-btn')
    .addEventListener('click', function () { openListScreen(); });

  document.querySelector('.add-confirm')
    .addEventListener('click', function () { confirmAdd(); });

  // Export / Import buttons (first = export, second = import)
  var bankBtns = document.querySelectorAll('.ws-bank-btn');
  bankBtns[0].addEventListener('click', function () { exportBank(); });
  bankBtns[1].addEventListener('click', function () {
    document.getElementById('importFileInput').click();
  });

  // File input change
  document.getElementById('importFileInput')
    .addEventListener('change', function () { importBank(this); });

  // ── List screen ──
  document.querySelector('#listScreen .ws-back')
    .addEventListener('click', function () { closeListScreen(); });

  // ── Class modal ──
  var classModalBtns = document.querySelectorAll('#classModal .m-cancel');
  classModalBtns[0].addEventListener('click', function () {
    closeClassModal(); openWordsScreen();
  });
  classModalBtns[1].addEventListener('click', function () { closeClassModal(); });
  document.querySelector('#classModal .m-ok')
    .addEventListener('click', function () { confirmClassModal(); });

  // ── Delete class modal ──
  document.querySelector('#deleteClassModal .m-cancel')
    .addEventListener('click', function () { closeDeleteModal(); });
  document.querySelector('#deleteClassModal .m-ok')
    .addEventListener('click', function () { confirmDeleteClass(); });

  // ── Delete word modal ──
  document.querySelector('#deleteWordModal .m-cancel')
    .addEventListener('click', function () { closeDeleteWordModal(); });
  document.querySelector('#deleteWordModal .m-ok')
    .addEventListener('click', function () { confirmDeleteWord(); });

  // ── Fill gap modal ──
  var fillBtns = document.querySelectorAll('#fillGapModal button');
  fillBtns[0].addEventListener('click', function () { confirmFillGap(false); });
  fillBtns[1].addEventListener('click', function () { confirmFillGap(true); });

  // ── Info modal ──
  document.getElementById('infoModal')
    .addEventListener('click', function () { closeInfoModal(); });
  document.querySelector('#infoModal .modal')
    .addEventListener('click', function (e) { e.stopPropagation(); });
  document.querySelector('#infoModal .info-close-btn')
    .addEventListener('click', function () { closeInfoModal(); });
  document.querySelector('#infoModal .m-ok')
    .addEventListener('click', function () { closeInfoModal(); });

  // ── First visit tip ──
  document.querySelector('.fvt-close')
    .addEventListener('click', function () { dismissFirstVisitTip(); });
  document.querySelector('.fvt-dismiss')
    .addEventListener('click', function () { dismissFirstVisitTip(); });

});
