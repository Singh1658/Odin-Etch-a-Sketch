function initialGrid (userRows, userColumns) {
    //rows
    
    const container = document.querySelector('#container');
    
    
    for (let i = 1; i <= userRows; i++) {
        const div = document.createElement("div");
        container.appendChild(div)
        div.setAttribute("id", "row" + i)
        div.classList.add("row"); // Add the 'row' class

    }
    const row = document.querySelectorAll(".row");
    //for each row, have to add a column of same number as rows    
    row.forEach((row) => {
        for (let j = 1; j <= userColumns; j++) {
            const div = document.createElement("div");
            row.appendChild(div);
            div.setAttribute("id", "column" + j);
            div.classList.add("column");
        }                
    });    
}

function hover() {
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        // Select all cells (columns) within the row
        const cells = row.querySelectorAll(".column");
        
        // Loop through each cell in the row and add event listeners
        cells.forEach((cell) => {
            cell.addEventListener("mouseenter", () => {
                // Change the background color when mouse enters the cell
                cell.style.backgroundColor = "red";
            });

            cell.addEventListener("mouseleave", () => {
                // Reset the background color when mouse leaves the cell
                cell.style.backgroundColor = "red"; // or use another color
            });
        });
    });
}

function userGrid() {
    
    const changeGridButton = document.querySelector(".userChoiceButton");
    changeGridButton.addEventListener("click", () => {
        let rowPrompt = prompt("Enter the number of rows")
        let columnPrompt = prompt("Enter the number of columns")
        //checks if user prompts are valid
        if (rowPrompt!= null && columnPrompt != null) {
            const containerParent = document.getElementById("container");
            //if container exists (previous grid exists), then clears it
            if (containerParent.hasChildNodes()) {
                containerParent.innerHTML = "";

            }
            initialGrid(rowPrompt, columnPrompt);
            hover();
        }
        
    })
       
}
userGrid();



