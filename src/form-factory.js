/**
 * Usine à formulaire
 *
 * @param {String} name - Given name for the new form
 * @return {Object} form - Retourne l'objet formulaire (je l'utilise pour tester la fonction)
 */
 function setupForm(name) {
  try {
    if (!scriptProperties.getProperty("formId")) {
      const form = FormApp.create()
      form.setTitle(name)
      form.deleteItem(0)
      scriptProperties.setProperty("formId", form.getId());
  
      // Liste des Postes
      const allData = getAllData() // [][]
      const item = form.addListItem()
      
      const allChoices = []
      
      // Dynamically creating ListItem with GO-TO-Page
      for (const row of allData) {
        const newPage = form.addPageBreakItem()
        newPage.setTitle(row)

        // TO-DO: dynamically creating items for each page
        
        allChoices.push(item.createChoice(row, newPage))
        newPage.setGoToPage(FormApp.PageNavigationType.SUBMIT)
      }
      item.setTitle("Titre à modifier").setRequired(true).setChoices(allChoices)

      return form // for testing
    } else {
      console.log("Le formulaire existe déjà !")
      return
    }
  } catch (e) {
    console.error("ERROR with setupForm: "+e.message)
  }
}
