# Deployment Instructions for powsportfolio.dev

To connect your code to `powsportfolio.dev`, you need to host this website online. Since your folder structure suggests Vercel, that is the best option.

## Step 1: Host the Website on Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/login.
2. Click **"Add New..."** -> **"Project"**.
3. You can either:
    *   **Connect GitHub**: Push this code to a GitHub repository and import it (Recommended).
    *   **Upload**: Drag and drop the `abdullah-portfolio-dev.vercel.app` folder directly if using the CLI (requires installing Vercel CLI).

*Since you asked how to link it, using GitHub is the standard professional way.*

## Step 2: Configure the Domain
1. Once the project is deployed on Vercel, go to the **Settings** tab of your new project.
2. Click on **Domains** in the left sidebar.
3. Enter `powsportfolio.dev` in the input box and click **Add**.
4. Vercel will give you "Nameservers" or "A Records".

## Step 3: Update DNS at your Registrar
1. Log in to the website where you bought `powsportfolio.dev` (e.g., GoDaddy, Namecheap, Google Domains).
2. Find the **DNS Settings** or **Nameservers** section for your domain.
3. Change the Nameservers to Vercel's (usually):
    *   `ns1.vercel-dns.com`
    *   `ns2.vercel-dns.com`

**Wait up to 24-48 hours** (usually much faster) for the changes to propagate globally.
