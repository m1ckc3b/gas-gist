# GAS Gist

1. [Importer CSV](./src/import-csv.js)
Cette fonction permet d'importer un fichier CSV et de le convertir en un tableau à 2 dimensions (un String[][]).
L'idéal, serait de créer une fonction qui appel celle-ci où tous les cas seront gérés.
Exemple : 
```
function callImportCsv() {
  try {
    const ui = SpreadsheetApp.getUi()

    const fileId = ui.prompt("ID du csv à importer").getResponseText()
    let delimiter
    let data

    if (fileId) {
      delimiter = ui.prompt("Le délimiteur").getResponseText()
    } else {
      ui.alert("Vous n'avez pas renseigner l'ID !!!")
    }

    if (fileId && delimiter) {
      data = importCsv(fileId, delimiter)
    }

    if (typeof data === "string") {
      ui.alert(data)
    } else {
      const sheet = SpreadsheetApp.getActive().getSheetByName("Feuille 1")
      sheet.clear()

      for (const row of data) {
        sheet.appendRow(row)
      }
    }
  }catch (e) {
    console.error("ERROR: "+e.message)
  }
}
```
