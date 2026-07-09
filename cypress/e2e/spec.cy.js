describe("User login", () => {
  it("should allow user to log in with valid credentials", () => {
    cy.viewport(550,750);
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "●●●●●●●●●●●●●●")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();

    cy.get("nav");    
    cy.get("header");
    
    cy.wait(5000);
  });

  it("should not allow user to log in with invalid credentials", () => {
    cy.viewport(550,750);
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "●●●●●●●●●●●●●●")
      .type("123")
      .should("have.value", "123");

    cy.get("button").contains("Login").click();

    cy.get("div").contains("Wrong Password");
  }); 
});

describe("Dashboard Access", () => {
  it("should display the dashboard after login", () => {
    cy.viewport(1280, 720);
    cy.visit("http://localhost:5173/login");

    // Log in first
    cy.get("input#email").type("hello@example.com");
    cy.get("input#password").type("123456");
    cy.get("button").contains("Login").click();

    // Verify we're on the dashboard
    cy.url().should("eq", "http://localhost:5173/");

    // Check main layout elements
    cy.get("nav").should("be.visible"); // Sidebar
    cy.get("header").should("be.visible"); // Header

    // Check if dashboard cards are present
    cy.contains("Goals").should("be.visible");
    cy.contains("Upcoming Bill").should("be.visible");
    cy.contains("Recent Transactions").should("be.visible");
  });
});