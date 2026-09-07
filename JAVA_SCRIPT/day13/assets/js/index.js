const heading = document.getElementById("heading");

heading.textContent = "Welcome to JavaScript DOM";

const paragraphs = document.querySelectorAll(".para");

paragraphs[0].textContent = "Updated Paragraph 1";
paragraphs[1].textContent = "Updated Paragraph 2";
paragraphs[2].textContent = "Updated Paragraph 3";