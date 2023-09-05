"use strict";

const cdForm = document.querySelector("#frmCD");

cdForm.addEventListener("submit", function (e) {
  // preventing form from submitting and "refreshing"
  e.preventDefault();

  // getting the values from the input fields
  const author = e.target.elements.author.value;
  const title = e.target.elements.title.value;
  const year = e.target.elements.year.value;

  // constructing a table row with html in template literals
  const newRow = `
  <tr>
      <td>${author}</td>
      <td>${title}</td>
      <td>${year}</td>
      <td>
        <button class="deleteRow" >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg>
        </button>
      </td>
  </tr>
`;

  // adding the rows to the table body
  document.querySelector("tbody").innerHTML += newRow;

  // showing the table
  document.querySelector("table").classList.add("show");
  document.querySelector("table").classList.remove("hide");

  // deleting entry
  document.querySelectorAll(".deleteRow").forEach((deleteButton) => {
    deleteButton.addEventListener("click", function () {
      console.log(this);
      this.parentElement.parentElement.remove();
    });
  });

  // resets the form and input fields
  this.reset();
});
