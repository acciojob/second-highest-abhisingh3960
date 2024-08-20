// The secondHighest function
function secondHighest(arr) {
    // Handle edge cases
    if (arr.length < 2) return -Infinity;
    
    let highest = -Infinity;
    let secondHighest = -Infinity;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highest) {
            secondHighest = highest;
            highest = arr[i];
        } else if (arr[i] > secondHighest && arr[i] < highest) {
            secondHighest = arr[i];
        }
    }
    
    return secondHighest === -Infinity ? -Infinity : secondHighest;
}

// Cypress test case
body: () => { 
    cy.visit(baseUrl, { 
        onBeforeLoad(win) { 
            // Stub your functions here
            cy.stub(win, "prompt")
              .onCall(0).returns(5)    // First prompt returns 5
              .onCall(1).returns(1)    // Second prompt returns 1
              .onCall(2).returns(2)    // Third prompt returns 2
              .onCall(3).returns(3)    // Fourth prompt returns 3
              .onCall(4).returns(4)    // Fifth prompt returns 4
              .onCall(5).returns(5);   // Extra call, in case there are more prompts
        } 
    }); 
    
    cy.window().then((win) => {
        const arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(parseInt(win.prompt()));
        }
        
        const result = secondHighest(arr);  // Call the function and capture the result
        
        // Use window.alert to display the result so Cypress can catch it
        win.alert(result);
    });

    // Listen for the alert and assert the expected result
    cy.on("window:alert", (result) => {
        expect(result).to.equal(4);  // Assert the expected result
    });
}
