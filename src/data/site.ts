export interface Site {
  title: string;
  author: { name: string; email: string };
  description: string;
  url: string;
  baseurl: string;
  googleAnalytics?: string;
  utterancesRepo?: string;
}

export const site: Site = {
  title: 'NTanayo',
  author: {
    name: 'Your Name',
    email: 'you@example.com',
  },
  description: 'A blog hosted on GitHub Pages (Astro + TypeScript)',
  url: 'https://<USERNAME>.github.io/ntanayo',
  baseurl: '',
  googleAnalytics: 'G-XXXXXXXXXX',
  utterancesRepo: 'OWNER/REPO',
};
