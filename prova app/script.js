/* ==========================================================================
   VARIABILI DI STATO ED ELEMENTI DELLA PAGINA
   ========================================================================== */
// Conteggio attuale dei pezzi di sushi mangiati
let sushiCount = 0;

// Progressivo per assegnare un numero alle sessioni prive di nome personalizzato
let sessionCounter = 1;

// Selezione degli elementi DOM tramite id
const counterDisplay = document.querySelector('#counter-display');
const sushiTrigger = document.querySelector('#sushi-trigger');
const btnReset = document.querySelector('#btn-reset');
const btnSave = document.querySelector('#btn-save');
const sessionNoteInput = document.querySelector('#session-note');
const archiveList = document.querySelector('#archive-list');
const archiveEmpty = document.querySelector('#archive-empty');
const toastNotification = document.querySelector('#toast-notification');

// Variabile per gestire il timer di scomparsa del messaggio toast
let toastTimeout = null;

/* ==========================================================================
   FUNZIONI DI SUPPORTO (FEEDBACK E AGGIORNAMENTO UI)
   ========================================================================== */

/**
 * Mostra un messaggio di notifica toast a comparsa temporizzata.
 * @param {string} message - Testo da mostrare all'utente.
 */
function showToast(message) {
  toastNotification.textContent = message;
  toastNotification.classList.add('active');

  // Se c'è già un timer attivo, lo azzeriamo prima di impostarne uno nuovo
  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }

  // Nascondiamo il messaggio dopo 2.2 secondi
  toastTimeout = setTimeout(function () {
    toastNotification.classList.remove('active');
  }, 2200);
}

/**
 * Aggiorna il numero mostrato nel display e applica l'animazione di tocco.
 * @param {number} newCount - Il nuovo valore del contatore.
 */
function updateCounterDisplay(newCount) {
  sushiCount = newCount;
  counterDisplay.textContent = sushiCount;

  // Breve vibrazione tattile se il dispositivo mobile la supporta
  if (window.navigator && window.navigator.vibrate) {
    window.navigator.vibrate(25);
  }

  // Animazione di ingrandimento (bump)
  counterDisplay.classList.add('bump');
  setTimeout(function () {
    counterDisplay.classList.remove('bump');
  }, 120);
}

/* ==========================================================================
   FUNZIONI PRINCIPALI DELL'APPLICAZIONE
   ========================================================================== */

/**
 * Incrementa il contatore quando l'utente clicca sul pezzo di sushi.
 */
function handleSushiClick() {
  updateCounterDisplay(sushiCount + 1);
}

/**
 * Azzera il contatore quando l'utente clicca sul pulsante Reset.
 */
function handleResetClick() {
  if (sushiCount === 0) {
    showToast('Il contatore è già a zero!');
    return;
  }

  // Effetto dissolvenza momentanea durante l'azzeramento
  counterDisplay.classList.add('fade');
  setTimeout(function () {
    updateCounterDisplay(0);
    counterDisplay.classList.remove('fade');
  }, 150);

  showToast('Contatore azzerato!');
}

/**
 * Salva la sessione corrente nell'archivio storico.
 */
function handleSaveSession() {
  // Non salviamo se non è stato consumato alcun pezzo
  if (sushiCount === 0) {
    showToast('Mangia almeno un pezzo prima di salvare!');
    return;
  }

  // Leggiamo la nota inserita o generiamo un nome progressivo predefinito
  const userNote = sessionNoteInput.value.trim();
  let sessionName = 'Sessione #' + sessionCounter;
  if (userNote.length > 0) {
    sessionName = userNote;
  }

  // Ricaviamo l'orario corrente nel formato HH:MM
  const now = new Date();
  const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateString = 'Oggi, ' + timeString;

  // Se presente il messaggio di lista vuota, lo nascondiamo
  if (archiveEmpty) {
    archiveEmpty.style.display = 'none';
  }

  // Creiamo l'elemento <li> per la nuova card di sessione
  const sessionCard = document.createElement('li');
  sessionCard.className = 'session-card';

  // Impostiamo la struttura HTML interna della riga salvata
  sessionCard.innerHTML = `
    <div class="session-details">
      <span class="session-name">${sessionName}</span>
      <span class="session-date">${dateString}</span>
    </div>
    <div class="session-actions">
      <span class="session-pieces">${sushiCount} PZ</span>
      <button type="button" class="btn-delete-session" title="Elimina sessione" aria-label="Elimina sessione">
        <span class="material-symbols-rounded">delete</span>
      </button>
    </div>
  `;

  // Aggiungiamo il gestore per cancellare la singola sessione se l'utente lo desidera
  const deleteButton = sessionCard.querySelector('.btn-delete-session');
  deleteButton.addEventListener('click', function () {
    sessionCard.remove();
    // Se non ci sono più elementi nella lista, mostriamo nuovamente il messaggio vuoto
    if (archiveList.children.length === 1 && archiveEmpty) {
      archiveEmpty.style.display = 'block';
    }
    showToast('Sessione rimossa');
  });

  // Inseriamo la nuova sessione all'inizio della lista dell'archivio
  archiveList.prepend(sessionCard);

  // Puliamo il campo di input e incrementiamo il contatore delle sessioni
  sessionNoteInput.value = '';
  sessionCounter = sessionCounter + 1;

  // Mostriamo la conferma all'utente
  showToast('Sessione salvata nell\'archivio!');
}

/* ==========================================================================
   COLLEGAMENTO EVENTI (LISTENERS)
   ========================================================================== */

// Click sul pezzo di sushi per incrementare
sushiTrigger.addEventListener('click', handleSushiClick);

// Supporto accessibilità tastiera: Invio o Barra Spaziatrice sul sushi
sushiTrigger.addEventListener('keydown', function (event) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    handleSushiClick();
  }
});

// Click sul pulsante di azzeramento (Reset)
btnReset.addEventListener('click', handleResetClick);

// Click sul pulsante di salvataggio sessione
btnSave.addEventListener('click', handleSaveSession);

// Salvataggio premendo 'Invio' direttamente dentro il campo di testo
sessionNoteInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    handleSaveSession();
  }
});
