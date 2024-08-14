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

body: () => { 
    cy.visit(baseUrl, { 
        onBeforeLoad(win) { 
            cy.stub(win, "prompt")
              .onCall(0).returns(5)
              .onCall(1).returns(1)
              .onCall(2).returns(2)
              .onCall(3).returns(3)
              .onCall(4).returns(4)
              .onCall(5).returns(5); 
        } 
    }); 
    
    cy.window().then((win) => {
        const arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(parseInt(win.prompt()));
        }
        
        const result = secondHighest(arr);  // Call the function and capture the result

        cy.wrap(result).then((val) => {
            expect(val).to.equal(4);  // Assert the expected result
        });
    });
}

