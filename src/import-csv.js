/**
 * Import automatique de CSV
 * @param {String} fileId - l'ID du fichier CSV
 * @param {String} delimiter - le délimiteur (, ou ; ou /)
 * @return {String[][]} le CSV parsé
 */
 function importCsv(fileId, delimiter) {
  try { // => essaye
    return Utilities.parseCsv(DriveApp.getFileById(fileId).getBlob().getDataAsString(), delimiter)
  } catch (e) { // si il y a une erreur
    console.error("Impossible d'importer le CSV : "+e.message)
    // renvoie un message d'erreur à afficher à l'utilisateur.
    return "Impossible d'importer le CSV. Vérifiez l'ID du fichier."
  }
}