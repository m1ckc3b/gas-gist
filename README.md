# GAS Gist

1. [Importer CSV](./src/import-csv.js) 📝
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
2. [L'usine à formulaire](./src/form-factory.js) 🏭
Pour les besoins d'un projet, j'ai voulu développer une fonction qui crée dynamiquement un formulaire en lui passant un tableau à 2 dimensions.
J'avais besoin de créer un menu et des sous-sections de façon dynamique. Il ne manque que la création des items dans chaque section mais je crois que vous y arriverez tout seul 😜