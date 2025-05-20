
export class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameInput = page.locator('[data-test="username"]');     
      this.passwordInput = page.locator('[data-test="password"]')
      this.signInButton =  page.locator('[data-test="login-button"]');
    }   
  
    async goto() {
      await this.page.goto('/');
    }
  
    async login(username, password) {
      await this.usernameInput.fill(username);      
      await this.passwordInput.fill(password);
      await this.signInButton.click();
    }
  }
  export default LoginPage;
  