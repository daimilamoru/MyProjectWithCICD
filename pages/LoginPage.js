
export class LoginPage {
    constructor(page) {
      this.page = page;
      this.emailInput = page.getByRole('textbox', { name: 'Email' });
      this.continueButton = page.getByRole('button', { name: 'Continue' });
      this.passwordInput = page.getByRole('textbox', { name: 'Password New Password Confirm' });
      this.signInButton = page.getByRole('button', { name: 'Sign in' });
    }
  
    async goto() {
      await this.page.goto('/');
    }
  
    async login(email, password) {
      await this.emailInput.fill(email);
      await this.continueButton.click();
      await this.passwordInput.fill(password);
      await this.signInButton.click();
    }
  }
  export default LoginPage;
  